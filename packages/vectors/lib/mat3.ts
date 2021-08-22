export type Mat3 = Float32Array | Float64Array | number[]

export type Mat3Out = Mat3

export interface Mat3In extends ArrayLike<number>, Iterable<number> {}

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
