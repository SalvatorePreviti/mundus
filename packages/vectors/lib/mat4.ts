// Matrix library - some functions are based on gl-matrix

/* eslint-disable no-new-func */
import { array_fromLength, array_from } from '@mundus/core'
import { cos, length3D, max, sin, tan, isFinite } from '@mundus/math'

import { Vec2In, Vec2Out, vec2_set, Vec3In, Vec3Out, vec3_set, Vec4In, Vec4Out, vec4_set } from './vec-234'
import { VecIn, VecOut, vec_divScalarSafe } from './vecs'

export type Mat4Out = VecOut

export type Mat4In = VecIn

/** Index of m00 in a 2x2 matrix */
export const MAT2_00 = 0

/** Index of m01 in a 2x2 matrix */
export const MAT2_01 = 1

/** Index of m10 in a 2x2 matrix */
export const MAT2_10 = 2

/** Index of m11 in a 2x2 matrix */
export const MAT2_11 = 3

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

/** Transforms a Vec3 with a 4x4 matrix */
export const mat4_transformVec2 = <R extends Vec2Out = Vec2Out>(out: R, { x, y }: Vec2In, matrix: Mat4In): R =>
  vec2_set(out, matrix[0] * x + matrix[4] * y + matrix[12], matrix[1] * x + matrix[5] * y + matrix[13])

/** Transforms a Vec3 with a 4x4 matrix */
export const mat4_transformVec3 = <R extends Vec3Out = Vec3Out>(out: R, { x, y, z }: Vec3In, matrix: Mat4In): R => {
  const w = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15] || 1
  return vec3_set(
    out,
    (matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12]) / w,
    (matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13]) / w,
    (matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14]) / w
  )
}

/** Transforms a Vec4 with a 4x4 matrix */
export const mat4_transformVec4 = <R extends Vec4Out = Vec4Out>(out: R, { x, y, z, w }: Vec4In, matrix: Mat4In): R => {
  return vec4_set(
    out,
    matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12] * w,
    matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13] * w,
    matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14] * w,
    matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15] * w
  )
}

// eslint-disable-next-line no-new-func
export const mat4_set = new Function(
  `return(o,${array_fromLength(16, (i) => `i${i}`)})=>(${array_fromLength(16, (i) => `o[${i}]=i${i}`)},o)`
)() as <T extends Mat4Out>(
  out: T,
  m00: number,
  m01: number,
  m02: number,
  m03: number,
  m10: number,
  m11: number,
  m12: number,
  m13: number,
  m20: number,
  m21: number,
  m22: number,
  m23: number,
  m30: number,
  m31: number,
  m32: number,
  m33: number
) => T

/** Sets the main diagonal components to 1 */
export const mat4_setDiagonalIdentity = <T extends Mat4Out>(out: T): T => {
  out[0] = 1
  out[5] = 1
  out[10] = 1
  out[15] = 1
  return out
}

export interface MatrixSetOrCreateFunction {
  <T extends Mat4Out>(out: T): T
  (): Float64Array
}

/** Creates a new 4x4 matrix backed by 32 bit floating points */
export const mat4_newFloat32 = mat4_setDiagonalIdentity(new Float32Array(16))

/** Creates a new 4x4 matrix backed by 64 bit floating points */
export const mat4_newFloat64 = mat4_setDiagonalIdentity(new Float64Array(16))

/** Makes an identity matrix. */
export const mat4_identity = <T extends Mat4Out>(out: T) => mat4_setDiagonalIdentity(out.fill(0) as T)

const _mat4Temp: Float64Array[] = []
let _mat4TempCount = 0

/**
 * Allocates a temporary 4x4 matrix and call the given function with this matrix as parameter.
 * The matrix should not be used outside.
 * @param fn The function to execute with a temporarily allocated matrix
 * @returns fn(temp)
 */
export const mat4_withTemp = <R>(fn: (temp: Float64Array) => R) => {
  const r = fn((_mat4Temp[_mat4TempCount] = mat4_identity(_mat4Temp[_mat4TempCount++] || new Float64Array(16))))
  --_mat4TempCount
  return r
}

const _mat_destructure = (name: string = 'a') => `let ${array_fromLength(16, (i) => `${name}${i}=${name}[${i}]`)};`

