export const {
  /** The largest number that can be represented in JavaScript, approximately 1.79E+308. */
  MAX_VALUE,

  /** The closest number to zero that can be represented in JavaScript, approximately 5.00E-324. */
  MIN_VALUE,

  /** The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1 that is representable as a Number value, approximately 2.2204460492503130808472633361816 x 10‍−‍16. */
  EPSILON,

  /**
   * Returns true if passed value is finite.
   * Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a
   * number. Only finite values of the type number, result in true.
   */
  isFinite,

  /** Returns true if the value passed is an integer, false otherwise. */
  isInteger,

  /**
   * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a
   * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter
   * to a number. Only values of the type number, that are also NaN, result in true.
   */
  isNaN,

  /** Returns true if the value passed is a safe integer. A safe integer has 53 bit precision. */
  isSafeInteger,

  /** Converts a string to a floating-point number. */
  parseFloat,

  /** Converts A string to an integer. Radix is optional and is default 10. */
  parseInt
} = /* @__PURE__ */ Number

export const {
  /** The mathematical constant e. This is Euler's number, the base of natural logarithms, approximately 2.718281828459045 */
  E: EULER,

  /** The natural logarithm of 10, approximately 2.302585092994046 */
  LN10,

  /** The natural logarithm of 2, approximately 0.6931471805599453 */
  LN2,

  /** The base-2 logarithm of e, approximately 0.4342944819032518 */
  LOG10E,

  /** The base-10 logarithm of e, approximately 1.4426950408889634 */
  LOG2E,

  /** Pi. This is the ratio of the circumference of a circle to its diameter, approximately 3.141592653589793 */
  PI,

  /** The square root of 0.5, or, equivalently, one divided by the square root of 2, approximately 0.7071067811865476 */
  SQRT1_2,

  /** The square root of 2, approximately 1.4142135623730951 */
  SQRT2,

  /** Returns the arcsine of a number. Returns NaN if the given number is less than -1 or greater than 1, use acosClamped as a safe alternative. */
  acos,

  /** Returns the inverse hyperbolic cosine of a number. */
  acosh,

  /** Returns the arc cosine (or inverse cosine) of a number. Returns NaN if the given number is less than -1 or greater than 1, use asinClamped as a safe alternative. */
  asin,

  /** Returns the inverse hyperbolic sine of a number. */
  asinh,

  /** Returns the arctangent of a number. */
  atan,

  /** Returns the inverse hyperbolic tangent of a number. */
  atanh,

  /** Returns the angle (in radians) from the X axis to a point. It gets X and Y coordinates as arguments. */
  atan2,

  /** Returns the smallest integer greater than or equal to its numeric argument. */
  ceil,

  /** Returns an implementation-dependent approximation to the cube root of number. */
  cbrt,

  /**
   * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
   * subtracting 1 from the exponential function of x (e raised to the power of x, where e
   * is the base of the natural logarithms).
   */
  expm1,

  /**
   * Returns the number of leading zero bits in the 32-bit binary representation of a number.
   * @param x A numeric expression.
   */
  clz32: int32_clz,

  /** Returns the cosine of an angle in radians. */
  cos,

  /** Returns the hyperbolic cosine of a number. */
  cosh,

  /** Returns e (the base of natural logarithms) raised to a power. */
  exp,

  /** Returns the natural logarithm (base e) of a number. */
  floor,

  /** Returns the nearest single precision float representation of a number. */
  fround,

  /** Returns the square root of the sum of squares of its arguments. */
  hypot,

  /** Returns the result of 32-bit multiplication of two numbers. */
  imul: int32_mul,

  /** Returns the larger of a set of supplied numeric expressions. */
  log,

  /** Returns the natural logarithm of 1 + x. */
  log1p,

  /** Returns the base 2 logarithm of a number. */
  log2,

  /** Returns the base 10 logarithm of a number. */
  log10,

  /** Returns the larger of a set of supplied numeric expressions. */
  max: mathMax,

  /** Returns the smaller of a set of supplied numeric expressions. */
  min: mathMin,

  /** Returns a pseudorandom number between 0 and 1. */
  random: mathRandom,

  /** Returns a supplied numeric expression rounded to the nearest integer. */
  round,

  /** Returns the sine of a number. */
  sin,

  /** Returns the hyperbolic sine of a number. */
  sinh,

  /** Returns the square root of a number. */
  sqrt,

  /** Returns the tangent of a number. */
  tan,

  /** Returns the hyperbolic tangent of a number. */
  tanh,

  /** Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x. */
  trunc
} = /* @__PURE__ */ Math

/** A tolerance value that is good in most circumstances for numbers. */
export const DEFAULT_TOLERANCE = 0.0000001

/** The closest number to zero that can be represented in a 32 bit float, approximately 1.17549435082228750797e-38. */
export const FLOAT_MIN_VALUE = 1.17549435082228750797e-38

/** The maximum positive value that can be represented in a 32 bit float, approximately 3.40282346638528859812e38. */
export const FLOAT_MAX_VALUE = 3.40282346638528859812e38

/** The value of FLOAT_EPSILON is the difference between 1 and the smallest value greater than 1 that is representable as a 32 bit floatig point value, approximately 1.1920928955078125e-7. */
export const FLOAT_EPSILON = 1.1920928955078125e-7

/** The value of the largest integer n such that n and n + 1 are both exactly representable as a Number value. The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1. */
export const MAX_SAFE_INTEGER = 2 ** 53 - 1

/** The minimum negative value a floating point number can store (-MAX_VALUE), approximately -1.79E+308 */
export const MIN_NEGATIVE_VALUE = -MAX_VALUE

/** The value of the smallest integer n such that n and n − 1 are both exactly representable as a Number value. The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)). */
export const MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER

/** A value greater than the largest number that can be represented in JavaScript. JavaScript displays POSITIVE_INFINITY values as infinity, 1/0 */
export const POSITIVE_INFINITY = 1 / 0

/** A value that is less than the largest negative number that can be represented in JavaScript. JavaScript displays NEGATIVE_INFINITY values as -infinity, -1/0 */
export const NEGATIVE_INFINITY = -1 / 0

/** A value that is not a number. In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function, 0/0 */
// eslint-disable-next-line no-shadow-restricted-names
export const NaN = 0 / 0

/** 1 divided by PI, approximately 0.3183098861837907 */
export const INV_PI = 1 / PI

/** Two times Pi. This is the ratio of the circumference of a circle to its ray, approximately 6.283185307179586 */
export const TWO_PI = PI * 2

/** Pi divided by 2, approximately 1.5707963267948966 */
export const PI_OVER_TWO = PI / 2

/** sqrt(PI), approximately 1.7724538509055159 */
export const SQRT_PI = /* @__PURE__ */ sqrt(PI)

/** sqrt(2 * PI), approximately 2.5066282746310002 */
export const SQRT_TWO_PI = /* @__PURE__ */ sqrt(TWO_PI)

/** sqrt(3), approximately 1.7320508075688772 */
export const SQRT3 = /* @__PURE__ */ sqrt(3)

/** sqrt(5), approximately 2.23606797749979 */
export const SQRT5 = /* @__PURE__ */ sqrt(5)

/** sqrt(7), approximately 2.6457513110645907 */
export const SQRT7 = /* @__PURE__ */ sqrt(7)

/** Amount to be multiplied to an angle in degrees to obtain an angle in radians, approximately 0.017453292519943295 */
export const DEG_PER_RAD = PI / 180

