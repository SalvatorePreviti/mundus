import * as math from '../packages/math'

import * as vec from '../packages/vectors/lib/vec-234'

const mathFuncs = new Set<string>()
for (const [k, v] of Object.entries(math)) {
  if (typeof v === 'function' && v.length > 1) {
    if (!k.startsWith('num_') && !k.startsWith('ease')) {
      if (!(vec as any)[`vec2_${k}`] && !(vec as any)[`vec3_${k}`] && !(vec as any)[`vec4_${k}`]) {
        if (
          !k.startsWith('int53_') &&
          !k.startsWith('uint53_') &&
          !k.startsWith('uint32_') &&
          !k.startsWith('int32_')
        ) {
          mathFuncs.add(k)
        }
      }
    }
  }
}

for (const skip of [
  'length4D',
  'lengthSquared4D',
  'length3D',
  'lengthSquared3D',
  'length2D',
  'lengthSquared2D',
  'mathMin',
  'mathMax',
  'angle2D',
  'angle3D',
  'angle4D',
  'atan2',
  'cross2D',
  'dot2D',
  'dot3D',
  'dot4D',
  'makeEasing'
]) {
  mathFuncs.delete(skip)
}

console.log(mathFuncs)

// const funcs = new Set(Object.keys(math).filter((k) => typeof math[k] === 'function'))

vec.vec2_sin({ x: 0, y: 0 }, { x: 0, y: 0 })
