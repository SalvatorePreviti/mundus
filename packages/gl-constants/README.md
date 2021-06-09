## WebGL constants

This module exports all webgl constants as single const exports.
This allows better tree shaking and minification during bundling.

See https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants for more information

Usage:

```js
import { GL_LINE_LOOP, GL_ALIASED_POINT_SIZE_RANGE } from '@mundus/gl-constants'
```

### Get constant name

For debugging purposes is possible to convert a constant back to its name

```js
import { glConstantGetName } from '@mundus/gl-constants/enum'

console.log(glConstantGetName(36795)) // prints GPU_DISJOINT_EXT

console.log(glConstantGetName(0x00000100)) // prints DEPTH_BUFFER_BIT

console.log(glConstantGetName(0x100)) // prints DEPTH_BUFFER_BIT

console.log(glConstantGetName('0x100')) // prints DEPTH_BUFFER_BIT

console.log(glConstantGetName('DEPTH_BUFFER_BIT')) // prints DEPTH_BUFFER_BIT

console.log(glConstantGetName('GL_DEPTH_BUFFER_BIT')) // prints DEPTH_BUFFER_BIT

console.log(glConstantGetName(-123)) // prints undefined

console.log(glConstantGetName('xxx')) // prints undefined
```

glConstantGetName returns undefined if the constant is not found

### GL_CONSTANTS_NAMES

```js
import { GL_CONSTANTS_NAMES } from '@mundus/gl-constants/enum'
```

Contains all the webgl2 constant names in a single array, without "GL\_" prefix.

### License

MIT License

Copyright (c) 2021 Salvatore Previti
