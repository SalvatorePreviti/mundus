import { cos, sin } from '@mundus/math'
import { MAT4_TEMP$ } from './mat4'
import {
  vec_add,
  vec_addScale,
  vec_divScalar,
  vec_magnitude,
  vec_maxComponent,
  vec_minComponent,
  vec_mul,
  vec_scalarAdd,
  vec_scalarDiv,
  vec_scalarSub,
  vec_scale,
  vec_sub,
  vec_subScalar,
  vec_sum
} from './vecs'

export type Mat2 = Float32Array | Float64Array | number[]

export type Mat2Out = Float32Array | Float64Array | number[]

export interface Mat2In extends ArrayLike<number>, Iterable<number> {}

/** Index of m00 in a 2x2 matrix */
export const MAT2_00 = 0

/** Index of m01 in a 2x2 matrix */
export const MAT2_01 = 1

/** Index of m10 in a 2x2 matrix */
export const MAT2_10 = 2

/** Index of m11 in a 2x2 matrix */
export const MAT2_11 = 3

/** Gets the magnitude of a matrix */
export const mat2_frob: (vec: Mat2In) => number = vec_magnitude

/** out = a + b, component by component */
export const mat2_add: <T extends Mat2Out>(out: T, a: Mat2In, b?: Mat2In) => T = vec_add

/** out = a + b, component by component */
export const mat2_scalarAdd: <T extends Mat2Out>(out: T, b: number, a?: Mat2In) => T = vec_scalarAdd

/** out = a + b * scale, component by component */
export const mat2_addScale: <T extends Mat2Out>(out: T, a: Mat2In, b: Mat2In, scale: number) => T = vec_addScale

/** out = a - b, component by component */
export const mat2_sub: <T extends Mat2Out>(out: T, a: Mat2In, b: Mat2In) => T = vec_sub

/** out = a - b, component by component */
export const mat2_subScalar: <T extends Mat2Out>(out: T, a: Mat2In, b: number) => T = vec_subScalar

/** out = a - b, component by component */
export const mat2_scalarSub: <T extends Mat2Out>(out: T, a: number, b: Mat2In) => T = vec_scalarSub

/** out = a * b, component by component */
export const mat2_mulComponents: <T extends Mat2Out>(out: T, a: Mat2In, b?: Mat2In) => T = vec_mul

/** out = a * b, component by component */
export const mat2_scalarMul: <T extends Mat2Out>(out: T, b: number, a?: Mat2In) => T = vec_scale

/** out = a / b, component by component */
export const mat2_scalarDiv: <T extends Mat2Out>(out: T, b: number, a: Mat2In) => T = vec_scalarDiv

/** out = a / b, component by component */
export const mat2_divScalar: <T extends Mat2Out>(out: T, a: Mat2In, b: number) => T = vec_divScalar

/** Sums all components of a matrix together */
export const mat2_sum: (v: Mat2In) => number = vec_sum

/** Gets the smaller component of a matrix */
export const mat2_minComponent: (v: Mat2In) => number | undefined = vec_minComponent

/** Gets the largest component of a matrix */
export const mat2_maxComponent: (v: Mat2In) => number | undefined = vec_maxComponent

export interface Mat2SetFunction {
  <T extends Mat2Out>(out?: T, m00?: number, m01?: number, m10?: number, m11?: number): T
}

// eslint-disable-next-line no-new-func
export const mat2_set: Mat2SetFunction = (out: any = new Float32Array(4), m00 = 1, m01 = 0, m10 = 0, m11 = 1): any => {
  out[0] = m00
  out[1] = m01
  out[2] = m10
  out[3] = m11
  return out
}

/** Creates a new 4x4 matrix backed by 32 bit floating points */
export const mat2_newFloat32Array = /* @__PURE__ */ (): Float32Array => mat2_set(new Float32Array(16))

/** Creates a new 4x4 matrix backed by 64 bit floating points */
export const mat2_newFloat64Array = /* @__PURE__ */ (): Float64Array => mat2_set(new Float64Array(16))

/** Creates a new 4x4 matrix backed by a regular array */
export const mat2_newArray = /* @__PURE__ */ (): number[] => mat2_set(new Array(16).fill(0))

/** Creates a new 4x4 matrix backed by 32 bit floating points */
export const mat2_new = mat2_newFloat32Array

/** Transpose a 2x2 matrix */
export const mat2_transpose = <T extends Mat2Out>(out: T, a: Mat2In = out): T => mat2_set(out, a[0], a[2], a[1], a[3])

/** Adjugate of a 2x2 matrix */
export const mat2_adjoint = <T extends Mat2Out>(out: T, a: Mat2In = out): T | null =>
  mat2_set(out, a[3], -a[1], -a[2], a[0])

/** Calculates the determinant of a Mat2 */
export const mat2_determinant = (a: Mat2In): number => a[0] * a[3] - a[2] * a[1]

/** Multiplies two 2x2 matrices */
export const mat2_mul = <T extends Mat2Out>(out: T | undefined, a: Mat2In, b: Mat2In): T => {
  const a0 = a[0]
  const a1 = a[1]
  const a2 = a[2]
  const a3 = a[3]
  const b0 = b[0]
  const b1 = b[1]
  const b2 = b[2]
  const b3 = b[3]
  return mat2_set(out, a0 * b0 + a2 * b1, a1 * b0 + a3 * b1, a0 * b2 + a2 * b3, a1 * b2 + a3 * b3)
}

export const mat2_fromRotation = <T extends Mat2Out>(out: T, angleInRadians: number): T => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  return mat2_set(out, c, s, -s, c)
}

/** Rotates a 2x2 matrix by the given angle */
export const mat2_rotate = <T extends Mat2Out>(out: T, a: Mat2In, angleInRadians: number): T =>
  mat2_mul(out, a, mat2_fromRotation(MAT4_TEMP$, angleInRadians))

/** Scales a 2x2 matrix */
export const mat2_scale = <T extends Mat2Out>(out: T | undefined, a: Mat2In, scaleX: number, scaleY: number): T =>
  mat2_set(out, a[0] * scaleX, a[1] * scaleX, a[2] * scaleY, a[3] * scaleY)

/** Makes a scaling 2x2 matrix */
export const mat2_fromScaling = <T extends Mat2Out>(out: T, x: number, y: number): T => mat2_set(out, x, 0, 0, y)

/** Invert a 2x2 matrix */
export const mat2_invert = <T extends Mat2Out>(out: T, a: Mat2In = out, determinant?: number): T | null => {
  const a0 = a[0]
  const a1 = a[1]
  const a2 = a[2]
  const a3 = a[3]
  determinant ||= a0 * a3 - a2 * a1
  return determinant ? mat2_scalarMul(mat2_set(out, a3, -a1, -a2, a0), 1 / determinant) : null
}
