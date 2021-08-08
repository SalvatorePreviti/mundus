import { expect } from 'chai'
import {
  EPSILON,
  MAX_VALUE,
  MIN_VALUE,
  NaN,
  isNearlyEqualRelative,
  NEGATIVE_INFINITY,
  POSITIVE_INFINITY
} from '@mundus/math'

describe('@mudus/math isNearlyEqualRelative', () => {
  // Based on https://floating-point-gui.de/errors/comparison/

  it('behaves for medium integers', () => {
    expect(isNearlyEqualRelative(1000000, 1000000, 0.00001)).to.equal(true)
    expect(isNearlyEqualRelative(1000001, 1000000, 0.00001)).to.equal(true)
    expect(isNearlyEqualRelative(1000001, 1000000, 0.00001)).to.equal(true)

    expect(isNearlyEqualRelative(10000, 10001, 0.00001)).to.equal(false)
    expect(isNearlyEqualRelative(10000, 10001, 0.00001)).to.equal(false)
  })

  it('behaves for negative integers', () => {
    expect(isNearlyEqualRelative(-1000000, -1000001, 0.00001)).to.equal(true)
    expect(isNearlyEqualRelative(-1000001, -1000000, 0.00001)).to.equal(true)

    expect(isNearlyEqualRelative(-10000, -10001, 0.00001)).to.equal(false)
    expect(isNearlyEqualRelative(-10001, -10000, 0.00001)).to.equal(false)
  })

  it('behaves for numbers around 1', () => {
    expect(isNearlyEqualRelative(1.0000001, 1.0000002, 0.00001)).to.equal(true)
    expect(isNearlyEqualRelative(1.0000002, 1.0000001, 0.00001)).to.equal(true)

    expect(isNearlyEqualRelative(1.0002, 1.0001, 0.00001)).to.equal(false)
    expect(isNearlyEqualRelative(1.0001, 1.0002, 0.00001)).to.equal(false)
  })

  it('behaves for numbers around -1', () => {
    expect(isNearlyEqualRelative(-1.0000001, -1.0000002, 0.00001)).to.equal(true)
    expect(isNearlyEqualRelative(-1.0000002, -1.0000001, 0.00001)).to.equal(true)

    expect(isNearlyEqualRelative(-1.0002, -1.0001, 0.00001)).to.equal(false)
    expect(isNearlyEqualRelative(-1.0001, -1.0002, 0.00001)).to.equal(false)
  })

  it('behaves for numbers between 0 and 1', () => {
    expect(isNearlyEqualRelative(0.000000001000001, 0.000000001000002, 0.00001)).to.equal(true)
    expect(isNearlyEqualRelative(0.000000001000002, 0.000000001000001, 0.00001)).to.equal(true)

    expect(isNearlyEqualRelative(0.000000000001002, 0.000000000001001, 0.00001)).to.equal(false)
    expect(isNearlyEqualRelative(0.000000000001001, 0.000000000001002, 0.00001)).to.equal(false)
  })

  it('behaves for numbers between -1 and 0', () => {
    expect(isNearlyEqualRelative(-0.000000001000001, -0.000000001000002, 0.00001)).to.equal(true)
    expect(isNearlyEqualRelative(-0.000000001000002, -0.000000001000001, 0.00001)).to.equal(true)

    expect(isNearlyEqualRelative(-0.000000000001002, -0.000000000001001, 0.00001)).to.equal(false)
    expect(isNearlyEqualRelative(-0.000000000001001, -0.000000000001002, 0.00001)).to.equal(false)
  })

  it('returns true for small differences away from zero', () => {
    expect(isNearlyEqualRelative(0.3, 0.30000003, 0.00001)).to.equal(true)
    expect(isNearlyEqualRelative(0.30000003, 0.3, 0.00001)).to.equal(true)
    expect(isNearlyEqualRelative(-0.3, -0.30000003, 0.00001)).to.equal(true)
    expect(isNearlyEqualRelative(-0.30000003, -0.3, 0.00001)).to.equal(true)
  })

  it('behaves with numbers on opposite sides of zero', () => {
    expect(isNearlyEqualRelative(1.000000001, -1.0, 0.00001)).to.equal(false)
    expect(isNearlyEqualRelative(-1.0, 1.000000001, 0.00001)).to.equal(false)
    expect(isNearlyEqualRelative(-1.000000001, 1.0, 0.00001)).to.equal(false)
    expect(isNearlyEqualRelative(1.0, -1.000000001, 0.00001)).to.equal(false)
    expect(isNearlyEqualRelative(10000 * EPSILON, 10000 * -EPSILON, 0.00001)).to.equal(false)

    expect(isNearlyEqualRelative(10 * MIN_VALUE, 10 * -MIN_VALUE, 0.00001)).to.equal(true)
    expect(isNearlyEqualRelative(10 * EPSILON, 10 * -EPSILON, 0.00001)).to.equal(false)
  })

  it('behaves with comparisons involving zero', () => {
    expect(isNearlyEqualRelative(0.0, 0.0, 0.000001)).to.equal(true)
    expect(isNearlyEqualRelative(0.0, -0.0, 0.000001)).to.equal(true)
    expect(isNearlyEqualRelative(-0.0, -0.0, 0.000001)).to.equal(true)
    expect(isNearlyEqualRelative(0.00000001, 0.0, 0.000001)).to.equal(false)
    expect(isNearlyEqualRelative(0.0, 0.00000001, 0.000001)).to.equal(false)
    expect(isNearlyEqualRelative(-0.00000001, 0.0, 0.000001)).to.equal(false)
    expect(isNearlyEqualRelative(0.0, -0.00000001, 0.000001)).to.equal(false)

    expect(isNearlyEqualRelative(0.0, 1e-40, 0.01)).to.equal(true)
    expect(isNearlyEqualRelative(1e-40, 0.0, 0.01)).to.equal(true)

    expect(isNearlyEqualRelative(1e-10, 0.0, 0.000001)).to.equal(false)
    expect(isNearlyEqualRelative(0.0, 1e-10, 0.000001)).to.equal(false)

    expect(isNearlyEqualRelative(0.0, -1e-40, 0.1)).to.equal(true)
    expect(isNearlyEqualRelative(-1e-40, 0.0, 0.1)).to.equal(true)

    expect(isNearlyEqualRelative(-1e-23, 0.0, 0.00000001)).to.equal(false)
    expect(isNearlyEqualRelative(0.0, -1e-23, 0.00000001)).to.equal(false)
  })

  it('behaves with comparisons very close to zero', () => {
    expect(isNearlyEqualRelative(MIN_VALUE, MIN_VALUE, 0.00000001)).to.equal(true)
    expect(isNearlyEqualRelative(MIN_VALUE, -MIN_VALUE, 0.00000001)).to.equal(true)
    expect(isNearlyEqualRelative(-MIN_VALUE, MIN_VALUE, 0.00000001)).to.equal(true)
    expect(isNearlyEqualRelative(MIN_VALUE, 0, 0.00000001)).to.equal(true)
    expect(isNearlyEqualRelative(0, MIN_VALUE, 0.00000001)).to.equal(true)
    expect(isNearlyEqualRelative(-MIN_VALUE, 0, 0.00000001)).to.equal(true)
    expect(isNearlyEqualRelative(0, -MIN_VALUE, 0.00000001)).to.equal(true)

    expect(isNearlyEqualRelative(0.000000001, -MIN_VALUE, 0.00000001)).to.equal(false)
    expect(isNearlyEqualRelative(0.000000001, MIN_VALUE, 0.00000001)).to.equal(false)
    expect(isNearlyEqualRelative(MIN_VALUE, 0.000000001, 0.00000001)).to.equal(false)
    expect(isNearlyEqualRelative(-MIN_VALUE, 0.000000001, 0.00000001)).to.equal(false)
  })

  it('behaves with extreme values, no overflow issues', () => {
    expect(isNearlyEqualRelative(MAX_VALUE, MAX_VALUE, 0.00000001)).to.equal(true)
    expect(isNearlyEqualRelative(MAX_VALUE, -MAX_VALUE, 0.00000001)).to.equal(false)
    expect(isNearlyEqualRelative(-MAX_VALUE, MAX_VALUE, 0.00000001)).to.equal(false)
    expect(isNearlyEqualRelative(MAX_VALUE, MAX_VALUE / 2, 0.00000001)).to.equal(false)
    expect(isNearlyEqualRelative(MAX_VALUE, -MAX_VALUE / 2, 0.00000001)).to.equal(false)
    expect(isNearlyEqualRelative(-MAX_VALUE, MAX_VALUE / 2, 0.00000001)).to.equal(false)
  })

  it('behaves with infinities', () => {
    expect(isNearlyEqualRelative(POSITIVE_INFINITY, POSITIVE_INFINITY, 0.00000001)).to.equal(true)
    expect(isNearlyEqualRelative(NEGATIVE_INFINITY, NEGATIVE_INFINITY, 0.00000001)).to.equal(true)
    expect(isNearlyEqualRelative(NEGATIVE_INFINITY, POSITIVE_INFINITY, 0.00000001)).to.equal(false)
    expect(isNearlyEqualRelative(POSITIVE_INFINITY, MAX_VALUE, 0.00000001)).to.equal(false)
    expect(isNearlyEqualRelative(NEGATIVE_INFINITY, -MAX_VALUE, 0.00000001)).to.equal(false)
  })

  it('behaves with NaN', () => {
    expect(isNearlyEqualRelative(NaN, NaN))
    expect(isNearlyEqualRelative(NaN, 0.0))
    expect(isNearlyEqualRelative(-0.0, NaN))
    expect(isNearlyEqualRelative(NaN, -0.0))
    expect(isNearlyEqualRelative(0.0, NaN))
    expect(isNearlyEqualRelative(NaN, POSITIVE_INFINITY))
    expect(isNearlyEqualRelative(POSITIVE_INFINITY, NaN))
    expect(isNearlyEqualRelative(NaN, NEGATIVE_INFINITY))
    expect(isNearlyEqualRelative(NEGATIVE_INFINITY, NaN))
    expect(isNearlyEqualRelative(NaN, MAX_VALUE))
    expect(isNearlyEqualRelative(MAX_VALUE, NaN))
    expect(isNearlyEqualRelative(NaN, -MAX_VALUE))
    expect(isNearlyEqualRelative(-MAX_VALUE, NaN))
    expect(isNearlyEqualRelative(NaN, MIN_VALUE))
    expect(isNearlyEqualRelative(MIN_VALUE, NaN))
    expect(isNearlyEqualRelative(NaN, -MIN_VALUE))
    expect(isNearlyEqualRelative(-MIN_VALUE, NaN))
  })
})
