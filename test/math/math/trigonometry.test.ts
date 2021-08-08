import { expect } from 'chai'
import {
  angleDeltaSigned,
  angleDeltaUnsigned,
  angleWrapSigned,
  angleWrapUnsigned,
  degToRad,
  isNearlyEqualAbsolute,
  PI,
  radToDeg,
  TWO_PI
} from '@mundus/math'

describe('@mundus/math trigonometry', () => {
  describe('degToRad', () => {
    it('returns degrees from radians', () => {
      expect(radToDeg(0)).to.equal(0)
      expect(radToDeg(PI / 2)).to.equal(90)
      expect(radToDeg(PI)).to.equal(180)
      expect(radToDeg(PI * 1.5)).to.equal(270)
      expect(radToDeg(PI * 2)).to.equal(360)
    })
  })

  describe('radToDeg', () => {
    it('returns radians from degrees', () => {
      expect(degToRad(0)).to.equal(0)
      expect(degToRad(90)).to.equal(PI / 2)
      expect(degToRad(180)).to.equal(PI)
      expect(degToRad(270)).to.equal(PI * 1.5)
      expect(degToRad(360)).to.equal(PI * 2)
    })
  })

  describe('angleWrapSigned', () => {
    it('returns 0 for 0', () => {
      expect(angleWrapSigned(0)).to.equal(0)
      expect(angleWrapSigned(-0)).to.equal(0)
    })

    it('keep the value as it is if between 0 and PI', () => {
      expect(angleWrapSigned(PI / 50)).to.equal(PI / 50)
      expect(angleWrapSigned(PI / 5)).to.equal(PI / 5)
      expect(angleWrapSigned(PI / 4)).to.equal(PI / 4)
      expect(angleWrapSigned(PI / 3)).to.equal(PI / 3)
      expect(angleWrapSigned(PI / 2)).to.equal(PI / 2)
      expect(angleWrapSigned(PI / 1.1)).to.equal(PI / 1.1)
      expect(angleWrapSigned(PI / 1.0001)).to.equal(PI / 1.0001)
    })

    it('keep the value as it is if between -PI and 0', () => {
      expect(angleWrapSigned(-PI / 50)).to.equal(-PI / 50)
      expect(angleWrapSigned(-PI / 5)).to.equal(-PI / 5)
      expect(angleWrapSigned(-PI / 4)).to.equal(-PI / 4)
      expect(angleWrapSigned(-PI / 3)).to.equal(-PI / 3)
      expect(angleWrapSigned(-PI / 2)).to.equal(-PI / 2)
      expect(angleWrapSigned(-PI / 1.1)).to.equal(-PI / 1.1)
      expect(angleWrapSigned(-PI / 1.01)).to.equal(-PI / 1.01)
      expect(angleWrapSigned(-PI / 1.0001)).to.equal(-PI / 1.0001)
    })

    it('returns 0 for even multiples of PI', () => {
      expect(angleWrapSigned(2 * PI)).to.equal(0)
      expect(angleWrapSigned(4 * PI)).to.equal(0)
      expect(angleWrapSigned(6 * PI)).to.equal(0)
      expect(angleWrapSigned(8 * PI)).to.equal(0)
      expect(angleWrapSigned(10 * PI)).to.equal(0)

      expect(angleWrapSigned(-2 * PI)).to.equal(0)
      expect(angleWrapSigned(-4 * PI)).to.equal(0)
      expect(angleWrapSigned(-6 * PI)).to.equal(0)
      expect(angleWrapSigned(-8 * PI)).to.equal(0)
      expect(angleWrapSigned(-10 * PI)).to.equal(0)
    })

    it('returns PI for odd multiples of PI', () => {
      expect(angleWrapSigned(3 * PI)).to.equal(PI)
      expect(angleWrapSigned(5 * PI)).to.equal(PI)
      expect(angleWrapSigned(7 * PI)).to.equal(PI)
      expect(angleWrapSigned(9 * PI)).to.equal(PI)

      expect(angleWrapSigned(-3 * PI)).to.equal(PI)
      expect(angleWrapSigned(-5 * PI)).to.equal(PI)
      expect(angleWrapSigned(-7 * PI)).to.equal(PI)
      expect(angleWrapSigned(-9 * PI)).to.equal(PI)
    })

    it('wraps some angles', () => {
      expect(isNearlyEqualAbsolute(angleWrapSigned(PI + 10), 0.575, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(angleWrapSigned(PI - 10), -0.575, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(angleWrapSigned(PI + 3), -0.14159, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(angleWrapSigned(PI - 3), 0.14159, 0.001)).to.equal(true)
    })
  })

  describe('angleWrapUnsigned', () => {
    it('returns 0 for 0', () => {
      expect(angleWrapUnsigned(0)).to.equal(0)
      expect(angleWrapUnsigned(-0)).to.equal(0)
    })

    it('keep the value as it is if between 0 and 2*PI', () => {
      expect(angleWrapUnsigned(PI / 50)).to.equal(PI / 50)
      expect(angleWrapUnsigned(PI / 5)).to.equal(PI / 5)
      expect(angleWrapUnsigned(PI / 4)).to.equal(PI / 4)
      expect(angleWrapUnsigned(PI / 3)).to.equal(PI / 3)
      expect(angleWrapUnsigned(PI / 2)).to.equal(PI / 2)
      expect(angleWrapUnsigned(PI * 1.5)).to.equal(PI * 1.5)
    })

    it('makes the value positive if between -2*PI and 0', () => {
      expect(angleWrapUnsigned(-PI / 50)).to.equal(TWO_PI - PI / 50)
      expect(angleWrapUnsigned(-PI / 5)).to.equal(TWO_PI - PI / 5)
      expect(angleWrapUnsigned(-PI / 4)).to.equal(TWO_PI - PI / 4)
      expect(angleWrapUnsigned(-PI / 3)).to.equal(TWO_PI - PI / 3)
      expect(angleWrapUnsigned(-PI / 2)).to.equal(TWO_PI - PI / 2)
      expect(angleWrapUnsigned(-PI / 1.1)).to.equal(TWO_PI - PI / 1.1)
      expect(angleWrapUnsigned(-PI / 1.01)).to.equal(TWO_PI - PI / 1.01)
      expect(angleWrapUnsigned(-PI / 1.0001)).to.equal(TWO_PI - PI / 1.0001)
    })

    it('returns 0 for even multiples of PI', () => {
      expect(angleWrapUnsigned(2 * PI)).to.equal(0)
      expect(angleWrapUnsigned(4 * PI)).to.equal(0)
      expect(angleWrapUnsigned(6 * PI)).to.equal(0)
      expect(angleWrapUnsigned(8 * PI)).to.equal(0)
      expect(angleWrapUnsigned(10 * PI)).to.equal(0)

      expect(angleWrapUnsigned(-2 * PI)).to.equal(0)
      expect(angleWrapUnsigned(-4 * PI)).to.equal(0)
      expect(angleWrapUnsigned(-6 * PI)).to.equal(0)
      expect(angleWrapUnsigned(-8 * PI)).to.equal(0)
      expect(angleWrapUnsigned(-10 * PI)).to.equal(0)
    })

    it('returns PI for odd multiples of PI', () => {
      expect(angleWrapUnsigned(3 * PI)).to.equal(PI)
      expect(angleWrapUnsigned(5 * PI)).to.equal(PI)
      expect(angleWrapUnsigned(7 * PI)).to.equal(PI)
      expect(angleWrapUnsigned(9 * PI)).to.equal(PI)

      expect(angleWrapUnsigned(-3 * PI)).to.equal(PI)
      expect(angleWrapUnsigned(-5 * PI)).to.equal(PI)
      expect(angleWrapUnsigned(-7 * PI)).to.equal(PI)
      expect(angleWrapUnsigned(-9 * PI)).to.equal(PI)
    })

    it('wraps some angles', () => {
      expect(isNearlyEqualAbsolute(angleWrapUnsigned(PI + 10), 0.575, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(angleWrapUnsigned(PI - 10), 5.7079, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(angleWrapUnsigned(PI + 3), 6.14159, 0.001)).to.equal(true)
      expect(isNearlyEqualAbsolute(angleWrapUnsigned(PI - 3), 0.14159, 0.001)).to.equal(true)
    })
  })

  describe('angleDeltaSigned', () => {
    it('returns 0 for same angles', () => {
      expect(angleDeltaSigned(0, 0)).to.equal(0)
      expect(angleDeltaSigned(1, 1)).to.equal(0)
      expect(angleDeltaSigned(PI / 2, PI / 2)).to.equal(0)
      expect(angleDeltaSigned(PI / 3, PI / 3)).to.equal(0)
      expect(angleDeltaSigned(PI, PI)).to.equal(0)
      expect(angleDeltaSigned(PI * 1.5, PI * 1.5)).to.equal(0)
      expect(angleDeltaSigned(PI * 2, PI * 2)).to.equal(0)
      expect(angleDeltaSigned(PI * 3, PI * 3)).to.equal(0)
      expect(angleDeltaSigned(PI * 3, PI * 3)).to.equal(0)
    })

    it('computes the difference of few angles', () => {
      expect(angleDeltaSigned(-4.5 * PI, -3 * PI).toFixed(5)).to.equal('-1.57080')
      expect(angleDeltaSigned(-4.5 * PI, 3 * PI).toFixed(5)).to.equal('-1.57080')
      expect(angleDeltaSigned(-4 * PI, 1 * PI).toFixed(5)).to.equal('3.14159')
      expect(angleDeltaSigned(-3.5 * PI, -5 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaSigned(-3.5 * PI, -4 * PI).toFixed(5)).to.equal('-1.57080')
      expect(angleDeltaSigned(-3 * PI, 2.5 * PI).toFixed(5)).to.equal('-1.57080')
      expect(angleDeltaSigned(-2.5 * PI, 4 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaSigned(-2 * PI, 2 * PI).toFixed(5)).to.equal('0.00000')
      expect(angleDeltaSigned(-0.5 * PI, 0 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaSigned(0.5 * PI, -5 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaSigned(0.5 * PI, -4 * PI).toFixed(5)).to.equal('-1.57080')
      expect(angleDeltaSigned(0.5 * PI, 1 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaSigned(1 * PI, -2.5 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaSigned(1.5 * PI, 0 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaSigned(2 * PI, -4 * PI).toFixed(5)).to.equal('0.00000')
      expect(angleDeltaSigned(2 * PI, 0 * PI).toFixed(5)).to.equal('0.00000')
      expect(angleDeltaSigned(2.5 * PI, -1 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaSigned(3.5 * PI, -5 * PI).toFixed(5)).to.equal('-1.57080')
      expect(angleDeltaSigned(3.5 * PI, -2 * PI).toFixed(5)).to.equal('1.57080')
    })
  })

  describe('angleDeltaUnsigned', () => {
    it('returns 0 for same angles', () => {
      expect(angleDeltaUnsigned(0, 0)).to.equal(0)
      expect(angleDeltaUnsigned(1, 1)).to.equal(0)
      expect(angleDeltaUnsigned(PI / 2, PI / 2)).to.equal(0)
      expect(angleDeltaUnsigned(PI / 3, PI / 3)).to.equal(0)
      expect(angleDeltaUnsigned(PI, PI)).to.equal(0)
      expect(angleDeltaUnsigned(PI * 1.5, PI * 1.5)).to.equal(0)
      expect(angleDeltaUnsigned(PI * 2, PI * 2)).to.equal(0)
      expect(angleDeltaUnsigned(PI * 3, PI * 3)).to.equal(0)
      expect(angleDeltaUnsigned(PI * 3, PI * 3)).to.equal(0)
    })

    it('computes the difference of few angles', () => {
      expect(angleDeltaUnsigned(-4 * PI, 0 * PI).toFixed(5)).to.equal('0.00000')
      expect(angleDeltaUnsigned(-4 * PI, 1 * PI).toFixed(5)).to.equal('3.14159')
      expect(angleDeltaUnsigned(-3.5 * PI, -2.5 * PI).toFixed(5)).to.equal('3.14159')
      expect(angleDeltaUnsigned(-3.5 * PI, -0.5 * PI).toFixed(5)).to.equal('3.14159')
      expect(angleDeltaUnsigned(-3 * PI, 1.5 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaUnsigned(-2 * PI, -4.5 * PI).toFixed(5)).to.equal('4.71239')
      expect(angleDeltaUnsigned(-1 * PI, -1.5 * PI).toFixed(5)).to.equal('4.71239')
      expect(angleDeltaUnsigned(-1 * PI, -1 * PI).toFixed(5)).to.equal('0.00000')
      expect(angleDeltaUnsigned(-1 * PI, 0.5 * PI).toFixed(5)).to.equal('4.71239')
      expect(angleDeltaUnsigned(-1 * PI, 1.5 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaUnsigned(-0.5 * PI, -4 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaUnsigned(-0.5 * PI, 1.5 * PI).toFixed(5)).to.equal('0.00000')
      expect(angleDeltaUnsigned(-0.5 * PI, 2 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaUnsigned(0 * PI, 2.5 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaUnsigned(0.5 * PI, -0.5 * PI).toFixed(5)).to.equal('3.14159')
      expect(angleDeltaUnsigned(2.5 * PI, -4.5 * PI).toFixed(5)).to.equal('3.14159')
      expect(angleDeltaUnsigned(3 * PI, -0.5 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaUnsigned(3 * PI, 3 * PI).toFixed(5)).to.equal('0.00000')
      expect(angleDeltaUnsigned(3.5 * PI, -5 * PI).toFixed(5)).to.equal('4.71239')
      expect(angleDeltaUnsigned(4 * PI, -3.5 * PI).toFixed(5)).to.equal('1.57080')
      expect(angleDeltaUnsigned(4 * PI, 4 * PI).toFixed(5)).to.equal('0.00000')
    })
  })
})
