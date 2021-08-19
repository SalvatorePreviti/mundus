import {
  isNearlyZero,
  isFinite,
  isZero,
  isNearlyEqualAbsolute,
  isNearlyEqualRelative,
  num_negate,
  num_inverse,
  stirlingGamma,
  abs,
  acos,
  acosh,
  acosSafe,
  acoth,
  acsc,
  acsch,
  angleWrapPingPong,
  angleWrapSigned,
  angleWrapUnsigned,
  asec,
  asech,
  asin,
  asinh,
  asinSafe,
  atan,
  atanh,
  cbrt,
  ceil,
  ceilPow2,
  clamp,
  cos,
  cosh,
  cot,
  coth,
  csc,
  csch,
  degToRad,
  exp,
  expm1,
  floor,
  floorPow2,
  fract,
  fround,
  gaussianDistribution,
  gudermannian,
  gudermannianInverse,
  impulseExp,
  invSqrt,
  log10,
  log1m,
  log1mexp,
  log1p,
  log1pexp,
  log2,
  logit,
  pow2,
  pow3,
  pow4,
  pow5,
  pow6,
  pow7,
  pow8,
  powSelf,
  radToDeg,
  round,
  roundFromZero,
  roundToZero,
  sec,
  sigmoid,
  sigmoidGradient,
  sigmoidInverse,
  sign,
  sin,
  sinc,
  sinh,
  smoothstepInverse,
  sqrt,
  stepRectangular,
  stepUnit,
  tan,
  tanh,
  trunc,
  log,
  min,
  max,
  euclideanModulo,
  isInteger,
  isNonZero,
  isPow2,
  isSafeInteger,
  int32_fromFloat,
  int32_not,
  angle2D,
  angle4D,
  angle3D,
  lengthSquared2D,
  lengthSquared3D,
  lengthSquared4D,
  cross2D,
  lerp,
  smoothstep,
  smootherstep,
  gridSnap,
  wrapSigned,
  wrapUnsigned,
  wrapPingPong,
  dot2D,
  dot3D,
  dot4D,
  EasingFunction,
  timeDamp,
  num_divSafe
} from '@mundus/math'

export type IsVec2Fn = <T extends Vec2In = Vec2In>(v: T | null | undefined | false) => v is T

export type IsVec3Fn = <T extends Vec3In = Vec3In>(v: T | null | undefined | false) => v is T

export type IsVec4Fn = <T extends Vec4In = Vec4In>(v: T | null | undefined | false) => v is T

export interface Vec2 {
  x: number
  y: number
}

export interface Vec2In {
  readonly x: number
  readonly y: number
}

export type Vec2Out = Vec2

export interface Vec3 extends Vec2 {
  z: number
}

export interface Vec3In extends Vec2In {
  readonly z: number
}

export type Vec3Out = Vec3

export interface Vec4 extends Vec3 {
  w: number
}

export interface Vec4In extends Vec3In {
  readonly w: number
}

export type Vec4Out = Vec4

/** Creates a new 2D vector object */
export const vec2_new = /* @__PURE__ */ (x: number = 0, y: number = 0) => ({ x, y })

/** Creates a new 3D vector object */
export const vec3_new = /* @__PURE__ */ (x: number = 0, y: number = 0, z: number = 0) => ({ x, y, z })

/** Creates a new 4D vector object */
export const vec4_new = /* @__PURE__ */ (x: number = 0, y: number = 0, z: number = 0, w: number = 0) => ({ x, y, z, w })

/** A vector whose components are all 0 */
export const VEC_ZERO: Vec4In = /* @__PURE__ */ vec4_new()

/** A vector whose components are all 1 */
export const VEC_ONE: Vec4In = /* @__PURE__ */ vec4_new(1, 1, 1, 1)

/** {x:1, y:0, z:0, w:0} */
export const VEC_UNIT_X: Vec4In = /* @__PURE__ */ vec4_new(1)

/** {x:0, y:1, z:0, w:0} */
export const VEC_UNIT_Y: Vec4In = /* @__PURE__ */ vec4_new(0, 1)

/** {x:0, y:0, z:1, w:0} */
export const VEC_UNIT_Z: Vec4In = /* @__PURE__ */ vec4_new(0, 0, 1)

/** {x:0, y:0, z:0, w:1} */
export const VEC_UNIT_W: Vec4In = /* @__PURE__ */ vec4_new(0, 0, 0, 1)

export const VEC_TEMP0 = /* @__PURE__ */ vec4_new()

export const VEC_TEMP1 = /* @__PURE__ */ vec4_new()

export const VEC_TEMP2 = /* @__PURE__ */ vec4_new()

export const VEC_TEMP3 = /* @__PURE__ */ vec4_new()

export const VEC_TEMP4 = /* @__PURE__ */ vec4_new()

/** Set x and y components of the given 2D vector */
export const vec2_set = <R extends Vec2Out = Vec2Out>(out: R, x: number, y: number): R => {
  out.x = x
  out.y = y
  return out
}

/** Set x, y, z components of the given 3D vector */
export const vec3_set = <R extends Vec3Out = Vec3Out>(out: R, x: number, y: number, z: number): R => {
  out.x = x
  out.y = y
  out.z = z
  return out
}

/** Set x, y, z, w components of the given 4D vector */
export const vec4_set = <R extends Vec4Out = Vec4Out>(out: R, x: number, y: number, z: number, w: number): R => {
  out.x = x
  out.y = y
  out.z = z
  out.w = w
  return out
}

/** Copies a 2D vector to another */
export const vec2_copy = <R extends Vec2Out = Vec2Out>(out: R, copy: Vec2In): R => vec2_set(out, copy.x, copy.y)

/** Copies a 3D vector to another */
export const vec3_copy = <R extends Vec3Out = Vec3Out>(out: R, copy: Vec3In): R => vec3_set(out, copy.x, copy.y, copy.z)

/** Copies a 4D vector to another */
export const vec4_copy = <R extends Vec4Out = Vec4Out>(out: R, copy: Vec4In): R =>
  vec4_set(out, copy.x, copy.y, copy.z, copy.w)

/** Sets each component of output with the result of a function called for each component in the 2D vector */
export const vec2_setEach = <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In, fn: (value: number) => number): R =>
  vec2_set(out, fn(v.x), fn(v.y))

/** Sets each component of output with the result of a function called for each component in the 3D vector */
export const vec3_setEach = <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In, fn: (value: number) => number): R =>
  vec3_set(out, fn(v.x), fn(v.y), fn(v.z))

/** Sets each component of output with the result of a function called for each component in the 4D vector */
export const vec4_setEach = <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In, fn: (value: number) => number): R =>
  vec4_set(out, fn(v.x), fn(v.y), fn(v.z), fn(v.w))

/** Sets each component of output with the result of a function called for each component in the 2D vector */
export const vec2_makeSetEach =
  (fn: (value: number) => number) =>
  /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In): R =>
    vec2_set(out, fn(v.x), fn(v.y))

/** Sets each component of output with the result of a function called for each component in the 3D vector */
export const vec3_makeSetEach =
  (fn: (value: number) => number) =>
  /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In): R =>
    vec3_set(out, fn(v.x), fn(v.y), fn(v.z))

/** Sets each component of output with the result of a function called for each component in the 4D vector */
export const vec4_makeSetEach =
  (fn: (value: number) => number) =>
  /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In): R =>
    vec4_set(out, fn(v.x), fn(v.y), fn(v.z), fn(v.w))

/** Sets each component of output with the result of a function called for each component in the 2D vector */
export const vec2_makeSetEach2 =
  (fn: (a: number, b: number) => number) =>
  /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In): R =>
    vec2_set(out, fn(a.x, b.x), fn(a.y, b.y))

/** Sets each component of output with the result of a function called for each component in the 3D vector */
export const vec3_makeSetEach2 =
  (fn: (a: number, b: number) => number) =>
  /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In): R =>
    vec3_set(out, fn(a.x, b.x), fn(a.y, b.y), fn(a.z, b.z))

/** Sets each component of output with the result of a function called for each component in the 4D vector */
export const vec4_makeSetEach2 =
  (fn: (a: number, b: number) => number) =>
  /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In): R =>
    vec4_set(out, fn(a.x, b.x), fn(a.y, b.y), fn(a.z, b.z), fn(a.w, b.w))

/** Computes true if the given function Computes true for each component of the 2D vector */
export const vec2_every = /* @__PURE__ */ <T extends Vec2In>(
  v: T | null | undefined | false,
  fn: (value: number) => boolean
): v is T => !!v && fn(v.x) && fn(v.y)

/** Computes true if the given function Computes true for each component of the 3D vector */
export const vec3_every = /* @__PURE__ */ <T extends Vec3In>(
  v: Vec3In | null | undefined | false,
  fn: (value: number) => boolean
): v is T => !!v && fn(v.x) && fn(v.y) && fn(v.z)

/** Computes true if the given function Computes true for each component of the 4D vector */
export const vec4_every = /* @__PURE__ */ <T extends Vec4In>(
  v: Vec4In | null | undefined | false,
  fn: (value: number) => boolean
): v is T => !!v && fn(v.x) && fn(v.y) && fn(v.z) && fn(v.w)

/** Computes true if the given function Computes true for at least one component of the 2D vector */
export const vec2_some = /* @__PURE__ */ <T extends Vec2In = Vec2In>(
  v: T | null | undefined | false,
  fn: (value: number) => boolean
): v is T => !!v && (fn(v.x) || fn(v.y))

/** Computes true if the given function Computes true for at least one component of the 3D vector */
export const vec3_some = /* @__PURE__ */ <T extends Vec3In = Vec3In>(
  v: T | null | undefined | false,
  fn: (value: number) => boolean
): v is T => !!v && (fn(v.x) || fn(v.y) || fn(v.z))

/** Computes true if the given function Computes true for at least one component of the 4D vector */
export const vec4_some = /* @__PURE__ */ <T extends Vec4In = Vec4In>(
  v: T | null | undefined | false,
  fn: (value: number) => boolean
): v is T => !!v && (fn(v.x) || fn(v.y) || fn(v.z) || fn(v.w))

/** Computes true if two 2D vectors are equals */
export const vec2_equals = /* @__PURE__ */ (a: Vec2In, b: Vec2In) => a.x === b.x && a.y === b.y

/** Computes true if two 3D vectors are equals */
export const vec3_equals = /* @__PURE__ */ (a: Vec3In, b: Vec3In) => a.x === b.x && a.y === b.y && a.z === b.z

/** Computes true if two 4D vectors are equals */
export const vec4_equals = /* @__PURE__ */ (a: Vec4In, b: Vec4In) => vec3_equals(a, b) && a.w === b.w

/** Computes true if the given 2D vector is exactly {x:0, y:0} */
export const vec2_isZero = /* @__PURE__ */ ((v) => vec2_every(v, isZero)) as IsVec2Fn

/** Computes true if the given 3D vector is very near to be {x:0, y:0, z:0}, given the optional tolerance */
export const vec3_isZero = /* @__PURE__ */ ((v) => vec3_every(v, isZero)) as IsVec3Fn

/** Computes true if the given 4D vector is very near to be {x:0, y:0, z:0, w:0}, given the optional tolerance */
export const vec4_isZero = /* @__PURE__ */ ((v) => vec4_every(v, isZero)) as IsVec4Fn

/** Computes true if at least one component og the given 2D vector is not strictly equal to 0 */
export const vec2_isNonZero = /* @__PURE__ */ ((v) => vec2_every(v, isNonZero)) as IsVec2Fn

/** Computes true if at least one component og the given 3D vector is not strictly equal to 0 */
export const vec3_isNonZero = /* @__PURE__ */ ((v) => vec2_every(v, isNonZero)) as IsVec3Fn

/** Computes true if at least one component og the given 4D vector is not strictly equal to 0 */
export const vec4_isNonZero = /* @__PURE__ */ ((v) => vec2_every(v, isNonZero)) as IsVec4Fn

/** Computes true if all components of the 2D vector are finite (not NaN, not Infinity, not -Infinity) */
export const vec2_isFinite = /* @__PURE__ */ ((v) => vec2_every(v, isFinite)) as IsVec2Fn

