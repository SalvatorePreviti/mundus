import { hypot, max, min, NEGATIVE_INFINITY, POSITIVE_INFINITY } from '@mundus/math'

export type Vec = Float32Array | Float64Array | number[]

export type VecOut = Vec

export interface VecIn extends ArrayLike<number>, Iterable<number> {}

/** Gets the magnitude of a vector */
export const vec_length = (vec: VecIn): number => hypot(...vec)

export const vec_add = <T extends VecOut>(out: T, a: VecIn, b: VecIn = out): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] + b[i]
  }
  return out
}

export const vec_scalarAdd = <T extends VecOut>(out: T, b: number, a: VecIn = out): T => {
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

export const vec_mul = <T extends VecOut>(out: T, a: VecIn, b: VecIn = out): T => {
  for (let i = 0; i < a.length; ++i) {
    out[i] = a[i] * b[i]
  }
  return out
}

export const vec_scale = <T extends VecOut>(out: T, b: number, a: VecIn = out): T => {
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

export const vec_divScalar = <T extends VecOut>(out: T, a: VecIn, b: number): T => vec_scale(out, 1 / b, a)

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

export const vec_maxComponent = (v: VecIn): number => {
  let result = NEGATIVE_INFINITY
  for (let i = 0; i < v.length; ++i) {
    result = max(result!, v[i])
  }
  return result
}

export const vec_minComponent = (v: VecIn): number => {
  let result = POSITIVE_INFINITY
  for (let i = 0; i < v.length; ++i) {
    result = min(result!, v[i])
  }
  return result
}