/** Amount to be multiplied to an angle in radians to obtain an angle in degrees, approximately 57.29577951308232 */
export const RAD_PER_DEG = 1 / DEG_PER_RAD

/** The golden ratio (phi), approximately 1.618033988749895 */
export const GOLDEN_RATIO = (1 + SQRT5) / 2

/** One divided by the golden ratio (1/phi), approximately 0.6180339887498948 */
export const INV_GOLDEN_RATIO = 1 / GOLDEN_RATIO

/** The natural logarithm of the golden ratio (phi), approximately 0.48121182505960347  */
export const LOG_GOLDEN_RATIO = /* @__PURE__ */ log(GOLDEN_RATIO)

/** 666 */
export const THE_NUMBER_OF_THE_BEAST = 666

/** The Euler–Mascheroni constant, approximately 0.5772156649015329 */
export const EULER_MASCHERONI = 0.5772156649015329

/** The Apéry's constant, the sum of the reciprocals of the positive cubes, approximately 1.2020569031595942 */
export const APERY_CONSTANT = 1.2020569031595942

/** The Conway's constant, approximately 1.3035772690342964 */
export const CONWAY_CONSTANT = 1.3035772690342964

/** The Khinchin's constant, approximately 2.6854520010653062 */
export const KHINCHIN_CONSTANT = 2.6854520010653062

/** Glaisher–Kinkelin constant, approximately 1.2824271291006226 */
export const GLAISHER_CONSTANT = 1.2824271291006226

/** The Avogadro number - https://en.wikipedia.org/wiki/Avogadro_constant */
export const AVOGADRO_CONSTANT = 6.02214199e23

/** Zero kelvin in celsius, -273.15 */
export const ZERO_KELVIN_IN_CELSIUS = -273.15

/** Maximum size for JS13K zip file, 13312 */
export const JS13K_SIZE_IN_BYTES = 13312

/** One Yotta, 1e24 */
export const YOTTA = 1e24

/** One Zetta, 1e21 */
export const ZETTA = 1e21

/** One Exa, 1e18 */
export const EXA = 1e18

/** One Peta, 1e15 */
export const PETA = 1e15

/** One Tera, 1e12 */
export const TERA = 1e12

/** One Giga, 1e9 */
export const GIGA = 1e9

/** One Mega, 1e6 */
export const MEGA = 1e6

/** One Kilo, 1e3 */
export const KILO = 1e3

/** One Milli, 1e-3 */
export const MILLI = 1e-3

/** One Micro, 1e-6 */
export const MICRO = 1e-6

/** One Nano, 1e-9 */
export const NANO = 1e-9

/** One Pico, 1e-12 */
export const PICO = 1e-12

/** One Femto, 1e-15 */
export const FEMTO = 1e-15

/** One Atto, 1e-18 */
export const ATTO = 1e-18

/** One Zepto, 1e-21 */
export const ZEPTO = 1e-21

/** One Yocto, 1e-24 */
export const YOCTO = 1e-24

/** One inch in meters, 0.0254 */
export const INCH_IN_METERS = 0.0254

/** One foot in meters, 0.3048 */
export const FOOT_IN_METERS = 0.3048

/** One yard in meters, 0.9144 */
export const YARD_IN_METERS = 0.9144

/** One mile in meters, 1609.344 */
export const MILE_IN_METERS = 1609.344

/** One nautical mile in meters, 1852 */
export const NAUTICAL_MILE_IN_METERS = 1852

/** One astronomical unit in meters, 149597870691 */
export const ASTRONOMICAL_UNIT_IN_METERS = 149597870691

/** One light year in meters, 9.46053620707e15 */
export const LIGHT_YEAR_IN_METERS = 9.46053620707e15

/** One parsec in meters, 3.08567758135e16 */
export const PARSEC_IN_METERS = 3.08567758135e16

/** One angstrom in meters, 1e-10 */
export const ANGSTROM_IN_METERS = 1e-10

/** The speed of light, in meters per second, 299792458 */
export const SPEED_OF_LIGHT = 299792458

/** The Gravitational Constant in m**3 / (kg * s), 6.673e-11 */
export const GRAVITATIONAL_CONSTANT = 6.673e-11

/** One solar mass in kilograms, 1.98892e30 */
export const SOLAR_MASS_IN_KILOGRAMS = 1.98892e30

/** 42 */
export const LIFE_THE_UNIVERSE_AND_EVERYTHING = 42

const TWO_POW_28 = 2 ** 28

/** Returns the fractional part of a number. 5.212 => 0.212 */
export const fract = /* @__PURE__ */ (value: number): number => value - floor(value)

/**
 * Returns an integer that is as far from zero as possible. 0.1 => 1, -0.1 => 1
 * @returns An integral value
 */
export const roundFromZero = /* @__PURE__ */ (value: number) => (value < 0 ? floor(value) : ceil(value))

/**
 * Returns an integer that is as near to zero as possible. 0.1 => 0, -0.1 => 0
 * @param value The value to round
 * @returns An integral value
 */
export const roundToZero = /* @__PURE__ */ (value: number) => (value > 0 ? floor(value) : ceil(value))

/**
 * Returns the inverse of the square root of a number. 1 / sqrt(x)
 * @returns 1 / sqrt(x)
 */
export const invSqrt = /* @__PURE__ */ /* @__INLINE__ */ (x: number) => 1 / sqrt(x)

/**
 * Returns the sign of the x, indicating whether x is positive, negative or zero.
 * Returs -1 if x is negative. Returns +1 if x is positive. Returns -0 if x is -0. Returns NaN if x is NaN.
 * @param x The numeric expression to test
 */
export const sign = /* @__PURE__ */ (x: number): number => x && (x < 0 ? -1 : 1)

/**
 * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
 * For example, the absolute value of -5 is the same as the absolute value of 5.
 * @param x A numeric expression for which the absolute value is needed.
 * @returns x < 0 ? -x : x
 */
export const abs = /* @__PURE__ */ (x: number): number => (x < 0 ? -x : x)

/**
 * Gets the minimum value between two numbers. Accepts only two values and is faster than Math.min.
 * Note, this does not behave like Math.min if NaN is passed
 * @param a First number
 * @param b Second number
 * @returns min(a, b)
 */
export const min = /* @__PURE__ */ (a: number, b: number | undefined | null): number =>
  (b as number) < a ? (b as number) : a

/**
 * Gets the maximum value between two numbers. Accepts only two values and is faster than Math.max.
 * Note, this does not behave like Math.max if NaN is passed
 * @param a First number
 * @param b Second number
 * @returns max(a, b)
 */
export const max = /* @__PURE__ */ (a: number, b: number | undefined | null): number =>
  a < (b as number) ? (b as number) : a

/**
 * Computes the square of the given value.
 * @param n The value to square
 * @returns n*n
 */
export const pow2 = /* @__PURE__ */ (n: number) => n * n

/**
 * Computes the cube of the given value.
 * @param n The value to cube
 * @returns n*n*n
 */
export const pow3 = /* @__PURE__ */ (n: number) => n * n * n

/**
 * Computes the 4th power of the given value.
 * @param n The value
 * @returns n*n*n*n
 */
export const pow4 = /* @__PURE__ */ (n: number) => n * n * n * n

/**
 * Computes the 5th power of the given value.
 * @param n The value
 * @returns n*n*n*n*n
 */
export const pow5 = /* @__PURE__ */ /* @__INLINE__ */ (n: number) => n ** 5

/**
 * Computes the 6th power of the given value.
 * @param n The value
 * @returns n*n*n*n*n
 */
export const pow6 = /* @__PURE__ */ /* @__INLINE__ */ (n: number) => n ** 6