/** Computes true if all components of the 3D vector are finite (not NaN, not Infinity, not -Infinity) */
export const vec3_isFinite = /* @__PURE__ */ ((v) => vec3_every(v, isFinite)) as IsVec3Fn

/** Computes true if all components of the 4D vector are finite (not NaN, not Infinity, not -Infinity) */
export const vec4_isFinite = /* @__PURE__ */ ((v) => vec4_every(v, isFinite)) as IsVec4Fn

/** Returns true if the value passed is a valid integer vector, false otherwise. */
export const vec2_isInteger = /* @__PURE__ */ ((v) => !v || vec2_every(v, isInteger)) as IsVec2Fn

/** Returns true if the value passed is a valid integer vector, false otherwise. */
export const vec3_isInteger = /* @__PURE__ */ ((v) => !v || vec2_every(v, isInteger)) as IsVec3Fn

/** Returns true if the value is not a valid integer vector, false otherwise. */
export const vec4_isInteger = /* @__PURE__ */ ((v) => !v || vec2_every(v, isInteger)) as IsVec4Fn

/** Returns true if the value passed is a safe 53 bit integer vector, false otherwise. */
export const vec2_isSafeInteger = /* @__PURE__ */ ((v) => !v || vec2_every(v, isSafeInteger)) as IsVec2Fn

/** Returns true if the value passed is a safe 53 bit integer vector, false otherwise. */
export const vec3_isSafeInteger = /* @__PURE__ */ ((v) => !v || vec2_every(v, isSafeInteger)) as IsVec3Fn

/** Returns true if the value is a safe 53 bit integer integer vector, false otherwise. */
export const vec4_isSafeInteger = /* @__PURE__ */ ((v) => !v || vec2_every(v, isSafeInteger)) as IsVec4Fn

/** Returns true if all the vector components passed are a power of 2. */
export const vec2_isPow2 = /* @__PURE__ */ ((v) => !v || vec2_every(v, isPow2)) as IsVec2Fn

/** Returns true if all the vector components passed are a power of 2. */
export const vec3_isPow2 = /* @__PURE__ */ ((v) => !v || vec2_every(v, isPow2)) as IsVec3Fn

/** Returns true if all the vector components are a power of 2. */
export const vec4_isPow2 = /* @__PURE__ */ ((v) => !v || vec2_every(v, isPow2)) as IsVec4Fn

/** Returns true if all the vector components passed are a power of 10. */
export const vec2_isPow10 = /* @__PURE__ */ ((v) => !v || vec2_every(v, isPow2)) as IsVec2Fn

/** Returns true if all the vector components passed are a power of 10. */
export const vec3_isPow10 = /* @__PURE__ */ ((v) => !v || vec2_every(v, isPow2)) as IsVec3Fn

/** Returns true if all the vector components are a power of 10. */
export const vec4_isPow10 = /* @__PURE__ */ ((v) => !v || vec2_every(v, isPow2)) as IsVec4Fn

/** Gets the angle in radians between two vectors */
export const vec2_angle = (a: Vec2In, b: Vec2In) => angle2D(a.x, a.y, b.x, b.y)

/** Gets the angle in radians between two vectors */
export const vec3_angle = (a: Vec3In, b: Vec3In) => angle3D(a.x, a.y, a.z, b.x, b.y, b.z)

/** Gets the angle in radians between two vectors */
export const vec4_angle = (a: Vec4In, b: Vec4In) => angle4D(a.x, a.y, a.z, a.w, b.x, b.y, b.z, b.w)

/** Gets the squared length of a vector */
export const vec2_lengthSquared = (a: Vec2In) => lengthSquared2D(a.x, a.y)

/** Gets the squared length of a vector */
export const vec3_lengthSquared = (a: Vec3In) => lengthSquared3D(a.x, a.y, a.z)

/** Gets the squared length of a vector */
export const vec4_lengthSquared = (a: Vec4In) => lengthSquared4D(a.x, a.y, a.z, a.w)

/** Gets the length (magnitude) of a vector */
export const vec2_length = (a: Vec2In) => sqrt(vec2_lengthSquared(a))

/** Gets the length (magnitude) of a vector */
export const vec3_length = (a: Vec3In) => sqrt(vec2_lengthSquared(a))

/** Gets the length (magnitude) of a vector */
export const vec4_length = (a: Vec4In) => sqrt(vec2_lengthSquared(a))

/** Computes true if the given 2D vector is very near to be {x:0, y:0}, given the optional tolerance */
export const vec2_isNearlyZero = /* @__PURE__ */ (v: Vec2In, epsilon?: number) =>
  isNearlyZero(v.x, epsilon) && isNearlyZero(v.y, epsilon)

/** Computes true if the given 3D vector is very near to be {x:0, y:0, z:0}, given the optional tolerance */
export const vec3_isNearlyZero = /* @__PURE__ */ (v: Vec3In, epsilon?: number) =>
  isNearlyZero(v.x, epsilon) && isNearlyZero(v.y, epsilon) && isNearlyZero(v.z, epsilon)

/** Computes true if the given 4D vector is very near to be {x:0, y:0, z:0, w:0}, given the optional tolerance */
export const vec4_isNearlyZero = /* @__PURE__ */ (v: Vec4In, epsilon?: number) =>
  vec3_isNearlyZero(v, epsilon) && isNearlyZero(v.w, epsilon)

/** Computes true if two 2D vectors are equal given an absolute tolerance. */
export const vec2_isNearlyEqualAbsolute = /* @__PURE__ */ (a: Vec2In, b: Vec2In, epsilon?: number) =>
  isNearlyEqualAbsolute(a.x, b.x, epsilon) && isNearlyEqualAbsolute(a.y, b.y, epsilon)

/** Computes true if two 3D vectors are equal given an absolute tolerance. */
export const vec3_isNearlyEqualAbsolute = /* @__PURE__ */ (a: Vec3In, b: Vec3In, epsilon?: number) =>
  vec2_isNearlyEqualAbsolute(a, b, epsilon) && isNearlyEqualAbsolute(a.z, b.z, epsilon)

/** Computes true if two 2D vectors are equal given a relative tolerance. */
export const vec2_isNearlyEqualRelative = /* @__PURE__ */ (a: Vec2In, b: Vec2In, epsilon?: number) =>
  isNearlyEqualRelative(a.x, b.x, epsilon) && isNearlyEqualRelative(a.y, b.y, epsilon)

/** Computes true if two 3D vectors are equal given a relative tolerance. */
export const vec3_isNearlyEqualRelative = /* @__PURE__ */ (a: Vec3In, b: Vec3In, epsilon?: number) =>
  vec2_isNearlyEqualRelative(a, b, epsilon) && isNearlyEqualRelative(a.z, b.z, epsilon)

/** Computes true if two 4D vectors are equal given a relative tolerance. */
export const vec4_isNearlyEqualAbsolute = /* @__PURE__ */ (a: Vec4In, b: Vec4In, epsilon?: number) =>
  vec3_isNearlyEqualAbsolute(a, b, epsilon) && isNearlyEqualAbsolute(a.w, b.w, epsilon)

/** Computes true if two 4D vectors are equal given a relative tolerance. */
export const vec4_isNearlyEqualRelative = /* @__PURE__ */ (a: Vec4In, b: Vec4In, epsilon?: number) =>
  vec3_isNearlyEqualRelative(a, b, epsilon) && isNearlyEqualRelative(a.w, b.w, epsilon)

/** Negation. out = -v = {x:-v.x, y:-v.y} */
export const vec2_negate = /* @__PURE__ */ vec2_makeSetEach(num_negate)

/** Negation. out = -v = {x:-v.x, y:-v.y, z:-v.z} */
export const vec3_negate = /* @__PURE__ */ vec3_makeSetEach(num_negate)

/** Negation. out = -v = {x:-v.x, y:-v.y, z:-v.z, w:-v.w} */
export const vec4_negate = /* @__PURE__ */ vec4_makeSetEach(num_negate)

/** Reciprocal. out = 1/v = {x:-v.x, y:-v.y} */
export const vec2_inverse = /* @__PURE__ */ vec2_makeSetEach(num_inverse)

/** Negation. out = 1/v = {x:-v.x, y:-v.y, z:-v.z} */
export const vec3_inverse = /* @__PURE__ */ vec3_makeSetEach(num_inverse)

/** Negation. out = 1/v = {x:1/v.x, y:1/v.y, z:1/v.z, w:1/v.w} */
export const vec4_inverse = /* @__PURE__ */ vec4_makeSetEach(num_inverse)

/** Adds every component of the two given vectors together. */
export const vec2_add = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In) =>
  vec2_set(out, a.x + b.x, a.y + b.y)

/** Adds every component of the two given vectors together. */
export const vec3_add = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In) =>
  vec3_set(out, a.x + b.x, a.y + b.y, a.z + b.z)

/** a + b * scale */
export const vec2_addScale = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In, scale: Vec2In) =>
  vec2_set(out, a.x + b.x * scale.x, a.y + b.y * scale.y)

/** a + b * scale */
export const vec3_addScale = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In, scale: Vec3In) =>
  vec3_set(out, a.x + b.x * scale.x, a.y + b.y * scale.y, a.z + b.z * scale.z)

/** a + b * scale */
export const vec4_addScale = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In, scale: Vec4In) =>
  vec4_set(out, a.x + b.x * scale.x, a.y + b.y * scale.y, a.z + b.z * scale.z, a.w + b.w * scale.w)

/** a + b * scale */
export const vec2_addScaleScalar = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In, scale: number) =>
  vec2_set(out, a.x + b.x * scale, a.y + b.y * scale)

/** a + b * scale */
export const vec3_addScaleScalar = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In, scale: number) =>
  vec3_set(out, a.x + b.x * scale, a.y + b.y * scale, a.z + b.z * scale)

/** a + b * scale */
export const vec4_addScaleScalar = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In, scale: number) =>
  vec4_set(out, a.x + b.x * scale, a.y + b.y * scale, a.z + b.z * scale, a.w + b.w * scale)

/** Adds every component of the two given vectors together. */
export const vec4_add = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In) =>
  vec4_set(out, a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w)

/** Adds every component of the given vectors and a scalar together. */
export const vec2_addScalar = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: number) =>
  vec2_set(out, a.x + b, a.y + b)

/** Adds every component of the given vectors and a scalar together. */
export const vec3_addScalar = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: number) =>
  vec3_set(out, a.x + b, a.y + b, a.z + b)

/** Adds every component of the given vectors and a scalar together. */
export const vec4_addScalar = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: number) =>
  vec4_set(out, a.x + b, a.y + b, a.z + b, a.w + b)

/** Computes a - b */
export const vec2_sub = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In) =>
  vec2_set(out, a.x - b.x, a.y - b.y)

/** Computes a - b */
export const vec3_sub = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In) =>
  vec3_set(out, a.x - b.x, a.y - b.y, a.z - b.z)

/** Computes a - b */
export const vec4_sub = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In) =>
  vec4_set(out, a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w)

/** Computes a - b */
export const vec2_subScalar = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: number) => vec2_addScalar(out, a, -b)

/** Computes a - b */
export const vec3_subScalar = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: number) => vec3_addScalar(out, a, -b)

/** Computes a - b */
export const vec4_subScalar = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: number) => vec4_addScalar(out, a, -b)

/** Computes a - b */
export const vec2_scalarSub = <R extends Vec2Out = Vec2Out>(out: R, a: number, b: Vec2In) =>
  vec2_set(out, a - b.x, a - b.y)

/** Computes a - b */
export const vec3_scalarSub = <R extends Vec3Out = Vec3Out>(out: R, a: number, b: Vec3In) =>
  vec3_set(out, a - b.x, a - b.y, a - b.z)

/** Computes a - b */
export const vec4_scalarSub = <R extends Vec4Out = Vec4Out>(out: R, a: number, b: Vec4In) =>
  vec4_set(out, a - b.x, a - b.y, a - b.z, a - b.w)

/** Computes a * b, component by component multiplication */
export const vec2_mul = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In) =>
  vec2_set(out, a.x * b.x, a.y * b.y)

