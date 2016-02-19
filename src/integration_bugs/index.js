/* @flow */

// entry point of the program, connects `consumer` with `logger`

import logger from './deps/logger'
import consumer from './consumer'

consumer(logger)
