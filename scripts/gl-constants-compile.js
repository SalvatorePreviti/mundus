const fs = require('fs')
const path = require('path')
const constants = require('../packages/gl-constants/gl-constants-data.json')

const header =
  '// WebGL constants from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants\n' +
  '// It gets minified better to use the raw constants instad of using webglContext.CONSTANT\n' +
  '// Those values are standard in all browsers.\n\n'

const lastKey = Object.keys(constants)[Object.keys(constants).length - 1]

let indexContents = header
for (const [key, info] of Object.entries(constants)) {
  indexContents += `/** ${info.comment} */\n`
  indexContents += `export const GL_${key} = ${info.value}\n\n`
}
indexContents += '\n'
fs.writeFileSync(path.resolve(__dirname, '../packages/gl-constants/index.js'), indexContents)

let indexCjsContents = header
indexCjsContents += 'module.exports = {\n'
for (const [key, info] of Object.entries(constants)) {
  indexCjsContents += `  /** ${info.comment} */\n`
  indexCjsContents += `  GL_${key}: ${info.value}`
  indexCjsContents += key !== lastKey ? ',\n\n' : '\n'
}
indexCjsContents += '}\n'
fs.writeFileSync(path.resolve(__dirname, '../packages/gl-constants/index.cjs'), indexCjsContents)

let indexDtsContent = header
for (const [key, info] of Object.entries(constants)) {
  indexDtsContent += `/** ${info.comment} */\n`
  indexDtsContent += `export declare const GL_${key} = ${info.value}\n\n`
}
indexDtsContent += '\n'
fs.writeFileSync(path.resolve(__dirname, '../packages/gl-constants/index.d.ts'), indexDtsContent)

let glConstantsContents = header
glConstantsContents += '/** All webgl constants */\n'
glConstantsContents += 'export const glConstants = {\n'
for (const [key, info] of Object.entries(constants)) {
  glConstantsContents += `  /** ${info.comment} */\n`
  glConstantsContents += `  ${key}: ${info.value}`
  glConstantsContents += key !== lastKey ? ',\n\n' : '\n'
}
glConstantsContents += `}\n\n${getNameMapFunctions('export ')}`
fs.writeFileSync(path.resolve(__dirname, '../packages/gl-constants/lookup.js'), glConstantsContents)

let glConstantsCjsContents = header
glConstantsCjsContents += '/** All webgl constants */\n'
glConstantsCjsContents += 'const glConstants = {\n'
for (const [key, info] of Object.entries(constants)) {
  glConstantsCjsContents += `  /** ${info.comment} */\n`
  glConstantsCjsContents += `  ${key}: ${info.value}`
  glConstantsCjsContents += key !== lastKey ? ',\n\n' : '\n'
}
glConstantsCjsContents += `}\n\n${getNameMapFunctions('')}\n`
glConstantsCjsContents += 'module.exports = {\n'
glConstantsCjsContents += '  glConstants,\n'
glConstantsCjsContents += '  glConstantGetName,\n'
glConstantsCjsContents += '  glConstantToString\n'
glConstantsCjsContents += '}\n'
fs.writeFileSync(path.resolve(__dirname, '../packages/gl-constants/lookup.cjs'), glConstantsCjsContents)

let glConstantsDtsContents = header
glConstantsDtsContents += 'export interface GLConstants {\n'
for (const [key, info] of Object.entries(constants)) {
  glConstantsDtsContents += `  /** ${info.comment} */\n`
  glConstantsDtsContents += `  readonly ${key}: ${info.value}`
  glConstantsDtsContents += key !== lastKey ? '\n\n' : '\n'
}
glConstantsDtsContents += '}\n\n'
glConstantsDtsContents += '/** All webgl constants */\n'
glConstantsDtsContents += 'export declare const glConstants: GLConstants\n\n'
glConstantsDtsContents += '/**\n'
glConstantsDtsContents += ' * Gets the name of a GL constant. Returns undefined if not found.\n'
glConstantsDtsContents += ' * @param {number | null | undefined} value The value of a GL constant\n'
glConstantsDtsContents += ' * @returns {string | undefined} The name of a GL constant or undefined if not found.\n'
glConstantsDtsContents += ' */\n'
glConstantsDtsContents +=
  ' export declare const glConstantGetName: (value: number | null | undefined) => string | undefined;\n\n'
glConstantsDtsContents += ' /**\n'
glConstantsDtsContents += '  * Converts a GL constant to string. Returns its name or its value if not found.\n'
glConstantsDtsContents += '  * @param {number} value The value of a GL constant\n'
glConstantsDtsContents += '  * @returns {string} The name of a GL constant or undefined if not found.\n'
glConstantsDtsContents += '  */\n'
glConstantsDtsContents += ' export declare const glConstantToString: (value: number) => string;\n'

fs.writeFileSync(path.resolve(__dirname, '../packages/gl-constants/lookup.d.ts'), glConstantsDtsContents)

function getNameMapFunctions(exportMode) {
  let r = ''
  r += 'let _nameMap\n'
  r += '\n'
  r += '/**\n'
  r += ' * Gets the name of a GL constant. Returns undefined if not found.\n'
  r += ' * @param {number | null | undefined} value The value of a GL constant\n'
  r += ' * @returns {string | undefined} The name of a GL constant or undefined if not found.\n'
  r += ' */\n'
  r += `${exportMode}const glConstantGetName = (value) =>\n`
  r += '  (_nameMap || (_nameMap = new Map(Object.entries(glConstants).map(([k, v]) => [v, k])))).get(value)\n'
  r += '\n'
  r += '/**\n'
  r += ' * Converts a GL constant to string. Returns its name or its value if not found.\n'
  r += ' * @param {number} value The value of a GL constant\n'
  r += ' * @returns {string} The name of a GL constant or undefined if not found.\n'
  r += ' */\n'
  r += `${exportMode}const glConstantToString = (value) => glConstantGetName(value) || \`\${value}\`\n`
  return r
}