/** Computes a * b, component by component multiplication */
export const vec3_mul = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In) =>
  vec3_set(out, a.x * b.x, a.y * b.y, a.z * b.z)

/** Computes a * b, component by component multiplication */
export const vec4_mul = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In) =>
  vec4_set(out, a.x * b.x, a.y * b.y, a.z * b.z, a.w * b.w)

/** Computes a * b, component by component multiplication */
export const vec2_mulScalar = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: number) =>
  vec2_set(out, a.x * b, a.y * b)

/** Computes a * b, component by component multiplication */
export const vec3_mulScalar = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: number) =>
  vec3_set(out, a.x * b, a.y * b, a.z * b)

/** Computes a * b, component by component multiplication */
export const vec4_mulScalar = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: number) =>
  vec4_set(out, a.x * b, a.y * b, a.z * b, a.w * b)

/** Computes a / b, component by component divtiplication */
export const vec2_div = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In) =>
  vec2_set(out, a.x / b.x, a.y / b.y)

/** Computes a / b, component by component divtiplication */
export const vec3_div = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In) =>
  vec3_set(out, a.x / b.x, a.y / b.y, a.z / b.z)

/** Computes a / b, component by component divtiplication */
export const vec4_div = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In) =>
  vec4_set(out, a.x / b.x, a.y / b.y, a.z / b.z, a.w / b.w)

/** Computes a / b, component by component divtiplication */
export const vec2_divScalar = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: number) =>
  vec2_set(out, a.x / b, a.y / b)

/** Computes a / b, component by component divtiplication */
export const vec3_divScalar = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: number) =>
  vec3_set(out, a.x / b, a.y / b, a.z / b)

/** Computes a / b, component by component divtiplication */
export const vec4_divScalar = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: number) =>
  vec4_set(out, a.x / b, a.y / b, a.z / b, a.w / b)

/** Computes a / b, component by component divtiplication */
export const vec2_scalarDiv = <R extends Vec2Out = Vec2Out>(out: R, a: number, b: Vec2In) =>
  vec2_set(out, a / b.x, a / b.y)

/** Computes a / b, component by component divtiplication */
export const vec3_scalarDiv = <R extends Vec3Out = Vec3Out>(out: R, a: number, b: Vec3In) =>
  vec3_set(out, a / b.x, a / b.y, a / b.z)

/** Computes a / b, component by component divtiplication */
export const vec4_scalarDiv = <R extends Vec4Out = Vec4Out>(out: R, a: number, b: Vec4In) =>
  vec4_set(out, a / b.x, a / b.y, a / b.z, a / b.w)

/** Computes a % b, component by component modtiplication */
export const vec2_mod = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In) =>
  vec2_set(out, a.x % b.x, a.y % b.y)

/** Computes a % b, component by component modtiplication */
export const vec3_mod = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In) =>
  vec3_set(out, a.x % b.x, a.y % b.y, a.z % b.z)

/** Computes a % b, component by component modtiplication */
export const vec4_mod = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In) =>
  vec4_set(out, a.x % b.x, a.y % b.y, a.z % b.z, a.w % b.w)

/** Computes a % b, component by component modtiplication */
export const vec2_modScalar = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: number) =>
  vec2_set(out, a.x % b, a.y % b)

/** Computes a % b, component by component modtiplication */
export const vec3_modScalar = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: number) =>
  vec3_set(out, a.x % b, a.y % b, a.z % b)

/** Computes a % b, component by component modtiplication */
export const vec4_modScalar = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: number) =>
  vec4_set(out, a.x % b, a.y % b, a.z % b, a.w % b)

/** Computes a % b, component by component modtiplication */
export const vec2_scalarMod = <R extends Vec2Out = Vec2Out>(out: R, a: number, b: Vec2In) =>
  vec2_set(out, a % b.x, a % b.y)

/** Computes a % b, component by component modtiplication */
export const vec3_scalarMod = <R extends Vec3Out = Vec3Out>(out: R, a: number, b: Vec3In) =>
  vec3_set(out, a % b.x, a % b.y, a % b.z)

/** Computes a % b, component by component modtiplication */
export const vec4_scalarMod = <R extends Vec4Out = Vec4Out>(out: R, a: number, b: Vec4In) =>
  vec4_set(out, a % b.x, a % b.y, a % b.z, a % b.w)

export const vec2_normalize = <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In = out) =>
  vec2_divScalar(out, v, vec2_length(v) || 1)

export const vec3_normalize = <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In = out) =>
  vec3_divScalar(out, v, vec3_length(v) || 1)

export const vec4_normalize = <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In = out) =>
  vec4_divScalar(out, v, vec4_length(v) || 1)

/** Computes a ** b, component by component */
export const vec2_pow = <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In, exponent: Vec2In) =>
  vec2_set(out, v.x ** exponent.x, v.y ** exponent.y)

/** Computes a ** b, component by component */
export const vec3_pow = <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In, exponent: Vec3In) =>
  vec3_set(out, v.x ** exponent.x, v.y ** exponent.y, v.z ** exponent.z)

/** Computes a ** b, component by component */
export const vec4_pow = <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In, exponent: Vec4In) =>
  vec4_set(out, v.x ** exponent.x, v.y ** exponent.y, v.z ** exponent.z, v.w ** exponent.w)

/** Computes a ** b, component by component */
export const vec2_powScalar = <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In, exponent: number) =>
  vec2_set(out, v.x ** exponent, v.y ** exponent)

/** Computes a ** b, component by component */
export const vec3_powScalar = <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In, exponent: number) =>
  vec3_set(out, v.x ** exponent, v.y ** exponent, v.z ** exponent)

/** Computes a ** b, component by component */
export const vec4_powScalar = <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In, exponent: number) =>
  vec4_set(out, v.x ** exponent, v.y ** exponent, v.z ** exponent, v.w ** exponent)

/** Computes a ** b, component by component */
export const vec2_scalarPow = <R extends Vec2Out = Vec2Out>(out: R, v: number, exponent: Vec2In) =>
  vec2_set(out, v ** exponent.x, v ** exponent.y)

/** Computes a ** b, component by component */
export const vec3_scalarPow = <R extends Vec3Out = Vec3Out>(out: R, v: number, exponent: Vec3In) =>
  vec3_set(out, v ** exponent.x, v ** exponent.y, v ** exponent.z)

/** Computes a ** b, component by component */
export const vec4_scalarPow = <R extends Vec4Out = Vec4Out>(out: R, v: number, exponent: Vec4In) =>
  vec4_set(out, v ** exponent.x, v ** exponent.y, v ** exponent.z, v ** exponent.w)

export const vec2_min = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In) =>
  vec2_set(out, min(a.x, b.x), min(a.y, b.y))

export const vec3_min = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In) =>
  vec3_set(out, min(a.x, b.x), min(a.y, b.y), min(a.z, b.z))

export const vec4_min = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In) =>
  vec4_set(out, min(a.x, b.x), min(a.y, b.y), min(a.z, b.z), min(a.w, b.w))

export const vec2_minScalar = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: number) =>
  vec2_set(out, min(a.x, b), min(a.y, b))

export const vec3_minScalar = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: number) =>
  vec3_set(out, min(a.x, b), min(a.y, b), min(a.z, b))

export const vec4_minScalar = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: number) =>
  vec4_set(out, min(a.x, b), min(a.y, b), min(a.z, b), min(a.w, b))

export const vec2_max = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In) =>
  vec2_set(out, max(a.x, b.x), max(a.y, b.y))

export const vec3_max = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In) =>
  vec3_set(out, max(a.x, b.x), max(a.y, b.y), max(a.z, b.z))

export const vec4_max = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In) =>
  vec4_set(out, max(a.x, b.x), max(a.y, b.y), max(a.z, b.z), max(a.w, b.w))

export const vec2_maxScalar = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: number) =>
  vec2_set(out, max(a.x, b), max(a.y, b))

export const vec3_maxScalar = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: number) =>
  vec3_set(out, max(a.x, b), max(a.y, b), max(a.z, b))

export const vec4_maxScalar = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: number) =>
  vec4_set(out, max(a.x, b), max(a.y, b), max(a.z, b), max(a.w, b))

export const vec2_clamp = <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In, minimum: Vec2In, maximum: Vec2In) =>
  vec2_set(out, clamp(v.x, minimum.x, maximum.x), clamp(v.y, minimum.y, maximum.y))

export const vec3_clamp = <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In, minimum: Vec3In, maximum: Vec3In) =>
  vec3_set(out, clamp(v.x, minimum.x, maximum.x), clamp(v.y, minimum.y, maximum.y), clamp(v.z, minimum.z, maximum.z))

export const vec4_clamp = <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In, minimum: Vec4In, maximum: Vec4In) =>
  vec4_set(
    out,
    clamp(v.x, minimum.x, maximum.x),
    clamp(v.y, minimum.y, maximum.y),
    clamp(v.z, minimum.z, maximum.z),
    clamp(v.w, minimum.w, maximum.w)
  )

export const vec2_clampScalar = <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In, minimum?: number, maximum?: number) =>
  vec2_set(out, clamp(v.x, minimum, maximum), clamp(v.y, minimum, maximum))

export const vec3_clampScalar = <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In, minimum?: number, maximum?: number) =>
  vec3_set(out, clamp(v.x, minimum, maximum), clamp(v.y, minimum, maximum), clamp(v.z, minimum, maximum))

export const vec4_clampScalar = <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In, minimum?: number, maximum?: number) =>
  vec4_set(
    out,
    clamp(v.x, minimum, maximum),
    clamp(v.y, minimum, maximum),
    clamp(v.z, minimum, maximum),
    clamp(v.w, minimum, maximum)
  )

export const vec2_euclideanModulo = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In) =>
  vec2_set(out, euclideanModulo(a.x, b.x), euclideanModulo(a.y, b.y))

export const vec3_euclideanModulo = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In) =>
  vec3_set(out, euclideanModulo(a.x, b.x), euclideanModulo(a.y, b.y), euclideanModulo(a.z, b.z))

export const vec4_euclideanModulo = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In) =>
  vec4_set(
    out,
    euclideanModulo(a.x, b.x),
    euclideanModulo(a.y, b.y),
    euclideanModulo(a.z, b.z),
    euclideanModulo(a.w, b.w)
  )

export const vec2_euclideanModuloScalar = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: number) =>
  vec2_set(out, euclideanModulo(a.x, b), euclideanModulo(a.y, b))

export const vec3_euclideanModuloScalar = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: number) =>
  vec3_set(out, euclideanModulo(a.x, b), euclideanModulo(a.y, b), euclideanModulo(a.z, b))

export const vec4_euclideanModuloScalar = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: number) =>
  vec4_set(out, euclideanModulo(a.x, b), euclideanModulo(a.y, b), euclideanModulo(a.z, b), euclideanModulo(a.w, b))

export const vec2_scalarEuclideanModulo = <R extends Vec2Out = Vec2Out>(out: R, a: number, b: Vec2In) =>
  vec2_set(out, euclideanModulo(a, b.x), euclideanModulo(a, b.y))

export const vec3_scalarEuclideanModulo = <R extends Vec3Out = Vec3Out>(out: R, a: number, b: Vec3In) =>
  vec3_set(out, euclideanModulo(a, b.x), euclideanModulo(a, b.y), euclideanModulo(a, b.z))

export const vec4_scalarEuclideanModulo = <R extends Vec4Out = Vec4Out>(out: R, a: number, b: Vec4In) =>
  vec4_set(out, euclideanModulo(a, b.x), euclideanModulo(a, b.y), euclideanModulo(a, b.z), euclideanModulo(a, b.w))

/**
 * Computes the absolute value of a number (the value without regard to whether it is positive or negative).
 * For example, the absolute value of -5 is the same as the absolute value of 5.
 */
export const vec2_abs = /* @__PURE__ */ vec2_makeSetEach(abs)

/**
 * Computes the absolute value of a number (the value without regard to whether it is positive or negative).
 * For example, the absolute value of -5 is the same as the absolute value of 5.
 */
export const vec3_abs = /* @__PURE__ */ vec3_makeSetEach(abs)

/**
 * Computes the absolute value of a number (the value without regard to whether it is positive or negative).
 * For example, the absolute value of -5 is the same as the absolute value of 5.
 */
