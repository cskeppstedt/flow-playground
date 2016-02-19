# flow-playground

[![Build Status](https://travis-ci.org/cskeppstedt/flow-playground.svg?branch=master)](https://travis-ci.org/cskeppstedt/flow-playground)

A repo where I'm evaluating [Flow](https://github.com/facebook/flow). I'm focusing on finding
use-cases where the type system would catch things that you could miss by only
relying on unit- or feature tests. My thoughts/findings will probably be
maintained in [notes.md](notes.md).

## Running the project

There's a mocha test-runner set up so that it will also run `flow` and
`eslint`.  It's kind of a hack but gets the job done for now.

    npm install && npm start