/**
 * Computes the 7th power of the given value.
 * @param n The value
 * @returns n*n*n*n*n
 */
export const pow7 = /* @__PURE__ */ /* @__INLINE__ */ (n: number) => n ** 7

/**
 * Computes the 8th power of the given value.
 * @param n The value
 * @returns n*n*n*n*n
 */
export const pow8 = /* @__PURE__ */ /* @__INLINE__ */ (n: number) => n ** 8

/**
 * Computes x to the power of x, pow(x, x)
 * @returns x ** x
 */
export const powSelf = /* @__PURE__ */ (x: number) => x ** x

/**
 * Computes the euclidean modulo ((x % m) + m) % m
 * Wraps a natural number around a maximum value.
 * @param x The value to wrap
 * @param m The maximum value
 * @returns ((x % m) + m) % m
 */
export const euclideanModulo = /* @__PURE__ */ (x: number, m: number): number => ((x % m) + m) % m

/**
 * Returns true if the given value is strictly equal to 0
 * @param value The value to check
 * @returns True if value === 0, false if not
 */
export const isZero = /* @__PURE__ */ /* @__INLINE__ */ (value: unknown): value is 0 => value === 0

/**
 * Returns true if the given value is not exactly the number 0.
 * @returns value !== 0
 */
export const isNonZero = /* @__PURE__ */ /* @__INLINE__ */ (value: unknown): boolean => value !== 0

/**
 * Returns true if the given value is near to zero, abs(value) < tolerance
 * @param value The number to check
 * @param epsilon The optional tolerance to use, by default is Number.EPSILON
 */
export const isNearlyZero = /* @__PURE__ */ (value: number, epsilon: number = FLOAT_EPSILON) => abs(value) < epsilon

/**
 * Returns true if two numbers are equal given an absolute tolerance.
 * To use a relative tolerance use nearlyEquals instead
 * @param a A number
 * @param b A number
 * @param epsilon The optional absolute tolerance to use
 * @returns True if a is almost equal to b
 */
export const isNearlyEqualAbsolute = /* @__PURE__ */ (a: number, b: number, epsilon: number = DEFAULT_TOLERANCE) =>
  abs(a - b) < epsilon

/**
 * Returns true if two numbers are nearly equals.
 * Is uses relative tolerance, the bigger the numbers the higher the tolerance becomes.
 * @param a A number
 * @param b A number
 * @param epsilon Optional relative tolerance to use
 * @returns True if a is almost equal to b
 */
export const isNearlyEqualRelative = /* @__PURE__ */ (a: number, b: number, epsilon: number = FLOAT_EPSILON) => {
  const diff = abs(a - b)
  return a === b || diff < epsilon * EPSILON || diff < max(abs(a), abs(b)) * epsilon
}

/**
 * @param value Determines whether a value is inside the specified range.
 * @returns value >= minimum && value <= maximum
 */
export const isInRange = /* @__PURE__ */ (value: number, minimum: number, maximum: number) =>
  value >= minimum && value <= maximum

/**
 * @param value Determines whether a value is inside the specified range, excluding the extremes.
 * @returns value > minimum && value < maximum
 */
export const isInsideRange = /* @__PURE__ */ (value: number, minimum: number, maximum: number) =>
  value > minimum && value < maximum

/** Returns -n */
export const num_negate = /* @__PURE__ */ /* @__INLINE__ */ (n: number) => -n

/** Returns 1/n */
export const num_inverse = /* @__PURE__ */ /* @__INLINE__ */ (n: number) => 1 / n

/** Returns a + b */
export const num_add = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number): number => a + b

/** Returns a - b */
export const num_sub = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number): number => a - b

/** Returns a * b */
export const num_mul = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number): number => a * b

/** Returns a / b */
export const num_div = /* @__PURE__ */ /* @__INLINE__ */ (numerator: number, denominator: number): number =>
  numerator / denominator

/** Returns b && a / b */
export const num_divSafe = /* @__PURE__ */ (numerator: number, denominator: number): number =>
  denominator && numerator / denominator

/** Returns a % b */
export const num_mod = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number): number => a % b

/**
 * Returns the value of a base expression taken to a specified power.
 * @param x The base value of the expression.
 * @param y The exponent value of the expression.
 */
export const num_pow = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number): number => a ** b

/** Returns a + b * scale */
export const num_addScale = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number, scale: number): number =>
  a + b * scale

/** Returns x - x * x */
export const num_minusSquaredScalar = /* @__PURE__ */ (x: number) => x - x * x

/** Returns true if a > b */
export const num_gt = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number) => a > b

/** Returns true if a >= b */
export const num_gte = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number) => a >= b

/** Returns true if a < b */
export const num_lt = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number) => a < b

/** Returns true if a <= b */
export const num_lte = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number) => a <= b

export const int32_fromFloat = (n: number) => n | 0

/** Returns ~n */
export const int32_not = /* @__PURE__ */ /* @__INLINE__ */ (n: number) => ~n

/** Returns a & b, with a 32 bit integer precision */
export const int32_and = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number) => a & b

/** Returns a | b */
export const int32_or = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number) => a | b

/** Returns a ^ b */
export const int32_xor = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number) => a ^ b

/** Returns n << amount */
export const int32_shl = /* @__PURE__ */ /* @__INLINE__ */ (n: number, amount: number) => n << amount

/** Returns n >> amount */
export const int32_shr = /* @__PURE__ */ /* @__INLINE__ */ (n: number, amount: number) => n >> amount

/** Returns n >>> amount, right shift of 32 bit unsigned integers */
export const uint32_shr = /* @__PURE__ */ /* @__INLINE__ */ (n: number, amount: number) => n >>> amount

/** 32 bit binary left rotation */
export const int32_rotl = /* @__PURE__ */ (n: number, amount: number) => (n << amount) | (n >>> (32 - amount))

/** 32 bit binary right rotation */
export const int32_rotr = /* @__PURE__ */ (n: number, amount: number) => (n << (32 - amount)) | (n >>> amount)

/**
 * Integers - Check wether the given number is a power of two or not (1, 2, 4, 8, 16, 32, 64, 128, 256 ...)
 * Note: this function does not woek for values greater than 0x10000000
 * @param integer The 32bit integer number to verify
 * @returns True if the given number is a power of two, false if not.
 */
export const int32_isPow2 = /* @__PURE__ */ (i32: number): boolean => !!i32 && !(i32 & (i32 - 1))

/**
 * Counts the number of ones in the given 32 bit number.
 * https://graphics.stanford.edu/~seander/bithacks.html
 * @param i32 Input value
 * @returns Number of ones, from 0 to 32
 */
export const int32_popCnt = /* @__PURE__ */ (i32: number): number => {
  i32 -= (i32 >> 1) & 0x55555555
  i32 = (i32 & 0x33333333) + ((i32 >> 2) & 0x33333333)
  return (((i32 + (i32 >> 4)) & 0xf0f0f0f) * 0x1010101) >>> 24
}

/**
 * Gets the hamming distance, the number of different bits, between two 32 bit integers.
 * @param a First value
 * @param b Second value
 * @returns The number of different bits between two numbers
 */
export const int32_hamming = /* @__PURE__ */ /* @__INLINE__ */ (a: number, b: number): number => int32_popCnt(a ^ b)

/**
 * Reverse the bits of the given 32 bit number.
 * https://graphics.stanford.edu/~seander/bithacks.html
 * @param i32 Input value
 * @returns Input value with reversed bits, LSB => MSB and MSB => LSB
 */
