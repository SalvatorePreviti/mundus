// Matrix library - some functions are based on gl-matrix

/* eslint-disable no-new-func */

import { array_fromLength, array_from } from '@mundus/core'
import { acosSafe, cos, max, sin, tan } from '@mundus/math'
import {
  vec3_sub,
  Vec2In,
  Vec2Out,
  vec2_set,
  Vec3In,
  Vec3Out,
  vec3_cross,
  vec3_dot,
  vec3_normalize,
  vec3_set,
  Vec4In,
  Vec4Out,
  vec4_set,
  Vec3,
  vec3_fromArray,
  vec3_length,
  VEC_ZERO,
  VEC_UNIT_Y,
  VEC_TEMP$0,
  VEC_TEMP$1,
  VEC_TEMP$2,
  VEC_ONE,
  vec3_scale
} from './vec-234'
import type { QuatIn } from './quat'

import {
  vec_add,
  vec_scalarAdd,
  vec_addScale,
  vec_magnitude,
  vec_maxComponent,
  vec_minComponent,
  vec_mul,
  vec_scalarSub,
  vec_scale,
  vec_sub,
  vec_subScalar,
  vec_sum,
  vec_scalarDiv,
  vec_divScalar,
  vec_write
} from './vecs'

export type Mat4 = Float32Array | Float64Array | number[]

export type Mat4Out = Float32Array | Float64Array | number[]

export interface Mat4In extends ArrayLike<number>, Iterable<number> {}

/** Index of m21 in a 3x3 matrix */
export const MAT3_21 = 7

/** Index of m22 in a 3x3 matrix */
export const MAT3_22 = 8

/** Index of m00 in a 4x4 matrix */
export const MAT4_00 = 0

/** Index of m01 in a 4x4 matrix */
export const MAT4_01 = 1

/** Index of m02 in a 4x4 matrix */
export const MAT4_02 = 2

/** Index of m03 in a 4x4 matrix */
export const MAT4_03 = 3

/** Index of m10 in a 4x4 matrix */
export const MAT4_10 = 4

/** Index of m11 in a 4x4 matrix */
export const MAT4_11 = 5

/** Index of m12 in a 4x4 matrix */
export const MAT4_12 = 6

/** Index of m13 in a 4x4 matrix */
export const MAT4_13 = 7

/** Index of m20 in a 4x4 matrix */
export const MAT4_20 = 8

/** Index of m21 in a 4x4 matrix */
export const MAT4_21 = 9

/** Index of m22 in a 4x4 matrix */
export const MAT4_22 = 10

/** Index of m23 in a 4x4 matrix */
export const MAT4_23 = 11

/** Index of m30 in a 4x4 matrix */
export const MAT4_30 = 12

/** Index of m31 in a 4x4 matrix */
export const MAT4_31 = 13

/** Index of m32 in a 4x4 matrix */
export const MAT4_32 = 14

/** Index of m33 in a 4x4 matrix */
export const MAT4_33 = 15

/** Gets the magnitude of a matrix */
export const mat4_frob: (vec: Mat4In) => number = vec_magnitude

/** out = a + b, component by component */
export const mat4_add: <T extends Mat4Out>(out: T, a: Mat4In, b?: Mat4In) => T = vec_add

/** out = a + b, component by component */
export const mat4_scalarAdd: <T extends Mat4Out>(out: T, b: number, a?: Mat4In) => T = vec_scalarAdd

/** out = a + b * scale, component by component */
export const mat4_addScale: <T extends Mat4Out>(out: T, a: Mat4In, b: Mat4In, scale: number) => T = vec_addScale

/** out = a - b, component by component */
export const mat4_sub: <T extends Mat4Out>(out: T, a: Mat4In, b: Mat4In) => T = vec_sub

/** out = a - b, component by component */
export const mat4_subScalar: <T extends Mat4Out>(out: T, a: Mat4In, b: number) => T = vec_subScalar

/** out = a - b, component by component */
export const mat4_scalarSub: <T extends Mat4Out>(out: T, a: number, b: Mat4In) => T = vec_scalarSub

/** out = a * b, component by component */
export const mat4_mulComponents: <T extends Mat4Out>(out: T, a: Mat4In, b?: Mat4In) => T = vec_mul

