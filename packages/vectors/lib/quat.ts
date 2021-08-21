// Quaternion library - based on gl-matrix

import {
  abs,
  acos,
  atan2,
  cos,
  DEFAULT_TOLERANCE,
  exp,
  lengthSquared3D,
  lengthSquared4D,
  log,
  PI,
  pow2,
  sin,
  sqrt
} from '@mundus/math'
import {
  VEC_UNIT_Y,
  Vec3Out,
  vec3_set,
  vec4_add,
  vec4_copy,
  vec4_scale,
  Vec4,
  Vec4In,
  Vec4Out,
  vec4_dot,
  vec4_new,
  vec4_set,
  vec4_lerp,
  vec4_length,
  vec4_lengthSquared,
  vec4_normalize,
  vec4_equals,
  vec4_isNearlyEqualAbsolute,
  vec3_dot,
  vec3_cross,
  VEC_UNIT_X,
  vec3_length,
  vec3_normalize,
  vec3_withTemp,
  vec4_withTemp,
  Vec3,
  vec3_copy
} from './vec-234'

export type Quat = Vec4

export type QuatIn = Vec4In

export type QuatOut = Vec4Out

/** Creates a new quaternion */
export const quat_new = (x?: number, y?: number, z?: number, w = 1): Quat => vec4_new(x, y, z, w)

/** Sets the values of a quaternion. If x,y,z,w are not passed, it writes the identity quaternion 0,0,0,1 */
export const quat_set = (out: QuatOut, x?: number, y?: number, z?: number, w = 1): Quat => vec4_set(out, x, y, z, w)

/**
 * Allocates a temporary Quaternion and call the given function with this vector as parameter.
 * The quaternion should not be used outside.
 * @param fn The function to execute with a temporarily allocated quaternion
 * @returns fn(temp)
 */
export const quat_withTemp = vec4_withTemp

/** Copies a quaternion into another */
export const quat_copy = vec4_copy

/** Adds two quaternions component by component */
export const quat_add = vec4_add

/** Multiplies each component of a quaternion by a scalar constant */
export const quat_scale = vec4_scale

/** Linear interpolation of quaternion components */
export const quat_lerp = vec4_lerp

/** The length of a quaternion */
export const quat_length = vec4_length

/** The squared length of a quaternion */
export const quat_lengthSquared = vec4_lengthSquared

/** Normalizes a quaternion */
export const quat_normalize = vec4_normalize

/** Check wether two quaternions are exactly equals */
export const quat_equals = vec4_equals

/** Check wether two quaternions are nearly equals */
export const quat_isNearlyEquals = vec4_isNearlyEqualAbsolute

/** Computes the dot product between two quaternions */
export const quat_dot = vec4_dot

/**
 * Calculates the conjugate of a quaternion.
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 */
export const quat_conjugate = (out: QuatOut, a: QuatIn): QuatOut => vec4_set(out, -a.x, -a.y, -a.z, a.w)

/** Sets a quaternion from the given angle and rotation axis */
export const quat_setAxisAngle = (
  out: QuatOut,
  angleInRadians: number,
  axisX: number,
  axisY: number,
  axisZ: number
): QuatOut => {
  angleInRadians /= 2
  const s = sin(angleInRadians)
  return vec4_set(out, s * axisX, s * axisY, s * axisZ, cos(angleInRadians))
}

/** Gets the rotation axis and angle for a given quaternion. */
export const quat_getAxisAngle = (quaternion: QuatIn, outAxis: Vec3Out): number => {
  const rad = acos(quaternion.w) * 2
  const s = sin(rad / 2)
  if (s > DEFAULT_TOLERANCE) {
    vec3_set(outAxis, quaternion.x / s, quaternion.y / s, quaternion.z / s)
  } else {
    vec3_set(outAxis, 1, 0, 0)
  }
  return rad
}

/** Comptes the angular distance between two unit quaternions */
export const quat_angleBetween = (a: QuatIn, b: QuatIn): number => acos(2 * pow2(quat_dot(a, b)) - 1)

/** Multiplies two quaternions */
export const quat_mul = (out: QuatOut, { x, y, z, w }: QuatIn, { x: bx, y: by, z: bz, w: bw }: QuatIn): QuatOut =>
  vec4_set(
    out,
    x * bw + w * bx + y * bz - z * by,
    y * bw + w * by + z * bx - x * bz,
    z * bw + w * bz + x * by - y * bx,
    w * bw - x * bx - y * by - z * bz
  )

/** Rotates a quaternion by the given angle about the X axis */
export const quat_rotateX = (out: QuatOut, { x, y, z, w }: QuatIn, angleInRadians: number): QuatOut => {
  angleInRadians /= 2
  const bx = sin(angleInRadians)
  const bw = cos(angleInRadians)
  return vec4_set(out, x * bw + w * bx, y * bw + z * bx, z * bw - y * bx, w * bw - x * bx)
}

/** Rotates a quaternion by the given angle about the Y axis */
export const quat_rotateY = (out: QuatOut, { x, y, z, w }: QuatIn, angleInRadians: number): QuatOut => {
  angleInRadians /= 2
  const by = sin(angleInRadians)
  const bw = cos(angleInRadians)
  return vec4_set(out, x * bw - z * by, y * bw + w * by, z * bw + x * by, w * bw - y * by)
}

