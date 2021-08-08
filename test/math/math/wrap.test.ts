import { expect } from 'chai'
import { isNearlyEqualAbsolute, wrapSigned, wrapUnsigned, wrapPingPong, clamp } from '@mundus/math'

describe('@mudus/math trigonometry', () => {
  describe('wrapSigned', () => {
    it('returns 0 for 0', () => {
      expect(wrapSigned(0, 2)).to.equal(0)
      expect(wrapSigned(-0, 2)).to.equal(0)
    })

    it('returns length/2 for length/2 or -length/2', () => {
      expect(wrapSigned(1, 2)).to.equal(1)
      expect(wrapSigned(-1, 2)).to.equal(1)
    })

    it('keep the value as it is if between 0 and length/2', () => {
      expect(wrapSigned(2 / 50, 2)).to.equal(2 / 50)
      expect(wrapSigned(2 / 5, 2)).to.equal(2 / 5)
      expect(wrapSigned(2 / 4, 2)).to.equal(2 / 4)
      expect(wrapSigned(2 / 3, 2)).to.equal(2 / 3)
      expect(wrapSigned(2 / 2, 2)).to.equal(2 / 2)
    })

    it('keep the value as it is if between -length/2 and 0', () => {
      expect(wrapSigned(-2 / 50, 2)).to.equal(-2 / 50)
      expect(wrapSigned(-2 / 5, 2)).to.equal(-2 / 5)
      expect(wrapSigned(-2 / 4, 2)).to.equal(-2 / 4)
      expect(wrapSigned(-2 / 3, 2)).to.equal(-2 / 3)
    })

    it('returns 0 for even values', () => {
      expect(wrapSigned(2, 2)).to.equal(0)
      expect(wrapSigned(4, 2)).to.equal(0)
      expect(wrapSigned(6, 2)).to.equal(0)
      expect(wrapSigned(8, 2)).to.equal(0)
      expect(wrapSigned(10, 2)).to.equal(0)

      expect(wrapSigned(-2, 2)).to.equal(0)
      expect(wrapSigned(-4, 2)).to.equal(0)
      expect(wrapSigned(-6, 2)).to.equal(0)
      expect(wrapSigned(-8, 2)).to.equal(0)
      expect(wrapSigned(-10, 2)).to.equal(0)
    })

    it('returns length/2 for odd values', () => {
      expect(wrapSigned(3, 2)).to.equal(1)
      expect(wrapSigned(5, 2)).to.equal(1)
      expect(wrapSigned(7, 2)).to.equal(1)
      expect(wrapSigned(9, 2)).to.equal(1)

      expect(wrapSigned(-3, 2)).to.equal(1)
      expect(wrapSigned(-5, 2)).to.equal(1)
      expect(wrapSigned(-7, 2)).to.equal(1)
      expect(wrapSigned(-9, 2)).to.equal(1)
    })

    it('wraps some values', () => {
      expect(isNearlyEqualAbsolute(wrapSigned(2 + 10.5, 2.5), 0, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(wrapSigned(2 - 10.5, 2.5), -1, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(wrapSigned(2 + 3.5, 2.5), 0.5, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(wrapSigned(2 - 3.5, 2.5), 1, 0.001)).to.equal(true)
    })
  })

  describe('wrapUnsigned', () => {
    it('returns 0 for 0', () => {
      expect(wrapUnsigned(0, 2)).to.equal(0)
      expect(wrapUnsigned(-0, 2)).to.equal(0)
    })

    it('returns 0 for length or -length', () => {
      expect(wrapUnsigned(2, 2)).to.equal(0)
      expect(wrapUnsigned(-2, 2)).to.equal(0)
    })

    it('keep the value as it is if between 0 and length', () => {
      expect(wrapUnsigned(2 / 50, 2)).to.equal(2 / 50)
      expect(wrapUnsigned(2 / 5, 2)).to.equal(2 / 5)
      expect(wrapUnsigned(2 / 4, 2)).to.equal(2 / 4)
      expect(wrapUnsigned(2 / 3, 2)).to.equal(2 / 3)
      expect(wrapUnsigned(2 / 2, 2)).to.equal(2 / 2)
    })

    it('makes the value positive if negative and length is negative', () => {
      expect(wrapUnsigned(2 / 50, -2)).to.equal(2 / 50 - 2)
      expect(wrapUnsigned(2 / 5, -2)).to.equal(2 / 5 - 2)
      expect(wrapUnsigned(2 / 4, -2)).to.equal(2 / 4 - 2)
      expect(wrapUnsigned(2 / 3, -2)).to.equal(2 / 3 - 2)
      expect(wrapUnsigned(2 / 2, -2)).to.equal(2 / 2 - 2)
    })

    it('make the value positive if negative', () => {
      expect(wrapUnsigned(-2 / 50, 2)).to.equal(2 - 2 / 50)
      expect(wrapUnsigned(-2 / 5, 2)).to.equal(2 - 2 / 5)
      expect(wrapUnsigned(-2 / 4, 2)).to.equal(2 - 2 / 4)
      expect(wrapUnsigned(-2 / 3, 2)).to.equal(2 - 2 / 3)
    })

    it('keep the value as it is if negative with negative length', () => {
      expect(wrapUnsigned(-2 / 50, -2)).to.equal(-2 / 50)
      expect(wrapUnsigned(-2 / 5, -2)).to.equal(-2 / 5)
      expect(wrapUnsigned(-2 / 4, -2)).to.equal(-2 / 4)
      expect(wrapUnsigned(-2 / 3, -2)).to.equal(-2 / 3)
    })

    it('returns 0 for even values', () => {
      expect(wrapUnsigned(2, 2)).to.equal(0)
      expect(wrapUnsigned(4, 2)).to.equal(0)
      expect(wrapUnsigned(6, 2)).to.equal(0)
      expect(wrapUnsigned(8, 2)).to.equal(0)
      expect(wrapUnsigned(10, 2)).to.equal(0)

      expect(wrapUnsigned(-2, 2)).to.equal(0)
      expect(wrapUnsigned(-4, 2)).to.equal(0)
      expect(wrapUnsigned(-6, 2)).to.equal(0)
      expect(wrapUnsigned(-8, 2)).to.equal(0)
      expect(wrapUnsigned(-10, 2)).to.equal(0)
    })

    it('returns 0 for even values with negative length', () => {
      expect(wrapUnsigned(2, -2)).to.equal(0)
      expect(wrapUnsigned(4, -2)).to.equal(0)
      expect(wrapUnsigned(6, -2)).to.equal(0)
      expect(wrapUnsigned(8, -2)).to.equal(0)
      expect(wrapUnsigned(10, -2)).to.equal(0)

      expect(wrapUnsigned(-2, -2)).to.equal(0)
      expect(wrapUnsigned(-4, -2)).to.equal(0)
      expect(wrapUnsigned(-6, -2)).to.equal(0)
      expect(wrapUnsigned(-8, -2)).to.equal(0)
      expect(wrapUnsigned(-10, -2)).to.equal(0)
    })

    it('returns length/2 for odd values', () => {
      expect(wrapUnsigned(3, 2)).to.equal(1)
      expect(wrapUnsigned(5, 2)).to.equal(1)
      expect(wrapUnsigned(7, 2)).to.equal(1)
      expect(wrapUnsigned(9, 2)).to.equal(1)

      expect(wrapUnsigned(-3, 2)).to.equal(1)
      expect(wrapUnsigned(-5, 2)).to.equal(1)
      expect(wrapUnsigned(-7, 2)).to.equal(1)
      expect(wrapUnsigned(-9, 2)).to.equal(1)
    })

    it('returns -length/2 for odd values with negative length', () => {
      expect(wrapUnsigned(3, -2)).to.equal(-1)
      expect(wrapUnsigned(5, -2)).to.equal(-1)
      expect(wrapUnsigned(7, -2)).to.equal(-1)
      expect(wrapUnsigned(9, -2)).to.equal(-1)

      expect(wrapUnsigned(-3, -2)).to.equal(-1)
      expect(wrapUnsigned(-5, -2)).to.equal(-1)
      expect(wrapUnsigned(-7, -2)).to.equal(-1)
      expect(wrapUnsigned(-9, -2)).to.equal(-1)
    })

    it('wraps some values', () => {
      expect(isNearlyEqualAbsolute(wrapUnsigned(2 + 10.5, 2.5), 0, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(wrapUnsigned(2 - 10.5, 2.5), 1.5, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(wrapUnsigned(2 + 3.5, 2.5), 0.5, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(wrapUnsigned(2 - 3.5, 2.5), 1, 0.001)).to.equal(true)
    })
  })

  describe('wrapPingPong', () => {
    it('wraps some values following triangle wave', () => {
      expect(wrapPingPong(-3.8, 3).toFixed(1)).to.equal('2.2')
      expect(wrapPingPong(-3.4, 3).toFixed(1)).to.equal('2.6')
      expect(wrapPingPong(-3, 3).toFixed(1)).to.equal('3.0')
      expect(wrapPingPong(-2.6, 3).toFixed(1)).to.equal('2.6')
      expect(wrapPingPong(-2.2, 3).toFixed(1)).to.equal('2.2')
      expect(wrapPingPong(-1.8, 3).toFixed(1)).to.equal('1.8')
      expect(wrapPingPong(-1.4, 3).toFixed(1)).to.equal('1.4')
      expect(wrapPingPong(-1, 3).toFixed(1)).to.equal('1.0')
      expect(wrapPingPong(-0.6, 3).toFixed(1)).to.equal('0.6')
      expect(wrapPingPong(-0.2, 3).toFixed(1)).to.equal('0.2')
      expect(wrapPingPong(0.2, 3).toFixed(1)).to.equal('0.2')
      expect(wrapPingPong(0.6, 3).toFixed(1)).to.equal('0.6')
      expect(wrapPingPong(1, 3).toFixed(1)).to.equal('1.0')
      expect(wrapPingPong(1.4, 3).toFixed(1)).to.equal('1.4')
      expect(wrapPingPong(1.8, 3).toFixed(1)).to.equal('1.8')
      expect(wrapPingPong(2.2, 3).toFixed(1)).to.equal('2.2')
      expect(wrapPingPong(2.6, 3).toFixed(1)).to.equal('2.6')
      expect(wrapPingPong(3, 3).toFixed(1)).to.equal('3.0')
      expect(wrapPingPong(3.4, 3).toFixed(1)).to.equal('2.6')
      expect(wrapPingPong(3.8, 3).toFixed(1)).to.equal('2.2')
      expect(wrapPingPong(4.2, 3).toFixed(1)).to.equal('1.8')
      expect(wrapPingPong(4.6, 3).toFixed(1)).to.equal('1.4')
      expect(wrapPingPong(5, 3).toFixed(1)).to.equal('1.0')
      expect(wrapPingPong(5.4, 3).toFixed(1)).to.equal('0.6')
      expect(wrapPingPong(5.8, 3).toFixed(1)).to.equal('0.2')
    })
  })

  describe('clamp', () => {
    it('clamps a negative value between a minimum and a maximum', () => {
      expect(clamp(-4, -4, 5.5)).to.equal(-4)
      expect(clamp(-5, -4, 5.5)).to.equal(-4)
      expect(clamp(-5131, -4, 5.5)).to.equal(-4)
      expect(clamp(-Infinity, -4, 5.5)).to.equal(-4)
    })

    it('clamps a positive value between a minimum and a maximum', () => {
      expect(clamp(5.9, -4, 5.5)).to.equal(5.5)
      expect(clamp(6, -4, 5.5)).to.equal(5.5)
      expect(clamp(5131, -4, 5.5)).to.equal(5.5)
      expect(clamp(Infinity, -4, 5.5)).to.equal(5.5)
    })

    it('returns the same value if within range', () => {
      expect(clamp(5, 0, 10)).to.equal(5)
      expect(clamp(5, -120, 10)).to.equal(5)
      expect(clamp(-55, -120, 10)).to.equal(-55)
    })
  })
})