/** Multiplies two matrices */
export const mat4_mul = new Function(
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
export const mat4_transpose = new Function(
  `return(o,a=o)=>{${_mat_destructure()}return ${array_fromLength(
    16,
    (i) => `o[${i}]=a${(i >> 2) + (12 & (i << 2))}`
  )},o}`
)() as <T extends Mat4Out>(out: T, a?: Mat4In) => T

/** Translates a matrix */
export const mat4_translate = new Function(
  ...'oaxyz',
  `${_mat_destructure()}return ${array_fromLength(
    16,
    (i) => `o[${i}]=${i > 11 ? array_from('xyz1', (c, j) => `a${i + j * 4 - 12}*${c}`).join('+') : `a${i}`}`
  )},o`
) as <T extends Mat4Out>(out: T, a: Mat4In, x: number, y: number, z: number) => T

/** Scales a matrix */
export const mat4_scale = new Function(
  ...'oaxyz',
  `return ${array_fromLength(16, (i) => `o[${i}]=a[${i}]*${'xyz1'[i >> 2]}`)},o`
) as <T extends Mat4Out>(out: T, a: Mat4In, x: number, y: number, z: number) => T

/** Makes a rotation matrix given an angle and an axis. */
export const mat4_fromRotation = <T extends Mat4Out>(
  out: T,
  angleInRadians: number,
  x: number,
  y: number,
  z: number
) => {
  mat4_identity(out)
  const len = length3D(x, y, z)
  if (len) {
    x /= len
    y /= len
    z /= len
    const s = sin(angleInRadians)
    const c = cos(angleInRadians)
    const t = 1 - c
    const xt = x * t
    const yt = y * t
    const zt = z * t
    out[0] = x * xt + c
    out[1] = y * xt + z * s
    out[2] = z * xt - y * s
    out[4] = x * yt - z * s
    out[5] = y * yt + c
    out[6] = z * yt + x * s
    out[8] = x * zt + y * s
    out[9] = y * zt - x * s
    out[10] = z * zt + c
  }
  return out
}

/** Makex an X axis rotation matrix */
export const mat4_fromXRotation = <T extends Mat4Out>(out: T, angleInRadians: number) => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  mat4_identity(out)[5] = c
  out[6] = s
  out[9] = -s
  out[10] = c
  return out
}

/** Makex an Y axis rotation matrix */
export const mat4_fromYRotation = <T extends Mat4Out>(out: T, angleInRadians: number) => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  mat4_identity(out)[0] = c
  out[2] = -s
  out[8] = s
  out[10] = c
  return out
}

/** Makex a Z axis rotation matrix */
export const mat4_fromZRotation = <T extends Mat4Out>(out: T, angleInRadians: number) => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  mat4_identity(out)[0] = c
  out[1] = s
  out[4] = -s
  out[5] = c
  return out
}

/** Creates a matrix from a quaternion rotation and an optional translation. The translation is applied before the rotation. */
export const mat4_fromQuaternion = <T extends Mat4Out>(
  out: T,
  { x, y, z, w }: Vec4In,
  translationX: number = 0,
  translationY: number = 0,
  translationZ: number = 0
) => {
  const x2 = x * 2
  const y2 = y * 2
  const z2 = z * 2
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
    1 - (yy + zz),
    xy + wz,
    xz - wy,
    0,
    xy - wz,
    1 - (xx + zz),
    yz + wx,
    0,
    xz + wy,
    yz - wx,
    1 - (xx + yy),
    0,
    translationX,
    translationY,
    translationZ,
    1
  )
}

export const mat4_rotate = (out: Mat4Out, a: Mat4In, angleInRadians: number, x: number, y: number, z: number) =>
  mat4_withTemp((temp) => mat4_mul(out, a, mat4_fromRotation(temp, angleInRadians, x, y, z)))

