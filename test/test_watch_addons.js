import { spawn } from 'child_process'

// only run these tasks if we're in the test:watch task

if (process.env.MOCHA_WATCH) {
  try {
    spawn('./support/bin/lint', [], {stdio: 'inherit'})
    spawn('./support/bin/typecheck', [], {stdio: 'inherit'})
  } catch (e) {
    console.error(e)
  }
}