export const in32_reverse = /* @__PURE__ */ (i32: number): number => {
  i32 = ((i32 & 0x55555555) << 1) | ((i32 & 0xaaaaaaaa) >>> 1)
  i32 = ((i32 & 0x33333333) << 2) | ((i32 & 0xcccccccc) >>> 2)
  i32 = ((i32 & 0x0f0f0f0f) << 4) | ((i32 & 0xf0f0f0f0) >>> 4)
  i32 = ((i32 & 0x00ff00ff) << 8) | ((i32 & 0xff00ff00) >>> 8)
  return ((i32 & 0x0000ffff) << 16) | ((i32 & 0xffff0000) >>> 16)
}

/** Returns a & b, with a 53 bit integer precision */
export const int53_and = /* @__PURE__ */ (a: number, b: number) =>
  (floor(a / TWO_POW_28) & floor(b / TWO_POW_28)) * TWO_POW_28 +
  (euclideanModulo(a, TWO_POW_28) & euclideanModulo(b, TWO_POW_28))

/** Returns a | b, with a 53 bit integer precision */
export const int53_or = /* @__PURE__ */ (a: number, b: number) =>
  (floor(a / TWO_POW_28) | floor(b / TWO_POW_28)) * TWO_POW_28 +
  (euclideanModulo(a, TWO_POW_28) | euclideanModulo(b, TWO_POW_28))

/** Returns a ^ b, with a 53 bit integer precision */
export const int53_xor = /* @__PURE__ */ (a: number, b: number) =>
  (floor(a / TWO_POW_28) ^ floor(b / TWO_POW_28)) * TWO_POW_28 +
  (euclideanModulo(a, TWO_POW_28) ^ euclideanModulo(b, TWO_POW_28))

/** Returns ~n, with a 53 bit integer precision */
export const int53_not = /* @__PURE__ */ (n: number) => -n - 1

/** Returns n << amount, with a 53 bit integer precision */
export const int53_shl = /* @__PURE__ */ /* @__INLINE__ */ (n: number, amount: number) => floor(n * 2 ** amount)

/** Returns n >> amount, with a 53 bit integer precision */
export const int53_shr = /* @__PURE__ */ /* @__INLINE__ */ (n: number, amount: number) => floor(n / 2 ** amount)

/**
 * Returns the logarithm of the given value to the given base.
 * @returns log(value) / log(base)
 */
export const logN = /* @__PURE__ */ (value: number, base: number) => log(value) / log(base)

/** The natural logarithm of one minus the specified value. log1p(-x) */
export const log1m = /* @__PURE__ */ /* @__INLINE__ */ (x: number) => log1p(-x)

/** Computes the logit functio. log(x / (1 - x)). See https://en.wikipedia.org/wiki/Logit */
export const logit = (x: number) => log(x / (1 - x))

/** The natural logarithm of one minus the exponential of the specified value. */
export const log1mexp = /* @__PURE__ */ (a: number) => (a > -LN2 ? log(-expm1(a)) : log1p(-exp(a)))

/** The log of 1 plus the exponential of the specified value. */
export const log1pexp = /* @__PURE__ */ (x: number) => (x > 0 ? x + log1p(exp(-x)) : log1p(exp(x)))

/** The log sum of exponentials. */
export const logsumexp = /* @__PURE__ */ (a: number, b: number) => (a > b ? a + log1pexp(b - a) : b + log1pexp(a - b))

/**
 * Snaps a value to the nearest grid multiple
 * @param value The value to sap
 * @param length The length of the grid cell
 * @returns Value snapped to the grid
 */
export const gridSnap = /* @__PURE__ */ (value: number, length: number): number => floor(0.5 + value / length) * length

/**
 * Wraps (loops) a value so the returned value will be between 0 and length (excluded)
 * @param value The value to wrap so that is looped between 0 and length (excluded)
 * @param length The grid length, cannot be zero.
 * @returns Value wrapped between 0 and length (excluded)
 */
export const wrapUnsigned = /* @__PURE__ */ (value: number, length: number): number =>
  value - floor(value / length) * length

/**
 * Wraps (loops) a value around a maximum length centered in zero. Returned value will be between -length/2 (excluded) and length/2 (included).
 * @param value The value to wrap so that is looped between -length/2 (excluded) and length/2 (included)
 * @param length The length, the value will be wrapped within -length/2 (excluded) and length/2 (included)
 * @returns Value wrapped between -length/2 (included) and length/2 (excluded)
 */
export const wrapSigned = (value: number, length: number): number => value + floor(0.5 - value / length) * length

/**
 * Wraps (loops) a value so that the returned value will be between 0 (included) and length (excluded) following a triangle wave shape.
 * Values from 0 to length => 0 to length,
 * Values from length to length*2 => length to 0,
 * Values from length*2 to length*3 => 0 to length, and so on
 * @param value The value to ping pong
 * @param length The maximum length, the result will never reach exceed this value
 * @returns value pingpong length
 */
export const wrapPingPong = /* @__PURE__ */ (value: number, length: number) =>
  length - abs(length - wrapUnsigned(value, length * 2))

/**
 * Trigonometry - Wrap an angle so it is always between -PI (excluded) and PI (included)
 * @param radians The angle in radians to wrap between -PI (excluded) ad PI (included)
 * @returns The angle in radians wrapped so it is always between -PI (excluded) ad PI (included)
 */
export const angleWrapSigned = /* @__PURE__ */ (radians: number) => wrapSigned(radians, TWO_PI)

/**
 * Trigonometry - Wrap an angle so it is always between 0 (included) and 2*PI (excluded)
 * @param radians The angle in radians to wrap between 0 (included) and 2*PI (excluded)
 * @returns The angle in radians wrapped so it is always between 0 (included) and 2*PI (excluded)
 */
export const angleWrapUnsigned = /* @__PURE__ */ /* @__INLINE__ */ (radians: number) => wrapUnsigned(radians, TWO_PI)

/**
 * Wraps an angle so that the returned value will be between 0 (included) and 2*PI (excluded) following a triangle wave shape.
 * @param radians The angle in radians to pingpong
 * @returns radians pingpong PI
 */
export const angleWrapPingPong = /* @__PURE__ */ /* @__INLINE__ */ (radians: number) => wrapPingPong(radians, TWO_PI)

/**
 * Gets the shortest difference betwee two angles, in a range between -PI (excluded) to PI (included)
 * @param sourceRadians First angle
 * @param targetRadias Second angle
 * @returns The shortest angle between sourceRadians to targetRadians, in a range between -PI (excluded) to PI (included)
 */
export const angleDeltaSigned = /* @__PURE__ */ /* @__INLINE__ */ (
  sourceRadians: number,
  targetRadians: number
): number => angleWrapSigned(targetRadians - sourceRadians)

/**
 * Gets the shortest difference betwee two angles, in a range between 0 (included) to 2*PI (excluded)
 * @param sourceRadians First angle
 * @param targetRadias Second angle
 * @returns The shortest angle between sourceRadians to targetRadians, in a range between 0 (included) to 2*PI (excluded)
 */
export const angleDeltaUnsigned = /* @__PURE__ */ /* @__INLINE__ */ (
  sourceRadians: number,
  targetRadians: number
): number => angleWrapUnsigned(targetRadians - sourceRadians)

/**
 * Trigonometry - cot - Gets the cotangent of x, 1 / tan(x)
 * @param x The input
 * @returns The cotangent of x
 */
export const cot = /* @__PURE__ */ /* @__INLINE__ */ (x: number): number => 1 / tan(x)