/** out = a * b, component by component */
export const mat4_scalarMul: <T extends Mat4Out>(out: T, b: number, a?: Mat4In) => T = vec_scale

/** out = a / b, component by component */
export const mat4_scalarDiv: <T extends Mat4Out>(out: T, b: number, a: Mat4In) => T = vec_scalarDiv

/** out = a / b, component by component */
export const mat4_divScalar: <T extends Mat4Out>(out: T, a: Mat4In, b: number) => T = vec_divScalar

/** Sums all components of a matrix together */
export const mat4_sum: (v: Mat4In) => number = vec_sum

/** Gets the smaller component of a matrix */
export const mat4_minComponent: (v: Mat4In) => number = vec_minComponent

/** Gets the largest component of a matrix */
export const mat4_maxComponent: (v: Mat4In) => number = vec_maxComponent

export const mat4_write = vec_write

/** Transforms a Vec3 with a 4x4 matrix */
export const mat4_transform2D = <R extends Vec2Out = Vec2Out>(out: R, m: Mat4In, x: number, y: number): R =>
  vec2_set(out, m[0] * x + m[4] * y + m[12], m[1] * x + m[5] * y + m[13])

/** Transforms a Vec3 with a 4x4 matrix */
export const mat4_transform3D = <R extends Vec3Out = Vec3Out>(out: R, m: Mat4In, x: number, y: number, z: number): R =>
  vec3_scale(
    vec3_set(
      out,
      m[0] * x + m[4] * y + m[8] * z + m[12],
      m[1] * x + m[5] * y + m[9] * z + m[13],
      m[2] * x + m[6] * y + m[10] * z + m[14]
    ),
    1 / (m[3] * x + m[7] * y + m[11] * z + m[15] || 1)
  )

/** Transforms a Vec4 with a 4x4 matrix */
export const mat4_transform4D = <R extends Vec4Out = Vec4Out>(
  out: R,
  m: Mat4In,
  x: number,
  y: number,
  z: number,
  w: number
): R =>
  vec4_set(
    out,
    m[0] * x + m[4] * y + m[8] * z + m[12] * w,
    m[1] * x + m[5] * y + m[9] * z + m[13] * w,
    m[2] * x + m[6] * y + m[10] * z + m[14] * w,
    m[3] * x + m[7] * y + m[11] * z + m[15] * w
  )

/** Transforms a Vec3 with a 4x4 matrix */
export const mat4_transformVec2 = <R extends Vec2Out = Vec2Out>(out: R, m: Mat4In, v: Vec2In = out): R =>
  mat4_transform2D(out, m, v.x, v.y)

export const mat4_transformVec3 = <R extends Vec3Out = Vec3Out>(out: R, m: Mat4In, v: Vec3In = out): R =>
  mat4_transform3D(out, m, v.x, v.y, v.z)

/** Transforms a Vec4 with a 4x4 matrix */
export const mat4_transformVec4 = <R extends Vec4Out = Vec4Out>(out: R, m: Mat4In, v: Vec4In = out): R =>
  mat4_transform4D(out, m, v.x, v.y, v.z, v.w)

export interface Mat4IdentityFunction {
  <T extends Mat4Out>(out: T): T
}

export interface Mat4SetFunction {
  <T extends Mat4Out>(
    out: T,
    m00?: number,
    m01?: number,
    m02?: number,
    m03?: number,
    m10?: number,
    m11?: number,
    m12?: number,
    m13?: number,
    m20?: number,
    m21?: number,
    m22?: number,
    m23?: number,
    m30?: number,
    m31?: number,
    m32?: number,
    m33?: number
  ): T
}

// eslint-disable-next-line no-new-func
export const mat4_set = new Function(
  `return(o=,${array_fromLength(16, (i) => `i${i}=${+!(i % 5)}`)})=>(${array_fromLength(16, (i) => `o[${i}]=i${i}`)},o)`
)() as Mat4SetFunction

/** Sets the main diagonal components */
export const mat4_setDiagonal = <T extends Mat4Out>(
  out: T,
  x: number = 1,
  y: number = 1,
  z: number = 1,
  w: number = 1
): T => {
  out[0] = x
  out[5] = y
  out[10] = z
  out[15] = w
  return out
}

/** Creates a new 4x4 matrix backed by 32 bit floating points */
export const mat4_newFloat32Array = /* @__PURE__ */ (): Float32Array => mat4_setDiagonal(new Float32Array(16))

