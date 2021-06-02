const childProcess = require('child_process')

function promisifyChildProcess(child, command = 'operation') {
  return new Promise((resolve, reject) => {
    let errored = false

    function handleError(error) {
      if (!errored) {
        errored = true
        if (error instanceof Error) {
          reject(error)
        } else {
          if (typeof error === 'number') {
            error = `ErrorCode:${error}`
          }
          reject(new Error(`${command} failed. ${error}`))
        }
      }
    }

    try {
      if (typeof child === 'function') {
        child = child()
      }

      child.on('error', handleError)
      child.on('exit', (error) => {
        if (!errored) {
          if (error) {
            handleError(error)
          } else {
            resolve()
          }
        }
      })
    } catch (error) {
      handleError(error)
    }
  })
}

exports.promisifyChildProcess = promisifyChildProcess

const defaultSpawnOptions = {
  stdio: 'inherit',
  env: process.env
}

function spawnAsync(command, args = [], options) {
  return promisifyChildProcess(() => childProcess.spawn(command, args, { ...defaultSpawnOptions, ...options }))
}

exports.spawnAsync = spawnAsync

function forkAsync(modulePath, args = [], options) {
  return promisifyChildProcess(() => childProcess.fork(modulePath, args, { ...defaultSpawnOptions, ...options }))
}

exports.forkAsync = forkAsync
