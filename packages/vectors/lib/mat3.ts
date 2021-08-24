import { array_fromLength } from '@mundus/core'
import { cos, sin } from '@mundus/math'

export type Mat3 = Float32Array | Float64Array | number[]

export type Mat3Out = Mat3

export interface Mat3In extends ArrayLike<number>, Iterable<number> {}

export const MAT3_SIZE = 9

/** Index of m00 in a 3x3 matrix */
export const MAT3_00 = 0

/** Index of m01 in a 3x3 matrix */
export const MAT3_01 = 1

/** Index of m02 in a 3x3 matrix */
export const MAT3_02 = 2

/** Index of m10 in a 3x3 matrix */
export const MAT3_10 = 3

/** Index of m11 in a 3x3 matrix */
export const MAT3_11 = 4

/** Index of m12 in a 3x3 matrix */
export const MAT3_12 = 5

/** Index of m20 in a 3x3 matrix */
export const MAT3_20 = 6

/** Index of m21 in a 3x3 matrix */
export const MAT3_21 = 7

/** Index of m22 in a 3x3 matrix */
export const MAT3_22 = 8

export interface Mat3SetFunction {
  <T extends Mat3Out>(
    out: T,
    m00?: number,
    m01?: number,
    m02?: number,
    m10?: number,
    m11?: number,
    m12?: number,
    m20?: number,
    m21?: number,
    m22?: number
  ): T
}

export interface Mat3IdentityFunction {
  <T extends Mat3Out>(out: T): T
}

// eslint-disable-next-line no-new-func
export const mat3_set = new Function(
  `return(o,${array_fromLength(9, (i) => `i${i}=${+!(i % 4)}`)})=>(${array_fromLength(9, (i) => `o[${i}]=i${i}`)},o)`
)() as Mat3SetFunction

/** Sets the main diagonal components */
export const mat3_setDiagonal = <T extends Mat3Out>(out: T, x: number = 1, y: number = 1, z: number = 1): T => {
  out[0] = x
  out[5] = y
  out[10] = z
  return out
}

/** Creates a new 3x3 matrix backed by 32 bit floating points */
export const mat3_newFloat32Array = /* @__PURE__ */ (): Float32Array => mat3_setDiagonal(new Float32Array(16))

/** Creates a new 3x3 matrix backed by 64 bit floating points */
export const mat3_newFloat64Array = /* @__PURE__ */ (): Float64Array => mat3_setDiagonal(new Float64Array(16))

/** Creates a new 3x3 matrix backed by a regular array */
export const mat3_newArray = /* @__PURE__ */ (): number[] => mat3_setDiagonal(new Array(16).fill(0))

/** Creates a new 3x3 matrix backed by 32 bit floating points */
export const mat3_new = mat3_newFloat32Array

/** Makes an identity matrix. */
export const mat3_identity: Mat3IdentityFunction = /* @__PURE__ */ mat3_set

export const mat3_fromEulerZYX = <T extends Mat3Out>(out: T, x: number, y: number, z: number): T => {
  const a = cos(x)
  const b = sin(x)
  const c = cos(y)
  const d = sin(y)
  const e = cos(z)
  const f = sin(z)
  const ae = a * e
  const af = a * f
  const be = b * e
  const bf = b * f
  return mat3_set(out, c * e, c * f, -d, be * d - af, bf * d + ae, b * c, ae * d + bf, af * d - be, a * c)
}

export const mat3_fromEulerXYZ = <T extends Mat3Out>(out: T, x: number, y: number, z: number): T => {
  const a = cos(x)
  const b = sin(x)
  const c = cos(y)
  const d = sin(y)
  const e = cos(z)
  const f = sin(z)
  const ae = a * e
  const af = a * f
  const be = b * e
  const bf = b * f
  return mat3_set(out, c * e, af + be * d, bf - ae * d, -c * f, ae - bf * d, be + af * d, d, -b * c, a * c)
}