/** Rotates a quaternion by the given angle about the Z axis */
export const quat_rotateZ = (out: QuatOut, { x, y, z, w }: QuatIn, angleInRadians: number): QuatOut => {
  angleInRadians /= 2
  const bz = sin(angleInRadians)
  const bw = cos(angleInRadians)
  return vec4_set(out, x * bw + y * bz, y * bw - x * bz, z * bw + w * bz, w * bw - z * bz)
}

/** Gets the W of a quaternion given the x,y,z values assuming the quaternion is 1 unit length */
export const quat_getCalculatedW = (x: number, y: number, z: number): number => sqrt(abs(1 - lengthSquared3D(x, y, z)))

/** Overrides the w component of a quat from the X, Y, and Z components assuming the quaternion is 1 unit length */
export const quat_calculateW = (quaternion: Quat): Quat => {
  quaternion.w = quat_getCalculatedW(quaternion.x, quaternion.y, quaternion.z)
  return quaternion
}

/** Calculate the exponential of a unit quaternion. */
export const quat_exp = (out: QuatOut, { x, y, z, w }: QuatIn): QuatOut => {
  const r = lengthSquared3D(x, y, z)
  const e = exp(w)
  const s = r > 0 ? (e * sin(r)) / r : 0
  return vec4_set(out, x * s, y * s, z * s, e * cos(r))
}

/** Calculate the natural logarithm of a unit quaternion. */
export const quat_log = (out: QuatOut, { x, y, z, w }: QuatIn): QuatOut => {
  const l3 = lengthSquared3D(x, y, z)
  const r = sqrt(l3)
  const t = r > 0 ? atan2(r, w) / r : 0
  return vec4_set(out, x * t, y * t, z * t, log(l3 + w * w) / 2)
}

/** Calculate the scalar power of a unit quaternion. */
export const quat_pow = (out: QuatOut, a: QuatIn, b: number): QuatOut => {
  quat_log(out, a)
  quat_scale(out, out, b)
  return quat_exp(out, out)
}

/** Performs a spherical linear interpolation between two quaternions. */
export const quat_slerp = (
  out: QuatOut,
  { x: ax, y: ay, z: az, w: aw }: QuatIn,
  { x: bx, y: by, z: bz, w: bw }: QuatIn,
  t: number
): QuatOut => {
  let omega
  let sinom
  let scale0
  let scale1

  let cosom = ax * bx + ay * by + az * bz + aw * bw
  if (cosom < 0) {
    cosom = -cosom
    bx = -bx
    by = -by
    bz = -bz
    bw = -bw
  }
  if (1 - cosom > DEFAULT_TOLERANCE) {
    omega = acos(cosom)
    sinom = sin(omega)
    scale0 = sin((1 - t) * omega) / sinom
    scale1 = sin(t * omega) / sinom
  } else {
    scale0 = 1 - t
    scale1 = t
  }
  return vec4_set(
    out,
    scale0 * ax + scale1 * bx,
    scale0 * ay + scale1 * by,
    scale0 * az + scale1 * bz,
    scale0 * aw + scale1 * bw
  )
}

/** Calculates the inverse of a quaternion */
export const quat_invert = (out: QuatOut, { x, y, z, w }: QuatIn): QuatOut => {
  const dot = lengthSquared4D(x, y, z, w)
  const invDot = dot ? -1 / dot : 0
  return vec4_set(out, x * invDot, y * invDot, z * invDot, -w * invDot)
}

/**
 * Sets a quaternion to represent the shortest rotation from one vector to another.
 * Both quaternions are assumed to be unit length.
 */
export const quat_rotationTo = (out: QuatOut, a: QuatIn, b: QuatIn): QuatOut =>
  vec3_withTemp((tmpvec3) => {
    const dot = vec3_dot(a, b)
    if (dot < -0.999999) {
      vec3_cross(tmpvec3, VEC_UNIT_X, a)
      if (vec3_length(tmpvec3) < 0.000001) {
        vec3_cross(tmpvec3, VEC_UNIT_Y, a)
      }
      vec3_normalize(tmpvec3, tmpvec3)
      return quat_setAxisAngle(out, PI, tmpvec3.x, tmpvec3.y, tmpvec3.z)
    }
    if (dot > 0.999999) {
      return vec4_set(out)
    }
    vec3_cross(tmpvec3, a, b)
    vec3_copy(out, tmpvec3)
    out.w = 1 + dot
    return quat_normalize(out, out)
  })

/** Performs a spherical linear interpolation with two control points */
export const sqlerp = (out: QuatOut, a: QuatIn, b: QuatIn, c: QuatIn, d: QuatIn, t: number): QuatOut =>
  quat_withTemp((temp1) =>
    quat_withTemp((temp2) => quat_slerp(out, quat_slerp(temp1, a, d, t), quat_slerp(temp2, b, c, t), 2 * t * (1 - t)))
  )

/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */
export const transformQuat = <R extends Vec3Out = Vec3Out>(
  out: R,
  { x, y, z }: Vec3,
  { x: qx, y: qy, z: qz, w: qw }: QuatIn
): R => {
  const uvx = qy * z - qz * y
  const uvy = qz * x - qx * z
  const uvz = qx * y - qy * x
  return vec3_set(
    out,
    x + (uvx * qw + (qy * uvz - qz * uvy)) * 2,
    y + (uvy * qw + (qz * uvx - qx * uvz)) * 2,
    z + (uvz * qw + (qx * uvy - qy * uvx)) * 2
  )
}