/**
 * Trigonometry - coth - Gets the hyperbolic tangent of x, 1 / tanh(x)
 * @param x The input
 * @returns The hyperbolic tangent of x
 */
export const coth = /* @__PURE__ */ /* @__INLINE__ */ (x: number): number => 1 / tanh(x)

/**
 * Trigonometry - acoth - The inverse hyperbolic cotangent of x, atanh(1 / x)
 * @param x The input
 * @returns The inverse hyperbolic cotagent of a number.
 */
export const acoth = /* @__PURE__ */ /* @__INLINE__ */ (x: number): number => atanh(1 / x)

/**
 * Trigonometry - csc - Gets the cosecant of x, 1 / sin(x)
 * @param x The input
 * @returns The cosecant of x
 */
export const csc = /* @__PURE__ */ /* @__INLINE__ */ (x: number): number => 1 / sin(x)

/**
 * Trigonometry - csch - Gets the hyperbolic cosecant of x, 1 / sinh(x)
 * @param x
 * @returns The hyperbolic cosecant of x
 */
export const csch = /* @__PURE__ */ /* @__INLINE__ */ (x: number): number => 1 / sinh(x)

/**
 * Trigonometry - acsch - Gets the inverse hyperbolic cosecant of x, asinh(1 / x)
 * @param x The input
 * @returns The inverse hyperbolic cosecant of x
 */
export const acsch = /* @__PURE__ */ /* @__INLINE__ */ (x: number): number => asinh(1 / x)

/**
 * Trigonometry - acsc - Gets the inverse cosecant function (arccosecant function) of x, asin(1 / x)
 * @param x The input
 * @returns The arcosecant of a number
 */
export const acsc = /* @__PURE__ */ /* @__INLINE__ */ (x: number): number => asin(1 / x)

/**
 * Trigonometry - sec - Gets the secant of x, 1 / cos(x)
 * @param x The input
 * @returns The secant of a number
 */
export const sec = /* @__PURE__ */ /* @__INLINE__ */ (x: number): number => 1 / cos(x)

/**
 * Trigonometry - asec - Gets the Inverse Secant (sec-1) of x in radians, acos(1 / x)
 * @param x The input
 * @returns The inverse secant of x
 */
export const asec = /* @__PURE__ */ /* @__INLINE__ */ (x: number): number => acos(1 / x)

/**
 * Trigonometry - asech - Gets the inverse hyperbolic secant of x, acosh(1 / x)
 * @param x The input
 * @returns The inverse hyperbolic secant of x
 */
export const asech = /* @__PURE__ */ /* @__INLINE__ */ (x: number): number => acosh(1 / x)

/**
 * Trigonometry - gudermannian - atan(sinh(x))
 * @param x The input
 * @returns atan(sinh(x))
 */
export const gudermannian = /* @__PURE__ */ (x: number): number => atan(sinh(x))

/**
 * Trigonometry - invGudermannian - atanh(sin(x))
 * @param x The input
 * @returns atanh(sin(x))
 */
export const gudermannianInverse = /* @__PURE__ */ (x: number): number => atanh(sin(x))

/**
 * Computes sin(x) / x. If x is zero, returns 1.
 * @returns sin(x) / x. If x is zero, returns 1.
 */
export const sinc = /* @__PURE__ */ (x: number) => (x ? sin(x) / x : 1)

/**
 * Returns true if the given value is a power of two.
 * For 32 bit integers, int32IsPow2 might be faster.
 * @param value A number
 * @returns True if the given number is a power of two
 */
export const isPow2 = /* @__PURE__ */ (value: number): boolean => log2(value) % 1 === 0

/**
 * Returns true if the given value is a power of ten.
 * @param value A number
 * @returns True if the given number is a power of ten
 */
export const isPow10 = /* @__PURE__ */ (value: number): boolean => log10(value) % 1 === 0

/**
 * Gets the power of two greater or equal to the given value, 2 ** ceil(log2(value))
 * Useful to compute texture sizes.
 * @param value The minimum value
 * @returns The power of two greater of equal to the given value
 */
export const ceilPow2 = /* @__PURE__ */ (value: number): number => 2 ** ceil(log2(value))

/**
 * Gets the power of two less or equal to the given value, 2 ** floor(log2(value)).
 * Useful to compute texture sizes.
 * @param value The maximum value
 * @returns The power of two less of equal to the given value
 */
export const floorPow2 = /* @__PURE__ */ (value: number): number => 2 ** floor(log2(value))

/**
 * Converts an angle in degrees to radians (degrees * PI / 180)
 * @param degrees Agle in degrees
 * @returns Angle in radianss
 */
export const degToRad = /* @__PURE__ */ /* @__INLINE__ */ (degrees: number): number => degrees * DEG_PER_RAD

/**
 * Converts an angle in radians to degrees (radians * 180 / PI)
 * @param radians Agle in radians
 * @returns Angle in degrees
 */
export const radToDeg = /* @__PURE__ */ /* @__INLINE__ */ (radians: number): number => radians / DEG_PER_RAD

/**
 * Clamps a value between a minimum and a maximum
 * @param value The value to clamp
 * @param minimum The minimum value, default to 0
 * @param maximum The maximum value, default to 1
 * @returns value < minimum ? minimum : value > maximum ? maximum : value
 */
export const clamp = /* @__PURE__ */ (value: number, minimum: number = 0, maximum: number = 1): number =>
  value < minimum ? minimum : value > maximum ? maximum : value

/** Returns the arc cosine (or inverse cosine) of a number. The number is clamped between -1 to 1 to avoid NaN. */
export const acosSafe = /* @__PURE__ */ (x: number): number => acos(clamp(x, -1))

/** Returns the arcsine of a number. The number is clamped between -1 to 1 to avoid NaN. */
export const asinSafe = /* @__PURE__ */ (x: number): number => asin(clamp(x, -1))

/**
 * Computes the sigmoid function. https://en.wikipedia.org/wiki/Sigmoid_function
 * @param t Input parameter
 * @returns A value between 0 and 1
 */
export const sigmoid = /* @__PURE__ */ (t: number): number => 1 / (1 + exp(-t))

/**
 * Computes the inverse sigmoid function, log(a) - log(1 - a)
 * @param a The input value
 * @returns The inverse of the sigmoid function
 */
export const sigmoidInverse = /* @__PURE__ */ (a: number) => log(a) - log(1 - a)

/**
 * Computes the gradient of the sigmoid function, sigmoid(z) * (1 - sigmoid(z))
 * @param z The input value
 * @returns The gradient of the sigmoid function
 */
export const sigmoidGradient = /* @__PURE__ */ (z: number) => num_minusSquaredScalar(sigmoid(z))

/** Gets the Stirling approximation gamma of a number. See https://en.wikipedia.org/wiki/Stirling%27s_approximation */
export const stirlingGamma = /* @__PURE__ */ (n: number): number => sqrt(TWO_PI / n) * (n / EULER) ** n

/**
 * Returns the GCD (greatest common divisor) using the euclidean method. Complexity is O(n).
 * Warning, udefined behavior with NaN or infinities
 * @param a A number
 * @param b Another number
 * @returns GCD(a,b)
 */
export const greatestCommonDivisor = /* @__PURE__ */ (a: number, b: number): number => {
  while (b) {
    const t = b
    b = a % b
    a = t
  }
  return a
}

/**
 * Returns the LCM (least common multiplier) using the euclidean method. Complexity is O(n).
 * Warning, udefined behavior with NaN or infinities
 * @param a A number
 * @param b Another number
 * @returns LCM(a, b)
 */
