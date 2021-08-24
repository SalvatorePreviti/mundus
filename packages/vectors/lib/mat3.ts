import { array_fromLength } from '@mundus/core'
import { cos, sin } from '@mundus/math'
import {
  Vec3In,
  Vec3Out,
  vec3_fromArray,
  vec3_normalize,
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
  vec_sum,
  VEC_TEMP$0,
  vec_write
} from '..'
import { Mat2In } from './mat2'
import { Mat4In, Mat4Out, mat4_identity } from './mat4'
import { QuatIn } from './quat'

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

/** Gets the magnitude of a matrix */
export const mat3_frob: (vec: Mat3In) => number = vec_magnitude

/** out = a + b, component by component */
export const mat3_add: <T extends Mat3Out>(out: T, a: Mat3In, b?: Mat3In) => T = vec_add

/** out = a + b, component by component */
export const mat3_scalarAdd: <T extends Mat3Out>(out: T, b: number, a?: Mat3In) => T = vec_scalarAdd

/** out = a + b * scale, component by component */
export const mat3_addScale: <T extends Mat3Out>(out: T, a: Mat3In, b: Mat3In, scale: number) => T = vec_addScale

/** out = a - b, component by component */
export const mat3_sub: <T extends Mat3Out>(out: T, a: Mat3In, b: Mat3In) => T = vec_sub

/** out = a - b, component by component */
export const mat3_subScalar: <T extends Mat3Out>(out: T, a: Mat3In, b: number) => T = vec_subScalar

/** out = a - b, component by component */
export const mat3_scalarSub: <T extends Mat3Out>(out: T, a: number, b: Mat3In) => T = vec_scalarSub

/** out = a * b, component by component */
export const mat3_mulComponents: <T extends Mat3Out>(out: T, a: Mat3In, b?: Mat3In) => T = vec_mul

/** out = a * b, component by component */
export const mat3_scalarMul: <T extends Mat3Out>(out: T, b: number, a?: Mat3In) => T = vec_scale

/** out = a / b, component by component */
export const mat3_scalarDiv: <T extends Mat3Out>(out: T, b: number, a: Mat3In) => T = vec_scalarDiv

/** out = a / b, component by component */
export const mat3_divScalar: <T extends Mat3Out>(out: T, a: Mat3In, b: number) => T = vec_divScalar

/** Sums all components of a matrix together */
export const mat3_sum: (v: Mat3Out) => number = vec_sum

/** Gets the smaller component of a matrix */
export const mat3_minComponent: (v: Mat3Out) => number = vec_minComponent

/** Gets the largest component of a matrix */
export const mat3_maxComponent: (v: Mat3Out) => number = vec_maxComponent

export const mat3_write = vec_write

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
export const mat3_newFloat32Array = /* @__PURE__ */ (): Float32Array => mat3_setDiagonal(new Float32Array(9))

/** Creates a new 3x3 matrix backed by 64 bit floating points */
export const mat3_newFloat64Array = /* @__PURE__ */ (): Float64Array => mat3_setDiagonal(new Float64Array(9))

/** Creates a new 3x3 matrix backed by a regular array */
export const mat3_newArray = /* @__PURE__ */ (): number[] => mat3_setDiagonal(new Array(9).fill(0))

/** Creates a new 3x3 matrix backed by 32 bit floating points */
export const mat3_new = mat3_newFloat32Array

/** Makes an identity matrix. */
export const mat3_identity: Mat3IdentityFunction = /* @__PURE__ */ mat3_set

export const mat3_fromMat4 = <T extends Mat3Out>(out: T, m: Mat4In): T =>
  mat3_set(out, m[0], m[1], m[2], m[4], m[5], m[6], m[8], m[9], m[10])

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

/** Gets basis X axis */
export const mat3_getBasisX = <R extends Vec3Out>(out: R, matrix: Mat3In): R => vec3_fromArray(out, matrix, 0)

/** Gets basis Y axis */
export const mat3_getBasisY = <R extends Vec3Out>(out: R, matrix: Mat3In): R => vec3_fromArray(out, matrix, 4)

