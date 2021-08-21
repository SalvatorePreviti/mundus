// Matrix library - some functions are based on gl-matrix

/* eslint-disable no-new-func */
import { array_fromLength, array_from } from '@mundus/core'
import { cos, max, sin, tan } from '@mundus/math'
import {
  vec3_new,
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
  Vec3
} from './vec-234'
import type { QuatIn } from './quat'

import { Vec, VecIn, VecOut, vec_divScalarSafe } from './vecs'

export type Mat4Out = VecOut

export type Mat4In = VecIn

export type Mat4 = Vec

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

/** A temporary vector for calculations */
const _v0 = /* @__PURE__ */ vec3_new()

/** A temporary vector for calculations */
const _v1 = /* @__PURE__ */ vec3_new()

/** A temporary vector for calculations */
const _v2 = /* @__PURE__ */ vec3_new()

const _setupMatrixLookAtVectors = /* @__PURE__ */ (eye: Vec3In, center: Vec3In, up: Vec3In): Vec3 =>
  vec3_cross(_v1, _v2, vec3_normalize(vec3_cross(_v0, up, vec3_normalize(vec3_sub(_v2, eye, center)))))

/** Transforms a Vec3 with a 4x4 matrix */
export const mat4_transform2D = <R extends Vec2Out = Vec2Out>(out: R, m: Mat4In, x: number, y: number): R =>
  vec2_set(out, m[0] * x + m[4] * y + m[12], m[1] * x + m[5] * y + m[13])

/** Transforms a Vec3 with a 4x4 matrix */
export const mat4_transform3D = <R extends Vec3Out = Vec3Out>(
  out: R,
  m: Mat4In,
  x: number,
  y: number,
  z: number,
  w = m[3] * x + m[7] * y + m[11] * z + m[15] || 1
): R =>
  vec3_set(
    out,
    (m[0] * x + m[4] * y + m[8] * z + m[12]) / w,
    (m[1] * x + m[5] * y + m[9] * z + m[13]) / w,
    (m[2] * x + m[6] * y + m[10] * z + m[14]) / w
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
export const mat4_transformVec2 = <R extends Vec2Out = Vec2Out>(out: R, m: Mat4In, v: Vec2In): R =>
  mat4_transform2D(out, m, v.x, v.y)

export const mat4_transformVec3 = <R extends Vec3Out = Vec3Out>(out: R, m: Mat4In, v: Vec3In, w?: number): R =>
  mat4_transform3D(out, m, v.x, v.y, v.z, w)

/** Transforms a Vec4 with a 4x4 matrix */
export const mat4_transformVec4 = <R extends Vec4Out = Vec4Out>(out: R, m: Mat4In, v: Vec4In): R =>
  mat4_transform4D(out, m, v.x, v.y, v.z, v.w)

export interface Mat4IdentityFunction {
  <T extends Mat4Out = Float32Array>(out?: T | undefined): T
}

export interface Mat4SetFunction {
  <T extends Mat4Out = Float32Array>(
    out?: T | undefined,
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
  `return(o=new Float32Array(16),${array_fromLength(16, (i) => `i${i}=${+!(i % 5)}`)})=>(${array_fromLength(
    16,
    (i) => `o[${i}]=i${i}`
  )},o)`
)() as Mat4SetFunction

/** Sets the main diagonal components to 1 */
export const mat4_setDiagonalIdentity = <T extends Mat4Out>(out: T): T => {
  out[0] = 1
  out[5] = 1
  out[10] = 1
  out[15] = 1
  return out
}

/** Sets the translation components, MAT4_30=x, MAT4_31=y, MAT4_32=z */
export const mat4_setTranslation = <T extends Mat4Out>(out: T, x: number, y: number, z: number): T => {
  out[12] = x
  out[13] = y
  out[14] = z
  return out
}

/** Sets the scaling components, MAT4_00=x, MAT4_11=y, MAT4_22=z */
export const mat4_setScaling = <T extends Mat4Out>(out: T, x: number, y: number, z: number): T => {
  out[12] = x
  out[13] = y
  out[14] = z
  return out
}

/** Creates a new 4x4 matrix backed by 64 bit floating points */
export const mat4_newFloat64 = /* @__PURE__ */ (): Mat4 => mat4_setDiagonalIdentity(new Float64Array(16))

/** Makes an identity matrix. */
export const mat4_identity: Mat4IdentityFunction = /* @__PURE__ */ mat4_set

/** Makes a translation matrix */
export const mat4_fromTranslation = <T extends Mat4Out>(out: T, x: number, y: number, z: number): T =>
  mat4_setTranslation(mat4_identity(out), x, y, z)

/** Makes a scale matrix */
export const mat4_fromScaling = <T extends Mat4Out>(out: T, x: number, y: number, z: number): T =>
  mat4_setScaling(mat4_identity(out), x, y, z)

const _mat4Temp: Float32Array[] = []
let _mat4TempCount = 0

/**
 * Allocates a temporary 4x4 matrix and call the given function with this matrix as parameter.
 * The matrix should not be used outside.
 * @param fn The function to execute with a temporarily allocated matrix
 * @returns fn(temp)
 */
export const mat4_withTemp = <R>(fn: (temp: Float32Array) => R): R => {
  const r = fn((_mat4Temp[_mat4TempCount] = mat4_identity(_mat4Temp[_mat4TempCount++])))
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

/** Translates a matrix */
export const mat4_translate = /* @__PURE__ */ new Function(
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
export const mat4_fromRotation = <T extends Mat4Out = Float32Array>(
  out: T | undefined,
  angleInRadians: number,
  axis: Vec3In
): T => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  const { x, y, z } = vec3_normalize(_v0, axis)
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
    y * xt + zs, // 1
    z * xt - ys,
    0,
    x * yt - zs,
    y * yt + c,
    z * yt + xs, // 6
    0,
    x * zt + ys,
    y * zt - xs,
    z * zt + c // 10
  )
}

/** Makex an X axis rotation matrix */
export const mat4_fromXRotation = <T extends Mat4Out = Float32Array>(out: T | undefined, angleInRadians: number): T => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  out = mat4_identity(out)
  out[5] = c
  out[6] = s
  out[9] = -s
  out[10] = c
  return out
}

/** Makex an Y axis rotation matrix */
export const mat4_fromYRotation = <T extends Mat4Out = Float32Array>(out: T | undefined, angleInRadians: number): T => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  out = mat4_identity(out)
  out[0] = c
  out[2] = -s
  out[8] = s
  out[10] = c
  return out
}

