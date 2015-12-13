/* @flow */
import MyDep from '../my-dep'


module.exports = function (input) {
  const transformed = input.toUpperCase()

  MyDep.log(transformed)

  return transformed
}
