import {
  vec4_new,
  vec4_set,
  Vec4In,
  Vec3In,
  vec3_dot,
  Vec4Out,
  Vec4,
  vec4_scale,
  vec3_length,
  vec3_cross,
  vec3_sub,
  VEC_TEMP$0,
  VEC_TEMP$1
} from '..'

/** Creates a new plane */
export const plane_new = /* @__PURE__ */ vec4_new

/** Sets the values of a plane. (x,y,z) are the normal. w is the distance from 0,0,0 */
export const plane_set = /* @__PURE__ */ vec4_set

/** Gets the distance from a point to a plane. */
export const plane_distanceFromPoint = /* @__PURE__ */ (plane: Vec4In, point: Vec3In): number =>
  vec3_dot(plane, point) + plane.w

/** Normalizes a plane */
export const plane_normalize = /* @__PURE__ */ <R extends Vec4Out = Vec4>(out: R, plane: Vec4In = out): R =>
  vec4_scale(out, 1 / (vec3_length(plane) || 1))

/** Makes a plane from 3 points */
export const plane_fromPoints = /* @__PURE__ */ <R extends Vec4Out = Vec4>(
  out: R,
  a: Vec3In,
  b: Vec3In,
  c: Vec3In
): R => {
  vec3_cross(out, vec3_sub(VEC_TEMP$0, b, a), vec3_sub(VEC_TEMP$1, c, a))
  out.w = -vec3_dot(out, a)
  return plane_normalize(out)
}