export const vec4_abs = /* @__PURE__ */ vec4_makeSetEach(abs)

export const vec2_acos = /* @__PURE__ */ vec2_makeSetEach(acos)

export const vec3_acos = /* @__PURE__ */ vec3_makeSetEach(acos)

export const vec4_acos = /* @__PURE__ */ vec4_makeSetEach(acos)

/** Computes the arc cosine (or inverse cosine) of a number. The number is clamped between -1 to 1 to avoid NaN. */
export const vec2_acosSafe = /* @__PURE__ */ vec2_makeSetEach(acosSafe)

/** Computes the arc cosine (or inverse cosine) of a number. The number is clamped between -1 to 1 to avoid NaN. */
export const vec3_acosSafe = /* @__PURE__ */ vec3_makeSetEach(acosSafe)

/** Computes the arc cosine (or inverse cosine) of a number. The number is clamped between -1 to 1 to avoid NaN. */
export const vec4_acosSafe = /* @__PURE__ */ vec4_makeSetEach(acosSafe)

export const vec2_acosh = /* @__PURE__ */ vec2_makeSetEach(acosh)

export const vec3_acosh = /* @__PURE__ */ vec3_makeSetEach(acosh)

export const vec4_acosh = /* @__PURE__ */ vec4_makeSetEach(acosh)

/** Trigonometry - acoth - The inverse hyperbolic cotangent of x, atanh(1 / x) */
export const vec2_acoth = /* @__PURE__ */ vec2_makeSetEach(acoth)

/** Trigonometry - acoth - The inverse hyperbolic cotangent of x, atanh(1 / x) */
export const vec3_acoth = /* @__PURE__ */ vec3_makeSetEach(acoth)

/** Trigonometry - acoth - The inverse hyperbolic cotangent of x, atanh(1 / x) */
export const vec4_acoth = /* @__PURE__ */ vec4_makeSetEach(acoth)

/** Trigonometry - acsc - Gets the inverse cosecant function (arccosecant function) of x, asin(1 / x) */
export const vec2_acsc = /* @__PURE__ */ vec2_makeSetEach(acsc)

/** Trigonometry - acsc - Gets the inverse cosecant function (arccosecant function) of x, asin(1 / x) */
export const vec3_acsc = /* @__PURE__ */ vec3_makeSetEach(acsc)

/** Trigonometry - acsc - Gets the inverse cosecant function (arccosecant function) of x, asin(1 / x) */
export const vec4_acsc = /* @__PURE__ */ vec4_makeSetEach(acsc)

/** Trigonometry - acsch - Gets the inverse hyperbolic cosecant of x, asinh(1 / x) */
export const vec2_acsch = /* @__PURE__ */ vec2_makeSetEach(acsch)

/** Trigonometry - acsch - Gets the inverse hyperbolic cosecant of x, asinh(1 / x) */
export const vec3_acsch = /* @__PURE__ */ vec3_makeSetEach(acsch)

/** Trigonometry - acsch - Gets the inverse hyperbolic cosecant of x, asinh(1 / x) */
export const vec4_acsch = /* @__PURE__ */ vec4_makeSetEach(acsch)

/** Wraps an angle so that the returned value will be between 0 (included) and 2*PI (excluded) following a triangle wave shape. */
export const vec2_angleWrapPingPong = /* @__PURE__ */ vec2_makeSetEach(angleWrapPingPong)

/** Wraps an angle so that the returned value will be between 0 (included) and 2*PI (excluded) following a triangle wave shape. */
export const vec3_angleWrapPingPong = /* @__PURE__ */ vec3_makeSetEach(angleWrapPingPong)

/** Wraps an angle so that the returned value will be between 0 (included) and 2*PI (excluded) following a triangle wave shape. */
export const vec4_angleWrapPingPong = /* @__PURE__ */ vec4_makeSetEach(angleWrapPingPong)

/** Trigonometry - Wrap an angle so it is always between -PI (excluded) and PI (included) */
export const vec2_angleWrapSigned = /* @__PURE__ */ vec2_makeSetEach(angleWrapSigned)

/** Trigonometry - Wrap an angle so it is always between -PI (excluded) and PI (included) */
export const vec3_angleWrapSigned = /* @__PURE__ */ vec3_makeSetEach(angleWrapSigned)

/** Trigonometry - Wrap an angle so it is always between -PI (excluded) and PI (included) */
export const vec4_angleWrapSigned = /* @__PURE__ */ vec4_makeSetEach(angleWrapSigned)

/** Trigonometry - Wrap an angle so it is always between 0 (included) and 2*PI (excluded) */
export const vec2_angleWrapUnsigned = /* @__PURE__ */ vec2_makeSetEach(angleWrapUnsigned)

/** Trigonometry - Wrap an angle so it is always between 0 (included) and 2*PI (excluded) */
export const vec3_angleWrapUnsigned = /* @__PURE__ */ vec3_makeSetEach(angleWrapUnsigned)

/** Trigonometry - Wrap an angle so it is always between 0 (included) and 2*PI (excluded) */
export const vec4_angleWrapUnsigned = /* @__PURE__ */ vec4_makeSetEach(angleWrapUnsigned)

/** Trigonometry - asec - Gets the Inverse Secant (sec-1) of x in radians, acos(1 / x) */
export const vec2_asec = /* @__PURE__ */ vec2_makeSetEach(asec)

/** Trigonometry - asec - Gets the Inverse Secant (sec-1) of x in radians, acos(1 / x) */
export const vec3_asec = /* @__PURE__ */ vec3_makeSetEach(asec)

/** Trigonometry - asec - Gets the Inverse Secant (sec-1) of x in radians, acos(1 / x) */
export const vec4_asec = /* @__PURE__ */ vec4_makeSetEach(asec)

/** Trigonometry - asech - Gets the inverse hyperbolic secant of x, acosh(1 / x) */
export const vec2_asech = /* @__PURE__ */ vec2_makeSetEach(asech)

/** Trigonometry - asech - Gets the inverse hyperbolic secant of x, acosh(1 / x) */
export const vec3_asech = /* @__PURE__ */ vec3_makeSetEach(asech)

/** Trigonometry - asech - Gets the inverse hyperbolic secant of x, acosh(1 / x) */
export const vec4_asech = /* @__PURE__ */ vec4_makeSetEach(asech)

export const vec2_asin = /* @__PURE__ */ vec2_makeSetEach(asin)

export const vec3_asin = /* @__PURE__ */ vec3_makeSetEach(asin)

export const vec4_asin = /* @__PURE__ */ vec4_makeSetEach(asin)

/** Computes the arcsine of a number. The number is clamped between -1 to 1 to avoid NaN. */
export const vec2_asinSafe = /* @__PURE__ */ vec2_makeSetEach(asinSafe)

/** Computes the arcsine of a number. The number is clamped between -1 to 1 to avoid NaN. */
export const vec3_asinSafe = /* @__PURE__ */ vec3_makeSetEach(asinSafe)

/** Computes the arcsine of a number. The number is clamped between -1 to 1 to avoid NaN. */
export const vec4_asinSafe = /* @__PURE__ */ vec4_makeSetEach(asinSafe)

export const vec2_asinh = /* @__PURE__ */ vec2_makeSetEach(asinh)

export const vec3_asinh = /* @__PURE__ */ vec3_makeSetEach(asinh)

export const vec4_asinh = /* @__PURE__ */ vec4_makeSetEach(asinh)

export const vec2_atan = /* @__PURE__ */ vec2_makeSetEach(atan)

export const vec3_atan = /* @__PURE__ */ vec3_makeSetEach(atan)

export const vec4_atan = /* @__PURE__ */ vec4_makeSetEach(atan)

export const vec2_atanh = /* @__PURE__ */ vec2_makeSetEach(atanh)

export const vec3_atanh = /* @__PURE__ */ vec3_makeSetEach(atanh)

export const vec4_atanh = /* @__PURE__ */ vec4_makeSetEach(atanh)

export const vec2_cbrt = /* @__PURE__ */ vec2_makeSetEach(cbrt)

export const vec3_cbrt = /* @__PURE__ */ vec3_makeSetEach(cbrt)

export const vec4_cbrt = /* @__PURE__ */ vec4_makeSetEach(cbrt)

export const vec2_ceil = /* @__PURE__ */ vec2_makeSetEach(ceil)

export const vec3_ceil = /* @__PURE__ */ vec3_makeSetEach(ceil)

export const vec4_ceil = /* @__PURE__ */ vec4_makeSetEach(ceil)

/**
 * Gets the power of two greater or equal to the given value, 2 ** ceil(log2(value))
 * Useful to compute texture sizes.
 */
export const vec2_ceilPow2 = /* @__PURE__ */ vec2_makeSetEach(ceilPow2)

/**
 * Gets the power of two greater or equal to the given value, 2 ** ceil(log2(value))
 * Useful to compute texture sizes.
 */
export const vec3_ceilPow2 = /* @__PURE__ */ vec3_makeSetEach(ceilPow2)

/**
 * Gets the power of two greater or equal to the given value, 2 ** ceil(log2(value))
 * Useful to compute texture sizes.
 */
export const vec4_ceilPow2 = /* @__PURE__ */ vec4_makeSetEach(ceilPow2)

export const vec2_cos = /* @__PURE__ */ vec2_makeSetEach(cos)

export const vec3_cos = /* @__PURE__ */ vec3_makeSetEach(cos)

export const vec4_cos = /* @__PURE__ */ vec4_makeSetEach(cos)

export const vec2_cosh = /* @__PURE__ */ vec2_makeSetEach(cosh)

export const vec3_cosh = /* @__PURE__ */ vec3_makeSetEach(cosh)

export const vec4_cosh = /* @__PURE__ */ vec4_makeSetEach(cosh)

/** Trigonometry - cot - Gets the cotangent of x, 1 / tan(x) */
export const vec2_cot = /* @__PURE__ */ vec2_makeSetEach(cot)

/** Trigonometry - cot - Gets the cotangent of x, 1 / tan(x) */
export const vec3_cot = /* @__PURE__ */ vec3_makeSetEach(cot)

/** Trigonometry - cot - Gets the cotangent of x, 1 / tan(x) */
export const vec4_cot = /* @__PURE__ */ vec4_makeSetEach(cot)

/** Trigonometry - coth - Gets the hyperbolic tangent of x, 1 / tanh(x) */
export const vec2_coth = /* @__PURE__ */ vec2_makeSetEach(coth)

/** Trigonometry - coth - Gets the hyperbolic tangent of x, 1 / tanh(x) */
export const vec3_coth = /* @__PURE__ */ vec3_makeSetEach(coth)

/** Trigonometry - coth - Gets the hyperbolic tangent of x, 1 / tanh(x) */
export const vec4_coth = /* @__PURE__ */ vec4_makeSetEach(coth)

/** Trigonometry - csc - Gets the cosecant of x, 1 / sin(x) */
export const vec2_csc = /* @__PURE__ */ vec2_makeSetEach(csc)

/** Trigonometry - csc - Gets the cosecant of x, 1 / sin(x) */
export const vec3_csc = /* @__PURE__ */ vec3_makeSetEach(csc)

/** Trigonometry - csc - Gets the cosecant of x, 1 / sin(x) */
export const vec4_csc = /* @__PURE__ */ vec4_makeSetEach(csc)

/** Trigonometry - csch - Gets the hyperbolic cosecant of x, 1 / sinh(x) */
export const vec2_csch = /* @__PURE__ */ vec2_makeSetEach(csch)

/** Trigonometry - csch - Gets the hyperbolic cosecant of x, 1 / sinh(x) */
export const vec3_csch = /* @__PURE__ */ vec3_makeSetEach(csch)

/** Trigonometry - csch - Gets the hyperbolic cosecant of x, 1 / sinh(x) */
export const vec4_csch = /* @__PURE__ */ vec4_makeSetEach(csch)

/** Converts an angle in degrees to radians (degrees * PI / 180) */
export const vec2_degToRad = /* @__PURE__ */ vec2_makeSetEach(degToRad)

/** Converts an angle in degrees to radians (degrees * PI / 180) */
export const vec3_degToRad = /* @__PURE__ */ vec3_makeSetEach(degToRad)

