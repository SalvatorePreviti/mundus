const fs = require('fs')
const path = require('path')
const https = require('https')
const cheerio = require('cheerio')
const prettier = require('prettier')

const ROOT_DIR = path.dirname(__dirname)
const GL_CONSTANTS_DIR = path.resolve(ROOT_DIR, 'packages/gl-constants')

const CONSTANTS_HTML_URL = 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants'
const CONSTANTS_HTML_CACHE = '.downloads/.downloaded_webgl_api_constants.html'
const CONSTANTS_EXPECTED_COUNT = 609

const FILE_HEADER =
  `// WebGL constants from ${CONSTANTS_HTML_URL}\n` +
  `// It gets minified better to use the raw constants instad of using webglContext.CONSTANT\n` +
  `// Those values are standard in all browsers.\n\n`

async function main() {
  const parsed = parseConstantsFromHtml(await downloadHtml(CONSTANTS_HTML_URL, CONSTANTS_HTML_CACHE))

  writeSourceFile('index.ts', generateIndexTs(parsed))
  writeSourceFile('enum.ts', generateEnumTs(parsed))
}

main().catch((e) => {
  console.info(e)
  if (!process.exitCode) {
    process.exitCode = 1
  }
})

function generateIndexTs(parsed) {
  let result = FILE_HEADER
  result += generateConstantsCode(parsed, {
    fn: (c) => `export const GL_${c.name} = ${c.value}`,
    fnRepeated: (c) => `// GL_${c.name} = ${c.value}`
  })
  return result
}

function generateEnumFunctions() {
  return [
    '/**',
    ' * The names of all webgl2 constants',
    ' */',
    'export type GL_CONSTANTS_NAME = keyof typeof GL_CONSTANTS',
    '',
    '/**',
    ' * The array of all webgl2 constant names',
    ' */',
    'export const GL_CONSTANTS_NAMES: GL_CONSTANTS_NAME[] = /* #__PURE__ */ (() => {',
    '  const _startWithNumberRegex = /^[-0-9]/',
    '  return Object.keys(GL_CONSTANTS).filter((key) => !_startWithNumberRegex.test(key)) as any',
    '})()',
    '',
    '/**',
    ' * Infer the name of a webgl2 constant from its value, useful for debugging',
    ' */',
    'export function glConstantGetName(value: GL_CONSTANTS | string | number | null | undefined): string | undefined {',
    "  if (typeof value === 'number') {",
    '    return (GL_CONSTANTS as any)[value]',
    '  }',
    "  if (typeof value !== 'string') {",
    '    return undefined',
    '  }',
    '  let found = (GL_CONSTANTS as any)[value]',
    "  if (typeof found === 'string') {",
    '    return found',
    '  }',
    "  if (value.startsWith('GL_')) {",
    '    return glConstantGetName(value.slice(3));',
    '  }',
    "  if (typeof found === 'number') {",
    '    return value',
    '  }',
    '  found = (GL_CONSTANTS as any)[parseInt(value)]',
    "  return typeof found === 'string' ? found : undefined",
    '}'
  ].join('\n')
}

function generateEnumTs(parsed) {
  let result = FILE_HEADER
  result += '/**\n'
  result += ' * All Webgl2 constants in a single enum.\n'
  result += ' * NOTE: Use this only for debugging or tooling, enum values are not tree shakeable\n'
  result += ' */\n'
  result += 'export enum GL_CONSTANTS {\n'
  result += generateConstantsCode(parsed, {
    indent: '  ',
    separator: ',\n',
    fn: (c) => `${c.name} = ${c.value}`,
    fnRepeated: (c) => `// ${c.name} = ${c.value}`
  })
  result += '}\n\n'
  result += 'export default GL_CONSTANTS\n\n'
  result += generateEnumFunctions()
  return result
}

function writeSourceFile(filename, content) {
  const filepath = path.resolve(GL_CONSTANTS_DIR, filename)
  try {
    fs.mkdirSync(path.dirname(filepath), { recursive: true })
  } catch (_) {}

  if (filename.endsWith('.ts')) {
    const prettierConfig = prettier.resolveConfig.sync(filepath)
    content = prettier.format(content, { ...prettierConfig, filepath, parser: 'typescript' })
  }

  if (fs.readFileSync(filepath, 'utf-8') !== content) {
    fs.writeFileSync(filepath, content)
    console.log(' -', filename, 'written.')
  } else {
    console.log(' -', filename, 'unchanged.')
  }
}

