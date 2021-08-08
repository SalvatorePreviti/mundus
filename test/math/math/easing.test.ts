import { expect } from 'chai'
import {
  easeInQuadratic,
  easeInCubic,
  easeInQuartic,
  easeInQuintic,
  easeInSextic,
  easeInSeptic,
  easeInOctic,
  pow2,
  pow3,
  pow4,
  pow5,
  pow6,
  pow7,
  pow8
} from '@mundus/math'

describe('@mudus/math easing', () => {
  describe('easeIn powers', () => {
    it('easeIn power function is equivalent to powN', () => {
      expect(easeInQuadratic).to.equal(pow2)
      expect(easeInCubic).to.equal(pow3)
      expect(easeInQuartic).to.equal(pow4)
      expect(easeInQuintic).to.equal(pow5)
      expect(easeInSextic).to.equal(pow6)
      expect(easeInSeptic).to.equal(pow7)
      expect(easeInOctic).to.equal(pow8)
    })
  })
})
