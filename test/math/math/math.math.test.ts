import {
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atanh,
  atan2,
  ceil,
  cbrt,
  expm1,
  cos,
  cosh,
  floor,
  fround,
  hypot,
  log1p,
  log2,
  log10,
  mathMax,
  mathMin,
  mathRandom,
  round,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  trunc,
  EULER,
  LN10,
  LN2,
  LOG10E,
  LOG2E,
  PI,
  SQRT1_2,
  SQRT2,
  num_pow,
  pow2,
  pow3,
  pow4,
  pow5,
  pow6,
  pow7,
  pow8,
  ceilPow2,
  exp,
  log,
  sign,
  floorPow2,
  MIN_VALUE,
  isZero,
  min,
  max,
  num_negate,
  num_inverse,
  num_add,
  num_sub,
  num_mul,
  num_mod,
  num_div,
  int32_and,
  int32_xor,
  int32_or,
  int32_not,
  int32_shl,
  int32_shr,
  uint32_shr,
  isPow2,
  int32_isPow2,
  POSITIVE_INFINITY,
  NEGATIVE_INFINITY,
  int32_clz,
  int32_mul
} from '@mundus/math'
import { expect } from 'chai'

describe('@mudus/math math', () => {
  it('exportes all Math functions', () => {
    expect(Math.acos).to.equal(acos)
    expect(Math.acosh).to.equal(acosh)
    expect(Math.asin).to.equal(asin)
    expect(Math.asinh).to.equal(asinh)
    expect(Math.atan).to.equal(atan)
    expect(Math.atanh).to.equal(atanh)
    expect(Math.atan2).to.equal(atan2)
    expect(Math.ceil).to.equal(ceil)
    expect(Math.cbrt).to.equal(cbrt)
    expect(Math.expm1).to.equal(expm1)
    expect(Math.clz32).to.equal(int32_clz)
    expect(Math.cos).to.equal(cos)
    expect(Math.cosh).to.equal(cosh)
    expect(Math.exp).to.equal(exp)
    expect(Math.floor).to.equal(floor)
    expect(Math.fround).to.equal(fround)
    expect(Math.hypot).to.equal(hypot)
    expect(Math.imul).to.equal(int32_mul)
    expect(Math.log).to.equal(log)
    expect(Math.log1p).to.equal(log1p)
    expect(Math.log2).to.equal(log2)
    expect(Math.log10).to.equal(log10)
    expect(Math.max).to.equal(mathMax)
    expect(Math.min).to.equal(mathMin)
    expect(Math.random).to.equal(mathRandom)
    expect(Math.round).to.equal(round)
    expect(Math.sin).to.equal(sin)
    expect(Math.sinh).to.equal(sinh)
    expect(Math.sqrt).to.equal(sqrt)
    expect(Math.tan).to.equal(tan)
    expect(Math.tanh).to.equal(tanh)
    expect(Math.trunc).to.equal(trunc)
    expect(Math.E).to.equal(EULER)
    expect(Math.LN10).to.equal(LN10)
    expect(Math.LN10).to.equal(LN10)
    expect(Math.LN2).to.equal(LN2)
    expect(Math.LOG10E).to.equal(LOG10E)
    expect(Math.LOG2E).to.equal(LOG2E)
    expect(Math.PI).to.equal(PI)
    expect(Math.SQRT1_2).to.equal(SQRT1_2)
    expect(Math.SQRT2).to.equal(SQRT2)
  })

  describe('sign', () => {
    it('works for positive values', () => {
      expect(sign(0.1)).to.equal(1)
      expect(sign(1)).to.equal(1)
      expect(sign(2)).to.equal(1)
      expect(sign(POSITIVE_INFINITY)).to.equal(1)
    })

    it('works for 0', () => {
      expect(sign(0)).to.equal(0)
    })

    it('works for -0', () => {
      expect(sign(Number.parseFloat('-0')).toString()).to.equal('0')
    })

    it('works for negative values', () => {
      expect(sign(-0.1)).to.equal(-1)
      expect(sign(-1)).to.equal(-1)
      expect(sign(-2)).to.equal(-1)
      expect(sign(NEGATIVE_INFINITY)).to.equal(-1)
    })
  })

  describe('abs', () => {
    it('works for positive values', () => {
      expect(abs(123)).to.equal(123)
      expect(abs(POSITIVE_INFINITY)).to.equal(POSITIVE_INFINITY)
    })

    it('works for zero', () => {
      expect(abs(0)).to.equal(0)
    })

    it('works for -0', () => {
      expect(abs(-0)).to.equal(0)
    })

    it('works for negative values', () => {
      expect(abs(-4.4)).to.equal(4.4)
      expect(abs(NEGATIVE_INFINITY)).to.equal(POSITIVE_INFINITY)
    })

    it('works for NaN', () => {
      expect(abs(NaN)).to.be.NaN
    })
  })

  describe('pows', () => {
    it('has working pow', () => {
      expect(num_pow(1, 1)).to.equal(1)
      expect(num_pow(4, 12.4)).to.equal(29210829.678681508)
      expect(num_pow(4, 12.4)).to.equal(29210829.678681508)
      expect(num_pow(0.5, -3)).to.equal(8)
    })
    it('has working pow2', () => {
      expect(pow2(1)).to.equal(1)
      expect(pow2(2)).to.equal(4)
      expect(pow2(3)).to.equal(9)
    })

    it('has working pow3', () => {
      expect(pow3(1)).to.equal(1)
      expect(pow3(2)).to.equal(8)
      expect(pow3(3)).to.equal(27)
    })

    it('has working pow4', () => {
      expect(pow4(1)).to.equal(1)
      expect(pow4(2)).to.equal(16)
      expect(pow4(3)).to.equal(81)
    })

    it('has working pow5', () => {
      expect(pow5(1)).to.equal(1)
      expect(pow5(2)).to.equal(32)
      expect(pow5(3)).to.equal(243)
    })

    it('has working pow6', () => {
      expect(pow6(1)).to.equal(1)
      expect(pow6(2)).to.equal(64)
      expect(pow6(3)).to.equal(729)
    })

    it('has working pow7', () => {
      expect(pow7(1)).to.equal(1)
      expect(pow7(2)).to.equal(128)
      expect(pow7(3)).to.equal(2187)
    })

    it('has working pow8', () => {
      expect(pow8(1)).to.equal(1)
      expect(pow8(2)).to.equal(256)
      expect(pow8(3)).to.equal(6561)
    })
  })

  describe('int32_isPow2', () => {
    it('returns true for power of two', () => {
      expect(int32_isPow2(1)).to.equal(true)
      expect(int32_isPow2(2)).to.equal(true)
      expect(int32_isPow2(4)).to.equal(true)
      expect(int32_isPow2(8)).to.equal(true)
      expect(int32_isPow2(16)).to.equal(true)
      expect(int32_isPow2(32)).to.equal(true)
      expect(int32_isPow2(64)).to.equal(true)
      expect(int32_isPow2(65536)).to.equal(true)
      expect(int32_isPow2(0x10000000)).to.equal(true)
    })

    it('returns false for 0', () => {
      expect(int32_isPow2(0)).to.equal(false)
    })

    it('returns false for non power of two', () => {
      expect(int32_isPow2(-1)).to.equal(false)
      expect(int32_isPow2(-2)).to.equal(false)
      expect(int32_isPow2(3)).to.equal(false)
      expect(int32_isPow2(5)).to.equal(false)
      expect(int32_isPow2(9)).to.equal(false)
      expect(int32_isPow2(53434)).to.equal(false)
    })

    it('returns false for NaN', () => {
      expect(int32_isPow2(NaN)).to.equal(false)
    })
  })

  describe('isPow2', () => {
    it('returns true for power of two', () => {
      expect(isPow2(1)).to.equal(true)
      expect(isPow2(2)).to.equal(true)
      expect(isPow2(4)).to.equal(true)
      expect(isPow2(8)).to.equal(true)
      expect(isPow2(16)).to.equal(true)
      expect(isPow2(32)).to.equal(true)
      expect(isPow2(64)).to.equal(true)
      expect(isPow2(65536)).to.equal(true)
      expect(isPow2(0x10000000)).to.equal(true)
    })

    it('returns false for 0', () => {
      expect(isPow2(0)).to.equal(false)
    })

    it('returns false for non power of two', () => {
      expect(isPow2(-1)).to.equal(false)
      expect(isPow2(-2)).to.equal(false)
      expect(isPow2(3)).to.equal(false)
      expect(isPow2(5)).to.equal(false)
      expect(isPow2(9)).to.equal(false)
      expect(isPow2(53434)).to.equal(false)
    })

    it('returns false for NaN', () => {
      expect(isPow2(NaN)).to.equal(false)
    })
  })

  describe('ceilPow2', () => {
    it('returns the next power of two', () => {
      expect(ceilPow2(0)).to.equal(0)
      expect(ceilPow2(1)).to.equal(1)
      expect(ceilPow2(1.5)).to.equal(2)
      expect(ceilPow2(2)).to.equal(2)
      expect(ceilPow2(3)).to.equal(4)
      expect(ceilPow2(3.5)).to.equal(4)
      expect(ceilPow2(4)).to.equal(4)
      expect(ceilPow2(12)).to.equal(16)
      expect(ceilPow2(400.33234)).to.equal(512)
      expect(ceilPow2(1000000000000)).to.equal(1099511627776)
    })
  })

  describe('floorPow2', () => {
    it('returns the next power of two', () => {
      expect(floorPow2(0)).to.equal(0)
      expect(floorPow2(1)).to.equal(1)
      expect(floorPow2(1.5)).to.equal(1)
      expect(floorPow2(2)).to.equal(2)
      expect(floorPow2(3)).to.equal(2)
      expect(floorPow2(3.5)).to.equal(2)
      expect(floorPow2(4)).to.equal(4)
      expect(floorPow2(12)).to.equal(8)
      expect(floorPow2(400.33234)).to.equal(256)
      expect(floorPow2(1000000000000)).to.equal(549755813888)
    })
  })

  describe('scalar functions', () => {
    it('has working isZero', () => {
      expect(isZero(NaN)).to.equal(false)
      expect(isZero(Infinity)).to.equal(false)
      expect(isZero(-1)).to.equal(false)
      expect(isZero(0)).to.equal(true)
      expect(isZero(1)).to.equal(false)
      expect(isZero(5)).to.equal(false)
      expect(isZero(MIN_VALUE)).to.equal(false)
      expect(isZero(-MIN_VALUE)).to.equal(false)
    })

    it('has working min', () => {
      expect(min(0, 1)).to.equal(0)
      expect(min(1, 0)).to.equal(0)
      expect(min(-13, 0)).to.equal(-13)
    })

    it('has working max', () => {
      expect(max(0, 1)).to.equal(1)
      expect(max(1, 0)).to.equal(1)
      expect(max(-13, 30)).to.equal(30)
    })

    it('has working num_negate', () => {
      expect(num_negate(123)).to.equal(-123)
    })

    it('has working num_inverse', () => {
      expect(num_inverse(1 / 2)).to.equal(2)
    })

    it('has working num_add', () => {
      expect(num_add(3, 5)).to.equal(8)
    })

    it('has working num_sub', () => {
      expect(num_sub(3, 5)).to.equal(-2)
    })

    it('has working num_mul', () => {
      expect(num_mul(2, 5)).to.equal(10)
    })

    it('has working num_div', () => {
      expect(num_div(10, 2)).to.equal(5)
    })

    it('has working num_mod', () => {
      expect(num_mod(5, 3)).to.equal(2)
    })

    it('has working int32_and', () => {
      expect(int32_and(0xfa, 0xaf)).to.equal(0xaa)
    })

    it('has working int32_or', () => {
      expect(int32_or(0xfa, 0xaf)).to.equal(0xff)
    })

    it('has working int32_xor', () => {
      expect(int32_xor(3, 1)).to.equal(2)
    })

    it('has working int32_not', () => {
      expect(int32_not(0xffffff00)).to.equal(0xff)
    })

    it('has working int32_shl', () => {
      expect(int32_shl(123, 3)).to.equal(123 << 3)
    })

    it('has working int32_shr', () => {
      expect(int32_shr(1232342352, 3)).to.equal(1232342352 >> 3)
      expect(int32_shr(0xffffffff, 3)).to.equal(0xffffffff >> 3)
    })

    it('has working uint32_shr', () => {
      expect(uint32_shr(0xffffffff, 8)).to.equal(0xffffff)
    })
  })
})
