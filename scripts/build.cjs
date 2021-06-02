const fs = require('fs')
const fastglob = require('fast-glob')
const path = require('path')
const { forkAsync } = require('./lib/child-processes')

const typescriptCliPath = require.resolve('typescript/lib/tsc')
const eslintCliPath = require.resolve('eslint/bin/eslint.js')

const ROOT_DIR = path.dirname(__dirname)

async function compileTsPackage(projectDir) {
  projectDir = path.resolve(ROOT_DIR, projectDir)
  const tscArgs = []
  tscArgs.push('-p', path.resolve(projectDir, 'tsconfig.build.json'))
  tscArgs.push('--declaration')

  const esmArgs = [...tscArgs]
  esmArgs.push('--outdir', path.join(projectDir, 'dist/esm'))
  esmArgs.push('--module', 'ESNext')
  await forkAsync(typescriptCliPath, esmArgs)

  const cjsArgs = [...tscArgs]
  cjsArgs.push('--outdir', path.join(projectDir, 'dist/cjs'))
  cjsArgs.push('--module', 'CommonJS')
  await forkAsync(typescriptCliPath, cjsArgs)

  const distDir = path.resolve(projectDir, 'dist')

  for (const f of await fastglob('cjs/**/*.js', { onlyFiles: true, absolute: true, cwd: distDir })) {
    fs.renameSync(f, `${f}.cjs`)
  }
}

async function main() {
  console.log('Compiling...')

  for (const projectName of fs.readdirSync(path.resolve(ROOT_DIR, 'packages'))) {
    const projectDir = path.resolve(ROOT_DIR, 'packages', projectName)
    if (fs.existsSync(path.resolve(projectDir, 'tsconfig.build.json'))) {
      const timeTitle = `Package ${projectName} compiled.`
      console.log('Compiling package', projectName)
      console.time(timeTitle)
      await compileTsPackage(projectDir)
      console.timeEnd(timeTitle)
    }
  }

  console.log('Linting...')
  console.time('Linting completed')
  await forkAsync(eslintCliPath, ['--fix', '.'], { cwd: ROOT_DIR })
  console.timeEnd('Linting completed')
}

main().catch((e) => {
  console.error(e)
  if (!process.exitCode) {
    process.exitCode = 1
  }
})