export const leastCommonMultiplier = /* @__PURE__ */ (a: number, b: number): number =>
  b * (a / greatestCommonDivisor(a, b)) || 0

/** Heaviside step function. return x < 0 ? 0 : 1. */
export const stepUnit = /* @__PURE__ */ (x: number) => (x < 0 ? 0 : 1)

/** Returns 1 only if x is inside the specified interval ]minimum, maximum]. See https://en.wikipedia.org/wiki/Boxcar_function */
export const stepBoxcar = /* @__PURE__ */ (x: number, minimum: number, maximum: number) =>
  stepUnit(x - minimum) - stepUnit(x - maximum)

/** Returns 1 obly if x is inside the interval ]-1/2, +1/2]. See https://en.wikipedia.org/wiki/Rectangular_function */
export const stepRectangular = /* @__PURE__ */ (x: number) => stepBoxcar(x, -0.5, 0.5)

/**
 * Exponential step function.
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const stepExp = /* @__PURE__ */ (x: number, k: number, n: number): number => exp(-k * x ** n)

/** Quadratic easing function */
export const easeInQuadratic = /* @__PURE__ */ pow2

/** Quadratic easing function */
export const easeOutQuadratic = /* @__PURE__ */ (t: number) => t * (2 - t)

/** Quadratic easing function */
export const easeInOutQuadratic = /* @__PURE__ */ (t: number) => (t < 0.5 ? t * t * 2 : t * (4 - 2 * t) - 1)

/** Cubic easing function */
export const easeInCubic = /* @__PURE__ */ pow3

/** Cubic easing function */
export const easeOutCubic = /* @__PURE__ */ (t: number) => 1 + pow3(t - 1)

/** Cubic easing function */
export const easeInOutCubic = /* @__PURE__ */ (t: number) => (t < 0.5 ? pow3(t) * 4 : 1 + pow3(t - 1) * 4)

/** Quartic easing function */
export const easeInQuartic = /* @__PURE__ */ pow4

/** Quartic easing function */
export const easeOutQuartic = /* @__PURE__ */ (t: number) => 1 - pow4(t - 1)

/** Quartic easing function */
export const easeInOutQuartic = /* @__PURE__ */ (t: number) => (t < 0.5 ? t * pow3(t * 2) : 1 - pow4(t - 1) * 8)

/** Quintic easing function */
export const easeInQuintic = /* @__PURE__ */ pow5

/** Quintic easing function */
export const easeOutQuintic = /* @__PURE__ */ (t: number) => 1 + pow5(t - 1)

/** Quintic easing function */
export const easeInOutQuintic = /* @__PURE__ */ (t: number) => (t < 0.5 ? t * pow4(t * 2) : 1 + pow5(t - 1) * 16)

/** Sextic easing function */
export const easeInSextic = /* @__PURE__ */ pow6

/** Sextic easing function */
export const easeOutSextic = /* @__PURE__ */ (t: number) => 1 - pow6(t - 1)

/** Sextic easing function */
export const easeInOutSextic = /* @__PURE__ */ (t: number) => (t < 0.5 ? t * pow5(t * 2) : 1 - pow6(t - 1) * 32)

/** Septic easing function */
export const easeInSeptic = /* @__PURE__ */ pow7

/** Septic easing function */
export const easeOutSeptic = /* @__PURE__ */ (t: number) => 1 + pow7(t - 1)

/** Septic easing function */
export const easeInOutSeptic = /* @__PURE__ */ (t: number) => (t < 0.5 ? t * pow6(t * 2) : 1 + pow7(t - 1) * 64)

/** Octic easing function */
export const easeInOctic = /* @__PURE__ */ pow8

/** Octic easing function */
export const easeOutOctic = /* @__PURE__ */ (t: number) => 1 - pow8(t - 1)

/** Octic easing function */
export const easeInOutOctic = /* @__PURE__ */ (t: number) => (t < 0.5 ? t * pow7(t * 2) : 1 - pow8(t - 1) * 128)

/** Sine easing function */
export const easeInSine = /* @__PURE__ */ (t: number) => sin((t - 1) * PI_OVER_TWO) + 1

/** Sine easing function */
export const easeOutSine = /* @__PURE__ */ (t: number) => sin(t * PI_OVER_TWO)

/** Sine easing function */
export const easeInOutSine = /* @__PURE__ */ (t: number) => (1 - cos(t * PI)) / 2

/** Circle easing function */
export const easeInCircle = /* @__PURE__ */ (t: number) => 1 - sqrt(1 - t * t)

/** Circle easing function */
export const easeOutCircle = /* @__PURE__ */ (t: number) => sqrt((2 - t) * t)

/** Circle easing function */
export const easeInOutCircle = /* @__PURE__ */ (t: number) =>
  (t < 0.5 ? 1 - sqrt(1 - 4 * (t * t)) : sqrt(-(2 * t - 3) * (2 * t - 1)) + 1) / 2

/** Exponential easing function */
export const easeInExponential = /* @__PURE__ */ (t: number) => (t <= 0 ? t : pow2(10 * (t - 1)))

/** Exponential easing function */
export const easeOutExponential = /* @__PURE__ */ (t: number) => (t >= 1 ? t : 1 - pow2(-10 * t))

/** Exponential easing function */
export const easeInOutExponential = /* @__PURE__ */ (t: number) =>
  t <= 0 || t >= 1 ? t : t < 0.5 ? pow2(20 * t - 10) / 2 : 1 - pow2(-20 * t + 10) / 2

/** Elastic easing function */
export const easeInElastic = /* @__PURE__ */ (t: number) => sin(13 * PI_OVER_TWO * t) * pow2(10 * (t - 1))

/** Elastic easing function */
export const easeOutElastic = /* @__PURE__ */ (t: number) => sin(-13 * PI_OVER_TWO * (t + 1)) * pow2(-10 * t) + 1

/** Elastic easing function */
export const easeInOutElastic = /* @__PURE__ */ (t: number) =>
  (t < 0.5
    ? sin(13 * PI * t) * pow2(10 * (2 * t - 1))
    : sin(-13 * PI_OVER_TWO * (2 * t - 1 + 1)) * pow2(-10 * (2 * t - 1)) + 2) / 2

/** Back easing function */
export const easeInBack = /* @__PURE__ */ (t: number) => sin(13 * PI * t) * pow2(10 * (t - 1))

/** Back easing function */
export const easeOutBack = /* @__PURE__ */ (t: number) => sin(-13 * PI * (t + 1)) * pow2(-10 * t) + 1

/** Back easing function */
export const easeInOutBack = /* @__PURE__ */ (p: number) => {
  if (p < 0.5) {
    p *= 2
    return (p * p * p - p * sin(p * PI)) / 2
  }
  p = 1 - (2 * p - 1)
  return 1 - (p * p * p - p * sin(p * PI)) / 2
}

/** Smoothstep easing function */
export const easeInOutSmoothstep = /* @__PURE__ */ (t: number) => (3 - 2 * t) * t * t

/** Smootherstep easing function */
export const easeInOutSmootherstep = /* @__PURE__ */ (t: number) => t * t * t * (t * (t * 6 - 15) + 10)

/**
 * Linear interpolation
 * @param t The amount to choose between from and to
 * @param from The start value
 * @param to The end value
 * @returns from + t * (to - from)
 */
export const lerp = /* @__PURE__ */ (from: number, to: number, t: number): number => t * (to - from) + from