/** Gets basis Z axis */
export const mat3_getBasisZ = <R extends Vec3Out>(out: R, matrix: Mat3In): R => vec3_fromArray(out, matrix, 8)

/** Gets basis X, Y, Z axes */
export const mat3_getBasis = (outXAxis: Vec3Out, outYAxis: Vec3Out, outZAxis: Vec3Out, matrix: Mat3In): void => {
  mat3_getBasisX(outXAxis, matrix)
  mat3_getBasisY(outYAxis, matrix)
  mat3_getBasisZ(outZAxis, matrix)
}

export const mat3_translate = <T extends Mat3Out>(out: T, a: Mat3In, x: number, y: number): T => {
  const a00 = a[0]
  const a01 = a[1]
  const a02 = a[2]
  const a10 = a[3]
  const a11 = a[4]
  const a12 = a[5]
  out[0] = a00
  out[1] = a01
  out[2] = a02
  out[3] = a10
  out[4] = a11
  out[5] = a12
  out[6] = x * a00 + y * a10 + a[6]
  out[7] = x * a01 + y * a11 + a[7]
  out[8] = x * a02 + y * a12 + a[8]
  return out
}

export const mat3_scale = <T extends Mat3Out>(out: T, a: Mat3In, x: number, y: number): T => {
  out[0] *= x * a[0]
  out[1] *= x * a[1]
  out[2] *= x * a[2]
  out[3] *= y * a[3]
  out[4] *= y * a[4]
  out[5] *= y * a[5]
  out[6] = a[6]
  out[7] = a[7]
  out[8] = a[8]
  return out
}

export const mat3_setUVTransform = <T extends Mat3Out>(
  out: T,
  tx: number,
  ty: number,
  sx: number,
  sy: number,
  rotation: number,
  cx: number,
  cy: number
): T => {
  const c = cos(rotation)
  const s = sin(rotation)
  return mat3_set(
    out,
    sx * c,
    sx * s,
    -sx * (c * cx + s * cy) + cx + tx,
    -sy * s,
    sy * c,
    -sy * (-s * cx + c * cy) + cy + ty
  )
}

export const mat3_transpose = <T extends Mat3Out>(out: T, m: Mat3In): T =>
  mat3_set(out, m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8])

export const mat3_invert = <T extends Mat3Out>(out: T, a: Mat3In): T | null => {
  const a00 = a[0]
  const a01 = a[1]
  const a02 = a[2]
  const a10 = a[3]
  const a11 = a[4]
  const a12 = a[5]
  const a20 = a[6]
  const a21 = a[7]
  const a22 = a[8]
  const b01 = a22 * a11 - a12 * a21
  const b11 = -a22 * a10 + a12 * a20
  const b21 = a21 * a10 - a11 * a20
  const determinant = a00 * b01 + a01 * b11 + a02 * b21
  return determinant
    ? mat3_set(
        out,
        b01 / determinant,
        (-a22 * a01 + a02 * a21) / determinant,
        (a12 * a01 - a02 * a11) / determinant,
        b11 / determinant,
        (a22 * a00 - a02 * a20) / determinant,
        (-a12 * a00 + a02 * a10) / determinant,
        b21 / determinant,
        (-a21 * a00 + a01 * a20) / determinant,
        (a11 * a00 - a01 * a10) / determinant
      )
    : null
}

export const mat3_determinant = (a: Mat3In): number => {
  const a00 = a[0]
  const a01 = a[1]
  const a02 = a[2]
  const a10 = a[3]
  const a11 = a[4]
  const a12 = a[5]
  const a20 = a[6]
  const a21 = a[7]
  const a22 = a[8]
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20)
}

export const mat3_rotate = <T extends Mat3Out>(out: T, a: Mat3In, angleInRadians: number): T => {
  const a00 = a[0]
  const a01 = a[1]
  const a02 = a[2]
  const a10 = a[3]
  const a11 = a[4]
  const a12 = a[5]
  const a20 = a[6]
  const a21 = a[7]
  const a22 = a[8]
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  return mat3_set(
    out,
    c * a00 + s * a10,
    c * a01 + s * a11,
    c * a02 + s * a12,
    c * a10 - s * a00,
    c * a11 - s * a01,
    c * a12 - s * a02,
    a20,
    a21,
    a22
  )
}

