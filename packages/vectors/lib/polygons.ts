import { Vec2, Vec2In, vec2_new, Vec3In } from './vec-234'

export type Polygon2In = ArrayLike<Vec2In>

export type Polygon3In = ArrayLike<Vec3In>

export const polygon2_fromFlatArray = (
  input: ArrayLike<number>,
  start: number = 0,
  end: number = input.length - start
): Vec2[] => {
  const result = []
  while (start < end) {
    result.push(vec2_new(input[start], input[start + 1]))
    start += 2
  }
  return result
}

export const polygon2_isClockwise = (polygon: Polygon2In): boolean => {
  let sum = 0
  for (let i = 0, len = polygon.length; i < len; ++i) {
    const p1 = polygon[i]
    const p2 = polygon[(i + 1) % len]
    sum += (p2.x - p1.x) * (p2.y + p1.y)
  }
  return sum > 0
}

export const polygon2_isConvex = (polygon: Polygon2In): boolean => {
  const len = polygon.length
  if (len < 3) {
    return false
  }
  for (let i = 0; i < len; ++i) {
    const a = polygon[i]
    const b = polygon[(i + 1) % len]
    const c = polygon[(i + 2) % len]
    if ((b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y) > 0) {
      return false
    }
  }
  return true
}
