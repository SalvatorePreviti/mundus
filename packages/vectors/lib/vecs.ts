import { array_copy } from '@mundus/core'
import { hypot, max, min } from '@mundus/math'

export type VecOut = Float32Array | Float64Array | number[]

export interface VecIn extends ArrayLike<number>, Iterable<number> {}

/** Gets the magnitude of a vector */
export const vec_length = (vec: VecIn) => hypot(...vec)

export const vec_add = <T extends VecOut>(out: T, a: VecIn, b: VecIn): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] + b[i]
  }
  return out
}

export const vec_addScalar = <T extends VecOut>(out: T, a: VecIn, b: number): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] + b
  }
  return out
}

export const vec_addScale = <T extends VecOut>(out: T, a: VecIn, b: VecIn, scale: number): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] + b[i] * scale
  }
  return out
}

export const vec_sub = <T extends VecOut>(out: T, a: VecIn, b: VecIn): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] - b[i]
  }
  return out
}

export const vec_subScalar = <T extends VecOut>(out: T, a: VecIn, b: number): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] - b
  }
  return out
}

export const vec_scalarSub = <T extends VecOut>(out: T, a: number, b: VecIn): T => {
  for (let i = 0; i < b.length; ++i) {
    out[i] = a - b[i]
  }
  return out
}

export const vec_mul = <T extends VecOut>(out: T, a: VecIn, b: VecIn): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] * b[i]
  }
  return out
}

export const vec_scale = <T extends VecOut>(out: T, a: VecIn, b: number): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] * b
  }
  return out
}

export const vec_div = <T extends VecOut>(out: T, a: VecIn, b: VecIn): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] / b[i]
  }
  return out
}

export const vec_scalarDiv = <T extends VecOut>(out: T, a: number, b: VecIn): T => {
  for (let i = 0; i < b.length; ++i) {
    out[i] = a / b[i]
  }
  return out
}

export const vec_mod = <T extends VecOut>(out: T, a: VecIn, b: VecIn): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] % b[i]
  }
  return out
}

export const vec_modScalar = <T extends VecOut>(out: T, a: VecIn, b: number): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] % b
  }
  return out
}

export const vec_scalarmod = <T extends VecOut>(out: T, a: number, b: VecIn): T => {
  for (let i = 0; i < b.length; ++i) {
    out[i] = a % b[i]
  }
  return out
}

export const vec_sum = (v: VecIn): number => {
  let result = 0
  for (let i = 0; i < v.length; ++i) {
    result += v[i]
  }
  return result
}

export const vec_maxComponent = (v: VecIn): number | undefined => {
  let result: number | undefined
  for (let i = 0; i < v.length; ++i) {
    result = i ? max(result!, v[i]) : v[0]
  }
  return result
}

export const vec_minComponent = (v: VecIn): number | undefined => {
  let result: number | undefined
  for (let i = 0; i < v.length; ++i) {
    result = i ? min(result!, v[i]) : v[0]
  }
  return result
}

/** Divides each component of a matrix by a scalar */
export const vec_divScalarSafe = <T extends VecOut>(out: T, matrix: VecIn, denominator: number): T =>
  denominator ? vec_scale(out, matrix, 1 / denominator) : array_copy(out, matrix)