/** Creates a new 4x4 matrix backed by 64 bit floating points */
export const mat4_newFloat64Array = /* @__PURE__ */ (): Float64Array => mat4_setDiagonal(new Float64Array(16))

/** Creates a new 4x4 matrix backed by a regular array */
export const mat4_newArray = /* @__PURE__ */ (): number[] => mat4_setDiagonal(new Array(16).fill(0))

/** Creates a new 4x4 matrix backed by 32 bit floating points */
export const mat4_new = mat4_newFloat32Array

/** Makes an identity matrix. */
export const mat4_identity: Mat4IdentityFunction = /* @__PURE__ */ mat4_set

/** Temporary matrix used used internally for calculations */
export const MAT4_TEMP$ = /* @__PURE__ */ mat4_new()

/** Temporary matrix 0 */
export const MAT4_TEMP0 = /* @__PURE__ */ mat4_new()

/** Temporary matrix 1 */
export const MAT4_TEMP1 = /* @__PURE__ */ mat4_new()

/** Temporary matrix 2 */
export const MAT4_TEMP2 = /* @__PURE__ */ mat4_new()

/** Temporary matrix 3 */
export const MAT4_TEMP3 = /* @__PURE__ */ mat4_new()

/** Temporary matrix 4 */
export const MAT4_TEMP4 = /* @__PURE__ */ mat4_new()

export const mat4_getDiagonalVec = <R extends Vec4Out>(out: R, matrix: Mat4In): R =>
  vec4_set(out, matrix[0], matrix[5], matrix[10], matrix[15])

/** Sets the translation components, MAT4_30=x, MAT4_31=y, MAT4_32=z */
export const mat4_setTranslation = <T extends Mat4Out>(out: T, x: number = 0, y: number = 0, z: number = 0): T => {
  out[12] = x
  out[13] = y
  out[14] = z
  return out
}

/** Gets the translation components, x=MAT4_30, y=MAT4_31, z=MAT4_32 */
export const mat4_getTranslationVec = <R extends Vec3Out = Vec3>(out: R, matrix: Mat4In): R =>
  vec3_set(out, matrix[12], matrix[13], matrix[15])

/** Sets the translation components, MAT4_30=x, MAT4_31=y, MAT4_32=z */
export const mat4_setTranslationVec = <T extends Mat4Out>(out: T, vec: Partial<Vec3In> = VEC_ZERO): T =>
  mat4_setTranslation(out, vec.x, vec.y, vec.z)

/** Sets the scaling components, MAT4_00=x, MAT4_11=y, MAT4_22=z */
export const mat4_setScaling = <T extends Mat4Out>(out: T, x: number = 1, y: number = 1, z: number = 1): T => {
  out[0] = x
  out[5] = y
  out[10] = z
  return out
}

/** Sets the scaling components, MAT4_00=x, MAT4_11=y, MAT4_22=z */
export const mat4_setScalingVec = <T extends Mat4Out>(out: T, vec: Partial<Vec3In> = VEC_ONE): T =>
  mat4_setScaling(out, vec.x, vec.y, vec.z)

const _mat4Temp: Float32Array[] = []
let _mat4TempCount = 0

/**
 * Allocates a temporary 4x4 matrix and call the given function with this matrix as parameter.
 * The matrix should not be used outside.
 * @param fn The function to execute with a temporarily allocated matrix
 * @returns fn(temp)
 */
export const mat4_withTemp = <R>(fn: (temp: Float32Array) => R): R => {
  const r = fn((_mat4Temp[_mat4TempCount] = mat4_identity(_mat4Temp[_mat4TempCount++] || mat4_new())))
  --_mat4TempCount
  return r
}

const _mat_destructure = /* @__PURE__ */ (name: string = 'a'): string =>
  `let ${array_fromLength(16, (i) => `${name}${i}=${name}[${i}]`)};`

/** Multiplies two matrices */
export const mat4_mul = /* @__PURE__ */ new Function(
  ...'oab',
  // eslint-disable-next-line prefer-template
  _mat_destructure() +
    _mat_destructure('b') +
    array_fromLength(
      64,
      (k) => `${k % 4 ? '+' : `;o[${k >> 2}]=`}b${(k >> 4) * 4 + (k % 4)}*a${((k >> 2) % 4) + 4 * (k % 4)}`
    ).join('') +
    ';return o'
) as <T extends Mat4Out>(out: T, a: Mat4In, b: Mat4In) => T

