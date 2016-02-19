import { expect } from 'chai'
import example from './example'

describe('ambiguity example', () => {
  it('should return true for x > 10', () => {
    expect(example(11)).to.equal(true)
  })

  it('should return false for x < 10', () => {
    expect(example(9)).to.equal(false)
  })
})