/** Converts an angle in degrees to radians (degrees * PI / 180) */
export const vec4_degToRad = /* @__PURE__ */ vec4_makeSetEach(degToRad)

export const vec2_exp = /* @__PURE__ */ vec2_makeSetEach(exp)

export const vec3_exp = /* @__PURE__ */ vec3_makeSetEach(exp)

export const vec4_exp = /* @__PURE__ */ vec4_makeSetEach(exp)

export const vec2_expm1 = /* @__PURE__ */ vec2_makeSetEach(expm1)

export const vec3_expm1 = /* @__PURE__ */ vec3_makeSetEach(expm1)

export const vec4_expm1 = /* @__PURE__ */ vec4_makeSetEach(expm1)

export const vec2_floor = /* @__PURE__ */ vec2_makeSetEach(floor)

export const vec3_floor = /* @__PURE__ */ vec3_makeSetEach(floor)

export const vec4_floor = /* @__PURE__ */ vec4_makeSetEach(floor)

/**
 * Gets the power of two less or equal to the given value, 2 ** floor(log2(value)).
 * Useful to compute texture sizes.
 */
export const vec2_floorPow2 = /* @__PURE__ */ vec2_makeSetEach(floorPow2)

/**
 * Gets the power of two less or equal to the given value, 2 ** floor(log2(value)).
 * Useful to compute texture sizes.
 */
export const vec3_floorPow2 = /* @__PURE__ */ vec3_makeSetEach(floorPow2)

/**
 * Gets the power of two less or equal to the given value, 2 ** floor(log2(value)).
 * Useful to compute texture sizes.
 */
export const vec4_floorPow2 = /* @__PURE__ */ vec4_makeSetEach(floorPow2)

/** Computes the fractional part of a number. 5.212 => 0.212 */
export const vec2_fract = /* @__PURE__ */ vec2_makeSetEach(fract)

/** Computes the fractional part of a number. 5.212 => 0.212 */
export const vec3_fract = /* @__PURE__ */ vec3_makeSetEach(fract)

/** Computes the fractional part of a number. 5.212 => 0.212 */
export const vec4_fract = /* @__PURE__ */ vec4_makeSetEach(fract)

/** Computes the nearest single precision float representation of a number. */
export const vec2_fround = /* @__PURE__ */ vec2_makeSetEach(fround)

/** Computes the nearest single precision float representation of a number. */
export const vec3_fround = /* @__PURE__ */ vec3_makeSetEach(fround)

/** Computes the nearest single precision float representation of a number. */
export const vec4_fround = /* @__PURE__ */ vec4_makeSetEach(fround)

/** Converts each component to a 32 bit integer */
export const vec2_int32 = /* @__PURE__ */ vec2_makeSetEach(int32_fromFloat)

/** Converts each component to a 32 bit integer */
export const vec3_int32 = /* @__PURE__ */ vec3_makeSetEach(int32_fromFloat)

/** Converts each component to a 32 bit integer */
export const vec4_int32 = /* @__PURE__ */ vec4_makeSetEach(int32_fromFloat)

/** Binary not for each component of the vector */
export const vec2_int32_not = /* @__PURE__ */ vec2_makeSetEach(int32_not)

/** Binary not for each component of the vector */
export const vec3_int32_not = /* @__PURE__ */ vec2_makeSetEach(int32_not)

/** Binary not for each component of the vector */
export const vec4_int32_not = /* @__PURE__ */ vec2_makeSetEach(int32_not)

/** Binary and of each components of two vectors */
export const vec2_int32_and = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2, b: Vec2) =>
  vec2_set(out, a.x & b.x, a.y & b.y)

/** Binary and of each components of two vectors */
export const vec3_int32_and = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3, b: Vec3) =>
  vec3_set(out, a.x & b.x, a.y & b.y, a.z & b.z)

/** Binary and of each components of two vectors */
export const vec4_int32_and = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4, b: Vec4) =>
  vec4_set(out, a.x & b.x, a.y & b.y, a.z & b.z, a.w & b.w)

/** Binary or of each components of two vectors */
export const vec2_int32_or = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2, b: Vec2) =>
  vec2_set(out, a.x | b.x, a.y | b.y)

/** Binary or of each components of two vectors */
export const vec3_int32_or = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3, b: Vec3) =>
  vec3_set(out, a.x | b.x, a.y | b.y, a.z | b.z)

/** Binary or of each components of two vectors */
export const vec4_int32_or = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4, b: Vec4) =>
  vec4_set(out, a.x | b.x, a.y | b.y, a.z | b.z, a.w | b.w)

/** Binary xor of each components of two vectors */
export const vec2_int32_xor = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2, b: Vec2) =>
  vec2_set(out, a.x ^ b.x, a.y ^ b.y)

/** Binary xor of each components of two vectors */
export const vec3_int32_xor = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3, b: Vec3) =>
  vec3_set(out, a.x ^ b.x, a.y ^ b.y, a.z ^ b.z)

/** Binary xor of each components of two vectors */
export const vec4_int32_xor = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4, b: Vec4) =>
  vec4_set(out, a.x ^ b.x, a.y ^ b.y, a.z ^ b.z, a.w ^ b.w)

/**
 * Normal distribution, Bell curve, Gaussian curve.
 * https://en.wikipedia.org/wiki/Normal_distribution
 */
export const vec2_gaussianDistribution = /* @__PURE__ */ vec2_makeSetEach(gaussianDistribution)

/**
 * Normal distribution, Bell curve, Gaussian curve.
 * https://en.wikipedia.org/wiki/Normal_distribution
 */
export const vec3_gaussianDistribution = /* @__PURE__ */ vec3_makeSetEach(gaussianDistribution)

/**
 * Normal distribution, Bell curve, Gaussian curve.
 * https://en.wikipedia.org/wiki/Normal_distribution
 */
export const vec4_gaussianDistribution = /* @__PURE__ */ vec4_makeSetEach(gaussianDistribution)

/** Trigonometry - gudermannian - atan(sinh(x)) */
export const vec2_gudermannian = /* @__PURE__ */ vec2_makeSetEach(gudermannian)

/** Trigonometry - gudermannian - atan(sinh(x)) */
export const vec3_gudermannian = /* @__PURE__ */ vec3_makeSetEach(gudermannian)

/** Trigonometry - gudermannian - atan(sinh(x)) */
export const vec4_gudermannian = /* @__PURE__ */ vec4_makeSetEach(gudermannian)

/** Trigonometry - invGudermannian - atanh(sin(x)) */
export const vec2_gudermannianInverse = /* @__PURE__ */ vec2_makeSetEach(gudermannianInverse)

/** Trigonometry - invGudermannian - atanh(sin(x)) */
export const vec3_gudermannianInverse = /* @__PURE__ */ vec3_makeSetEach(gudermannianInverse)

/** Trigonometry - invGudermannian - atanh(sin(x)) */
export const vec4_gudermannianInverse = /* @__PURE__ */ vec4_makeSetEach(gudermannianInverse)

/**
 * Grows fast, decay slow. h * exp(1 - h). Multiply h with a constant to obtain different impulse shapes
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const vec2_impulseExp = /* @__PURE__ */ vec2_makeSetEach(impulseExp)

/**
 * Grows fast, decay slow. h * exp(1 - h). Multiply h with a constant to obtain different impulse shapes
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const vec3_impulseExp = /* @__PURE__ */ vec3_makeSetEach(impulseExp)

/**
 * Grows fast, decay slow. h * exp(1 - h). Multiply h with a constant to obtain different impulse shapes
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const vec4_impulseExp = /* @__PURE__ */ vec4_makeSetEach(impulseExp)

/** Computes the inverse of the square root of a number. 1 / sqrt(x) */
export const vec2_invSqrt = /* @__PURE__ */ vec2_makeSetEach(invSqrt)

/** Computes the inverse of the square root of a number. 1 / sqrt(x) */
export const vec3_invSqrt = /* @__PURE__ */ vec3_makeSetEach(invSqrt)

/** Computes the inverse of the square root of a number. 1 / sqrt(x) */
export const vec4_invSqrt = /* @__PURE__ */ vec4_makeSetEach(invSqrt)

export const vec2_log = /* @__PURE__ */ vec2_makeSetEach(log)

export const vec3_log = /* @__PURE__ */ vec3_makeSetEach(log)

export const vec4_log = /* @__PURE__ */ vec4_makeSetEach(log)

export const vec2_log10 = /* @__PURE__ */ vec2_makeSetEach(log10)

export const vec3_log10 = /* @__PURE__ */ vec3_makeSetEach(log10)

export const vec4_log10 = /* @__PURE__ */ vec4_makeSetEach(log10)

/** The natural logarithm of one minus the specified value. log1p(-x) */
export const vec2_log1m = /* @__PURE__ */ vec2_makeSetEach(log1m)

/** The natural logarithm of one minus the specified value. log1p(-x) */
export const vec3_log1m = /* @__PURE__ */ vec3_makeSetEach(log1m)

/** The natural logarithm of one minus the specified value. log1p(-x) */
export const vec4_log1m = /* @__PURE__ */ vec4_makeSetEach(log1m)

/** The natural logarithm of one minus the exponential of the specified value. */
export const vec2_log1mexp = /* @__PURE__ */ vec2_makeSetEach(log1mexp)

/** The natural logarithm of one minus the exponential of the specified value. */
export const vec3_log1mexp = /* @__PURE__ */ vec3_makeSetEach(log1mexp)

/** The natural logarithm of one minus the exponential of the specified value. */
export const vec4_log1mexp = /* @__PURE__ */ vec4_makeSetEach(log1mexp)

export const vec2_log1p = /* @__PURE__ */ vec2_makeSetEach(log1p)

export const vec3_log1p = /* @__PURE__ */ vec3_makeSetEach(log1p)

export const vec4_log1p = /* @__PURE__ */ vec4_makeSetEach(log1p)

/** The log of 1 plus the exponential of the specified value. */
export const vec2_log1pexp = /* @__PURE__ */ vec2_makeSetEach(log1pexp)

/** The log of 1 plus the exponential of the specified value. */
export const vec3_log1pexp = /* @__PURE__ */ vec3_makeSetEach(log1pexp)

/** The log of 1 plus the exponential of the specified value. */
export const vec4_log1pexp = /* @__PURE__ */ vec4_makeSetEach(log1pexp)

export const vec2_log2 = /* @__PURE__ */ vec2_makeSetEach(log2)

export const vec3_log2 = /* @__PURE__ */ vec3_makeSetEach(log2)

export const vec4_log2 = /* @__PURE__ */ vec4_makeSetEach(log2)

/** Computes the logit functio. log(x / (1 - x)). See https://en.wikipedia.org/wiki/Logit */
export const vec2_logit = /* @__PURE__ */ vec2_makeSetEach(logit)

/** Computes the logit functio. log(x / (1 - x)). See https://en.wikipedia.org/wiki/Logit */
export const vec3_logit = /* @__PURE__ */ vec3_makeSetEach(logit)

/** Computes the logit functio. log(x / (1 - x)). See https://en.wikipedia.org/wiki/Logit */
export const vec4_logit = /* @__PURE__ */ vec4_makeSetEach(logit)

/** Computes the square of the given value. */
export const vec2_pow2 = /* @__PURE__ */ vec2_makeSetEach(pow2)

/** Computes the square of the given value. */
export const vec3_pow2 = /* @__PURE__ */ vec3_makeSetEach(pow2)

/** Computes the square of the given value. */
export const vec4_pow2 = /* @__PURE__ */ vec4_makeSetEach(pow2)

/** Computes the cube of the given value. */
export const vec2_pow3 = /* @__PURE__ */ vec2_makeSetEach(pow3)

/** Computes the cube of the given value. */
export const vec3_pow3 = /* @__PURE__ */ vec3_makeSetEach(pow3)

/** Computes the cube of the given value. */
export const vec4_pow3 = /* @__PURE__ */ vec4_makeSetEach(pow3)

/** Computes the 4th power of the given value. */
export const vec2_pow4 = /* @__PURE__ */ vec2_makeSetEach(pow4)