/** Transpose a matrix */
export const mat4_transpose = /* @__PURE__ */ new Function(
  `return(o,a=o)=>{${_mat_destructure()}return ${array_fromLength(
    16,
    (i) => `o[${i}]=a${(i >> 2) + (12 & (i << 2))}`
  )},o}`
)() as <T extends Mat4Out>(out: T, a?: Mat4In) => T

/** Makes a translation matrix */
export const mat4_fromTranslation = <T extends Mat4Out>(out: T, x: number, y: number, z: number): T =>
  mat4_setTranslation(mat4_identity(out), x, y, z)

/** Makes a translation matrix */
export const mat4_fromTranslationVec = <T extends Mat4Out>(out: T, translation?: Partial<Vec3In>): T =>
  mat4_setTranslationVec(mat4_identity(out), translation)

/** Translates a matrix */
export const mat4_translate = /* @__PURE__ */ new Function(
  ...'oaxyz',
  `${_mat_destructure()}return ${array_fromLength(
    16,
    (i) => `o[${i}]=${i > 11 ? array_from('xyz1', (c, j) => `a${i + j * 4 - 12}*${c}`).join('+') : `a${i}`}`
  )},o`
) as <T extends Mat4Out>(out: T, a: Mat4In, x: number, y: number, z: number) => T

/** Translates a matrix */
export const mat4_translateVec = <T extends Mat4Out>(out: T, matrix: Mat4In, translation: Vec3In): T =>
  mat4_translate(out, matrix, translation.x, translation.y, translation.z)

/** Makes a scaling matrix */
export const mat4_fromScaling = <T extends Mat4Out>(out: T, x?: number, y?: number, z?: number): T =>
  mat4_setScaling(mat4_identity(out), x, y, z)

/** Makes a scaling matrix */
export const mat4_fromScalingVec = <T extends Mat4Out>(out: T, scale?: Partial<Vec3In>): T =>
  mat4_setScalingVec(mat4_identity(out), scale)

/** Scales a matrix */
export const mat4_scale = new Function(
  ...'oaxyz',
  `return ${array_fromLength(16, (i) => `o[${i}]=a[${i}]${i < 11 ? `*${'xyz'[i >> 2]}` : ''}`)},o`
) as <T extends Mat4Out>(out: T, matrix: Mat4In, x: number, y: number, z: number) => T

/** Scales a matrix */
export const mat4_scaleVec = <T extends Mat4Out>(out: T, scale: Vec3In, matrix: Mat4In = out): T =>
  mat4_scale(out, matrix, scale.x, scale.y, scale.z)

/** Gets basis X axis */
export const mat4_getBasisX = <R extends Vec3Out>(out: R, matrix: Mat4In): R => vec3_fromArray(out, matrix, 0)

/** Gets basis Y axis */
export const mat4_getBasisY = <R extends Vec3Out>(out: R, matrix: Mat4In): R => vec3_fromArray(out, matrix, 4)

/** Gets basis Z axis */
export const mat4_getBasisZ = <R extends Vec3Out>(out: R, matrix: Mat4In): R => vec3_fromArray(out, matrix, 8)

/** Gets basis X, Y, Z axes */
export const mat4_getBasis = (outXAxis: Vec3Out, outYAxis: Vec3Out, outZAxis: Vec3Out, matrix: Mat4In): void => {
  mat4_getBasisX(outXAxis, matrix)
  mat4_getBasisY(outYAxis, matrix)
  mat4_getBasisZ(outZAxis, matrix)
}

/** Gets the scale applied to a matrix */
export const mat4_getScale = <R extends Vec3Out>(out: R, matrix: Mat4In): R =>
  vec3_set(
    out,
    vec3_length(mat4_getBasisX(VEC_TEMP$0, matrix)),
    vec3_length(mat4_getBasisY(VEC_TEMP$1, matrix)),
    vec3_length(mat4_getBasisZ(VEC_TEMP$2, matrix))
  )

/** Makes a matrix that has only the rotation of the given matrix, with no scale and no translation */
export const mat4_extractRotation = <T extends Mat4Out>(out: T, m: Mat4In): T =>
  mat4_scaleVec(
    mat4_set(out, m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10]),
    mat4_getScale(VEC_TEMP$0, m)
  )