function generateConstantsCode(parsed, { indent = '', separator = '', fn, fnRepeated = null }) {
  let prevGroup = ''
  let text = ''
  let isFirst = true

  const ensureSeparated = () => {
    if (text && !text.endsWith('\n\n')) {
      text += '\n'
      if (!text.endsWith('\n\n')) {
        text += '\n'
      }
    }
  }

  let pendingGroup
  for (let i = 0, len = parsed.length; i < len; ++i) {
    const c = parsed[i]

    const group = c.group
    if (prevGroup !== group) {
      if (group) {
        pendingGroup = group
      }
      prevGroup = group
    }

    const value = c.repeated ? fnRepeated && fnRepeated(c) : fn(c)

    if (value) {
      if (isFirst) {
        isFirst = false
      } else {
        ensureSeparated()
      }
      if (pendingGroup) {
        text += `${indent}// ${pendingGroup}\n\n`
        pendingGroup = null
      }
      text += `${indent}/*`
      text += c.repeated ? '\n' : '*\n'
      text += `${indent} * ${c.name} = ${c.value}\n`
      if (c.description) {
        text += `${indent} * ${c.description}\n`
      }
      if (group) {
        text += `${indent} * ${group.replace('Constants', 'Constant')}\n`
      }
      text += `${indent} */\n`
      text += indent + value

      for (let j = i + 1; j < len; ++j) {
        if (!parsed[j].repeated) {
          text += separator
          break
        }
      }
    }
  }
  if (!text.endsWith('\n')) {
    text += '\n'
  }
  return text
}

function parseConstantsFromHtml(html) {
  const $ = cheerio.load(html)
  const parsed = []
  const encountered = new Set()
  let title
  let subtitle

  for (const articleNode of getArticleNodes($('article.main-page-content'))) {
    if (articleNode.is('p')) {
      subtitle = cheerioToString(articleNode)
    } else if (articleNode.is('h3')) {
      title = cheerioToString(articleNode)
    } else if (articleNode.is('table.standard-table')) {
      if (parseTable(articleNode)) {
        subtitle = ''
        title = ''
      }
    }
  }

  console.log(encountered.size, `constants (${parsed.length} total)`)
  if (parsed.length < CONSTANTS_EXPECTED_COUNT) {
    throw new Error(`Parse error, expected ${CONSTANTS_EXPECTED_COUNT} unique constants, ${encountered.size} found.`)
  }

  return parsed

  function parseTable(element) {
    const result = []
    for (const tr of arrayToCheerio(element.find('tr'))) {
      const tds = arrayToCheerio(tr.find('td'))
      if (tds.length) {
        const name = cheerioToString(tds[0])
        if (name && !name.includes(' ')) {
          let value = cheerioToString(tds[1])
          if (value.startsWith('0x')) {
            value = value.toLowerCase()
          }
          const description = cheerioToString(tds[2]).replace('to clear to clear', 'to clear')
          parsed.push({
            name,
            value,
            description,
            title,
            subtitle,
            group: [title, subtitle]
              .filter((x) => x)
              .join(' - ')
              .trim(),
            repeated: encountered.has(name)
          })
          encountered.add(name)
        }
      }
    }
    return result
  }

  function getArticleNodes(article) {
    const result = []
    for (const item of arrayToCheerio(article.children())) {
      if (item.is('div')) {
        for (const divItemElement of Array.from(item.children())) {
          result.push($(divItemElement))
        }
      } else {
        result.push(item)
      }
    }
    return result
  }

  function cheerioToString(element) {
    return element ? fixSpaces(element.text().replace(/WebGLRenderingContext\./g, '')) : ''
  }

  function toCheerio(element) {
    return $(element)
  }

  function arrayToCheerio(elements) {
    return Array.from(elements).map(toCheerio)
  }
}

function fixSpaces(s) {
  return s
    .replace(
      /[\u000B\u000C\u00A0\u0085\u1680\u180E\ufeff\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u200B\u2028\u2029\u202F\u205f\u3000]/g,
      ' '
    )
    .replace(/[\s\n\r][\s\n\r]+/g, ' ')
    .trim()
}

function downloadHtml(url, cacheFilename = null) {
  cacheFilename = path.resolve(ROOT_DIR, cacheFilename)
  if (cacheFilename) {
    try {
      const result = fs.readFileSync(cacheFilename, 'utf8')
      if (result.length) {
        console.info(cacheFilename, 'file found, not downloading.')
        return result
      }
    } catch (_) {
      // Ignore error
    }
    console.info(cacheFilename, 'not found, downloading from', url)
  } else {
    console.info('downloading from', url)
  }
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        const data = [Buffer.from(`<!-- Downloaded from ${url} -->\n`, 'utf8')]
        res.on('data', (chunk) => {
          data.push(chunk)
        })

        res.on('end', () => {
          try {
            fs.mkdirSync(path.dirname(cacheFilename), { recursive: true })
          } catch (_) {
            // Ignore error
          }
          const $ = cheerio.load(fixSpaces(Buffer.concat(data).toString()))
          $('script, svg, style, link, meta, img, button, nav').each(function () {
            $(this).remove()
          })
          const result = fixSpaces($.html())
          fs.writeFileSync(cacheFilename, result)
          resolve(result)
        })
      })
      .on('error', reject)
  })
}