/** Computes the 4th power of the given value. */
export const vec3_pow4 = /* @__PURE__ */ vec3_makeSetEach(pow4)

/** Computes the 4th power of the given value. */
export const vec4_pow4 = /* @__PURE__ */ vec4_makeSetEach(pow4)

/** Computes the 5th power of the given value. */
export const vec2_pow5 = /* @__PURE__ */ vec2_makeSetEach(pow5)

/** Computes the 5th power of the given value. */
export const vec3_pow5 = /* @__PURE__ */ vec3_makeSetEach(pow5)

/** Computes the 5th power of the given value. */
export const vec4_pow5 = /* @__PURE__ */ vec4_makeSetEach(pow5)

/** Computes the 6th power of the given value. */
export const vec2_pow6 = /* @__PURE__ */ vec2_makeSetEach(pow6)

/** Computes the 6th power of the given value. */
export const vec3_pow6 = /* @__PURE__ */ vec3_makeSetEach(pow6)

/** Computes the 6th power of the given value. */
export const vec4_pow6 = /* @__PURE__ */ vec4_makeSetEach(pow6)

/** Computes the 7th power of the given value. */
export const vec2_pow7 = /* @__PURE__ */ vec2_makeSetEach(pow7)

/** Computes the 7th power of the given value. */
export const vec3_pow7 = /* @__PURE__ */ vec3_makeSetEach(pow7)

/** Computes the 7th power of the given value. */
export const vec4_pow7 = /* @__PURE__ */ vec4_makeSetEach(pow7)

/** Computes the 8th power of the given value. */
export const vec2_pow8 = /* @__PURE__ */ vec2_makeSetEach(pow8)

/** Computes the 8th power of the given value. */
export const vec3_pow8 = /* @__PURE__ */ vec3_makeSetEach(pow8)

/** Computes the 8th power of the given value. */
export const vec4_pow8 = /* @__PURE__ */ vec4_makeSetEach(pow8)

/** Computes x to the power of x, pow(x, x) */
export const vec2_powSelf = /* @__PURE__ */ vec2_makeSetEach(powSelf)

/** Computes x to the power of x, pow(x, x) */
export const vec3_powSelf = /* @__PURE__ */ vec3_makeSetEach(powSelf)

/** Computes x to the power of x, pow(x, x) */
export const vec4_powSelf = /* @__PURE__ */ vec4_makeSetEach(powSelf)

/** Converts an angle in radians to degrees (radians * 180 / PI) */
export const vec2_radToDeg = /* @__PURE__ */ vec2_makeSetEach(radToDeg)

/** Converts an angle in radians to degrees (radians * 180 / PI) */
export const vec3_radToDeg = /* @__PURE__ */ vec3_makeSetEach(radToDeg)

/** Converts an angle in radians to degrees (radians * 180 / PI) */
export const vec4_radToDeg = /* @__PURE__ */ vec4_makeSetEach(radToDeg)

export const vec2_round = /* @__PURE__ */ vec2_makeSetEach(round)

export const vec3_round = /* @__PURE__ */ vec3_makeSetEach(round)

export const vec4_round = /* @__PURE__ */ vec4_makeSetEach(round)

/** Computes an integer that is as far from zero as possible. 0.1 => 1, -0.1 => 1 */
export const vec2_roundFromZero = /* @__PURE__ */ vec2_makeSetEach(roundFromZero)

/** Computes an integer that is as far from zero as possible. 0.1 => 1, -0.1 => 1 */
export const vec3_roundFromZero = /* @__PURE__ */ vec3_makeSetEach(roundFromZero)

/** Computes an integer that is as far from zero as possible. 0.1 => 1, -0.1 => 1 */
export const vec4_roundFromZero = /* @__PURE__ */ vec4_makeSetEach(roundFromZero)

/** Computes an integer that is as near to zero as possible. 0.1 => 0, -0.1 => 0 */
export const vec2_roundToZero = /* @__PURE__ */ vec2_makeSetEach(roundToZero)

/** Computes an integer that is as near to zero as possible. 0.1 => 0, -0.1 => 0 */
export const vec3_roundToZero = /* @__PURE__ */ vec3_makeSetEach(roundToZero)

/** Computes an integer that is as near to zero as possible. 0.1 => 0, -0.1 => 0 */
export const vec4_roundToZero = /* @__PURE__ */ vec4_makeSetEach(roundToZero)

/** Trigonometry - sec - Gets the secant of x, 1 / cos(x) */
export const vec2_sec = /* @__PURE__ */ vec2_makeSetEach(sec)

/** Trigonometry - sec - Gets the secant of x, 1 / cos(x) */
export const vec3_sec = /* @__PURE__ */ vec3_makeSetEach(sec)

/** Trigonometry - sec - Gets the secant of x, 1 / cos(x) */
export const vec4_sec = /* @__PURE__ */ vec4_makeSetEach(sec)

/** Computes the sigmoid function. https://en.wikipedia.org/wiki/Sigmoid_function */
export const vec2_sigmoid = /* @__PURE__ */ vec2_makeSetEach(sigmoid)

/** Computes the sigmoid function. https://en.wikipedia.org/wiki/Sigmoid_function */
export const vec3_sigmoid = /* @__PURE__ */ vec3_makeSetEach(sigmoid)

/** Computes the sigmoid function. https://en.wikipedia.org/wiki/Sigmoid_function */
export const vec4_sigmoid = /* @__PURE__ */ vec4_makeSetEach(sigmoid)

/** Computes the gradient of the sigmoid function, sigmoid(z) * (1 - sigmoid(z)) */
export const vec2_sigmoidGradient = /* @__PURE__ */ vec2_makeSetEach(sigmoidGradient)

/** Computes the gradient of the sigmoid function, sigmoid(z) * (1 - sigmoid(z)) */
export const vec3_sigmoidGradient = /* @__PURE__ */ vec3_makeSetEach(sigmoidGradient)

/** Computes the gradient of the sigmoid function, sigmoid(z) * (1 - sigmoid(z)) */
export const vec4_sigmoidGradient = /* @__PURE__ */ vec4_makeSetEach(sigmoidGradient)

/** Computes the inverse sigmoid function, log(a) - log(1 - a) */
export const vec2_sigmoidInverse = /* @__PURE__ */ vec2_makeSetEach(sigmoidInverse)

/** Computes the inverse sigmoid function, log(a) - log(1 - a) */
export const vec3_sigmoidInverse = /* @__PURE__ */ vec3_makeSetEach(sigmoidInverse)

/** Computes the inverse sigmoid function, log(a) - log(1 - a) */
export const vec4_sigmoidInverse = /* @__PURE__ */ vec4_makeSetEach(sigmoidInverse)

/**
 * Computes the sign of the x, indicating whether x is positive, negative or zero.
 * Returs -1 if x is negative. Computes +1 if x is positive. Computes -0 if x is -0. Computes NaN if x is NaN.
 */
export const vec2_sign = /* @__PURE__ */ vec2_makeSetEach(sign)

/**
 * Computes the sign of the x, indicating whether x is positive, negative or zero.
 * Returs -1 if x is negative. Computes +1 if x is positive. Computes -0 if x is -0. Computes NaN if x is NaN.
 */
export const vec3_sign = /* @__PURE__ */ vec3_makeSetEach(sign)

/**
 * Computes the sign of the x, indicating whether x is positive, negative or zero.
 * Returs -1 if x is negative. Computes +1 if x is positive. Computes -0 if x is -0. Computes NaN if x is NaN.
 */
export const vec4_sign = /* @__PURE__ */ vec4_makeSetEach(sign)

export const vec2_sin = /* @__PURE__ */ vec2_makeSetEach(sin)

export const vec3_sin = /* @__PURE__ */ vec3_makeSetEach(sin)

export const vec4_sin = /* @__PURE__ */ vec4_makeSetEach(sin)

/** Computes sin(x) / x. If x is zero, Computes 1. */
export const vec2_sinc = /* @__PURE__ */ vec2_makeSetEach(sinc)

/** Computes sin(x) / x. If x is zero, Computes 1. */
export const vec3_sinc = /* @__PURE__ */ vec3_makeSetEach(sinc)

/** Computes sin(x) / x. If x is zero, Computes 1. */
export const vec4_sinc = /* @__PURE__ */ vec4_makeSetEach(sinc)

export const vec2_sinh = /* @__PURE__ */ vec2_makeSetEach(sinh)

export const vec3_sinh = /* @__PURE__ */ vec3_makeSetEach(sinh)

export const vec4_sinh = /* @__PURE__ */ vec4_makeSetEach(sinh)

/** Inverse function of smoothstep https://iquilezles.org/www/articles/ismoothstep/ismoothstep.htm */
export const vec2_smoothstepInverse = /* @__PURE__ */ vec2_makeSetEach(smoothstepInverse)

/** Inverse function of smoothstep https://iquilezles.org/www/articles/ismoothstep/ismoothstep.htm */
export const vec3_smoothstepInverse = /* @__PURE__ */ vec3_makeSetEach(smoothstepInverse)

/** Inverse function of smoothstep https://iquilezles.org/www/articles/ismoothstep/ismoothstep.htm */
export const vec4_smoothstepInverse = /* @__PURE__ */ vec4_makeSetEach(smoothstepInverse)

export const vec2_sqrt = /* @__PURE__ */ vec2_makeSetEach(sqrt)

export const vec3_sqrt = /* @__PURE__ */ vec3_makeSetEach(sqrt)

export const vec4_sqrt = /* @__PURE__ */ vec4_makeSetEach(sqrt)

/** Computes 1 obly if x is inside the interval ]-1/2, +1/2]. See https://en.wikipedia.org/wiki/Rectangular_function */
export const vec2_stepRectangular = /* @__PURE__ */ vec2_makeSetEach(stepRectangular)

/** Computes 1 obly if x is inside the interval ]-1/2, +1/2]. See https://en.wikipedia.org/wiki/Rectangular_function */
export const vec3_stepRectangular = /* @__PURE__ */ vec3_makeSetEach(stepRectangular)

/** Computes 1 obly if x is inside the interval ]-1/2, +1/2]. See https://en.wikipedia.org/wiki/Rectangular_function */
export const vec4_stepRectangular = /* @__PURE__ */ vec4_makeSetEach(stepRectangular)

/** Heaviside step function. return x < 0 ? 0 : 1. */
export const vec2_stepUnit = /* @__PURE__ */ vec2_makeSetEach(stepUnit)

/** Heaviside step function. return x < 0 ? 0 : 1. */
export const vec3_stepUnit = /* @__PURE__ */ vec3_makeSetEach(stepUnit)

/** Heaviside step function. return x < 0 ? 0 : 1. */
export const vec4_stepUnit = /* @__PURE__ */ vec4_makeSetEach(stepUnit)

/** Gets the Stirling approximation gamma of a number. See https://en.wikipedia.org/wiki/Stirling%27s_approximation */
export const vec2_stirlingGamma = /* @__PURE__ */ vec2_makeSetEach(stirlingGamma)

/** Gets the Stirling approximation gamma of a number. See https://en.wikipedia.org/wiki/Stirling%27s_approximation */
export const vec3_stirlingGamma = /* @__PURE__ */ vec3_makeSetEach(stirlingGamma)

/** Gets the Stirling approximation gamma of a number. See https://en.wikipedia.org/wiki/Stirling%27s_approximation */
export const vec4_stirlingGamma = /* @__PURE__ */ vec4_makeSetEach(stirlingGamma)

export const vec2_tan = /* @__PURE__ */ vec2_makeSetEach(tan)

export const vec3_tan = /* @__PURE__ */ vec3_makeSetEach(tan)

export const vec4_tan = /* @__PURE__ */ vec4_makeSetEach(tan)

export const vec2_tanh = /* @__PURE__ */ vec2_makeSetEach(tanh)

export const vec3_tanh = /* @__PURE__ */ vec3_makeSetEach(tanh)

export const vec4_tanh = /* @__PURE__ */ vec4_makeSetEach(tanh)

export const vec2_trunc = /* @__PURE__ */ vec2_makeSetEach(trunc)

export const vec3_trunc = /* @__PURE__ */ vec3_makeSetEach(trunc)