/** Makes a shear matrix */
export const mat4_fromShear = <T extends Mat4Out>(
  out: T,
  xy: number,
  xz: number,
  yx: number,
  yz: number,
  zx: number,
  zy: number
): T => mat4_set(out, 1, yx, zx, 0, xy, 1, zy, 0, xz, yz, 1)

/** Makes a matrix from a quaternion, an optional translation and an optional scale */
export const mat4_fromQuaternion = <T extends Mat4Out>(
  out: T,
  { x, y, z, w }: QuatIn,
  translation: Partial<Vec3In> = VEC_ZERO,
  { x: scaleX, y: scaleY, z: scaleZ }: Vec3In = VEC_ONE
): T => {
  const x2 = x + x
  const y2 = y + y
  const z2 = z + z
  const xx = x * x2
  const xy = x * y2
  const xz = x * z2
  const yy = y * y2
  const yz = y * z2
  const zz = z * z2
  const wx = w * x2
  const wy = w * y2
  const wz = w * z2
  return mat4_set(
    out,
    (1 - (yy + zz)) * scaleX,
    (xy + wz) * scaleX,
    (xz - wy) * scaleX,
    0,
    (xy - wz) * scaleY,
    (1 - (xx + zz)) * scaleY,
    (yz + wx) * scaleY,
    0,
    (xz + wy) * scaleZ,
    (yz - wx) * scaleZ,
    (1 - (xx + yy)) * scaleZ,
    0,
    translation.x,
    translation.y,
    translation.z
  )
}

/** Multiplies the given matrix by a rotation matrix. */
export const mat4_mulQuaternionTranslationScale = <T extends Mat4Out>(
  out: T,
  matrix: Mat4In,
  quaternion: QuatIn,
  translation?: Partial<Vec3In>,
  scale?: Vec3In
): T => mat4_mul(out, matrix, mat4_fromQuaternion(MAT4_TEMP$, quaternion, translation, scale))

export const mat4_setBasis = <T extends Mat4Out>(out: T, xAxis: Vec3In, yAxis: Vec3In, zAxis: Vec3In): T =>
  mat4_set(out, xAxis.x, yAxis.x, zAxis.x, 0, xAxis.y, yAxis.y, zAxis.y, 0, xAxis.z, yAxis.z, zAxis.z)

/** Makes a rotation matrix given an angle and an axis. */
export const mat4_fromAxisAngle = <T extends Mat4Out>(out: T, axis: Vec3In, angleInRadians: number): T => {
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
  return mat4_set(
    out,
    x * xt + c,
    y * xt + zs,
    z * xt - ys,
    0,
    x * yt - zs,
    y * yt + c,
    z * yt + xs,
    0,
    x * zt + ys,
    y * zt - xs,
    z * zt + c
  )
}

/** Multiplies the given matrix by a rotation matrix */
export const mat4_rotateAxisAngle = <T extends Mat4Out>(
  out: T,
  matrix: Mat4In,
  axis: Vec3In,
  angleInRadians: number
): T => mat4_mul(out, matrix, mat4_fromAxisAngle(MAT4_TEMP$, axis, angleInRadians))

/** Create a matrix that rotates the given source to the given target vector. */
export const mat4_fromVectorRotation = <T extends Mat4Out>(out: T, source: Vec3In, target: Vec3In): T => {
  const angle = acosSafe(vec3_dot(vec3_normalize(VEC_TEMP$0, source), vec3_normalize(VEC_TEMP$1, target)))
  return mat4_fromAxisAngle(out, vec3_cross(VEC_TEMP$0, VEC_TEMP$1, VEC_TEMP$0), angle)
}

export const mat4_rotateVectorRotation = <T extends Mat4Out>(
  out: T,
  matrix: Mat4In,
  source: Vec3In,
  target: Vec3In
): T => mat4_mul(out, matrix, mat4_fromVectorRotation(MAT4_TEMP$, source, target))

export const mat4_fromEulerXYZ = <T extends Mat4Out>(out: T, x: number, y: number, z: number): T => {
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
  return mat4_set(out, c * e, af + be * d, bf - ae * d, 0, -c * f, ae - bf * d, be + af * d, 0, d, -b * c, a * c)
}

