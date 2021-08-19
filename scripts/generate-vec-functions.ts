import ts, { VariableDeclarationList } from 'typescript'
import fs from 'fs'
import * as math from '../packages/math'

const node = ts.createSourceFile(
  'x.ts', // fileName
  fs.readFileSync('packages/math/index.ts', 'utf8'),
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TS
)

const sourceFile = node.getSourceFile()

const commentsMap = new Map<string, string>()

node.forEachChild((child) => {
  if (child.kind === ts.SyntaxKind.FirstStatement) {
    let jsdocComment: string | undefined
    const commentRanges = ts.getLeadingCommentRanges(sourceFile.getFullText(), child.getFullStart())
    if (commentRanges?.length) {
      const commentStrings: string[] = commentRanges.map((r) => sourceFile.getFullText().slice(r.pos, r.end))
      for (const comment of commentStrings) {
        if (comment.startsWith('/** ') || comment.startsWith('/**\n')) {
          const lines = comment.split('\n').filter((line) => !line.startsWith(' * @'))

          if (lines.length === 3 && lines[0].trim() === '/**' && lines[2].trim() === '*/') {
            jsdocComment = `/*${lines[1].trim()}*/`
          } else {
            jsdocComment = lines.join('\n')
          }
        }
      }
    }

    let exportName: string = ''
    let isExport = false
    child.forEachChild((c1) => {
      if (exportName) {
        return
      }
      if (c1.kind === ts.SyntaxKind.ExportKeyword) {
        isExport = true
      } else if (c1.kind === ts.SyntaxKind.VariableDeclarationList && isExport) {
        const vdecl = (c1 as VariableDeclarationList).declarations[0]
        if (vdecl) {
          exportName = vdecl.name.getText()
        }
      }
    })

    if (exportName && jsdocComment) {
      commentsMap.set(exportName, jsdocComment)
    }
  }
})

let code = ''

for (const [k, v] of Object.entries(math)) {
  if (typeof v === 'function') {
    if (v.length === 1) {
      if (!k.startsWith('ease') && !k.startsWith('num')) {
        const comment = commentsMap.get(k)

        if (comment) {
          code += `${comment}\n`
        }
        code += `export const vec2_${k} = /* @__PURE__ */ vec2_makeSetEach(${k})\n\n`

        if (comment) {
          code += `${comment}\n`
        }
        code += `export const vec3_${k} = /* @__PURE__ */ vec3_makeSetEach(${k})\n\n`

        if (comment) {
          code += `${comment}\n`
        }
        code += `export const vec4_${k} = /* @__PURE__ */ vec4_makeSetEach(${k})\n\n`
      }
    }
  }
}

console.log(code)
