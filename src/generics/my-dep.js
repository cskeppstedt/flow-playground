/* @flow */

/*
// "old impl"
module.exports = {
  log: function (message: string) {
    console.log(message)
  }
}
*/

type errorOptions = {
  type: 'error',
  message: string,
  severity: bool
}

type normalOptions = {
  message: string,
  type: 'info' | 'warning'
}

type logOptions = errorOptions | normalOptions

module.exports = {
  log: function (options: logOptions): void {
    console[options.type](options.message)
  }
}