export const vec4_trunc = /* @__PURE__ */ vec4_makeSetEach(trunc)

/** Computes the 2D cross product */
export const vec2_cross = (a: Vec2In, b: Vec2In) => cross2D(a.x, a.y, b.x, b.y)

/** Computes the cross product of two vectors in a 3D space */
export const vec3_cross = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In) =>
  vec3_set(out, a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x)

/** Computes the dot product between two vectors */
export const vec2_dot = (a: Vec2In, b: Vec2In): number => dot2D(a.x, a.y, b.x, b.y)

/** Computes the dot product between two vectors */
export const vec3_dot = (a: Vec3In, b: Vec3In): number => dot3D(a.x, a.y, a.z, b.x, b.y, b.z)

/** Computes the dot product between two vectors */
export const vec4_dot = (a: Vec4In, b: Vec4In): number => dot4D(a.x, a.y, a.z, a.w, b.x, b.y, b.z, b.w)

/** Computes the cross product of three vectors in a 4D space */
export const vec4_cross = <R extends Vec4Out = Vec4Out>(out: R, { x, y, z, w }: Vec4In, V: Vec4In, W: Vec4In) => {
  const A = V.x * W.y - V.y * W.x
  const B = V.x * W.z - V.z * W.x
  const C = V.x * W.w - V.w * W.x
  const D = V.y * W.z - V.z * W.y
  const E = V.y * W.w - V.w * W.y
  const F = V.z * W.w - V.w * W.z
  return vec4_set(out, y * F - z * E + w * D, -(x * F) + z * C - w * B, x * E - y * C + w * A, -(x * D) + y * B - z * A)
}

/** X rotation of a vector */
export const vec3_rotateX = <R extends Vec3Out = Vec3Out>(
  out: R,
  angleInRadians: number,
  { x, y, z }: Vec3 = out,
  { y: originY, z: originZ }: Vec3 = VEC_ZERO
) => {
  const c = cos(angleInRadians)
  const s = sin(angleInRadians)
  const py = y - originY
  const pz = z - originZ
  return vec3_set(out, x, py * c - pz * s, py * s + pz * x)
}

/** Y rotation of a vector */
export const vec3_rotateY = <R extends Vec3Out = Vec3Out>(
  out: R,
  angleInRadians: number,
  { x, y, z }: Vec3 = out,
  { x: originX, z: originZ }: Vec3 = VEC_ZERO
) => {
  const c = cos(angleInRadians)
  const s = sin(angleInRadians)
  const p0 = x - originX
  const p2 = z - originZ
  return vec3_set(out, p2 * s + p0 * c + originX, y, p2 * c - p0 * s + originZ)
}

/** Z rotation of a vector */
export const vec3_rotateZ = <R extends Vec3Out = Vec3Out>(
  out: R,
  angleInRadians: number,
  { x, y, z }: Vec3 = out,
  { x: originX, y: originY }: Vec3 = VEC_ZERO
) => {
  const s = sin(angleInRadians)
  const c = cos(angleInRadians)
  const p0 = x - originX
  const p1 = y - originY
  return vec3_set(out, p0 * c - p1 * s + originX, p0 * s + p1 * c + originY, z)
}

/** Linear interpolation between two vectors */
export const vec2_lerp = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In, t: number) =>
  vec2_set(out, lerp(a.x, b.x, t), lerp(a.y, b.y, t))

/** Linear interpolation between two vectors */
export const vec3_lerp = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In, t: number) =>
  vec3_set(out, lerp(a.x, b.x, t), lerp(a.y, b.y, t), lerp(a.z, b.z, t))

/** Linear interpolation between two vectors */
export const vec4_lerp = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In, t: number) =>
  vec4_set(out, lerp(a.x, b.x, t), lerp(a.y, b.y, t), lerp(a.z, b.z, t), lerp(a.w, b.w, t))

/** Linear interpolation between a vector and a scalar */
export const vec2_lerpScalar = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: number, t: number) =>
  vec2_set(out, lerp(a.x, b, t), lerp(a.y, b, t))

/** Linear interpolation between two vectors */
export const vec3_lerpScalar = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: number, t: number) =>
  vec3_set(out, lerp(a.x, b, t), lerp(a.y, b, t), lerp(a.z, b, t))

/** Linear interpolation between two vectors */
export const vec4_lerpScalar = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: number, t: number) =>
  vec4_set(out, lerp(a.x, b, t), lerp(a.y, b, t), lerp(a.z, b, t), lerp(a.w, b, t))

/** Linear interpolation between a scalar and a vector */
export const vec2_scalarLerp = <R extends Vec2Out = Vec2Out>(out: R, a: number, b: Vec2In, t: number) =>
  vec2_set(out, lerp(a, b.x, t), lerp(a, b.y, t))

/** Linear interpolation between a scalar and a vector */
export const vec3_scalarlerp = <R extends Vec3Out = Vec3Out>(out: R, a: number, b: Vec3In, t: number) =>
  vec3_set(out, lerp(a, b.x, t), lerp(a, b.y, t), lerp(a, b.z, t))

/** Linear interpolation between a scalar and a vector */
export const vec4_scalarlerp = <R extends Vec4Out = Vec4Out>(out: R, a: number, b: Vec4In, t: number) =>
  vec4_set(out, lerp(a, b.x, t), lerp(a, b.y, t), lerp(a, b.z, t), lerp(a, b.w, t))

/** Smoothstep interpolation between two vectors */
export const vec2_smoothstep = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In, t: number) =>
  vec2_set(out, smoothstep(a.x, b.x, t), smoothstep(a.y, b.y, t))

/** Smoothstep interpolation between two vectors */
export const vec3_smoothstep = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In, t: number) =>
  vec3_set(out, smoothstep(a.x, b.x, t), smoothstep(a.y, b.y, t), smoothstep(a.z, b.z, t))

/** Smoothstep interpolation between two vectors */
export const vec4_smoothstep = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In, t: number) =>
  vec4_set(out, smoothstep(a.x, b.x, t), smoothstep(a.y, b.y, t), smoothstep(a.z, b.z, t), smoothstep(a.w, b.w, t))

/** Smoothstep interpolation between a vector and a scalar */
export const vec2_smoothstepScalar = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: number, t: number) =>
  vec2_set(out, smoothstep(a.x, b, t), smoothstep(a.y, b, t))

/** Smoothstep interpolation between a vector and a scalar */
export const vec3_smoothstepScalar = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: number, t: number) =>
  vec3_set(out, smoothstep(a.x, b, t), smoothstep(a.y, b, t), smoothstep(a.z, b, t))

/** Smoothstep interpolation between a vector and a scalar */
export const vec4_smoothstepScalar = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: number, t: number) =>
  vec4_set(out, smoothstep(a.x, b, t), smoothstep(a.y, b, t), smoothstep(a.z, b, t), smoothstep(a.w, b, t))

/** Smoothstep interpolation between a scalar and a vector */
export const vec2_scalarSmoothstep = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: number, t: number) =>
  vec2_smoothstepScalar(out, a, b, 1 - t)

/** Smoothstep interpolation between a scalar and a vector */
export const vec3_scalarSmoothstep = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: number, t: number) =>
  vec3_smoothstepScalar(out, a, b, 1 - t)

/** Smoothstep interpolation between a scalar and a vector */
export const vec4_scalarSmoothstep = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: number, t: number) =>
  vec4_smoothstepScalar(out, a, b, 1 - t)

/** Smootherstep interpolation between two vectors */
export const vec2_smootherstep = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In, t: number) =>
  vec2_set(out, smootherstep(a.x, b.x, t), smootherstep(a.y, b.y, t))

/** Smootherstep interpolation between two vectors */
export const vec3_smootherstep = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In, t: number) =>
  vec3_set(out, smootherstep(a.x, b.x, t), smootherstep(a.y, b.y, t), smootherstep(a.z, b.z, t))

/** Smootherstep interpolation between two vectors */
export const vec4_smootherstep = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In, t: number) =>
  vec4_set(
    out,
    smootherstep(a.x, b.x, t),
    smootherstep(a.y, b.y, t),
    smootherstep(a.z, b.z, t),
    smootherstep(a.w, b.w, t)
  )

/**
 * Snaps a vector to the nearest grid multiple
 * @param value The value to sap
 * @param length The length of the grid cell
 * @returns Value snapped to the grid
 */
export const vec2_gridSnap = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In, length: Vec2In): R =>
  vec2_set(out, gridSnap(v.x, length.x), gridSnap(v.y, length.y))

/**
 * Snaps a vector to the nearest grid multiple
 * @param value The value to sap
 * @param length The length of the grid cell
 * @returns Value snapped to the grid
 */
export const vec3_gridSnap = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In, length: Vec3In): R =>
  vec3_set(out, gridSnap(v.x, length.x), gridSnap(v.y, length.y), gridSnap(v.z, length.z))

/**
 * Snaps a vector to the nearest grid multiple
 * @param value The value to sap
 * @param length The length of the grid cell
 * @returns Value snapped to the grid
 */
export const vec4_gridSnap = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In, length: Vec4In): R =>
  vec4_set(out, gridSnap(v.x, length.x), gridSnap(v.y, length.y), gridSnap(v.z, length.z), gridSnap(v.w, length.w))

/**
 * Snaps a vector to the nearest grid multiple
 * @param value The value to sap
 * @param length The length of the grid cell
 * @returns Value snapped to the grid
 */
export const vec2_gridSnapScalar = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(
  out: R,
  v: Vec2In,
  length: number
): R => vec2_set(out, gridSnap(v.x, length), gridSnap(v.y, length))

/**
 * Snaps a vector to the nearest grid multiple
 * @param value The value to sap
 * @param length The length of the grid cell
 * @returns Value snapped to the grid
 */
export const vec3_gridSnapScalar = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(
  out: R,
  v: Vec3In,
  length: number
): R => vec3_set(out, gridSnap(v.x, length), gridSnap(v.y, length), gridSnap(v.z, length))

/**
 * Snaps a vector to the nearest grid multiple
 * @param value The value to sap
 * @param length The length of the grid cell
 * @returns Value snapped to the grid
 */
export const vec4_gridSnapScalar = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(
  out: R,
  v: Vec4In,
  length: number
): R => vec4_set(out, gridSnap(v.x, length), gridSnap(v.y, length), gridSnap(v.z, length), gridSnap(v.w, length))

/**
 * Wraps (loops) a value so the returned value will be between 0 and length (excluded)
 * @param value The value to wrap so that is looped between 0 and length (excluded)
 * @param length The grid length, cannot be zero.
 */
export const vec2_wrapUnsigned = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In, length: Vec2In): R =>
  vec2_set(out, wrapUnsigned(v.x, length.x), wrapUnsigned(v.y, length.y))

/**
 * Wraps (loops) a value so the returned value will be between 0 and length (excluded)
 * @param value The value to wrap so that is looped between 0 and length (excluded)
 * @param length The grid length, cannot be zero.
 */
export const vec3_wrapUnsigned = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In, length: Vec3In): R =>
  vec3_set(out, wrapUnsigned(v.x, length.x), wrapUnsigned(v.y, length.y), wrapUnsigned(v.z, length.z))

/**
 * Wraps (loops) a value so the returned value will be between 0 and length (excluded)
 * @param value The value to wrap so that is looped between 0 and length (excluded)
 * @param length The grid length, cannot be zero.
 */
export const vec4_wrapUnsigned = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In, length: Vec4In): R =>
  vec4_set(
    out,
    wrapUnsigned(v.x, length.x),
    wrapUnsigned(v.y, length.y),
    wrapUnsigned(v.z, length.z),
    wrapUnsigned(v.w, length.w)
  )

/**
 * Wraps (loops) a value so the returned value will be between 0 and length (excluded)
 * @param value The value to wrap so that is looped between 0 and length (excluded)
 * @param length The grid length, cannot be zero.
 */
export const vec2_wrapUnsignedScalar = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(
  out: R,
  v: Vec2In,
  length: number
): R => vec2_set(out, wrapUnsigned(v.x, length), wrapUnsigned(v.y, length))

