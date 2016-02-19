/* @flow */
import type { loggerType } from './deps/logger'

// this is the publicly facing interface that you get after
// calling consumer(logger).
type consumerInterface = {
  log: () => void
}

export default function consumer (logger: loggerType): consumerInterface {
  return {
    log: () => logger('[consumer]', 'Hello world', 'info')
  }
}
