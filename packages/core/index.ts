export const {
  defineProperty,
  deleteProperty,
  getOwnPropertyDescriptor,
  getPrototypeOf,
  setPrototypeOf,
  set: object_set,
  preventExtensions,
  ownKeys: object_ownKeys,
  isExtensible: object_isExtensible,
  get: object_get,
  has: object_has,
  construct: object_construct,
  apply: function_apply
} = Reflect

export const {
  assign: object_assign,
  create: object_create,
  defineProperties,
  entries: object_entries,
  freeze: object_freeze,
  fromEntries: object_fromEntries,
  getOwnPropertyNames,
  getOwnPropertySymbols,
  getOwnPropertyDescriptors,
  is: object_is,
  isSealed: object_isSealed,
  isFrozen: object_isFrozen,
  keys: object_keys,
  prototype: object_prototype,
  seal: object_seal,
  values: object_values,
  preventExtensions: object_preventExtensions
} = Object

export const { isArray, from: array_from, of: array_of } = Array

export const { prototype: function_prototype } = Function

export const emptyArray: readonly any[] = []

/** A function that does nothing. */
export const noop = (): void => {}

/** Returns !arg */
export const isFalsy = (arg: unknown): boolean => !arg

/** Returns !!arg */
export const isTruthy = (arg: unknown): boolean => !!arg

/** Returns the first argument */
export const fnArg0 = <T>(arg: T): T => arg

/** Returns the second argument */
export const fnArg1 = <T>(_: unknown, arg: T): T => arg

/** Returns the third argument */
export const fnArg2 = <T>(_: unknown, _1: unknown, arg: T): T => arg

/** Returns the fourth argument */
export const fnArg3 = <T>(_: unknown, _1: unknown, _2: unknown, arg: T): T => arg

/** Returns the fifth argument */
export const fnArg4 = <T>(_: unknown, _1: unknown, _2: unknown, _3: unknown, arg: T): T => arg

/** Returns the sixth argument */
export const fnArg5 = <T>(_: unknown, _1: unknown, _2: unknown, _3: unknown, _4: unknown, arg: T): T => arg

/** Returns the seventh argument */
export const fnArg6 = <T>(_: unknown, _1: unknown, _2: unknown, _3: unknown, _4: unknown, _5: unknown, arg: T): T => arg

/** Returns the eight argument */
export const fnArg7 = <T>(
  _: unknown,
  _1: unknown,
  _2: unknown,
  _3: unknown,
  _4: unknown,
  _5: unknown,
  _6: unknown,
  arg: T
): T => arg

/** A function that returns a function that returns its first argument */
export const fnFnArg1 = (): ReturnType<typeof fnArg0> => fnArg0

/** Creates a new array given a length and a function used to initialize every element */
export const array_fromLength = <T>(length: number, fn: (index: number) => T): T[] =>
  array_from({ length }, (_, i) => fn(i))

/** Gets the first element of an array, returns undefined if array is empty */
export const array_first = <T>(array: ArrayLike<T>): T | undefined => array[0]

/** Gets the last element of an array, returns undefined if array is empty */
export const array_last = <T>(array: ArrayLike<T>): T | undefined => array[array.length - 1]

/** Returns an array containing all the keys in an array [0, 1, 2, 3 ...] */
export const array_keys = <T>(array: Iterable<T> | ArrayLike<T>): number[] => array_from(array, fnArg1)

/** Given an array, returns the indices on that array sorted by the given sorting function */
export const array_sortedIndices = <T>(array: ArrayLike<T>, compare: (a: T, b: T) => number): number[] =>
  array_keys(array).sort((a, b) => compare(array[a], array[b]))

/** Reorder an array following the given indices */
export const array_reindexed = <T>(array: ArrayLike<T>, indices: readonly number[]): T[] => indices.map((i) => array[i])

/** Like array.map, but instead of creating a new array, it replaces the values in place */
export const array_setEach = <T, A = T, TOut extends { [index: number]: T } = T[]>(
  out: TOut,
  input: ArrayLike<A>,
  fn: (item: A, index: number) => T
): TOut => {
  for (let i = 0; i < input.length; ++i) {
    out[i] = fn(input[i], i)
  }
  return out
}

export const array_copy = <T, TOut extends { [index: number]: T } = T[]>(out: TOut, input: ArrayLike<T>): TOut => {
  if (out !== (input as any)) {
    for (let i = 0; i < input.length; ++i) {
      out[i] = input[i]
    }
  }
  return out
}

export const array_set = <T, TArray extends { [n: number]: T } = T[]>(out: TArray, ...args: T[]): TArray =>
  array_copy(out, args)

/** Given a sorted array of numbers, find the index of the first item greater than the given minimum. The array needs to be sorted. */
export const array_binarySearchMin = (
  array: ArrayLike<number>,
  minimum: number,
  arrayLength = array.length,
  index = arrayLength >> 1,
  step = arrayLength >> 2
): number => {
  if (!arrayLength) {
    return -1
  }
  for (; step; step >>= 1) {
    index = array[index] < minimum ? step : -step
  }
  while (index > 0 && array[index] > minimum) {
    --index
  }
  while (index < arrayLength - 1 && array[index] < minimum) {
    ++index
  }
  return index
}

/** Swap two items in the array by their indices */
export const array_swapPair = <TArray extends { [n: number]: any } = []>(
  array: TArray,
  i: number,
  j: number
): TArray => {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
  return array
}
