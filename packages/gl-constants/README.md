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

console.log(glConstantGetName(-123)) // prints undefined
```

glConstantGetName returns undefined if the constant is not found

### License

MIT License

Copyright (c) 2021 Salvatore Previti