/** Multiplies the given matrix by a rotation matrix. */
export const mat4_rotateEulerXYZ = <T extends Mat4Out>(
  out: T,
  matrix: Mat4In,
  yaw: number,
  pitch: number,
  roll: number
): T => mat4_mul(out, matrix, mat4_fromEulerXYZ(MAT4_TEMP$, yaw, pitch, roll))

export const mat4_fromEulerZYX = <T extends Mat4Out>(out: T, x: number, y: number, z: number): T => {
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
  return mat4_set(out, c * e, c * f, -d, 0, be * d - af, bf * d + ae, b * c, 0, ae * d + bf, af * d - be, a * c)
}

/** Multiplies the given matrix by a rotation matrix. */
export const mat4_rotateEulerZYX = <T extends Mat4Out>(
  out: T,
  matrix: Mat4In,
  yaw: number,
  pitch: number,
  roll: number
): T => mat4_mul(out, matrix, mat4_fromEulerZYX(MAT4_TEMP$, yaw, pitch, roll))

/** Makex an X axis rotation matrix */
export const mat4_fromXRotation = <T extends Mat4Out>(out: T, angleInRadians: number): T => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  out = mat4_identity(out)
  out[5] = c
  out[6] = s
  out[9] = -s
  out[10] = c
  return out
}

/** Multiplies the given matrix by a rotation matrix */
export const mat4_rotateX = <T extends Mat4Out>(out: T, matrix: Mat4In, angleInRadians: number): T =>
  mat4_mul(out, matrix, mat4_fromXRotation(MAT4_TEMP$, angleInRadians))

/** Makex an Y axis rotation matrix */
export const mat4_fromYRotation = <T extends Mat4Out>(out: T, angleInRadians: number): T => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  out = mat4_identity(out)
  out[0] = c
  out[2] = -s
  out[8] = s
  out[10] = c
  return out
}

/** Multiplies the given matrix by a rotation matrix */
export const mat4_rotateY = <T extends Mat4Out>(out: T, matrix: Mat4In, angleInRadians: number): T =>
  mat4_mul(out, matrix, mat4_fromYRotation(MAT4_TEMP$, angleInRadians))

/** Makex a Z axis rotation matrix */
export const mat4_fromZRotation = <T extends Mat4Out>(out: T, angleInRadians: number): T => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  out = mat4_identity(out)
  out[0] = c
  out[1] = s
  out[4] = -s
  out[5] = c
  return out
}

/** Multiplies the given matrix by a rotation matrix */
export const mat4_rotateZ = <T extends Mat4Out>(out: T, matrix: Mat4In, angleInRadians: number): T =>
  mat4_mul(out, matrix, mat4_fromZRotation(MAT4_TEMP$, angleInRadians))

export const mat4_toString = (matrix: Mat4In): string => {
  const strings: string[] = []
  let result = ''
  let maxLen = 5
  for (let i = 0; i < 16; ++i) {
    const s = matrix[i].toString()
    maxLen = max(maxLen, s.length)
    strings.push(s)
  }
  for (let i = 0; i < 16; ++i) {
    result += strings[i].padStart(maxLen + 1)
    if (!((i + 1) % 4)) {
      result += '\n'
    }
  }
  return result
}

/** Gets the determinant of a 4x4 matrix */
export const mat4_determinant = ([
  a0,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15
]: Mat4In): number => {
  const b0 = a0 * a5 - a1 * a4
  const b1 = a0 * a6 - a2 * a4
  const b2 = a1 * a6 - a2 * a5
  const b3 = a8 * a13 - a9 * a12
  const b4 = a8 * a14 - a10 * a12
  const b5 = a9 * a14 - a10 * a13
  const b6 = a0 * b5 - a1 * b4 + a2 * b3
  const b7 = a4 * b5 - a5 * b4 + a6 * b3
  const b8 = a8 * b2 - a9 * b1 + a10 * b0
  const b9 = a12 * b2 - a13 * b1 + a14 * b0
  return a7 * b6 - a3 * b7 + a15 * b8 - a11 * b9
}

/**
 * Generates a perspective projection matrix with the given bounds and a finite far plane.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param out where the output will be written
 * @param fovyRadians Vertical field of view in radians
 * @param aspectRatio Aspect ratio. typically viewport width/height
 * @param near Near bound of the frustum
 * @param far Far bound of the frustum
 */
