/* @flow */

export type Severity = 'debug'
  | 'info'
  | 'warn'
  | 'error'

export default function logger (moduleName: string, message: string, severity:Severity = 'info'): void {
  switch (severity) {
    case 'debug':
      return console.debug(moduleName, message)
    case 'warn':
      return console.warn(moduleName, message)
    case 'error':
      return console.error(moduleName, message)
  }
}

export type loggerType = typeof logger