/** Makex a Z axis rotation matrix */
export const mat4_fromZRotation = <T extends Mat4Out = Float32Array>(out: T | undefined, angleInRadians: number): T => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  out = mat4_identity(out)
  out[0] = c
  out[1] = s
  out[4] = -s
  out[5] = c
  return out
}

/** Creates a matrix from a quaternion rotation and an optional translation. The translation is applied before the rotation. */
export const mat4_fromQuaternion = <T extends Mat4Out = Float32Array>(
  out: T | undefined,
  { x, y, z, w }: QuatIn,
  translationX: number = 0,
  translationY: number = 0,
  translationZ: number = 0
): T => {
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
export const mat4_fromFrustum = <T extends Mat4Out = Float32Array>(
  out: T | undefined,
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

export const mat4_perspectiveFromFieldOfView = <T extends Mat4Out = Float32Array>(
  out: T | undefined,
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
export const mat4_fromOrtho = <T extends Mat4Out = Float32Array>(
  out: T | undefined,
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

/** Generates a look-at matrix with the given eye position, focal point, and up axis. */
export const mat4_lookAt = <T extends Mat4Out = Float32Array>(
  out: T | undefined,
  eye: Vec3In,
  center: Vec3In,
  up: Vec3In
): T => {
  _setupMatrixLookAtVectors(eye, center, up)
  return mat4_set(
    out,
    _v0.x,
    _v1.x,
    _v2.x,
    0,
    _v0.y,
    _v1.y,
    _v2.y,
    0,
    _v0.z,
    _v1.z,
    _v2.z,
    0,
    -vec3_dot(_v0, eye),
    -vec3_dot(_v1, eye),
    -vec3_dot(_v2, eye)
  )
}

/** Generates a matrix that makes something look at something else. */
export const mat4_targetTo = <T extends Mat4Out = Float32Array>(
  out: T | undefined,
  eye: Vec3In,
  target: Vec3In,
  up: Vec3In
): T => {
  _setupMatrixLookAtVectors(eye, target, up)
  return mat4_set(out, _v0.x, _v0.y, _v0.z, 0, _v1.x, _v1.y, _v1.z, 0, _v2.x, _v2.y, _v2.z, 0, eye.x, eye.y, eye.z)
}

export const mat4_invert = <T extends Mat4Out = Float32Array>(
  out: T | undefined,
  [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15]: Mat4In,
  determinant?: number
): T => {
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
  out = mat4_set(
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
  )
  return vec_divScalarSafe(out, out, determinant || b0 * b11 - b1 * b10 + b2 * b9 + b3 * b8 - b4 * b7 + b5 * b6)
}

export const mat4_adjoint = <T extends Mat4Out = Float32Array>(out: T | undefined, matrix: Mat4In): T =>
  mat4_invert(out, matrix, 1)
