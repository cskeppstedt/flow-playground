/* @flow */

import { expect } from 'chai'
import main from '../src/index'
import sinon from 'sinon'
import MyDep from '../my-dep/index'

describe('flow-playground', function () {
  const sandbox = sinon.sandbox.create()

  afterEach(function () {
    sandbox.restore()
  })

  it ('should be a function', function () {
    expect(main).to.be.a('function')
  })

  it ('should return upper case strings', function () {
    const expected = 'FOO'
    const actual = main('foo')

    expect(actual).to.equal(expected)
  })

  it ('should notify the logging service', function () {
    const loggingStub = sandbox.stub(MyDep, 'log')
    const expected = 'FOO'

    main('foo')

    sinon.assert.calledWithExactly(loggingStub, expected)
  })
})