export const mat4_perspective = <T extends Mat4Out>(
  out: T,
  fovyRadians: number,
  aspectRatio: number,
  near: number,
  far: number
): T => {
  const nf = near - far
  const f = 1 / tan(fovyRadians / 2)
  out.fill(0)[0] = f / aspectRatio
  out[5] = f
  out[11] = -1
  out[10] = (far + near) / nf
  out[14] = (2 * far * near) / nf
  return out
}

/** Generates a perspective projection matrix with the given bounds and an Infinity far plane. */
export const mat4_perspectiveInfinity = <T extends Mat4Out>(
  out: T,
  fovyRadians: number,
  aspectRatio: number,
  near: number
): T => {
  mat4_perspective(out, fovyRadians, aspectRatio, near, 0)
  out[10] = -1
  out[14] = -2 * near
  return out
}

/** Makes a frustum matrix with the given bounds */
export const mat4_fromFrustum = <T extends Mat4Out>(
  out: T,
  left: number,
  right: number,
  bottom: number,
  top: number,
  near: number,
  far: number
): T => {
  const rl = right - left
  const tb = top - bottom
  const nf = near - far
  const near2 = near * 2
  return mat4_set(
    out,
    near2 / rl,
    0,
    0,
    0,
    0,
    near2 / tb,
    0,
    0,
    (right + left) / rl,
    (top + bottom) / tb,
    (far + near) / nf,
    -1,
    0,
    0,
    (far * near2) / nf,
    0
  )
}

export const mat4_perspectiveFromFieldOfView = <T extends Mat4Out>(
  out: T,
  upAngleInRadians: number,
  downAngleInRadians: number,
  leftAngleInRadians: number,
  rightAngleInRadians: number,
  near: number,
  far: number
): T => {
  upAngleInRadians = tan(upAngleInRadians)
  downAngleInRadians = tan(downAngleInRadians)
  leftAngleInRadians = tan(leftAngleInRadians)
  rightAngleInRadians = tan(rightAngleInRadians)
  const xScale = 2 / (leftAngleInRadians + rightAngleInRadians)
  const yScale = 2 / (upAngleInRadians + downAngleInRadians)
  return mat4_set(
    out,
    xScale,
    0,
    0,
    0,
    0,
    yScale,
    0,
    0,
    -(((leftAngleInRadians - rightAngleInRadians) * xScale) / 2),
    ((upAngleInRadians - downAngleInRadians) * yScale) / 2,
    far / (near - far),
    -1,
    0,
    0,
    (far * near) / (near - far),
    0
  )
}

/** Generates a orthogonal projection matrix with the given frustum bounds. */
export const mat4_fromOrtho = <T extends Mat4Out>(
  out: T,
  left: number,
  right: number,
  bottom: number,
  top: number,
  near: number,
  far: number
): T => {
  const lr = left - right
  const bt = bottom - top
  const nf = near - far
  return mat4_set(
    out,
    -2 / lr,
    0,
    0,
    0,
    0,
    -2 / bt,
    0,
    0,
    0,
    0,
    2 / nf,
    0,
    (left + right) / lr,
    (top + bottom) / bt,
    (far + near) / nf
  )
}

const _setupMatrixLookAtVectors = /* @__PURE__ */ (eye: Vec3In, center: Vec3In, up: Vec3In): Vec3 =>
  vec3_cross(
    VEC_TEMP$1,
    VEC_TEMP$2,
    vec3_normalize(vec3_cross(VEC_TEMP$0, up, vec3_normalize(vec3_sub(VEC_TEMP$2, eye, center))))
  )

/** Generates a look-at matrix with the given eye position, focal point, and up axis. */
export const mat4_lookAt = <T extends Mat4Out>(out: T, eye: Vec3In, center: Vec3In, up: Vec3In): T => {
  _setupMatrixLookAtVectors(eye, center, up)
  return mat4_set(
    out,
    VEC_TEMP$0.x,
    VEC_TEMP$1.x,
    VEC_TEMP$2.x,
    0,
    VEC_TEMP$0.y,
    VEC_TEMP$1.y,
    VEC_TEMP$2.y,
    0,
    VEC_TEMP$0.z,
    VEC_TEMP$1.z,
    VEC_TEMP$2.z,
    0,
    -vec3_dot(VEC_TEMP$0, eye),
    -vec3_dot(VEC_TEMP$1, eye),
    -vec3_dot(VEC_TEMP$2, eye)
  )
}