/**
 * Linear interpolation between two angles in radians
 * @param t The amount to choose between from and to
 * @param fromRadians The start angle, in radias
 * @param toRadians The end angle, in radians
 */
export const angleLerpSigned = /* @__PURE__ */ (fromRadians: number, toRadians: number, t: number): number =>
  angleWrapSigned(fromRadians + angleWrapSigned(toRadians - fromRadians) * t)

/**
 * Linear interpolation between two angles in radians
 * @param t The amount to choose between from and to
 * @param fromRadians The start angle, in radias
 * @param toRadians The end angle, in radians
 */
export const angleLerpUnsigned = /* @__PURE__ */ (fromRadians: number, toRadians: number, t: number): number =>
  angleWrapUnsigned(fromRadians + angleWrapUnsigned(toRadians - fromRadians) * t)

/** Moves a value toward a target */
export const moveTowards = (current: number, target: number, maxDelta: number) =>
  abs(target - current) <= maxDelta ? target : current + sign(target - current) * maxDelta

/** Moves an angle toward a target */
export const angleMoveTowards = (currentRadians: number, targetRadians: number, maxDelta: number) => {
  const delta = angleWrapSigned(currentRadians - targetRadians)
  return -maxDelta < delta && delta < maxDelta
    ? targetRadians
    : moveTowards(currentRadians, currentRadians + delta, maxDelta)
}

/**
 * Normalizes a value between 0 and 1, inverse of lerp, the t that has to passed to lerp to get the result, (v - from) / (to - from).
 * From and to cannot be the same value.
 * @param v A linearly interpolated value
 * @param from The start value
 * @param to The end value
 * @returns t to pass to lerp to compute v
 */
export const lerpInverse = /* @__PURE__ */ (from: number, to: number, v: number): number =>
  (v - from) / (to - from) || 0

/**
 * Frame rate independet interpolation amount calculation.
 * Example usage: lerp(damp(t, deltaTime), 2, 5)
 * @param t The amount to choose between from and to
 * @param deltaTime The time passed from the previous dampLerp to the next
 * @returns Amount to pass to interpolation or easing functions
 */
export const timeDamp = /* @__PURE__ */ (t: number, deltaTime: number): number => 1 - exp(-t * deltaTime)

/**
 * Grows fast, decay slow. h * exp(1 - h). Multiply h with a constant to obtain different impulse shapes
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const impulseExp = /* @__PURE__ */ (h: number): number => h * exp(1 - h)

/**
 * Grows fast, decay slow. K controls the fallof of the function, peak is sqrt(1/k)
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const impulseQuad = /* @__PURE__ */ (x: number, k: number): number => (2 * sqrt(k) * x) / (1 + k * x * x)

/**
 * Grows fast, decay slow. K controls the fallof of the function, n controls the degree of the polynomial
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const impulsePoly = /* @__PURE__ */ (x: number, k: number, n: number): number =>
  ((n / (n - 1)) * ((n - 1) * k) ** (1 / n) * x) / (1 + k * x ** n)

/**
 * Sustained exponential impulse
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const impulseSustainedExp = /* @__PURE__ */ (x: number, f: number, k: number): number => {
  const s = max(x - f, 0)
  return min((x * x) / (f * f), 1 + (2 / f) * s * exp(-k * s))
}

/**
 * Equivalent to smoothstep(c-w,c,x)-smoothstep(c,c+w,x)
 * Replaces well a gaussian.
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const pulseCubic = (x: number, c: number, w: number): number => {
  x = abs(x - c)
  const t = x / w
  return x > w ? 0 : 1 + (2 * t - 3) * t * t
}

/**
 * Normal distribution, Bell curve, Gaussian curve.
 * https://en.wikipedia.org/wiki/Normal_distribution
 */
export const gaussianDistribution = /* @__PURE__ */ (x: number, offset: number = 0, scale: number = 1) =>
  exp(-pow2(x - offset) / (2 * pow2(scale))) / (scale * SQRT_TWO_PI)

/**
 * Remap the unit interval into the unit interval by expanding the sides and compressing the center,
 * and keeping 1/2 mapped to 1/2.
 * k=1 is the identity curve, k<1 produces the classic gain() shape, and k>1 produces "s" shaped curves.
 * The curves are symmetric (and inverse) for k=a and k=1/a.
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const remapGain = /* @__PURE__ */ (x: number, k: number): number =>
  x < 0.5 ? (2 * x) ** k / 2 : 1 - (2 * (1 - x)) ** k / 2

/**
 * remap the 0..1 interval into 0..1, such that the corners are mapped to 0 and the center to 1 using a parabola
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const remapParabola = /* @__PURE__ */ (x: number, k: number): number => (4 * x * (1 - x)) ** k

/** Generalization of remapParabola, remaps the 0..1 interval into 0..1 by keeping the corners mapped to 0.
 * Shape of both sides of the curve is customizable.
 * https://iquilezles.org/www/articles/functions/functions.htm.
 */
export const remapPowerCurve = /* @__PURE__ */ (x: number, a: number, b: number): number =>
  (powSelf(a + b) / (a ** a * b ** b)) * x ** a * (1 - x) ** b

/** Definition of a generic easing function */
export type EasingFunction<T = number> = (t: T) => T

/**
 * Computes the interpolation between two values using an easing function
 * @param easingFunction The easing functio nto use, for example easeInOutSine
 * @param t The X axis, from 0 to 1
 * @param from The minimum value
 * @param to The maximum value
 * @returns The interpolation from from to to
 */
export const easing = /* @__PURE__ */ (from: number, to: number, t: number, easingFunction: EasingFunction): number =>
  lerp(from, to, easingFunction(clamp(t)))

/**
 * Builds a function that computes the interpolation between two values using an easing function
 * @param easingFunction The easing function to execute, for example easeInCircle
 * @returns A function able to execute the easing function for values of t between 0 to 1, in the form (t: number, from: number, to: number) => number
 */
export const makeEasing =
  /* @__PURE__ */
  (easingFunction: EasingFunction) => /* @__PURE__ */ (from: number, to: number, t: number) =>
    lerp(from, to, easingFunction(clamp(t)))

/** Smoothstep interpolation between two values. */
export const smoothstep = /* @__PURE__ */ makeEasing(easeInOutSmoothstep)

/** Smootherstep interpolation between two values. */
export const smootherstep = /* @__PURE__ */ makeEasing(easeInOutSmootherstep)

/** https://iquilezles.org/www/articles/smoothstepintegral/smoothstepintegral.htm */
export const smoothstepIntegral = /* @__PURE__ */ (t: number, T: number): number =>
  t >= T ? t - 0.5 * T : pow3(t / T) * (T - t * 0.5)

/**
 * Inverse function of smoothstep
 * https://iquilezles.org/www/articles/ismoothstep/ismoothstep.htm
 */
export const smoothstepInverse = /* @__PURE__ */ (y: number): number => 0.5 - sin(asin(1 - 2 * y) / 3)

/**
 * Bilinear 2D linear interpolation between four values
 * @param p00 Value 1
 * @param p10 Value 2
 * @param p01 Value 3
 * @param p11 Value 4
 * @param tx The X amount
 * @param ty The Y amount
 * @returns The 2d bilinear interpolation
 */
export const bilerp = /* @__PURE__ */ (p00: number, p10: number, p01: number, p11: number, tx: number, ty: number) =>
  lerp(lerp(p00, p10, tx), lerp(p01, p11, tx), ty)

/**
 * Interpolation of t over an Hermite spline defined by two values and two tangents.
 * @param t the position on the interpolation spline (between 0 and 1)
 * @param v1 the first control point
 * @param tangent1 the first tangent
 * @param v2 the second control point
 * @param tangent2 the second tangent
 * @returns hermite interpolation
 */