export const mat4_toString = (matrix: Mat4In) => {
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
export const mat4_determinant = (a: Mat4In) => {
  const a00 = a[0]
  const a01 = a[1]
  const a02 = a[2]
  const a03 = a[3]
  const a10 = a[4]
  const a11 = a[5]
  const a12 = a[6]
  const a13 = a[7]
  const a20 = a[8]
  const a21 = a[9]
  const a22 = a[10]
  const a23 = a[11]
  const a30 = a[12]
  const a31 = a[13]
  const a32 = a[14]
  const a33 = a[15]

  const b0 = a00 * a11 - a01 * a10
  const b1 = a00 * a12 - a02 * a10
  const b2 = a01 * a12 - a02 * a11
  const b3 = a20 * a31 - a21 * a30
  const b4 = a20 * a32 - a22 * a30
  const b5 = a21 * a32 - a22 * a31
  const b6 = a00 * b5 - a01 * b4 + a02 * b3
  const b7 = a10 * b5 - a11 * b4 + a12 * b3
  const b8 = a20 * b2 - a21 * b1 + a22 * b0
  const b9 = a30 * b2 - a31 * b1 + a32 * b0

  // Calculate the determinant
  return a13 * b6 - a03 * b7 + a33 * b8 - a23 * b9
}

/** Makes a translation matrix */
export const mat4_fromTranslation = <T extends Mat4Out>(out: T, x: number, y: number, z: number): T => {
  mat4_identity(out)[12] = x
  out[13] = y
  out[14] = z
  return out
}

/** Makes a scale matrix */
export const mat4_fromScaling = <T extends Mat4Out>(out: T, x: number, y: number, z: number): T => {
  mat4_identity(out)[0] = x
  out[5] = y
  out[10] = z
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
  out.fill(0)[0] = near2 / rl
  out[5] = near2 / tb
  out[8] = (right + left) / rl
  out[9] = (top + bottom) / tb
  out[10] = (far + near) / nf
  out[11] = -1
  out[14] = (far * near2) / nf
  return out
}

/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param out where the output will be written
 * @param fovyRadians Vertical field of view in radians
 * @param aspectRatio Aspect ratio. typically viewport width/height
 * @param near Near bound of the frustum
 * @param far Far bound of the frustum, can be Infinity
 */
export const mat4_perspective = <T extends Mat4Out>(
  out: T,
  fovyRadians: number,
  aspectRatio: number,
  near: number,
  far: number
) => {
  const f = 1 / tan(fovyRadians / 2)
  out.fill(0)[0] = f / aspectRatio
  out[5] = f
  out[11] = -1
  if (isFinite(far)) {
    const nf = 1 / (near - far)
    out[10] = (far + near) * nf
    out[14] = 2 * far * near * nf
  } else {
    out[10] = -1
    out[14] = -2 * near
  }
  return out
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
) => {
  const lr = left - right
  const bt = bottom - top
  const nf = near - far
  out.fill(0)[0] = -2 / lr
  out[5] = -2 / bt
  out[10] = 2 / nf
  out[12] = (left + right) / lr
  out[13] = (top + bottom) / bt
  out[14] = (far + near) / nf
  out[15] = 1
  return out
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * Note: values are not validated for division by 0 or NaN
 */
export const mat4_lookAt = <T extends Mat4Out>(
  out: T,
  eyeX: number,
  eyeY: number,
  eyeZ: number,
  centerX: number,
  centerY: number,
  centerZ: number,
  upX: number,
  upY: number,
  upZ: number
) => {
  let z0 = eyeX - centerX
  let z1 = eyeY - centerY
  let z2 = eyeZ - centerZ
  let len = length3D(z0, z1, z2)
  z0 /= len
  z1 /= len
  z2 /= len

  let x0 = upY * z2 - upZ * z1
  let x1 = upZ * z0 - upX * z2
  let x2 = upX * z1 - upY * z0
  len = length3D(x0, x1, x2)
  x0 /= len
  x1 /= len
  x2 /= len

  let y0 = z1 * x2 - z2 * x1
  let y1 = z2 * x0 - z0 * x2
  let y2 = z0 * x1 - z1 * x0
  len = length3D(y0, y1, y2)
  y0 /= len
  y1 /= len
  y2 /= len

  return mat4_set(
    out,
    x0,
    y0,
    z0,
    0,
    x1,
    y1,
    z1,
    0,
    x2,
    y2,
    z2,
    0,
    -(x0 * eyeX + x1 * eyeY + x2 * eyeZ),
    -(y0 * eyeX + y1 * eyeY + y2 * eyeZ),
    -(z0 * eyeX + z1 * eyeY + z2 * eyeZ),
    1
  )
}

/** Generates a matrix that makes something look at something else. */
export const mat4_targetTo = <T extends Mat4Out>(
  out: T,
  eyeX: number,
  eyeY: number,
  eyeZ: number,
  targetX: number,
  targetY: number,
  targetZ: number,
  upX: number,
  upY: number,
  upZ: number
) => {
  let z0 = eyeX - targetX
  let z1 = eyeY - targetY
  let z2 = eyeZ - targetZ
  let len = length3D(z0, z1, z2)
  if (len) {
    z0 /= len
    z1 /= len
    z2 /= len
  }

  let x0 = upY * z2 - upZ * z1
  let x1 = upZ * z0 - upX * z2
  let x2 = upX * z1 - upY * z0
  len = length3D(x0, x1, x2)
  if (len) {
    x0 /= len
    x1 /= len
    x2 /= len
  }

  return mat4_set(
    out,
    x0,
    x1,
    x2,
    0,
    z1 * x2 - z2 * x1,
    z2 * x0 - z0 * x2,
    z0 * x1 - z1 * x0,
    0,
    z0,
    z1,
    z2,
    0,
    eyeX,
    eyeY,
    eyeZ,
    1
  )
}

export const mat4_invert = (
  out: Mat4Out,
  [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15]: Mat4In,
  determinant?: number
) => {
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
  return vec_divScalarSafe(
    out,
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
    determinant || b0 * b11 - b1 * b10 + b2 * b9 + b3 * b8 - b4 * b7 + b5 * b6
  )
}

export const mat4_adjoint = (out: Mat4Out, matrix: Mat4In) => mat4_invert(out, matrix, 1)
