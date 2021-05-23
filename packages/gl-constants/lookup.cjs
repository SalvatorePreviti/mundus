// WebGL constants from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
// It gets minified better to use the raw constants instad of using webglContext.CONSTANT
// Those values are standard in all browsers.

/** All webgl constants */
const glConstants = {
  /** Clearing buffers: Passed to clear to clear the current depth buffer. */
  DEPTH_BUFFER_BIT: 256,

  /** Clearing buffers: Passed to clear to clear the current stencil buffer. */
  STENCIL_BUFFER_BIT: 1024,

  /** Clearing buffers: Passed to clear to clear the current color buffer. */
  COLOR_BUFFER_BIT: 16384,

  /** Rendering primitives: Passed to drawElements or drawArrays to draw single points. */
  POINTS: 0,

  /** Rendering primitives: Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it. */
  LINES: 1,

  /** Rendering primitives: Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment. */
  LINE_LOOP: 2,

  /** Rendering primitives: Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last. */
  LINE_STRIP: 3,

  /** Rendering primitives: Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle. */
  TRIANGLES: 4,

  /** Rendering primitives: Passed to drawElements or drawArrays to draw a connected group of triangles. */
  TRIANGLE_STRIP: 5,

  /** Rendering primitives: Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan. */
  TRIANGLE_FAN: 6,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to turn off a component. */
  ZERO: 0,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to turn on a component. */
  ONE: 1,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color. */
  SRC_COLOR: 768,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color. */
  ONE_MINUS_SRC_COLOR: 769,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha. */
  SRC_ALPHA: 770,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha. */
  ONE_MINUS_SRC_ALPHA: 771,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha. */
  DST_ALPHA: 772,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha. */
  ONE_MINUS_DST_ALPHA: 773,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color. */
  DST_COLOR: 774,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color. */
  ONE_MINUS_DST_COLOR: 775,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha. */
  SRC_ALPHA_SATURATE: 776,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to specify a constant color blend function. */
  CONSTANT_COLOR: 32769,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function. */
  ONE_MINUS_CONSTANT_COLOR: 32770,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function. */
  CONSTANT_ALPHA: 32771,

  /** Blending modes: Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function. */
  ONE_MINUS_CONSTANT_ALPHA: 32772,

  /** Blending equations: Passed to blendEquation or blendEquationSeparate to set an addition blend function. */
  FUNC_ADD: 32774,

  /** Blending equations: Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination). */
  FUNC_SUBTRACT: 32778,

  /** Blending equations: Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source). */
  FUNC_REVERSE_SUBTRACT: 32779,

  /** Getting GL parameter information: Passed to getParameter to get the current RGB blend function. */
  BLEND_EQUATION: 32777,

  /** Getting GL parameter information: Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION */
  BLEND_EQUATION_RGB: 32777,

  /** Getting GL parameter information: Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION */
  BLEND_EQUATION_ALPHA: 34877,

  /** Getting GL parameter information: Passed to getParameter to get the current destination RGB blend function. */
  BLEND_DST_RGB: 32968,

  /** Getting GL parameter information: Passed to getParameter to get the current destination RGB blend function. */
  BLEND_SRC_RGB: 32969,

  /** Getting GL parameter information: Passed to getParameter to get the current destination alpha blend function. */
  BLEND_DST_ALPHA: 32970,

  /** Getting GL parameter information: Passed to getParameter to get the current source alpha blend function. */
  BLEND_SRC_ALPHA: 32971,

  /** Getting GL parameter information: Passed to getParameter to return a the current blend color. */
  BLEND_COLOR: 32773,

  /** Getting GL parameter information: Passed to getParameter to get the array buffer binding. */
  ARRAY_BUFFER_BINDING: 34964,

  /** Getting GL parameter information: Passed to getParameter to get the current element array buffer. */
  ELEMENT_ARRAY_BUFFER_BINDING: 34965,

  /** Getting GL parameter information: Passed to getParameter to get the current lineWidth (set by the lineWidth method). */
  LINE_WIDTH: 2849,

  /** Getting GL parameter information: Passed to getParameter to get the current size of a point drawn with GL_POINTS */
  ALIASED_POINT_SIZE_RANGE: 33901,

  /** Getting GL parameter information: Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1. */
  ALIASED_LINE_WIDTH_RANGE: 33902,

  /** Getting GL parameter information: Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK */
  CULL_FACE_MODE: 2885,

  /** Getting GL parameter information: Passed to getParameter to determine the current value of frontFace. Should return CW or CCW. */
  FRONT_FACE: 2886,

  /** Getting GL parameter information: Passed to getParameter to return a length-2 array of floats giving the current depth range. */
  DEPTH_RANGE: 2928,

  /** Getting GL parameter information: Passed to getParameter to determine if the depth write mask is enabled. */
  DEPTH_WRITEMASK: 2930,

  /** Getting GL parameter information: Passed to getParameter to determine the current depth clear value. */
  DEPTH_CLEAR_VALUE: 2931,

  /** Getting GL parameter information: Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL. */
  DEPTH_FUNC: 2932,

  /** Getting GL parameter information: Passed to getParameter to get the value the stencil will be cleared to. */
  STENCIL_CLEAR_VALUE: 2961,

  /** Getting GL parameter information: Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL. */
  STENCIL_FUNC: 2962,

  /** Getting GL parameter information: Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP. */
  STENCIL_FAIL: 2964,

  /** Getting GL parameter information: Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP. */
  STENCIL_PASS_DEPTH_FAIL: 2965,

  /** Getting GL parameter information: Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP. */
  STENCIL_PASS_DEPTH_PASS: 2966,

  /** Getting GL parameter information: Passed to getParameter to get the reference value used for stencil tests. */
  STENCIL_REF: 2967,

  /** Getting GL parameter information: passed to getParameter */
  STENCIL_VALUE_MASK: 2963,

  /** Getting GL parameter information: passed to getParameter */
  STENCIL_WRITEMASK: 2968,

  /** Getting GL parameter information: passed to getParameter */
  STENCIL_BACK_FUNC: 34816,

  /** Getting GL parameter information: passed to getParameter */
  STENCIL_BACK_FAIL: 34817,

  /** Getting GL parameter information: passed to getParameter */
  STENCIL_BACK_PASS_DEPTH_FAIL: 34818,

  /** Getting GL parameter information: passed to getParameter */
  STENCIL_BACK_PASS_DEPTH_PASS: 34819,

  /** Getting GL parameter information: passed to getParameter */
  STENCIL_BACK_REF: 36003,

  /** Getting GL parameter information: passed to getParameter */
  STENCIL_BACK_VALUE_MASK: 36004,

  /** Getting GL parameter information: passed to getParameter */
  STENCIL_BACK_WRITEMASK: 36005,

  /** Getting GL parameter information: passed to getParameter, returns an Int32Array with four elements for the current viewport dimensions. */
  VIEWPORT: 2978,

  /** Getting GL parameter information: passed to getParameter, returns an Int32Array with four elements for the current scissor box dimensions. */
  SCISSOR_BOX: 3088,

  /** Getting GL parameter information: passed to getParameter */
  COLOR_CLEAR_VALUE: 3106,

  /** Getting GL parameter information: passed to getParameter */
  COLOR_WRITEMASK: 3107,

  /** Getting GL parameter information: passed to getParameter */
  UNPACK_ALIGNMENT: 3317,

  /** Getting GL parameter information: passed to getParameter */
  PACK_ALIGNMENT: 3333,

  /** Getting GL parameter information: passed to getParameter */
  MAX_TEXTURE_SIZE: 3379,

  /** Getting GL parameter information: passed to getParameter */
  MAX_VIEWPORT_DIMS: 3386,

  /** Getting GL parameter information: passed to getParameter */
  SUBPIXEL_BITS: 3408,

  /** Getting GL parameter information: passed to getParameter */
  RED_BITS: 3410,

  /** Getting GL parameter information: passed to getParameter */
  GREEN_BITS: 3411,

  /** Getting GL parameter information: passed to getParameter */
  BLUE_BITS: 3412,

  /** Getting GL parameter information: passed to getParameter */
  ALPHA_BITS: 3413,

  /** Getting GL parameter information: passed to getParameter */
  DEPTH_BITS: 3414,

  /** Getting GL parameter information: passed to getParameter */
  STENCIL_BITS: 3415,

  /** Getting GL parameter information: passed to getParameter */
  POLYGON_OFFSET_UNITS: 10752,

  /** Getting GL parameter information: passed to getParameter */
  POLYGON_OFFSET_FACTOR: 32824,

  /** Getting GL parameter information: passed to getParameter */
  TEXTURE_BINDING_2D: 32873,

  /** Getting GL parameter information: passed to getParameter */
  SAMPLE_BUFFERS: 32936,

  /** Getting GL parameter information: passed to getParameter */
  SAMPLES: 32937,

  /** Getting GL parameter information: passed to getParameter */
  SAMPLE_COVERAGE_VALUE: 32938,

  /** Getting GL parameter information: passed to getParameter */
  SAMPLE_COVERAGE_INVERT: 32939,

  /** Getting GL parameter information: passed to getParameter */
  COMPRESSED_TEXTURE_FORMATS: 34467,

  /** Getting GL parameter information: passed to getParameter */
  VENDOR: 7936,

  /** Getting GL parameter information: passed to getParameter */
  RENDERER: 7937,

  /** Getting GL parameter information: passed to getParameter */
  VERSION: 7938,

  /** Getting GL parameter information: passed to getParameter */
  IMPLEMENTATION_COLOR_READ_TYPE: 35738,

  /** Getting GL parameter information: passed to getParameter */
  IMPLEMENTATION_COLOR_READ_FORMAT: 35739,

  /** Getting GL parameter information: passed to getParameter */
  BROWSER_DEFAULT_WEBGL: 37444,

  /** Buffers: Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often. */
  STATIC_DRAW: 35044,

  /** Buffers: Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often. */
  STREAM_DRAW: 35040,

  /** Buffers: Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often. */
  DYNAMIC_DRAW: 35048,

  /** Buffers: Passed to bindBuffer or bufferData to specify the type of buffer being used. */
  ARRAY_BUFFER: 34962,

  /** Buffers: Passed to bindBuffer or bufferData to specify the type of buffer being used. */
  ELEMENT_ARRAY_BUFFER: 34963,

  /** Buffers: Passed to getBufferParameter to get a buffer's size. */
  BUFFER_SIZE: 34660,

  /** Buffers: Passed to getBufferParameter to get the hint for the buffer passed in when it was created. */
  BUFFER_USAGE: 34661,

  /** Vertex attributes: Passed to getVertexAttrib to read back the current vertex attribute. */
  CURRENT_VERTEX_ATTRIB: 34342,

  /** Vertex attributes: Passed to getVertexAttrib */
  VERTEX_ATTRIB_ARRAY_ENABLED: 34338,

  /** Vertex attributes: Passed to getVertexAttrib */
  VERTEX_ATTRIB_ARRAY_SIZE: 34339,

  /** Vertex attributes: Passed to getVertexAttrib */
  VERTEX_ATTRIB_ARRAY_STRIDE: 34340,

  /** Vertex attributes: Passed to getVertexAttrib */
  VERTEX_ATTRIB_ARRAY_TYPE: 34341,

  /** Vertex attributes: Passed to getVertexAttrib */
  VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,

  /** Vertex attributes: Passed to getVertexAttrib */
  VERTEX_ATTRIB_ARRAY_POINTER: 34373,

  /** Vertex attributes: Passed to getVertexAttrib */
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,

  /** Culling: Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method. */
  CULL_FACE: 2884,

  /** Culling: Passed to cullFace to specify that only front faces should be culled. */
  FRONT: 1028,

  /** Culling: Passed to cullFace to specify that only back faces should be culled. */
  BACK: 1029,

  /** Culling: Passed to cullFace to specify that front and back faces should be culled. */
  FRONT_AND_BACK: 1032,

  /** Enabling and disabling: Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method. */
  BLEND: 3042,

  /** Enabling and disabling: Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test. */
  DEPTH_TEST: 2929,

  /** Enabling and disabling: Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method. */
  DITHER: 3024,

  /** Enabling and disabling: Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test. */
  POLYGON_OFFSET_FILL: 32823,

  /** Enabling and disabling: Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels. */
  SAMPLE_ALPHA_TO_COVERAGE: 32926,

  /** Enabling and disabling: Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling. */
  SAMPLE_COVERAGE: 32928,

  /** Enabling and disabling: Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test. */
  SCISSOR_TEST: 3089,

  /** Enabling and disabling: Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test. */
  STENCIL_TEST: 2960,

  /** Errors: Returned from getError. */
  NO_ERROR: 0,

  /** Errors: Returned from getError. */
  INVALID_ENUM: 1280,

  /** Errors: Returned from getError. */
  INVALID_VALUE: 1281,

  /** Errors: Returned from getError. */
  INVALID_OPERATION: 1282,

  /** Errors: Returned from getError. */
  OUT_OF_MEMORY: 1285,

  /** Errors: Returned from getError. */
  CONTEXT_LOST_WEBGL: 37442,

  /** Front face directions: Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction */
  CW: 2304,

  /** Front face directions: Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction */
  CCW: 2305,

  /** Hints: There is no preference for this behavior. */
  DONT_CARE: 4352,

  /** Hints: The most efficient behavior should be used. */
  FASTEST: 4353,

  /** Hints: The most correct or the highest quality option should be used. */
  NICEST: 4354,

  /** Hints: Hint for the quality of filtering when generating mipmap images with WebGLRenderingContext.generateMipmap(). */
  GENERATE_MIPMAP_HINT: 33170,

  /** Data types: */
  BYTE: 5120,

  /** Data types and Pixel types: */
  UNSIGNED_BYTE: 5121,

  /** Data types: */
  SHORT: 5122,

  /** Data types: */
  UNSIGNED_SHORT: 5123,

  /** Data types: */
  INT: 5124,

  /** Data types: */
  UNSIGNED_INT: 5125,

  /** Data types: */
  FLOAT: 5126,

  /** Pixel formats: */
  DEPTH_COMPONENT: 6402,

  /** Pixel formats: */
  ALPHA: 6406,

  /** Pixel formats: */
  RGB: 6407,

  /** Pixel formats: */
  RGBA: 6408,

  /** Pixel formats: */
  LUMINANCE: 6409,

  /** Pixel formats: */
  LUMINANCE_ALPHA: 6410,

  /** Pixel types: */
  UNSIGNED_SHORT_4_4_4_4: 32819,

  /** Pixel types: */
  UNSIGNED_SHORT_5_5_5_1: 32820,

  /** Pixel types: */
  UNSIGNED_SHORT_5_6_5: 33635,

  /** Shaders: Passed to createShader to define a fragment shader. */
  FRAGMENT_SHADER: 35632,

  /** Shaders: Passed to createShader to define a vertex shader */
  VERTEX_SHADER: 35633,

  /** Shaders: Passed to getShaderParamter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error */
  COMPILE_STATUS: 35713,

  /** Shaders: Passed to getShaderParamter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise. */
  DELETE_STATUS: 35712,

  /** Shaders: Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error. */
  LINK_STATUS: 35714,

  /** Shaders: Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found. */
  VALIDATE_STATUS: 35715,

  /** Shaders: Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred. */
  ATTACHED_SHADERS: 35717,

  /** Shaders: Passed to getProgramParameter to get the number of attributes active in a program. */
  ACTIVE_ATTRIBUTES: 35721,

  /** Shaders: Passed to getProgramParamter to get the number of uniforms active in a program. */
  ACTIVE_UNIFORMS: 35718,

  /** Shaders: The maximum number of entries possible in the vertex attribute list. */
  MAX_VERTEX_ATTRIBS: 34921,

  /** Shaders: */
  MAX_VERTEX_UNIFORM_VECTORS: 36347,

  /** Shaders: */
  MAX_VARYING_VECTORS: 36348,

  /** Shaders: */
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,

  /** Shaders: */
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,

  /** Shaders: Implementation dependent number of maximum texture units. At least 8. */
  MAX_TEXTURE_IMAGE_UNITS: 34930,

  /** Shaders: */
  MAX_FRAGMENT_UNIFORM_VECTORS: 36349,

  /** Shaders: */
  SHADER_TYPE: 35663,

  /** Shaders: */
  SHADING_LANGUAGE_VERSION: 35724,

  /** Shaders: */
  CURRENT_PROGRAM: 35725,

  /** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn. */
  NEVER: 512,

  /** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value. */
  LESS: 513,

  /** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value. */
  EQUAL: 514,

  /** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value. */
  LEQUAL: 515,

  /** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value. */
  GREATER: 516,

  /** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value. */
  NOTEQUAL: 517,

  /** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value. */
  GEQUAL: 518,

  /** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn. */
  ALWAYS: 519,

  /** Stencil actions: */
  KEEP: 7680,

  /** Stencil actions: */
  REPLACE: 7681,

  /** Stencil actions: */
  INCR: 7682,

  /** Stencil actions: */
  DECR: 7683,

  /** Stencil actions: */
  INVERT: 5386,

  /** Stencil actions: */
  INCR_WRAP: 34055,

  /** Stencil actions: */
  DECR_WRAP: 34056,

  /** Textures: */
  NEAREST: 9728,

  /** Textures: */
  LINEAR: 9729,

  /** Textures: */
  NEAREST_MIPMAP_NEAREST: 9984,

  /** Textures: */
  LINEAR_MIPMAP_NEAREST: 9985,

  /** Textures: */
  NEAREST_MIPMAP_LINEAR: 9986,

  /** Textures: */
  LINEAR_MIPMAP_LINEAR: 9987,

  /** Textures: */
  TEXTURE_MAG_FILTER: 10240,

  /** Textures: */
  TEXTURE_MIN_FILTER: 10241,

  /** Textures: */
  TEXTURE_WRAP_S: 10242,

  /** Textures: */
  TEXTURE_WRAP_T: 10243,

  /** Textures: */
  TEXTURE_2D: 3553,

  /** Textures: */
  TEXTURE: 5890,

  /** Textures: */
  TEXTURE_CUBE_MAP: 34067,

  /** Textures: */
  TEXTURE_BINDING_CUBE_MAP: 34068,

  /** Textures: */
  TEXTURE_CUBE_MAP_POSITIVE_X: 34069,

  /** Textures: */
  TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,

  /** Textures: */
  TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,

  /** Textures: */
  TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,

  /** Textures: */
  TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,

  /** Textures: */
  TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,

  /** Textures: */
  MAX_CUBE_MAP_TEXTURE_SIZE: 34076,

  /** Textures: A texture unit. */
  TEXTURE0: 33984,

  /** Textures: A texture unit. */
  TEXTURE1: 33985,

  /** Textures: A texture unit. */
  TEXTURE2: 33986,

  /** Textures: A texture unit. */
  TEXTURE3: 33987,

  /** Textures: A texture unit. */
  TEXTURE4: 33988,

  /** Textures: A texture unit. */
  TEXTURE5: 33989,

  /** Textures: A texture unit. */
  TEXTURE6: 33990,

  /** Textures: A texture unit. */
  TEXTURE7: 33991,

  /** Textures: A texture unit. */
  TEXTURE8: 33992,

  /** Textures: A texture unit. */
  TEXTURE9: 33993,

  /** Textures: A texture unit. */
  TEXTURE10: 33994,

  /** Textures: A texture unit. */
  TEXTURE11: 33995,

  /** Textures: A texture unit. */
  TEXTURE12: 33996,

  /** Textures: A texture unit. */
  TEXTURE13: 33997,

  /** Textures: A texture unit. */
  TEXTURE14: 33998,

  /** Textures: A texture unit. */
  TEXTURE15: 33999,

  /** Textures: A texture unit. */
  TEXTURE16: 34000,

  /** Textures: A texture unit. */
  TEXTURE17: 34001,

  /** Textures: A texture unit. */
  TEXTURE18: 34002,

  /** Textures: A texture unit. */
  TEXTURE19: 34003,

  /** Textures: A texture unit. */
  TEXTURE20: 34004,

  /** Textures: A texture unit. */
  TEXTURE21: 34005,

  /** Textures: A texture unit. */
  TEXTURE22: 34006,

  /** Textures: A texture unit. */
  TEXTURE23: 34007,

  /** Textures: A texture unit. */
  TEXTURE24: 34008,

  /** Textures: A texture unit. */
  TEXTURE25: 34009,

  /** Textures: A texture unit. */
  TEXTURE26: 34010,

  /** Textures: A texture unit. */
  TEXTURE27: 34011,

  /** Textures: A texture unit. */
  TEXTURE28: 34012,

  /** Textures: A texture unit. */
  TEXTURE29: 34013,

  /** Textures: A texture unit. */
  TEXTURE30: 34014,

  /** Textures: A texture unit. */
  TEXTURE31: 34015,

  /** Textures: The current active texture unit. */
  ACTIVE_TEXTURE: 34016,

  /** Textures: */
  REPEAT: 10497,

  /** Textures: */
  CLAMP_TO_EDGE: 33071,

  /** Textures: */
  MIRRORED_REPEAT: 33648,

  /** Uniform types: */
  FLOAT_VEC2: 35664,

  /** Uniform types: */
  FLOAT_VEC3: 35665,

  /** Uniform types: */
  FLOAT_VEC4: 35666,

  /** Uniform types: */
  INT_VEC2: 35667,

  /** Uniform types: */
  INT_VEC3: 35668,

  /** Uniform types: */
  INT_VEC4: 35669,

  /** Uniform types: */
  BOOL: 35670,

  /** Uniform types: */
  BOOL_VEC2: 35671,

  /** Uniform types: */
  BOOL_VEC3: 35672,

  /** Uniform types: */
  BOOL_VEC4: 35673,

  /** Uniform types: */
  FLOAT_MAT2: 35674,

  /** Uniform types: */
  FLOAT_MAT3: 35675,

  /** Uniform types: */
  FLOAT_MAT4: 35676,

  /** Uniform types: */
  SAMPLER_2D: 35678,

  /** Uniform types: */
  SAMPLER_CUBE: 35680,

  /** Shader precision-specified types: */
  LOW_FLOAT: 36336,

  /** Shader precision-specified types: */
  MEDIUM_FLOAT: 36337,

  /** Shader precision-specified types: */
  HIGH_FLOAT: 36338,

  /** Shader precision-specified types: */
  LOW_INT: 36339,

  /** Shader precision-specified types: */
  MEDIUM_INT: 36340,

  /** Shader precision-specified types: */
  HIGH_INT: 36341,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER: 36160,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER: 36161,

  /** Framebuffers and renderbuffers: */
  RGBA4: 32854,

  /** Framebuffers and renderbuffers: */
  RGB5_A1: 32855,

  /** Framebuffers and renderbuffers: */
  RGB565: 36194,

  /** Framebuffers and renderbuffers: */
  DEPTH_COMPONENT16: 33189,

  /** Framebuffers and renderbuffers: */
  STENCIL_INDEX8: 36168,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER_WIDTH: 36162,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER_HEIGHT: 36163,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER_INTERNAL_FORMAT: 36164,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER_RED_SIZE: 36176,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER_GREEN_SIZE: 36177,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER_BLUE_SIZE: 36178,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER_ALPHA_SIZE: 36179,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER_DEPTH_SIZE: 36180,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER_STENCIL_SIZE: 36181,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,

  /** Framebuffers and renderbuffers: */
  COLOR_ATTACHMENT0: 36064,

  /** Framebuffers and renderbuffers: */
  DEPTH_ATTACHMENT: 36096,

  /** Framebuffers and renderbuffers: */
  STENCIL_ATTACHMENT: 36128,

  /** Framebuffers and renderbuffers: */
  NONE: 0,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_COMPLETE: 36053,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_UNSUPPORTED: 36061,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_BINDING: 36006,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER_BINDING: 36007,

  /** Framebuffers and renderbuffers: */
  MAX_RENDERBUFFER_SIZE: 34024,

  /** Framebuffers and renderbuffers: */
  INVALID_FRAMEBUFFER_OPERATION: 1286,

  /** Pixel storage modes: */
  UNPACK_FLIP_Y_WEBGL: 37440,

  /** Pixel storage modes: */
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,

  /** Pixel storage modes: */
  UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,

  /** Getting GL parameter information: passed to getParameter */
  READ_BUFFER: 3074,

  /** Getting GL parameter information: passed to getParameter */
  UNPACK_ROW_LENGTH: 3314,

  /** Getting GL parameter information: passed to getParameter */
  UNPACK_SKIP_ROWS: 3315,

  /** Getting GL parameter information: passed to getParameter */
  UNPACK_SKIP_PIXELS: 3316,

  /** Getting GL parameter information: passed to getParameter */
  PACK_ROW_LENGTH: 3330,

  /** Getting GL parameter information: passed to getParameter */
  PACK_SKIP_ROWS: 3331,

  /** Getting GL parameter information: passed to getParameter */
  PACK_SKIP_PIXELS: 3332,

  /** Getting GL parameter information: passed to getParameter */
  TEXTURE_BINDING_3D: 32874,

  /** Getting GL parameter information: passed to getParameter */
  UNPACK_SKIP_IMAGES: 32877,

  /** Getting GL parameter information: passed to getParameter */
  UNPACK_IMAGE_HEIGHT: 32878,

  /** Getting GL parameter information: passed to getParameter */
  MAX_3D_TEXTURE_SIZE: 32883,

  /** Getting GL parameter information: passed to getParameter */
  MAX_ELEMENTS_VERTICES: 33000,

  /** Getting GL parameter information: passed to getParameter */
  MAX_ELEMENTS_INDICES: 33001,

  /** Getting GL parameter information: passed to getParameter */
  MAX_TEXTURE_LOD_BIAS: 34045,

  /** Getting GL parameter information: passed to getParameter */
  MAX_FRAGMENT_UNIFORM_COMPONENTS: 35657,

  /** Getting GL parameter information: passed to getParameter */
  MAX_VERTEX_UNIFORM_COMPONENTS: 35658,

  /** Getting GL parameter information: passed to getParameter */
  MAX_ARRAY_TEXTURE_LAYERS: 35071,

  /** Getting GL parameter information: passed to getParameter */
  MIN_PROGRAM_TEXEL_OFFSET: 35076,

  /** Getting GL parameter information: passed to getParameter */
  MAX_PROGRAM_TEXEL_OFFSET: 35077,

  /** Getting GL parameter information: passed to getParameter */
  MAX_VARYING_COMPONENTS: 35659,

  /** Getting GL parameter information: passed to getParameter */
  FRAGMENT_SHADER_DERIVATIVE_HINT: 35723,

  /** Getting GL parameter information: passed to getParameter */
  RASTERIZER_DISCARD: 35977,

  /** Getting GL parameter information: passed to getParameter */
  VERTEX_ARRAY_BINDING: 34229,

  /** Getting GL parameter information: passed to getParameter */
  MAX_VERTEX_OUTPUT_COMPONENTS: 37154,

  /** Getting GL parameter information: passed to getParameter */
  MAX_FRAGMENT_INPUT_COMPONENTS: 37157,

  /** Getting GL parameter information: passed to getParameter */
  MAX_SERVER_WAIT_TIMEOUT: 37137,

  /** Getting GL parameter information: passed to getParameter */
  MAX_ELEMENT_INDEX: 36203,

  /** Textures: */
  RED: 6403,

  /** Textures: */
  RGB8: 32849,

  /** Textures: */
  RGBA8: 32856,

  /** Textures: */
  RGB10_A2: 32857,

  /** Textures: */
  TEXTURE_3D: 32879,

  /** Textures: */
  TEXTURE_WRAP_R: 32882,

  /** Textures: */
  TEXTURE_MIN_LOD: 33082,

  /** Textures: */
  TEXTURE_MAX_LOD: 33083,

  /** Textures: */
  TEXTURE_BASE_LEVEL: 33084,

  /** Textures: */
  TEXTURE_MAX_LEVEL: 33085,

  /** Textures: */
  TEXTURE_COMPARE_MODE: 34892,

  /** Textures: */
  TEXTURE_COMPARE_FUNC: 34893,

  /** Textures: */
  SRGB: 35904,

  /** Textures: */
  SRGB8: 35905,

  /** Textures: */
  SRGB8_ALPHA8: 35907,

  /** Textures: */
  COMPARE_REF_TO_TEXTURE: 34894,

  /** Textures: */
  RGBA32F: 34836,

  /** Textures: */
  RGB32F: 34837,

  /** Textures: */
  RGBA16F: 34842,

  /** Textures: */
  RGB16F: 34843,

  /** Textures: */
  TEXTURE_2D_ARRAY: 35866,

  /** Textures: */
  TEXTURE_BINDING_2D_ARRAY: 35869,

  /** Textures: */
  R11F_G11F_B10F: 35898,

  /** Textures: */
  RGB9_E5: 35901,

  /** Textures: */
  RGBA32UI: 36208,

  /** Textures: */
  RGB32UI: 36209,

  /** Textures: */
  RGBA16UI: 36214,

  /** Textures: */
  RGB16UI: 36215,

  /** Textures: */
  RGBA8UI: 36220,

  /** Textures: */
  RGB8UI: 36221,

  /** Textures: */
  RGBA32I: 36226,

  /** Textures: */
  RGB32I: 36227,

  /** Textures: */
  RGBA16I: 36232,

  /** Textures: */
  RGB16I: 36233,

  /** Textures: */
  RGBA8I: 36238,

  /** Textures: */
  RGB8I: 36239,

  /** Textures: */
  RED_INTEGER: 36244,

  /** Textures: */
  RGB_INTEGER: 36248,

  /** Textures: */
  RGBA_INTEGER: 36249,

  /** Textures: */
  R8: 33321,

  /** Textures: */
  RG8: 33323,

  /** Textures: */
  R16F: 33325,

  /** Textures: */
  R32F: 33326,

  /** Textures: */
  RG16F: 33327,

  /** Textures: */
  RG32F: 33328,

  /** Textures: */
  R8I: 33329,

  /** Textures: */
  R8UI: 33330,

  /** Textures: */
  R16I: 33331,

  /** Textures: */
  R16UI: 33332,

  /** Textures: */
  R32I: 33333,

  /** Textures: */
  R32UI: 33334,

  /** Textures: */
  RG8I: 33335,

  /** Textures: */
  RG8UI: 33336,

  /** Textures: */
  RG16I: 33337,

  /** Textures: */
  RG16UI: 33338,

  /** Textures: */
  RG32I: 33339,

  /** Textures: */
  RG32UI: 33340,

  /** Textures: */
  R8_SNORM: 36756,

  /** Textures: */
  RG8_SNORM: 36757,

  /** Textures: */
  RGB8_SNORM: 36758,

  /** Textures: */
  RGBA8_SNORM: 36759,

  /** Textures: */
  RGB10_A2UI: 36975,

  /** Textures: */
  TEXTURE_IMMUTABLE_FORMAT: 37167,

  /** Textures: */
  TEXTURE_IMMUTABLE_LEVELS: 33503,

  /** Pixel types: */
  UNSIGNED_INT_2_10_10_10_REV: 33640,

  /** Pixel types: */
  UNSIGNED_INT_10F_11F_11F_REV: 35899,

  /** Pixel types: */
  UNSIGNED_INT_5_9_9_9_REV: 35902,

  /** Pixel types: */
  FLOAT_32_UNSIGNED_INT_24_8_REV: 36269,

  /** Pixel types: */
  UNSIGNED_INT_24_8: 34042,

  /** Pixel types: */
  HALF_FLOAT: 5131,

  /** Pixel types: */
  RG: 33319,

  /** Pixel types: */
  RG_INTEGER: 33320,

  /** Pixel types: */
  INT_2_10_10_10_REV: 36255,

  /** Queries: */
  CURRENT_QUERY: 34917,

  /** Queries: */
  QUERY_RESULT: 34918,

  /** Queries: */
  QUERY_RESULT_AVAILABLE: 34919,

  /** Queries: */
  ANY_SAMPLES_PASSED: 35887,

  /** Queries: */
  ANY_SAMPLES_PASSED_CONSERVATIVE: 36202,

  /** Draw buffers: */
  MAX_DRAW_BUFFERS: 34852,

  /** Draw buffers: */
  DRAW_BUFFER0: 34853,

  /** Draw buffers: */
  DRAW_BUFFER1: 34854,

  /** Draw buffers: */
  DRAW_BUFFER2: 34855,

  /** Draw buffers: */
  DRAW_BUFFER3: 34856,

  /** Draw buffers: */
  DRAW_BUFFER4: 34857,

  /** Draw buffers: */
  DRAW_BUFFER5: 34858,

  /** Draw buffers: */
  DRAW_BUFFER6: 34859,

  /** Draw buffers: */
  DRAW_BUFFER7: 34860,

  /** Draw buffers: */
  DRAW_BUFFER8: 34861,

  /** Draw buffers: */
  DRAW_BUFFER9: 34862,

  /** Draw buffers: */
  DRAW_BUFFER10: 34863,

  /** Draw buffers: */
  DRAW_BUFFER11: 34864,

  /** Draw buffers: */
  DRAW_BUFFER12: 34865,

  /** Draw buffers: */
  DRAW_BUFFER13: 34866,

  /** Draw buffers: */
  DRAW_BUFFER14: 34867,

  /** Draw buffers: */
  DRAW_BUFFER15: 34868,

  /** Draw buffers: */
  MAX_COLOR_ATTACHMENTS: 36063,

  /** Draw buffers: */
  COLOR_ATTACHMENT1: 36065,

  /** Draw buffers: */
  COLOR_ATTACHMENT2: 36066,

  /** Draw buffers: */
  COLOR_ATTACHMENT3: 36067,

  /** Draw buffers: */
  COLOR_ATTACHMENT4: 36068,

  /** Draw buffers: */
  COLOR_ATTACHMENT5: 36069,

  /** Draw buffers: */
  COLOR_ATTACHMENT6: 36070,

  /** Draw buffers: */
  COLOR_ATTACHMENT7: 36071,

  /** Draw buffers: */
  COLOR_ATTACHMENT8: 36072,

  /** Draw buffers: */
  COLOR_ATTACHMENT9: 36073,

  /** Draw buffers: */
  COLOR_ATTACHMENT10: 36074,

  /** Draw buffers: */
  COLOR_ATTACHMENT11: 36075,

  /** Draw buffers: */
  COLOR_ATTACHMENT12: 36076,

  /** Draw buffers: */
  COLOR_ATTACHMENT13: 36077,

  /** Draw buffers: */
  COLOR_ATTACHMENT14: 36078,

  /** Draw buffers: */
  COLOR_ATTACHMENT15: 36079,

  /** Samplers: */
  SAMPLER_3D: 35679,

  /** Samplers: */
  SAMPLER_2D_SHADOW: 35682,

  /** Samplers: */
  SAMPLER_2D_ARRAY: 36289,

  /** Samplers: */
  SAMPLER_2D_ARRAY_SHADOW: 36292,

  /** Samplers: */
  SAMPLER_CUBE_SHADOW: 36293,

  /** Samplers: */
  INT_SAMPLER_2D: 36298,

  /** Samplers: */
  INT_SAMPLER_3D: 36299,

  /** Samplers: */
  INT_SAMPLER_CUBE: 36300,

  /** Samplers: */
  INT_SAMPLER_2D_ARRAY: 36303,

  /** Samplers: */
  UNSIGNED_INT_SAMPLER_2D: 36306,

  /** Samplers: */
  UNSIGNED_INT_SAMPLER_3D: 36307,

  /** Samplers: */
  UNSIGNED_INT_SAMPLER_CUBE: 36308,

  /** Samplers: */
  UNSIGNED_INT_SAMPLER_2D_ARRAY: 36311,

  /** Samplers: */
  MAX_SAMPLES: 36183,

  /** Samplers: */
  SAMPLER_BINDING: 35097,

  /** Buffers: */
  PIXEL_PACK_BUFFER: 35051,

  /** Buffers: */
  PIXEL_UNPACK_BUFFER: 35052,

  /** Buffers: */
  PIXEL_PACK_BUFFER_BINDING: 35053,

  /** Buffers: */
  PIXEL_UNPACK_BUFFER_BINDING: 35055,

  /** Buffers: */
  COPY_READ_BUFFER: 36662,

  /** Buffers: */
  COPY_WRITE_BUFFER: 36663,

  /** Buffers: */
  COPY_READ_BUFFER_BINDING: 36662,

  /** Buffers: */
  COPY_WRITE_BUFFER_BINDING: 36663,

  /** Data types: */
  FLOAT_MAT2x3: 35685,

  /** Data types: */
  FLOAT_MAT2x4: 35686,

  /** Data types: */
  FLOAT_MAT3x2: 35687,

  /** Data types: */
  FLOAT_MAT3x4: 35688,

  /** Data types: */
  FLOAT_MAT4x2: 35689,

  /** Data types: */
  FLOAT_MAT4x3: 35690,

  /** Data types: */
  UNSIGNED_INT_VEC2: 36294,

  /** Data types: */
  UNSIGNED_INT_VEC3: 36295,

  /** Data types: */
  UNSIGNED_INT_VEC4: 36296,

  /** Data types: */
  UNSIGNED_NORMALIZED: 35863,

  /** Data types: */
  SIGNED_NORMALIZED: 36764,

  /** Vertex attributes: */
  VERTEX_ATTRIB_ARRAY_INTEGER: 35069,

  /** Vertex attributes: */
  VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,

  /** Transform feedback: */
  TRANSFORM_FEEDBACK_BUFFER_MODE: 35967,

  /** Transform feedback: */
  MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 35968,

  /** Transform feedback: */
  TRANSFORM_FEEDBACK_VARYINGS: 35971,

  /** Transform feedback: */
  TRANSFORM_FEEDBACK_BUFFER_START: 35972,

  /** Transform feedback: */
  TRANSFORM_FEEDBACK_BUFFER_SIZE: 35973,

  /** Transform feedback: */
  TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 35976,

  /** Transform feedback: */
  MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 35978,

  /** Transform feedback: */
  MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 35979,

  /** Transform feedback: */
  INTERLEAVED_ATTRIBS: 35980,

  /** Transform feedback: */
  SEPARATE_ATTRIBS: 35981,

  /** Transform feedback: */
  TRANSFORM_FEEDBACK_BUFFER: 35982,

  /** Transform feedback: */
  TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,

  /** Transform feedback: */
  TRANSFORM_FEEDBACK: 36386,

  /** Transform feedback: */
  TRANSFORM_FEEDBACK_PAUSED: 36387,

  /** Transform feedback: */
  TRANSFORM_FEEDBACK_ACTIVE: 36388,

  /** Transform feedback: */
  TRANSFORM_FEEDBACK_BINDING: 36389,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 33296,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_RED_SIZE: 33298,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 33299,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 33300,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 33301,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 33303,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_DEFAULT: 33304,

  /** Framebuffers and renderbuffers: */
  DEPTH_STENCIL_ATTACHMENT: 33306,

  /** Framebuffers and renderbuffers: */
  DEPTH_STENCIL: 34041,

  /** Framebuffers and renderbuffers: */
  DEPTH24_STENCIL8: 35056,

  /** Framebuffers and renderbuffers: */
  DRAW_FRAMEBUFFER_BINDING: 36006,

  /** Framebuffers and renderbuffers: */
  READ_FRAMEBUFFER: 36008,

  /** Framebuffers and renderbuffers: */
  DRAW_FRAMEBUFFER: 36009,

  /** Framebuffers and renderbuffers: */
  READ_FRAMEBUFFER_BINDING: 36010,

  /** Framebuffers and renderbuffers: */
  RENDERBUFFER_SAMPLES: 36011,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 36052,

  /** Framebuffers and renderbuffers: */
  FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 36182,

  /** Uniforms: */
  UNIFORM_BUFFER: 35345,

  /** Uniforms: */
  UNIFORM_BUFFER_BINDING: 35368,

  /** Uniforms: */
  UNIFORM_BUFFER_START: 35369,

  /** Uniforms: */
  UNIFORM_BUFFER_SIZE: 35370,

  /** Uniforms: */
  MAX_VERTEX_UNIFORM_BLOCKS: 35371,

  /** Uniforms: */
  MAX_FRAGMENT_UNIFORM_BLOCKS: 35373,

  /** Uniforms: */
  MAX_COMBINED_UNIFORM_BLOCKS: 35374,

  /** Uniforms: */
  MAX_UNIFORM_BUFFER_BINDINGS: 35375,

  /** Uniforms: */
  MAX_UNIFORM_BLOCK_SIZE: 35376,

  /** Uniforms: */
  MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 35377,

  /** Uniforms: */
  MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 35379,

  /** Uniforms: */
  UNIFORM_BUFFER_OFFSET_ALIGNMENT: 35380,

  /** Uniforms: */
  ACTIVE_UNIFORM_BLOCKS: 35382,

  /** Uniforms: */
  UNIFORM_TYPE: 35383,

  /** Uniforms: */
  UNIFORM_SIZE: 35384,

  /** Uniforms: */
  UNIFORM_BLOCK_INDEX: 35386,

  /** Uniforms: */
  UNIFORM_OFFSET: 35387,

  /** Uniforms: */
  UNIFORM_ARRAY_STRIDE: 35388,

  /** Uniforms: */
  UNIFORM_MATRIX_STRIDE: 35389,

  /** Uniforms: */
  UNIFORM_IS_ROW_MAJOR: 35390,

  /** Uniforms: */
  UNIFORM_BLOCK_BINDING: 35391,

  /** Uniforms: */
  UNIFORM_BLOCK_DATA_SIZE: 35392,

  /** Uniforms: */
  UNIFORM_BLOCK_ACTIVE_UNIFORMS: 35394,

  /** Uniforms: */
  UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 35395,

  /** Uniforms: */
  UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 35396,

  /** Uniforms: */
  UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 35398,

  /** Sync objects: */
  OBJECT_TYPE: 37138,

  /** Sync objects: */
  SYNC_CONDITION: 37139,

  /** Sync objects: */
  SYNC_STATUS: 37140,

  /** Sync objects: */
  SYNC_FLAGS: 37141,

  /** Sync objects: */
  SYNC_FENCE: 37142,

  /** Sync objects: */
  SYNC_GPU_COMMANDS_COMPLETE: 37143,

  /** Sync objects: */
  UNSIGNALED: 37144,

  /** Sync objects: */
  SIGNALED: 37145,

  /** Sync objects: */
  ALREADY_SIGNALED: 37146,

  /** Sync objects: */
  TIMEOUT_EXPIRED: 37147,

  /** Sync objects: */
  CONDITION_SATISFIED: 37148,

  /** Sync objects: */
  WAIT_FAILED: 37149,

  /** Sync objects: */
  SYNC_FLUSH_COMMANDS_BIT: 1,

  /** Miscellaneous constants: */
  COLOR: 6144,

  /** Miscellaneous constants: */
  DEPTH: 6145,

  /** Miscellaneous constants: */
  STENCIL: 6146,

  /** Miscellaneous constants: */
  MIN: 32775,

  /** Miscellaneous constants: */
  MAX: 32776,

  /** Miscellaneous constants: */
  DEPTH_COMPONENT24: 33190,

  /** Miscellaneous constants: */
  STREAM_READ: 35041,

  /** Miscellaneous constants: */
  STREAM_COPY: 35042,

  /** Miscellaneous constants: */
  STATIC_READ: 35045,

  /** Miscellaneous constants: */
  STATIC_COPY: 35046,

  /** Miscellaneous constants: */
  DYNAMIC_READ: 35049,

  /** Miscellaneous constants: */
  DYNAMIC_COPY: 35050,

  /** Miscellaneous constants: */
  DEPTH_COMPONENT32F: 36012,

  /** Miscellaneous constants: */
  DEPTH32F_STENCIL8: 36013,

  /** Miscellaneous constants: */
  INVALID_INDEX: 4294967295,

  /** Miscellaneous constants: */
  TIMEOUT_IGNORED: -1,

  /** Miscellaneous constants: */
  MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 37447,

  /** ANGLE_instanced_arrays: Describes the frequency divisor used for instanced rendering. */
  VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: 35070,

  /** WEBGL_debug_renderer_info: Passed to getParameter to get the vendor string of the graphics driver. */
  UNMASKED_VENDOR_WEBGL: 37445,

  /** WEBGL_debug_renderer_info: Passed to getParameter to get the renderer string of the graphics driver. */
  UNMASKED_RENDERER_WEBGL: 37446,

  /** EXT_texture_filter_anisotropic: Returns the maximum available anisotropy. */
  MAX_TEXTURE_MAX_ANISOTROPY_EXT: 34047,

  /** EXT_texture_filter_anisotropic: Passed to texParameter to set the desired maximum anisotropy for a texture. */
  TEXTURE_MAX_ANISOTROPY_EXT: 34046,

  /** WEBGL_compressed_texture_s3tc: A DXT1-compressed image in an RGB image format. */
  COMPRESSED_RGB_S3TC_DXT1_EXT: 33776,

  /** WEBGL_compressed_texture_s3tc: A DXT1-compressed image in an RGB image format with a simple on/off alpha value. */
  COMPRESSED_RGBA_S3TC_DXT1_EXT: 33777,

  /** WEBGL_compressed_texture_s3tc: A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression. */
  COMPRESSED_RGBA_S3TC_DXT3_EXT: 33778,

  /** WEBGL_compressed_texture_s3tc: A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done. */
  COMPRESSED_RGBA_S3TC_DXT5_EXT: 33779,

  /** WEBGL_compressed_texture_etc: One-channel (red) unsigned format compression. */
  COMPRESSED_R11_EAC: 37488,

  /** WEBGL_compressed_texture_etc: One-channel (red) signed format compression. */
  COMPRESSED_SIGNED_R11_EAC: 37489,

  /** WEBGL_compressed_texture_etc: Two-channel (red and green) unsigned format compression. */
  COMPRESSED_RG11_EAC: 37490,

  /** WEBGL_compressed_texture_etc: Two-channel (red and green) signed format compression. */
  COMPRESSED_SIGNED_RG11_EAC: 37491,

  /** WEBGL_compressed_texture_etc: Compresses RBG8 data with no alpha channel. */
  COMPRESSED_RGB8_ETC2: 37492,

  /** WEBGL_compressed_texture_etc: Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately. */
  COMPRESSED_RGBA8_ETC2_EAC: 37493,

  /** WEBGL_compressed_texture_etc: Compresses sRBG8 data with no alpha channel. */
  COMPRESSED_SRGB8_ETC2: 37494,

  /** WEBGL_compressed_texture_etc: Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately. */
  COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 37495,

  /** WEBGL_compressed_texture_etc: Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent. */
  COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37496,

  /** WEBGL_compressed_texture_etc: Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent. */
  COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37497,

  /** WEBGL_compressed_texture_pvrtc: RGB compression in 4-bit mode. One block for each 4×4 pixels. */
  COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 35840,

  /** WEBGL_compressed_texture_pvrtc: RGBA compression in 4-bit mode. One block for each 4×4 pixels. */
  COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 35842,

  /** WEBGL_compressed_texture_pvrtc: RGB compression in 2-bit mode. One block for each 8×4 pixels. */
  COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 35841,

  /** WEBGL_compressed_texture_pvrtc: RGBA compression in 2-bit mode. One block for each 8×4 pixe */
  COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 35843,

  /** WEBGL_compressed_texture_etc1: Compresses 24-bit RGB data with no alpha channel. */
  COMPRESSED_RGB_ETC1_WEBGL: 36196,

  /** WEBGL_compressed_texture_atc: Compresses RGB textures with no alpha channel. */
  COMPRESSED_RGB_ATC_WEBGL: 35986,

  /** WEBGL_compressed_texture_atc: Compresses RGBA textures using explicit alpha encoding (useful when alpha transitions are sharp). */
  COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: 35986,

  /** WEBGL_compressed_texture_atc: Compresses RGBA textures using interpolated alpha encoding (useful when alpha transitions are gradient). */
  COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: 34798,

  /** WEBGL_depth_texture: Unsigned integer type for 24-bit depth texture data. */
  UNSIGNED_INT_24_8_WEBGL: 34042,

  /** OES_texture_half_float: Half floating-point type (16-bit). */
  HALF_FLOAT_OES: 36193,

  /** WEBGL_color_buffer_float: RGBA 32-bit floating-point color-renderable format. */
  RGBA32F_EXT: 34836,

  /** WEBGL_color_buffer_float: RGB 32-bit floating-point color-renderable format. */
  RGB32F_EXT: 34837,

  /** WEBGL_color_buffer_float: */
  FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: 33297,

  /** WEBGL_color_buffer_float: */
  UNSIGNED_NORMALIZED_EXT: 35863,

  /** EXT_blend_minmax: Produces the minimum color components of the source and destination colors. */
  MIN_EXT: 32775,

  /** EXT_blend_minmax: Produces the maximum color components of the source and destination colors. */
  MAX_EXT: 32776,

  /** EXT_sRGB: Unsized sRGB format that leaves the precision up to the driver. */
  SRGB_EXT: 35904,

  /** EXT_sRGB: Unsized sRGB format with unsized alpha component. */
  SRGB_ALPHA_EXT: 35906,

  /** EXT_sRGB: Sized (8-bit) sRGB and alpha formats. */
  SRGB8_ALPHA8_EXT: 35907,

  /** EXT_sRGB: Returns the framebuffer color encoding. */
  FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: 33296,

  /** OES_standard_derivatives: Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth. */
  FRAGMENT_SHADER_DERIVATIVE_HINT_OES: 35723,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT0_WEBGL: 36064,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT1_WEBGL: 36065,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT2_WEBGL: 36066,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT3_WEBGL: 36067,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT4_WEBGL: 36068,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT5_WEBGL: 36069,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT6_WEBGL: 36070,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT7_WEBGL: 36071,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT8_WEBGL: 36072,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT9_WEBGL: 36073,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT10_WEBGL: 36074,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT11_WEBGL: 36075,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT12_WEBGL: 36076,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT13_WEBGL: 36077,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT14_WEBGL: 36078,

  /** WEBGL_draw_buffers: Framebuffer color attachment point */
  COLOR_ATTACHMENT15_WEBGL: 36079,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER0_WEBGL: 34853,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER1_WEBGL: 34854,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER2_WEBGL: 34855,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER3_WEBGL: 34856,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER4_WEBGL: 34857,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER5_WEBGL: 34858,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER6_WEBGL: 34859,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER7_WEBGL: 34860,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER8_WEBGL: 34861,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER9_WEBGL: 34862,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER10_WEBGL: 34863,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER11_WEBGL: 34864,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER12_WEBGL: 34865,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER13_WEBGL: 34866,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER14_WEBGL: 34867,

  /** WEBGL_draw_buffers: Draw buffer */
  DRAW_BUFFER15_WEBGL: 34868,

  /** WEBGL_draw_buffers: Maximum number of framebuffer color attachment points */
  MAX_COLOR_ATTACHMENTS_WEBGL: 36063,

  /** WEBGL_draw_buffers: Maximum number of draw buffers */
  MAX_DRAW_BUFFERS_WEBGL: 34852,

  /** OES_vertex_array_object: The bound vertex array object (VAO). */
  VERTEX_ARRAY_BINDING_OES: 34229,

  /** EXT_disjoint_timer_query: The number of bits used to hold the query result for the given target. */
  QUERY_COUNTER_BITS_EXT: 34916,

  /** EXT_disjoint_timer_query: The currently active query. */
  CURRENT_QUERY_EXT: 34917,

  /** EXT_disjoint_timer_query: The query result. */
  QUERY_RESULT_EXT: 34918,

  /** EXT_disjoint_timer_query: A Boolean indicating whether or not a query result is available. */
  QUERY_RESULT_AVAILABLE_EXT: 34919,

  /** EXT_disjoint_timer_query: Elapsed time (in nanoseconds). */
  TIME_ELAPSED_EXT: 35007,

  /** EXT_disjoint_timer_query: The current time. */
  TIMESTAMP_EXT: 36392,

  /** EXT_disjoint_timer_query: A Boolean indicating whether or not the GPU performed any disjoint operation. */
  GPU_DISJOINT_EXT: 36795
}

let _nameMap

/**
 * Gets the name of a GL constant. Returns undefined if not found.
 * @param {number | null | undefined} value The value of a GL constant
 * @returns {string | undefined} The name of a GL constant or undefined if not found.
 */
const glConstantGetName = (value) =>
  (_nameMap || (_nameMap = new Map(Object.entries(glConstants).map(([k, v]) => [v, k])))).get(value)

/**
 * Converts a GL constant to string. Returns its name or its value if not found.
 * @param {number} value The value of a GL constant
 * @returns {string} The name of a GL constant or undefined if not found.
 */
const glConstantToString = (value) => glConstantGetName(value) || `${value}`

module.exports = {
  glConstants,
  glConstantGetName,
  glConstantToString
}