/**
 * Wraps (loops) a value so the returned value will be between 0 and length (excluded)
 * @param value The value to wrap so that is looped between 0 and length (excluded)
 * @param length The grid length, cannot be zero.
 */
export const vec3_wrapUnsignedScalar = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(
  out: R,
  v: Vec3In,
  length: number
): R => vec3_set(out, wrapUnsigned(v.x, length), wrapUnsigned(v.y, length), wrapUnsigned(v.z, length))

/**
 * Wraps (loops) a value so the returned value will be between 0 and length (excluded)
 * @param value The value to wrap so that is looped between 0 and length (excluded)
 * @param length The grid length, cannot be zero.
 */
export const vec4_wrapUnsignedScalar = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(
  out: R,
  v: Vec4In,
  length: number
): R =>
  vec4_set(
    out,
    wrapUnsigned(v.x, length),
    wrapUnsigned(v.y, length),
    wrapUnsigned(v.z, length),
    wrapUnsigned(v.w, length)
  )

/**
 * Wraps (loops) a value so that the returned value will be between 0 (included) and length (excluded) following a triangle wave shape.
 * Values from 0 to length => 0 to length,
 * Values from length to length*2 => length to 0,
 * Values from length*2 to length*3 => 0 to length, and so on
 * @param value The value to ping pong
 * @param length The maximum length, the result will never reach exceed this value
 */
export const vec2_wrapPingPong = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In, length: Vec2In): R =>
  vec2_set(out, wrapPingPong(v.x, length.x), wrapPingPong(v.y, length.y))

/**
 * Wraps (loops) a value so that the returned value will be between 0 (included) and length (excluded) following a triangle wave shape.
 * Values from 0 to length => 0 to length,
 * Values from length to length*2 => length to 0,
 * Values from length*2 to length*3 => 0 to length, and so on
 * @param value The value to ping pong
 * @param length The maximum length, the result will never reach exceed this value
 */
export const vec3_wrapPingPong = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In, length: Vec3In): R =>
  vec3_set(out, wrapPingPong(v.x, length.x), wrapPingPong(v.y, length.y), wrapPingPong(v.z, length.z))

/**
 * Wraps (loops) a value so that the returned value will be between 0 (included) and length (excluded) following a triangle wave shape.
 * Values from 0 to length => 0 to length,
 * Values from length to length*2 => length to 0,
 * Values from length*2 to length*3 => 0 to length, and so on
 * @param value The value to ping pong
 * @param length The maximum length, the result will never reach exceed this value
 */
export const vec4_wrapPingPong = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In, length: Vec4In): R =>
  vec4_set(
    out,
    wrapPingPong(v.x, length.x),
    wrapPingPong(v.y, length.y),
    wrapPingPong(v.z, length.z),
    wrapPingPong(v.w, length.w)
  )

/**
 * Wraps (loops) a value so that the returned value will be between 0 (included) and length (excluded) following a triangle wave shape.
 * Values from 0 to length => 0 to length,
 * Values from length to length*2 => length to 0,
 * Values from length*2 to length*3 => 0 to length, and so on
 * @param value The value to ping pong
 * @param length The maximum length, the result will never reach exceed this value
 */
export const vec2_wrapPingPongScalar = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(
  out: R,
  v: Vec2In,
  length: number
): R => vec2_set(out, wrapPingPong(v.x, length), wrapPingPong(v.y, length))

/**
 * Wraps (loops) a value so that the returned value will be between 0 (included) and length (excluded) following a triangle wave shape.
 * Values from 0 to length => 0 to length,
 * Values from length to length*2 => length to 0,
 * Values from length*2 to length*3 => 0 to length, and so on
 * @param value The value to ping pong
 * @param length The maximum length, the result will never reach exceed this value
 */
export const vec3_wrapPingPongScalar = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(
  out: R,
  v: Vec3In,
  length: number
): R => vec3_set(out, wrapPingPong(v.x, length), wrapPingPong(v.y, length), wrapPingPong(v.z, length))

/**
 * Wraps (loops) a value so that the returned value will be between 0 (included) and length (excluded) following a triangle wave shape.
 * Values from 0 to length => 0 to length,
 * Values from length to length*2 => length to 0,
 * Values from length*2 to length*3 => 0 to length, and so on
 * @param value The value to ping pong
 * @param length The maximum length, the result will never reach exceed this value
 */
export const vec4_wrapPingPongScalar = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(
  out: R,
  v: Vec4In,
  length: number
): R =>
  vec4_set(
    out,
    wrapPingPong(v.x, length),
    wrapPingPong(v.y, length),
    wrapPingPong(v.z, length),
    wrapPingPong(v.w, length)
  )

/**
 * Wraps (loops) a value around a maximum length centered in zero. Returned value will be between -length/2 (excluded) and length/2 (included).
 * @param value The value to wrap so that is looped between -length/2 (excluded) and length/2 (included)
 * @param length The length, the value will be wrapped within -length/2 (excluded) and length/2 (included)
 */
export const vec2_wrapSigned = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In, length: Vec2In): R =>
  vec2_set(out, wrapSigned(v.x, length.x), wrapSigned(v.y, length.y))

/**
 * Wraps (loops) a value around a maximum length centered in zero. Returned value will be between -length/2 (excluded) and length/2 (included).
 * @param value The value to wrap so that is looped between -length/2 (excluded) and length/2 (included)
 * @param length The length, the value will be wrapped within -length/2 (excluded) and length/2 (included)
 */
export const vec3_wrapSigned = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In, length: Vec3In): R =>
  vec3_set(out, wrapSigned(v.x, length.x), wrapSigned(v.y, length.y), wrapSigned(v.z, length.z))

/**
 * Wraps (loops) a value around a maximum length centered in zero. Returned value will be between -length/2 (excluded) and length/2 (included).
 * @param value The value to wrap so that is looped between -length/2 (excluded) and length/2 (included)
 * @param length The length, the value will be wrapped within -length/2 (excluded) and length/2 (included)
 */
export const vec4_wrapSigned = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In, length: Vec4In): R =>
  vec4_set(
    out,
    wrapSigned(v.x, length.x),
    wrapSigned(v.y, length.y),
    wrapSigned(v.z, length.z),
    wrapSigned(v.w, length.w)
  )

/**
 * Wraps (loops) a value around a maximum length centered in zero. Returned value will be between -length/2 (excluded) and length/2 (included).
 * @param value The value to wrap so that is looped between -length/2 (excluded) and length/2 (included)
 * @param length The length, the value will be wrapped within -length/2 (excluded) and length/2 (included)
 */
export const vec2_wrapSignedScalar = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(
  out: R,
  v: Vec2In,
  length: number
): R => vec2_set(out, wrapSigned(v.x, length), wrapSigned(v.y, length))

/**
 * Wraps (loops) a value around a maximum length centered in zero. Returned value will be between -length/2 (excluded) and length/2 (included).
 * @param value The value to wrap so that is looped between -length/2 (excluded) and length/2 (included)
 * @param length The length, the value will be wrapped within -length/2 (excluded) and length/2 (included)
 */
export const vec3_wrapSignedScalar = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(
  out: R,
  v: Vec3In,
  length: number
): R => vec3_set(out, wrapSigned(v.x, length), wrapSigned(v.y, length), wrapSigned(v.z, length))

/**
 * Wraps (loops) a value around a maximum length centered in zero. Returned value will be between -length/2 (excluded) and length/2 (included).
 * @param value The value to wrap so that is looped between -length/2 (excluded) and length/2 (included)
 * @param length The length, the value will be wrapped within -length/2 (excluded) and length/2 (included)
 */
export const vec4_wrapSignedScalar = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(
  out: R,
  v: Vec4In,
  length: number
): R =>
  vec4_set(out, wrapSigned(v.x, length), wrapSigned(v.y, length), wrapSigned(v.z, length), wrapSigned(v.w, length))

export const vec2_easing = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(
  out: R,
  from: Vec2In,
  to: Vec2In,
  t: number,
  easingFunction: EasingFunction
) => vec2_lerp(out, from, to, easingFunction(clamp(t)))

export const vec3_easing = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(
  out: R,
  from: Vec3In,
  to: Vec3In,
  t: number,
  easingFunction: EasingFunction
) => vec3_lerp(out, from, to, easingFunction(clamp(t)))

export const vec4_easing = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(
  out: R,
  from: Vec4In,
  to: Vec4In,
  t: number,
  easingFunction: EasingFunction
) => vec4_lerp(out, from, to, easingFunction(clamp(t)))

/**
 * Frame rate independet interpolation amount calculation.
 * Example usage: lerp(damp(t, deltaTime), 2, 5)
 * @param t The amount to choose between from and to
 * @param deltaTime The time passed from the previous dampLerp to the next
 */
export const vec2_timeDamp = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, t: Vec2In, deltaTime: number) =>
  vec2_set(out, timeDamp(t.x, deltaTime), timeDamp(t.y, deltaTime))

/**
 * Frame rate independet interpolation amount calculation.
 * Example usage: lerp(damp(t, deltaTime), 2, 5)
 * @param t The amount to choose between from and to
 * @param deltaTime The time passed from the previous dampLerp to the next
 */
export const vec3_timeDamp = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(out: R, t: Vec3In, deltaTime: number) =>
  vec3_set(out, timeDamp(t.x, deltaTime), timeDamp(t.y, deltaTime), timeDamp(t.z, deltaTime))

/**
 * Frame rate independet interpolation amount calculation.
 * Example usage: lerp(damp(t, deltaTime), 2, 5)
 * @param t The amount to choose between from and to
 * @param deltaTime The time passed from the previous dampLerp to the next
 */
export const vec4_timeDamp = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, t: Vec4In, deltaTime: number) =>
  vec4_set(out, timeDamp(t.x, deltaTime), timeDamp(t.y, deltaTime), timeDamp(t.z, deltaTime), timeDamp(t.w, deltaTime))

/** Vector reflection */
export const vec2_reflect = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, direction: Vec2In, normal: Vec2In) =>
  vec2_addScaleScalar(out, direction, normal, -vec2_dot(direction, normal) * 2)

/** Vector reflection */
export const vec3_reflect = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, direction: Vec3In, normal: Vec3In) =>
  vec3_addScaleScalar(out, direction, normal, -vec3_dot(direction, normal) * 2)

/** Vector reflection */
export const vec4_reflect = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, direction: Vec4In, normal: Vec4In) =>
  vec4_addScaleScalar(out, direction, normal, -vec4_dot(direction, normal) * 2)

/** Vector project */
export const vec2_project = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In) =>
  vec2_mulScalar(out, a, num_divSafe(vec2_dot(a, b), vec2_length(b)))

/** Vector project */
export const vec3_project = /* @__PURE__ */ <R extends Vec3Out = Vec4Out>(out: R, a: Vec3In, b: Vec3In) =>
  vec3_mulScalar(out, a, num_divSafe(vec3_dot(a, b), vec3_length(b)))

/** Vector project */
export const vec4_project = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In) =>
  vec4_mulScalar(out, a, num_divSafe(vec4_dot(a, b), vec4_length(b)))

/** Gets the direction vector from a to b */
export const vec2_direction = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In) =>
  vec2_normalize(vec2_sub(out, b, a))

/** Gets the direction vector from a to b */
export const vec3_direction = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In) =>
  vec3_normalize(vec3_sub(out, b, a))

/** Gets the direction vector from a to b */
export const vec4_direction = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In) =>
  vec4_normalize(vec4_sub(out, b, a))

/** Slides a vector */
export const vec2_slide = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, normal: Vec2In) =>
  vec2_addScaleScalar(out, a, normal, -vec2_dot(a, normal))

/** Slides a vector */
export const vec3_slide = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, normal: Vec3In) =>
  vec3_addScaleScalar(out, a, normal, -vec3_dot(a, normal))

/** Slides a vector */
export const vec4_slide = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, normal: Vec4In) =>
  vec4_addScaleScalar(out, a, normal, -vec4_dot(a, normal))

export const vec2_clampLength = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(
  out: R,
  v: Vec4In,
  minLength: number,
  maxLength: number
) => {
  const length = vec2_length(v)
  return vec2_mulScalar(out, vec2_divScalar(out, v, length || 1), clamp(length, minLength, maxLength))
}