import { expect } from 'chai'
import consumer from './consumer'
import sinon from 'sinon'

describe('consumer', () => {
  it('should be a function', () => {
    expect(consumer).to.be.a('function')
  })

  it('should accept a logger', () => {
    const logger = () => {}
    expect(consumer(logger)).to.be.an('object')
  })

  it('should log using the given logger', () => {
    // given
    const logger = sinon.stub()
    const instance = consumer(logger)

    // when
    instance.log()

    // then
    sinon.assert.calledWithExactly(logger, '[consumer]', 'Hello world', 'info')
  })
})