export const mat3_setBasis = <T extends Mat3Out>(out: T, xAxis: Vec3In, yAxis: Vec3In, zAxis: Vec3In): T =>
  mat3_set(out, xAxis.x, yAxis.x, zAxis.x, xAxis.y, yAxis.y, zAxis.y, xAxis.z, yAxis.z, zAxis.z)

/** Makes a rotation matrix given an angle and an axis. */
export const mat3_fromAxisAngle = <T extends Mat3Out>(out: T, axis: Vec3In, angleInRadians: number): T => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  const { x, y, z } = vec3_normalize(VEC_TEMP$0, axis)
  const t = 1 - c
  const xt = x * t
  const yt = y * t
  const zt = z * t
  const xs = x * s
  const ys = y * s
  const zs = z * s
  return mat3_set(
    out,
    x * xt + c,
    y * xt + zs,
    z * xt - ys,
    x * yt - zs,
    y * yt + c,
    z * yt + xs,
    x * zt + ys,
    y * zt - xs,
    z * zt + c
  )
}

export const mat3_mul = <T extends Mat4Out>(out: T, a: Mat4In, b: Mat4In): T => {
  const a00 = a[0]
  const a01 = a[1]
  const a02 = a[2]
  const a10 = a[3]
  const a11 = a[4]
  const a12 = a[5]
  const a20 = a[6]
  const a21 = a[7]
  const a22 = a[8]

  const b00 = b[0]
  const b01 = b[1]
  const b02 = b[2]
  const b10 = b[3]
  const b11 = b[4]
  const b12 = b[5]
  const b20 = b[6]
  const b21 = b[7]
  const b22 = b[8]

  return mat3_set(
    out,
    b00 * a00 + b01 * a10 + b02 * a20,
    b00 * a01 + b01 * a11 + b02 * a21,
    b00 * a02 + b01 * a12 + b02 * a22,
    b10 * a00 + b11 * a10 + b12 * a20,
    b10 * a01 + b11 * a11 + b12 * a21,
    b10 * a02 + b11 * a12 + b12 * a22,
    b20 * a00 + b21 * a10 + b22 * a20,
    b20 * a01 + b21 * a11 + b22 * a21,
    b20 * a02 + b21 * a12 + b22 * a22
  )
}

export const mat3_fromRotation = <T extends Mat3Out>(out: T, angleInRadians: number): T => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  return mat3_set(out, c, s, 0, -s, c)
}

export const mat3_fromTranslation = <T extends Mat3Out>(out: T, x: number, y: number): T => {
  mat4_identity(out)
  out[6] = x
  out[7] = y
  return out
}

export const mat3_fromScaling = <T extends Mat3Out>(out: T, x: number, y: number): T => {
  mat4_identity(out)
  out[0] = x
  out[4] = y
  return out
}

export const mat3_fromMat2 = <T extends Mat3Out>(out: T, a: Mat2In): T =>
  mat3_set(out, a[0], a[1], 0, a[2], a[3], 0, a[4], a[5])

export const mat3_fromQuaternion = <T extends Mat3Out>(out: T, { x, y, z, w }: QuatIn): T => {
  const x2 = x + x
  const y2 = y + y
  const z2 = z + z
  const xx = x * x2
  const yx = y * x2
  const yy = y * y2
  const zx = z * x2
  const zy = z * y2
  const zz = z * z2
  const wx = w * x2
  const wy = w * y2
  const wz = w * z2
  return mat3_set(out, 1 - yy - zz, yx + wz, zx - wy, yx - wz, 1 - xx - zz, zy + wx, zx + wy, zy - wx, 1 - xx - yy)
}

export const mat3_projection = <T extends Mat3Out>(out: T, width: number, height: number): T => {
  mat3_identity(out)
  out[0] = 2 / width
  out[4] = -2 / height
  out[6] = -1
  out[7] = 1
  return out
}
