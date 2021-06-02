const path = require('path')
const { forkAsync } = require('./lib/child-processes')

const typescriptCliPath = require.resolve('typescript/lib/tsc')

const ROOT_DIR = path.dirname(__dirname)

async function compileTsPackage(name) {
  const timeTitle = `Package ${name} compiled.`

  console.time(timeTitle)

  const projectDir = path.resolve(ROOT_DIR, 'packages', name)

  const tscPromises = []

  const tscArgs = []
  tscArgs.push('-p', path.resolve(projectDir, 'tsconfig.json'))
  tscArgs.push('--emit')
  tscArgs.push('--declaration')

  const esmArgs = [...tscArgs]
  esmArgs.push('--outdir', path.join(projectDir, 'dist/esm'))
  esmArgs.push('--module', 'ESNext')
  tscPromises.push(forkAsync(typescriptCliPath, esmArgs))

  const cjsArgs = [...tscArgs]
  cjsArgs.push('--outdir', path.join(projectDir, 'dist/cjs'))
  cjsArgs.push('--module', 'CommonJS')
  tscPromises.push(forkAsync(typescriptCliPath, esmArgs))

  await Promise.all(tscPromises)

  console.timeEnd(timeTitle)
}

async function main() {
  await compileTsPackage('gl-constants')
}

main().catch((e) => {
  console.error(e)
  if (!process.exitCode) {
    process.exitCode = 1
  }
})