export const hermite = /* @__PURE__ */ (
  t: number,
  v1: number,
  tangent1: number,
  v2: number,
  tangent2: number
): number => {
  const tt = t * t
  const tt3 = tt * 3
  const ttt = t * tt
  const ttt2 = ttt * 2
  return v1 * (ttt2 - tt3 + 1) + v2 * (tt3 - ttt2) + tangent1 * (t + ttt - tt * 2) + tangent2 * (ttt - tt)
}

/**
 * Gets the first derivative at the given position t of an Hermite spline defined by two values and two tangents
 * @param t the position on the interpolation spline (between 0 and 1)
 * @param v1 the first control point
 * @param tangent1 the first tangent
 * @param v2 the second control point
 * @param tangent2 the second tangent
 * @returns first derivative of an hermite iterpolation
 */
export const hermiteDerivative = /* @__PURE__ */ (
  t: number,
  v1: number,
  tangent1: number,
  v2: number,
  tangent2: number
): number => {
  const tt = t * t
  const tt3 = tt * 3
  return ((tt - t) * v1 + (t - tt) * v2) * 6 + (tt3 + 1 - t * 4) * tangent1 + (tt3 - t * 2) * tangent2
}

/**
 * Gets the second derivative at the given position t of an Hermite spline defined by two values and two tangents
 * @param t the position on the interpolation spline (between 0 and 1)
 * @param v1 the first control point
 * @param tangent1 the first tangent
 * @param v2 the second control point
 * @param tangent2 the second tangent
 * @returns first derivative of an hermite iterpolation
 */
export const hermiteDerivative2 = /* @__PURE__ */ (
  t: number,
  v1: number,
  tangent1: number,
  v2: number,
  tangent2: number
): number => (12 * v1 + 6 * (tangent1 + tangent2) - 12 * v2) * t + (6 * (v2 - v1) - 4 * tangent1 - 2 * tangent2)

/** Decodes a float value given 4 values encoded in RGBA values from 0 to 1 */
export const decodeRgbaFloats = /* @__PURE__ */ (r: number, g: number, b: number, a: number): number => {
  return r + g / 255 + b / 65025 + a / 160581375
}

/** Decodes a float value given 4 values encoded in RGBA values from 0 to 255 */
export const decodeRgbaBytes = /* @__PURE__ */ (r: number, g: number, b: number, a: number): number => {
  return r / 255 + g / 65025 + b / 16581375 + a / 40948250625
}

/** Returns a random number between minimum and maximum */
export const mathRandomRange = /* @__PURE__ */ (minimum: number, maximum: number) =>
  lerp(minimum, maximum, mathRandom())

/**
 * Creates a new xoshiro/128** random generator. Returns a function that when invoked returns a new uint32 value.
 * Period is 2**128 − 1
 * See https://prng.di.unimi.it/
 */
export const randomXoshiro =
  /* @__PURE__ */
  (seed0: number, seed1: number, seed2: number, seed3: number) => /* @__PURE__ */ () => {
    const result = int32_rotl(seed1 * 5, 7) * 9
    const t = seed1 << 9
    seed2 ^= seed0
    seed3 ^= seed1
    seed1 ^= seed2
    seed0 ^= seed3
    seed2 ^= t
    seed3 = int32_rotl(seed3, 11)
    return result
  }

/** Computes the 2D cross product, also known as the perpendicular dot product */
export const perpDotProduct2D = /* @__PURE__ */ (ax: number, ay: number, bx: number, by: number) => ax * by - ay * bx

/** Computes the 2D dot product */
export const dot2D = /* @__PURE__ */ (ax: number, ay: number, bx: number, by: number) => ax * bx + ay * by

/** Computes the 3D dot product */
export const dot3D = /* @__PURE__ */ (ax: number, ay: number, az: number, bx: number, by: number, bz: number) =>
  ax * bx + ay * by + az * bz

/** Computes the 4D dot product */
export const dot4D = /* @__PURE__ */ (
  ax: number,
  ay: number,
  az: number,
  bx: number,
  by: number,
  bz: number,
  aw: number,
  bw: number
) => ax * bx + ay * by + az * bz + aw * bw

/** Returns x * x + y * y */
export const lengthSquared2D = /* @__PURE__ */ (x: number, y: number): number => x * x + y * y

/* Returns  x * x + y * y + z * z */
export const lengthSquared3D = /* @__PURE__ */ (x: number, y: number, z: number): number => x * x + y * y + z * z

/* Returns x * x + y * y + z * z + w * w */
export const lengthSquared4D = /* @__PURE__ */ (x: number, y: number, z: number, w: number): number =>
  x * x + y * y + z * z + w * w

/** Returns sqrt(x * x + y * y). Same as hypot(x, y) but faster */
export const length2D = /* @__PURE__ */ (x: number, y: number): number => sqrt(x * x + y * y)

/* Returns sqrt(x * x + y * y + z * z). Same as hypot(x, y, z) but faster */
export const length3D = /* @__PURE__ */ (x: number, y: number, z: number): number => sqrt(x * x + y * y + z * z)

/* Returns sqrt(x * x + y * y + z * z + w * w). Same as hypot(x, y, z, w) but faster */
export const length4D = /* @__PURE__ */ (x: number, y: number, z: number, w: number): number =>
  sqrt(x * x + y * y + z * z + w * w)

/** Gets the angle in radians between two vectors */
export const angle2D = /* @__PURE__ */ (ax: number, ay: number, bx: number, by: number) => atan2(bx - ax, by - ay)

/** Gets the angle in radians between two vectors */
export const angle3D = /* @__PURE__ */ (ax: number, ay: number, az: number, bx: number, by: number, bz: number) =>
  acosSafe(
    num_divSafe(ax * bx + ay * by + az * bz, sqrt((ax * ax + ay * ay + az * bz) * (bx * bx + by * by + az * bz)))
  )

/** Gets the angle in radians between two vectors */
export const angle4D = (
  ax: number,
  ay: number,
  az: number,
  aw: number,
  bx: number,
  by: number,
  bz: number,
  bw: number /* @__PURE__ */
) =>
  acosSafe(
    num_divSafe(
      ax * bx + ay * by + az * bz + aw * bw,
      sqrt((ax * ax + ay * ay + az * bz + aw * bw) * (bx * bx + by * by + az * bz + aw * bw))
    )
  )

export const clampLengthMultiplier = /* @__PURE__ */ (length: number, minLength: number, maxLength: number) =>
  clamp(length, minLength, maxLength) / (length || 1)

/** Check if a point lies within a 2D triangle */
export const pointInTriangle2D = (
  ax: number,
  ay: number,
  bx: number,
  by: number,
  cx: number,
  cy: number,
  px: number,
  py: number
) =>
  (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
  (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
  (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0

/** Gets a size in bytes in an human readable form. */
export const humanReadableSizeInBytes = /* @__PURE__ */ (bytes: number): string => {
  bytes = roundFromZero(bytes)
  const i = bytes && (min(floor(logN(abs(bytes), 1024)), 6) || 0)
  return `${+(bytes / 1024 ** i).toFixed(2)} ${i ? ' kMGTPE'[i] : ''}B`
}

/** Gets the signed area of a 2D triangle */
export const triangleSignedArea2D = (ax: number, ay: number, bx: number, by: number, cx: number, cy: number) =>
  (by - ay) * (cx - bx) - (bx - ax) * (cy - by)
