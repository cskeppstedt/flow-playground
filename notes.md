## Pros/cons/observations

+ certainty / disambuigity
+ complements unit tests

Requires more thinking up-front, may increase friction. Requires you to cover
any possible case (which might be overly specific / not reasonable)

## Type of bugs that can be caught

* "Integration" kind of bugs. I.e. you have a Lib and a Consumer that uses Lib.
  You unit test Consumer by stubbing Lib and relying on knowing how the Lib API
  works and looks at this point. If Lib API is changed, those unit tests will
  still pass.

* "Ambiguity" kind of bugs. I.e. you have a function that returns something
  based on input, and the code is non-exhaustive and may return `undefined` for
  some edge case can be catched at compile time.

## Pre-requisites

* Good IDE integration
  - Currently not that great

* Great error messages
  - Must be improved, they are sometimes unintuitive and show up at unexpected parts.

* Stable checker
  - Still has a number of issues, particularly around object intersections,
    see https://github.com/facebook/flow/issues/1331