/** Generates a matrix that makes something look at something else. */
export const mat4_targetTo = <T extends Mat4Out>(out: T, eye: Vec3In, target: Vec3In, up: Vec3In): T => {
  _setupMatrixLookAtVectors(eye, target, up)
  return mat4_set(
    out,
    VEC_TEMP$0.x,
    VEC_TEMP$0.y,
    VEC_TEMP$0.z,
    0,
    VEC_TEMP$1.x,
    VEC_TEMP$1.y,
    VEC_TEMP$1.z,
    0,
    VEC_TEMP$2.x,
    VEC_TEMP$2.y,
    VEC_TEMP$2.z,
    0,
    eye.x,
    eye.y,
    eye.z
  )
}

/** Makes a matrix from a direction vector and an optional up vector */
export const mat4_fromDirection = <T extends Mat4Out>(out: T, direction: Vec3In, up: Vec3In = VEC_UNIT_Y): T =>
  mat4_setBasis(
    out,
    VEC_TEMP$0,
    vec3_normalize(
      vec3_cross(
        VEC_TEMP$1,
        VEC_TEMP$2,
        vec3_normalize(vec3_cross(VEC_TEMP$0, up, vec3_normalize(VEC_TEMP$2, direction)))
      )
    ),
    VEC_TEMP$2
  )

/** Create a matrix for mirroring about the given plane. */
export const mat4_fromMirrorPlane = <T extends Mat4Out>(out: T, { x, y, z }: Vec3In, w: number): T =>
  mat4_set(
    out,
    1 - 2 * x * x,
    -2 * y * x,
    -2 * z * x,
    0,
    -2 * x * y,
    1 - 2 * y * y,
    -2 * z * y,
    0,
    -2 * x * z,
    -2 * y * z,
    1 - 2 * z * z,
    0,
    2 * x * w,
    2 * y * w,
    2 * z * w
  )

export const mat4_invert = <T extends Mat4Out>(out: T, mat: Mat4In = out, determinant?: number): T | null => {
  const [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15] = mat
  const b0 = a0 * a5 - a1 * a4
  const b1 = a0 * a6 - a2 * a4
  const b2 = a0 * a7 - a3 * a4
  const b3 = a1 * a6 - a2 * a5
  const b4 = a1 * a7 - a3 * a5
  const b5 = a2 * a7 - a3 * a6
  const b6 = a8 * a13 - a9 * a12
  const b7 = a8 * a14 - a10 * a12
  const b8 = a8 * a15 - a11 * a12
  const b9 = a9 * a14 - a10 * a13
  const b10 = a9 * a15 - a11 * a13
  const b11 = a10 * a15 - a11 * a14
  determinant ||= b0 * b11 - b1 * b10 + b2 * b9 + b3 * b8 - b4 * b7 + b5 * b6
  return determinant
    ? mat4_scalarMul(
        mat4_set(
          out,
          a5 * b11 - a6 * b10 + a7 * b9,
          a2 * b10 - a1 * b11 - a3 * b9,
          a13 * b5 - a14 * b4 + a15 * b3,
          a10 * b4 - a9 * b5 - a11 * b3,
          a6 * b8 - a4 * b11 - a7 * b7,
          a0 * b11 - a2 * b8 + a3 * b7,
          a14 * b2 - a12 * b5 - a15 * b1,
          a8 * b5 - a10 * b2 + a11 * b1,
          a4 * b10 - a5 * b8 + a7 * b6,
          a1 * b8 - a0 * b10 - a3 * b6,
          a12 * b4 - a13 * b2 + a15 * b0,
          a9 * b2 - a8 * b4 - a11 * b0,
          a5 * b7 - a4 * b9 - a6 * b6,
          a0 * b9 - a1 * b7 + a2 * b6,
          a13 * b1 - a12 * b3 - a14 * b0,
          a8 * b3 - a9 * b1 + a10 * b0
        ),
        1 / determinant
      )
    : null
}

export const mat4_adjoint = <T extends Mat4Out>(out: T, matrix: Mat4In = out): T | null => mat4_invert(out, matrix, 1)
