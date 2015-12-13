/* @flow */

module.exports = {
  log: function (message: string) {
    console.log(message)
  }
}

/*
type logOptions = {
  message: string,
  type: string
}

module.exports = {
  log: function ({message, type}: logOptions): void {
    console[type](message)
  }
}
*/
