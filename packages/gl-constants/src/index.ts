// WebGL constants from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
// It gets minified better to use the raw constants instad of using webglContext.CONSTANT
// Those values are standard in all browsers.

// Clearing buffers - Constants passed to clear() to clear buffer masks.

/**
 * DEPTH_BUFFER_BIT = 0x00000100
 * Passed to clear the current depth buffer.
 * Clearing buffers - Constant passed to clear() to clear buffer masks.
 */
export const GL_DEPTH_BUFFER_BIT = 0x00000100

/**
 * STENCIL_BUFFER_BIT = 0x00000400
 * Passed to clear the current stencil buffer.
 * Clearing buffers - Constant passed to clear() to clear buffer masks.
 */
export const GL_STENCIL_BUFFER_BIT = 0x00000400

/**
 * COLOR_BUFFER_BIT = 0x00004000
 * Passed to clear the current color buffer.
 * Clearing buffers - Constant passed to clear() to clear buffer masks.
 */
export const GL_COLOR_BUFFER_BIT = 0x00004000

// Rendering primitives - Constants passed to drawElements() or drawArrays() to specify what kind of primitive to render.

/**
 * POINTS = 0x0000
 * Passed to drawElements or drawArrays to draw single points.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_POINTS = 0x0000

/**
 * LINES = 0x0001
 * Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_LINES = 0x0001

/**
 * LINE_LOOP = 0x0002
 * Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_LINE_LOOP = 0x0002

/**
 * LINE_STRIP = 0x0003
 * Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_LINE_STRIP = 0x0003

/**
 * TRIANGLES = 0x0004
 * Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_TRIANGLES = 0x0004

/**
 * TRIANGLE_STRIP = 0x0005
 * Passed to drawElements or drawArrays to draw a connected group of triangles.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_TRIANGLE_STRIP = 0x0005

/**
 * TRIANGLE_FAN = 0x0006
 * Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_TRIANGLE_FAN = 0x0006

// Blending modes - Constants passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).

/**
 * ZERO = 0
 * Passed to blendFunc or blendFuncSeparate to turn off a component.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ZERO = 0

/**
 * ONE = 1
 * Passed to blendFunc or blendFuncSeparate to turn on a component.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE = 1

/**
 * SRC_COLOR = 0x0300
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_SRC_COLOR = 0x0300

/**
 * ONE_MINUS_SRC_COLOR = 0x0301
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_SRC_COLOR = 0x0301

/**
 * SRC_ALPHA = 0x0302
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_SRC_ALPHA = 0x0302

/**
 * ONE_MINUS_SRC_ALPHA = 0x0303
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_SRC_ALPHA = 0x0303

/**
 * DST_ALPHA = 0x0304
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_DST_ALPHA = 0x0304

/**
 * ONE_MINUS_DST_ALPHA = 0x0305
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_DST_ALPHA = 0x0305

/**
 * DST_COLOR = 0x0306
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_DST_COLOR = 0x0306

/**
 * ONE_MINUS_DST_COLOR = 0x0307
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_DST_COLOR = 0x0307

/**
 * SRC_ALPHA_SATURATE = 0x0308
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_SRC_ALPHA_SATURATE = 0x0308

/**
 * CONSTANT_COLOR = 0x8001
 * Passed to blendFunc or blendFuncSeparate to specify a constant color blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_CONSTANT_COLOR = 0x8001

/**
 * ONE_MINUS_CONSTANT_COLOR = 0x8002
 * Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_CONSTANT_COLOR = 0x8002

/**
 * CONSTANT_ALPHA = 0x8003
 * Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_CONSTANT_ALPHA = 0x8003

/**
 * ONE_MINUS_CONSTANT_ALPHA = 0x8004
 * Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_CONSTANT_ALPHA = 0x8004

// Blending equations - Constants passed to blendEquation() or blendEquationSeparate() to control how the blending is calculated (for both, RBG and alpha, or separately).

/**
 * FUNC_ADD = 0x8006
 * Passed to blendEquation or blendEquationSeparate to set an addition blend function.
 * Blending equations - Constant passed to blendEquation() or blendEquationSeparate() to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export const GL_FUNC_ADD = 0x8006

/**
 * FUNC_SUBTRACT = 0x800A
 * Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination).
 * Blending equations - Constant passed to blendEquation() or blendEquationSeparate() to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export const GL_FUNC_SUBTRACT = 0x800a

/**
 * FUNC_REVERSE_SUBTRACT = 0x800B
 * Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source).
 * Blending equations - Constant passed to blendEquation() or blendEquationSeparate() to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export const GL_FUNC_REVERSE_SUBTRACT = 0x800b

// Getting GL parameter information - Constants passed to getParameter() to specify what information to return.

/**
 * BLEND_EQUATION = 0x8009
 * Passed to getParameter to get the current RGB blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_EQUATION = 0x8009

/**
 * BLEND_EQUATION_RGB = 0x8009
 * Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_EQUATION_RGB = 0x8009

/**
 * BLEND_EQUATION_ALPHA = 0x883D
 * Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_EQUATION_ALPHA = 0x883d

/**
 * BLEND_DST_RGB = 0x80C8
 * Passed to getParameter to get the current destination RGB blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_DST_RGB = 0x80c8

/**
 * BLEND_SRC_RGB = 0x80C9
 * Passed to getParameter to get the current destination RGB blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_SRC_RGB = 0x80c9

/**
 * BLEND_DST_ALPHA = 0x80CA
 * Passed to getParameter to get the current destination alpha blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_DST_ALPHA = 0x80ca

/**
 * BLEND_SRC_ALPHA = 0x80CB
 * Passed to getParameter to get the current source alpha blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_SRC_ALPHA = 0x80cb

/**
 * BLEND_COLOR = 0x8005
 * Passed to getParameter to return a the current blend color.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_COLOR = 0x8005

/**
 * ARRAY_BUFFER_BINDING = 0x8894
 * Passed to getParameter to get the array buffer binding.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_ARRAY_BUFFER_BINDING = 0x8894

/**
 * ELEMENT_ARRAY_BUFFER_BINDING = 0x8895
 * Passed to getParameter to get the current element array buffer.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_ELEMENT_ARRAY_BUFFER_BINDING = 0x8895

/**
 * LINE_WIDTH = 0x0B21
 * Passed to getParameter to get the current lineWidth (set by the lineWidth method).
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_LINE_WIDTH = 0x0b21

/**
 * ALIASED_POINT_SIZE_RANGE = 0x846D
 * Passed to getParameter to get the current size of a point drawn with gl.POINTS
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_ALIASED_POINT_SIZE_RANGE = 0x846d

/**
 * ALIASED_LINE_WIDTH_RANGE = 0x846E
 * Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_ALIASED_LINE_WIDTH_RANGE = 0x846e

/**
 * CULL_FACE_MODE = 0x0B45
 * Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_CULL_FACE_MODE = 0x0b45

/**
 * FRONT_FACE = 0x0B46
 * Passed to getParameter to determine the current value of frontFace. Should return CW or CCW.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_FRONT_FACE = 0x0b46

/**
 * DEPTH_RANGE = 0x0B70
 * Passed to getParameter to return a length-2 array of floats giving the current depth range.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_DEPTH_RANGE = 0x0b70

/**
 * DEPTH_WRITEMASK = 0x0B72
 * Passed to getParameter to determine if the depth write mask is enabled.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_DEPTH_WRITEMASK = 0x0b72

/**
 * DEPTH_CLEAR_VALUE = 0x0B73
 * Passed to getParameter to determine the current depth clear value.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_DEPTH_CLEAR_VALUE = 0x0b73

/**
 * DEPTH_FUNC = 0x0B74
 * Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_DEPTH_FUNC = 0x0b74

/**
 * STENCIL_CLEAR_VALUE = 0x0B91
 * Passed to getParameter to get the value the stencil will be cleared to.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_CLEAR_VALUE = 0x0b91

/**
 * STENCIL_FUNC = 0x0B92
 * Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_FUNC = 0x0b92

/**
 * STENCIL_FAIL = 0x0B94
 * Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_FAIL = 0x0b94

/**
 * STENCIL_PASS_DEPTH_FAIL = 0x0B95
 * Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_PASS_DEPTH_FAIL = 0x0b95

/**
 * STENCIL_PASS_DEPTH_PASS = 0x0B96
 * Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_PASS_DEPTH_PASS = 0x0b96

/**
 * STENCIL_REF = 0x0B97
 * Passed to getParameter to get the reference value used for stencil tests.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_REF = 0x0b97

/**
 * STENCIL_VALUE_MASK = 0x0B93
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_VALUE_MASK = 0x0b93

/**
 * STENCIL_WRITEMASK = 0x0B98
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_WRITEMASK = 0x0b98

/**
 * STENCIL_BACK_FUNC = 0x8800
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_FUNC = 0x8800

/**
 * STENCIL_BACK_FAIL = 0x8801
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_FAIL = 0x8801

/**
 * STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802

/**
 * STENCIL_BACK_PASS_DEPTH_PASS = 0x8803
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_PASS_DEPTH_PASS = 0x8803

/**
 * STENCIL_BACK_REF = 0x8CA3
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_REF = 0x8ca3

/**
 * STENCIL_BACK_VALUE_MASK = 0x8CA4
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_VALUE_MASK = 0x8ca4

/**
 * STENCIL_BACK_WRITEMASK = 0x8CA5
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_WRITEMASK = 0x8ca5

/**
 * VIEWPORT = 0x0BA2
 * Returns an Int32Array with four elements for the current viewport dimensions.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_VIEWPORT = 0x0ba2

/**
 * SCISSOR_BOX = 0x0C10
 * Returns an Int32Array with four elements for the current scissor box dimensions.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SCISSOR_BOX = 0x0c10

/**
 * COLOR_CLEAR_VALUE = 0x0C22
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_COLOR_CLEAR_VALUE = 0x0c22

/**
 * COLOR_WRITEMASK = 0x0C23
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_COLOR_WRITEMASK = 0x0c23

/**
 * UNPACK_ALIGNMENT = 0x0CF5
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_ALIGNMENT = 0x0cf5

/**
 * PACK_ALIGNMENT = 0x0D05
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_PACK_ALIGNMENT = 0x0d05

/**
 * MAX_TEXTURE_SIZE = 0x0D33
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_TEXTURE_SIZE = 0x0d33

/**
 * MAX_VIEWPORT_DIMS = 0x0D3A
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_VIEWPORT_DIMS = 0x0d3a

/**
 * SUBPIXEL_BITS = 0x0D50
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SUBPIXEL_BITS = 0x0d50

/**
 * RED_BITS = 0x0D52
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_RED_BITS = 0x0d52

/**
 * GREEN_BITS = 0x0D53
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_GREEN_BITS = 0x0d53

/**
 * BLUE_BITS = 0x0D54
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLUE_BITS = 0x0d54

/**
 * ALPHA_BITS = 0x0D55
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_ALPHA_BITS = 0x0d55

/**
 * DEPTH_BITS = 0x0D56
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_DEPTH_BITS = 0x0d56

/**
 * STENCIL_BITS = 0x0D57
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BITS = 0x0d57

/**
 * POLYGON_OFFSET_UNITS = 0x2A00
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_POLYGON_OFFSET_UNITS = 0x2a00

/**
 * POLYGON_OFFSET_FACTOR = 0x8038
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_POLYGON_OFFSET_FACTOR = 0x8038

/**
 * TEXTURE_BINDING_2D = 0x8069
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_TEXTURE_BINDING_2D = 0x8069

/**
 * SAMPLE_BUFFERS = 0x80A8
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SAMPLE_BUFFERS = 0x80a8

/**
 * SAMPLES = 0x80A9
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SAMPLES = 0x80a9

/**
 * SAMPLE_COVERAGE_VALUE = 0x80AA
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SAMPLE_COVERAGE_VALUE = 0x80aa

/**
 * SAMPLE_COVERAGE_INVERT = 0x80AB
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SAMPLE_COVERAGE_INVERT = 0x80ab

/**
 * COMPRESSED_TEXTURE_FORMATS = 0x86A3
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_COMPRESSED_TEXTURE_FORMATS = 0x86a3

/**
 * VENDOR = 0x1F00
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_VENDOR = 0x1f00

/**
 * RENDERER = 0x1F01
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_RENDERER = 0x1f01

/**
 * VERSION = 0x1F02
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_VERSION = 0x1f02

/**
 * IMPLEMENTATION_COLOR_READ_TYPE = 0x8B9A
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a

/**
 * IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b

/**
 * BROWSER_DEFAULT_WEBGL = 0x9244
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BROWSER_DEFAULT_WEBGL = 0x9244

// Buffers - Constants passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().

/**
 * STATIC_DRAW = 0x88E4
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_STATIC_DRAW = 0x88e4

/**
 * STREAM_DRAW = 0x88E0
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_STREAM_DRAW = 0x88e0

/**
 * DYNAMIC_DRAW = 0x88E8
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_DYNAMIC_DRAW = 0x88e8

/**
 * ARRAY_BUFFER = 0x8892
 * Passed to bindBuffer or bufferData to specify the type of buffer being used.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_ARRAY_BUFFER = 0x8892

/**
 * ELEMENT_ARRAY_BUFFER = 0x8893
 * Passed to bindBuffer or bufferData to specify the type of buffer being used.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_ELEMENT_ARRAY_BUFFER = 0x8893

/**
 * BUFFER_SIZE = 0x8764
 * Passed to getBufferParameter to get a buffer's size.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_BUFFER_SIZE = 0x8764

/**
 * BUFFER_USAGE = 0x8765
 * Passed to getBufferParameter to get the hint for the buffer passed in when it was created.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_BUFFER_USAGE = 0x8765

// Vertex attributes - Constants passed to getVertexAttrib().

/**
 * CURRENT_VERTEX_ATTRIB = 0x8626
 * Passed to getVertexAttrib to read back the current vertex attribute.
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_CURRENT_VERTEX_ATTRIB = 0x8626

/**
 * VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622

/**
 * VERTEX_ATTRIB_ARRAY_SIZE = 0x8623
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_SIZE = 0x8623

/**
 * VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624

/**
 * VERTEX_ATTRIB_ARRAY_TYPE = 0x8625
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_TYPE = 0x8625

/**
 * VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a

/**
 * VERTEX_ATTRIB_ARRAY_POINTER = 0x8645
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_POINTER = 0x8645

/**
 * VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f

// Culling - Constants passed to cullFace().

/**
 * CULL_FACE = 0x0B44
 * Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method.
 * Culling - Constant passed to cullFace().
 */
export const GL_CULL_FACE = 0x0b44

/**
 * FRONT = 0x0404
 * Passed to cullFace to specify that only front faces should be culled.
 * Culling - Constant passed to cullFace().
 */
export const GL_FRONT = 0x0404

/**
 * BACK = 0x0405
 * Passed to cullFace to specify that only back faces should be culled.
 * Culling - Constant passed to cullFace().
 */
export const GL_BACK = 0x0405

/**
 * FRONT_AND_BACK = 0x0408
 * Passed to cullFace to specify that front and back faces should be culled.
 * Culling - Constant passed to cullFace().
 */
export const GL_FRONT_AND_BACK = 0x0408

// Enabling and disabling - Constants passed to enable() or disable().

/**
 * BLEND = 0x0BE2
 * Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_BLEND = 0x0be2

/**
 * DEPTH_TEST = 0x0B71
 * Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_DEPTH_TEST = 0x0b71

/**
 * DITHER = 0x0BD0
 * Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_DITHER = 0x0bd0

/**
 * POLYGON_OFFSET_FILL = 0x8037
 * Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_POLYGON_OFFSET_FILL = 0x8037

/**
 * SAMPLE_ALPHA_TO_COVERAGE = 0x809E
 * Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_SAMPLE_ALPHA_TO_COVERAGE = 0x809e

/**
 * SAMPLE_COVERAGE = 0x80A0
 * Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_SAMPLE_COVERAGE = 0x80a0

/**
 * SCISSOR_TEST = 0x0C11
 * Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_SCISSOR_TEST = 0x0c11

/**
 * STENCIL_TEST = 0x0B90
 * Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_STENCIL_TEST = 0x0b90

// Errors - Constants returned from getError().

/**
 * NO_ERROR = 0
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_NO_ERROR = 0

/**
 * INVALID_ENUM = 0x0500
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_INVALID_ENUM = 0x0500

/**
 * INVALID_VALUE = 0x0501
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_INVALID_VALUE = 0x0501

/**
 * INVALID_OPERATION = 0x0502
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_INVALID_OPERATION = 0x0502

/**
 * OUT_OF_MEMORY = 0x0505
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_OUT_OF_MEMORY = 0x0505

/**
 * CONTEXT_LOST_WEBGL = 0x9242
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_CONTEXT_LOST_WEBGL = 0x9242

// Front face directions - Constants passed to frontFace().

/**
 * CW = 0x0900
 * Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction
 * Front face directions - Constant passed to frontFace().
 */
export const GL_CW = 0x0900

/**
 * CCW = 0x0901
 * Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction
 * Front face directions - Constant passed to frontFace().
 */
export const GL_CCW = 0x0901

// Hints - Constants passed to hint()

/**
 * DONT_CARE = 0x1100
 * There is no preference for this behavior.
 * Hints - Constant passed to hint()
 */
export const GL_DONT_CARE = 0x1100

/**
 * FASTEST = 0x1101
 * The most efficient behavior should be used.
 * Hints - Constant passed to hint()
 */
export const GL_FASTEST = 0x1101

/**
 * NICEST = 0x1102
 * The most correct or the highest quality option should be used.
 * Hints - Constant passed to hint()
 */
export const GL_NICEST = 0x1102

/**
 * GENERATE_MIPMAP_HINT = 0x8192
 * Hint for the quality of filtering when generating mipmap images with generateMipmap().
 * Hints - Constant passed to hint()
 */
export const GL_GENERATE_MIPMAP_HINT = 0x8192

// Data types

/**
 * BYTE = 0x1400
 * Data types
 */
export const GL_BYTE = 0x1400

/**
 * UNSIGNED_BYTE = 0x1401
 * Data types
 */
export const GL_UNSIGNED_BYTE = 0x1401

/**
 * SHORT = 0x1402
 * Data types
 */
export const GL_SHORT = 0x1402

/**
 * UNSIGNED_SHORT = 0x1403
 * Data types
 */
export const GL_UNSIGNED_SHORT = 0x1403

/**
 * INT = 0x1404
 * Data types
 */
export const GL_INT = 0x1404

/**
 * UNSIGNED_INT = 0x1405
 * Data types
 */
export const GL_UNSIGNED_INT = 0x1405

/**
 * FLOAT = 0x1406
 * Data types
 */
export const GL_FLOAT = 0x1406

// Pixel formats

/**
 * DEPTH_COMPONENT = 0x1902
 * Pixel formats
 */
export const GL_DEPTH_COMPONENT = 0x1902

/**
 * ALPHA = 0x1906
 * Pixel formats
 */
export const GL_ALPHA = 0x1906

/**
 * RGB = 0x1907
 * Pixel formats
 */
export const GL_RGB = 0x1907

/**
 * RGBA = 0x1908
 * Pixel formats
 */
export const GL_RGBA = 0x1908

/**
 * LUMINANCE = 0x1909
 * Pixel formats
 */
export const GL_LUMINANCE = 0x1909

/**
 * LUMINANCE_ALPHA = 0x190A
 * Pixel formats
 */
export const GL_LUMINANCE_ALPHA = 0x190a

// Pixel types

/*
 * UNSIGNED_BYTE = 0x1401
 * Pixel types
 */
// GL_UNSIGNED_BYTE = 0x1401

/**
 * UNSIGNED_SHORT_4_4_4_4 = 0x8033
 * Pixel types
 */
export const GL_UNSIGNED_SHORT_4_4_4_4 = 0x8033

/**
 * UNSIGNED_SHORT_5_5_5_1 = 0x8034
 * Pixel types
 */
export const GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034

/**
 * UNSIGNED_SHORT_5_6_5 = 0x8363
 * Pixel types
 */
export const GL_UNSIGNED_SHORT_5_6_5 = 0x8363

// Shaders - Constants passed to createShader() or getShaderParameter()

/**
 * FRAGMENT_SHADER = 0x8B30
 * Passed to createShader to define a fragment shader.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_FRAGMENT_SHADER = 0x8b30

/**
 * VERTEX_SHADER = 0x8B31
 * Passed to createShader to define a vertex shader
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_VERTEX_SHADER = 0x8b31

/**
 * COMPILE_STATUS = 0x8B81
 * Passed to getShaderParameter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_COMPILE_STATUS = 0x8b81

/**
 * DELETE_STATUS = 0x8B80
 * Passed to getShaderParameter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_DELETE_STATUS = 0x8b80

/**
 * LINK_STATUS = 0x8B82
 * Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_LINK_STATUS = 0x8b82

/**
 * VALIDATE_STATUS = 0x8B83
 * Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_VALIDATE_STATUS = 0x8b83

/**
 * ATTACHED_SHADERS = 0x8B85
 * Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_ATTACHED_SHADERS = 0x8b85

/**
 * ACTIVE_ATTRIBUTES = 0x8B89
 * Passed to getProgramParameter to get the number of attributes active in a program.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_ACTIVE_ATTRIBUTES = 0x8b89

/**
 * ACTIVE_UNIFORMS = 0x8B86
 * Passed to getProgramParameter to get the number of uniforms active in a program.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_ACTIVE_UNIFORMS = 0x8b86

/**
 * MAX_VERTEX_ATTRIBS = 0x8869
 * The maximum number of entries possible in the vertex attribute list.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_VERTEX_ATTRIBS = 0x8869

/**
 * MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb

/**
 * MAX_VARYING_VECTORS = 0x8DFC
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_VARYING_VECTORS = 0x8dfc

/**
 * MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d

/**
 * MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c

/**
 * MAX_TEXTURE_IMAGE_UNITS = 0x8872
 * Implementation dependent number of maximum texture units. At least 8.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_TEXTURE_IMAGE_UNITS = 0x8872

/**
 * MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd

/**
 * SHADER_TYPE = 0x8B4F
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_SHADER_TYPE = 0x8b4f

/**
 * SHADING_LANGUAGE_VERSION = 0x8B8C
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_SHADING_LANGUAGE_VERSION = 0x8b8c

/**
 * CURRENT_PROGRAM = 0x8B8D
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_CURRENT_PROGRAM = 0x8b8d

// Depth or stencil tests - Constants passed to depthFunc() or stencilFunc().

/**
 * NEVER = 0x0200
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_NEVER = 0x0200

/**
 * LESS = 0x0201
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_LESS = 0x0201

/**
 * EQUAL = 0x0202
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_EQUAL = 0x0202

/**
 * LEQUAL = 0x0203
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_LEQUAL = 0x0203

/**
 * GREATER = 0x0204
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_GREATER = 0x0204

/**
 * NOTEQUAL = 0x0205
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_NOTEQUAL = 0x0205

/**
 * GEQUAL = 0x0206
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_GEQUAL = 0x0206

/**
 * ALWAYS = 0x0207
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_ALWAYS = 0x0207

// Stencil actions - Constants passed to stencilOp().

/**
 * KEEP = 0x1E00
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_KEEP = 0x1e00

/**
 * REPLACE = 0x1E01
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_REPLACE = 0x1e01

/**
 * INCR = 0x1E02
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_INCR = 0x1e02

/**
 * DECR = 0x1E03
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_DECR = 0x1e03

/**
 * INVERT = 0x150A
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_INVERT = 0x150a

/**
 * INCR_WRAP = 0x8507
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_INCR_WRAP = 0x8507

/**
 * DECR_WRAP = 0x8508
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_DECR_WRAP = 0x8508

// Textures - Constants passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.

/**
 * NEAREST = 0x2600
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_NEAREST = 0x2600

/**
 * LINEAR = 0x2601
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_LINEAR = 0x2601

/**
 * NEAREST_MIPMAP_NEAREST = 0x2700
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_NEAREST_MIPMAP_NEAREST = 0x2700

/**
 * LINEAR_MIPMAP_NEAREST = 0x2701
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_LINEAR_MIPMAP_NEAREST = 0x2701

/**
 * NEAREST_MIPMAP_LINEAR = 0x2702
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_NEAREST_MIPMAP_LINEAR = 0x2702

/**
 * LINEAR_MIPMAP_LINEAR = 0x2703
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_LINEAR_MIPMAP_LINEAR = 0x2703

/**
 * TEXTURE_MAG_FILTER = 0x2800
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_MAG_FILTER = 0x2800

/**
 * TEXTURE_MIN_FILTER = 0x2801
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_MIN_FILTER = 0x2801

/**
 * TEXTURE_WRAP_S = 0x2802
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_WRAP_S = 0x2802

/**
 * TEXTURE_WRAP_T = 0x2803
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_WRAP_T = 0x2803

/**
 * TEXTURE_2D = 0x0DE1
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_2D = 0x0de1

/**
 * TEXTURE = 0x1702
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE = 0x1702

/**
 * TEXTURE_CUBE_MAP = 0x8513
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP = 0x8513

/**
 * TEXTURE_BINDING_CUBE_MAP = 0x8514
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_BINDING_CUBE_MAP = 0x8514

/**
 * TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516

/**
 * TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518

/**
 * TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a

/**
 * MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c

/**
 * ACTIVE_TEXTURE = 0x84E0
 * The current active texture unit.
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_ACTIVE_TEXTURE = 0x84e0

/**
 * REPEAT = 0x2901
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_REPEAT = 0x2901

/**
 * CLAMP_TO_EDGE = 0x812F
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_CLAMP_TO_EDGE = 0x812f

/**
 * MIRRORED_REPEAT = 0x8370
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_MIRRORED_REPEAT = 0x8370

// Uniform types

/**
 * FLOAT_VEC2 = 0x8B50
 * Uniform types
 */
export const GL_FLOAT_VEC2 = 0x8b50

/**
 * FLOAT_VEC3 = 0x8B51
 * Uniform types
 */
export const GL_FLOAT_VEC3 = 0x8b51

/**
 * FLOAT_VEC4 = 0x8B52
 * Uniform types
 */
export const GL_FLOAT_VEC4 = 0x8b52

/**
 * INT_VEC2 = 0x8B53
 * Uniform types
 */
export const GL_INT_VEC2 = 0x8b53

/**
 * INT_VEC3 = 0x8B54
 * Uniform types
 */
export const GL_INT_VEC3 = 0x8b54

/**
 * INT_VEC4 = 0x8B55
 * Uniform types
 */
export const GL_INT_VEC4 = 0x8b55

/**
 * BOOL = 0x8B56
 * Uniform types
 */
export const GL_BOOL = 0x8b56

/**
 * BOOL_VEC2 = 0x8B57
 * Uniform types
 */
export const GL_BOOL_VEC2 = 0x8b57

/**
 * BOOL_VEC3 = 0x8B58
 * Uniform types
 */
export const GL_BOOL_VEC3 = 0x8b58

/**
 * BOOL_VEC4 = 0x8B59
 * Uniform types
 */
export const GL_BOOL_VEC4 = 0x8b59

/**
 * FLOAT_MAT2 = 0x8B5A
 * Uniform types
 */
export const GL_FLOAT_MAT2 = 0x8b5a

/**
 * FLOAT_MAT3 = 0x8B5B
 * Uniform types
 */
export const GL_FLOAT_MAT3 = 0x8b5b

/**
 * FLOAT_MAT4 = 0x8B5C
 * Uniform types
 */
export const GL_FLOAT_MAT4 = 0x8b5c

/**
 * SAMPLER_2D = 0x8B5E
 * Uniform types
 */
export const GL_SAMPLER_2D = 0x8b5e

/**
 * SAMPLER_CUBE = 0x8B60
 * Uniform types
 */
export const GL_SAMPLER_CUBE = 0x8b60

// Shader precision-specified types

/**
 * LOW_FLOAT = 0x8DF0
 * Shader precision-specified types
 */
export const GL_LOW_FLOAT = 0x8df0

/**
 * MEDIUM_FLOAT = 0x8DF1
 * Shader precision-specified types
 */
export const GL_MEDIUM_FLOAT = 0x8df1

/**
 * HIGH_FLOAT = 0x8DF2
 * Shader precision-specified types
 */
export const GL_HIGH_FLOAT = 0x8df2

/**
 * LOW_INT = 0x8DF3
 * Shader precision-specified types
 */
export const GL_LOW_INT = 0x8df3

/**
 * MEDIUM_INT = 0x8DF4
 * Shader precision-specified types
 */
export const GL_MEDIUM_INT = 0x8df4

/**
 * HIGH_INT = 0x8DF5
 * Shader precision-specified types
 */
export const GL_HIGH_INT = 0x8df5

// Framebuffers and renderbuffers

/**
 * FRAMEBUFFER = 0x8D40
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER = 0x8d40

/**
 * RENDERBUFFER = 0x8D41
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER = 0x8d41

/**
 * RGBA4 = 0x8056
 * Framebuffers and renderbuffers
 */
export const GL_RGBA4 = 0x8056

/**
 * RGB5_A1 = 0x8057
 * Framebuffers and renderbuffers
 */
export const GL_RGB5_A1 = 0x8057

/**
 * RGB565 = 0x8D62
 * Framebuffers and renderbuffers
 */
export const GL_RGB565 = 0x8d62

/**
 * DEPTH_COMPONENT16 = 0x81A5
 * Framebuffers and renderbuffers
 */
export const GL_DEPTH_COMPONENT16 = 0x81a5

/**
 * STENCIL_INDEX8 = 0x8D48
 * Framebuffers and renderbuffers
 */
export const GL_STENCIL_INDEX8 = 0x8d48

/**
 * DEPTH_STENCIL = 0x84F9
 * Framebuffers and renderbuffers
 */
export const GL_DEPTH_STENCIL = 0x84f9

/**
 * RENDERBUFFER_WIDTH = 0x8D42
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_WIDTH = 0x8d42

/**
 * RENDERBUFFER_HEIGHT = 0x8D43
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_HEIGHT = 0x8d43

/**
 * RENDERBUFFER_INTERNAL_FORMAT = 0x8D44
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_INTERNAL_FORMAT = 0x8d44

/**
 * RENDERBUFFER_RED_SIZE = 0x8D50
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_RED_SIZE = 0x8d50

/**
 * RENDERBUFFER_GREEN_SIZE = 0x8D51
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_GREEN_SIZE = 0x8d51

/**
 * RENDERBUFFER_BLUE_SIZE = 0x8D52
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_BLUE_SIZE = 0x8d52

/**
 * RENDERBUFFER_ALPHA_SIZE = 0x8D53
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_ALPHA_SIZE = 0x8d53

/**
 * RENDERBUFFER_DEPTH_SIZE = 0x8D54
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_DEPTH_SIZE = 0x8d54

/**
 * RENDERBUFFER_STENCIL_SIZE = 0x8D55
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_STENCIL_SIZE = 0x8d55

/**
 * FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0

/**
 * FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3

/**
 * COLOR_ATTACHMENT0 = 0x8CE0
 * Framebuffers and renderbuffers
 */
export const GL_COLOR_ATTACHMENT0 = 0x8ce0

/**
 * DEPTH_ATTACHMENT = 0x8D00
 * Framebuffers and renderbuffers
 */
export const GL_DEPTH_ATTACHMENT = 0x8d00

/**
 * STENCIL_ATTACHMENT = 0x8D20
 * Framebuffers and renderbuffers
 */
export const GL_STENCIL_ATTACHMENT = 0x8d20

/**
 * DEPTH_STENCIL_ATTACHMENT = 0x821A
 * Framebuffers and renderbuffers
 */
export const GL_DEPTH_STENCIL_ATTACHMENT = 0x821a

/**
 * NONE = 0
 * Framebuffers and renderbuffers
 */
export const GL_NONE = 0

/**
 * FRAMEBUFFER_COMPLETE = 0x8CD5
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_COMPLETE = 0x8cd5

/**
 * FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6

/**
 * FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7

/**
 * FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9

/**
 * FRAMEBUFFER_UNSUPPORTED = 0x8CDD
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_UNSUPPORTED = 0x8cdd

/**
 * FRAMEBUFFER_BINDING = 0x8CA6
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_BINDING = 0x8ca6

/**
 * RENDERBUFFER_BINDING = 0x8CA7
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_BINDING = 0x8ca7

/**
 * MAX_RENDERBUFFER_SIZE = 0x84E8
 * Framebuffers and renderbuffers
 */
export const GL_MAX_RENDERBUFFER_SIZE = 0x84e8

/**
 * INVALID_FRAMEBUFFER_OPERATION = 0x0506
 * Framebuffers and renderbuffers
 */
export const GL_INVALID_FRAMEBUFFER_OPERATION = 0x0506

// Pixel storage modes - Constants passed to pixelStorei().

/**
 * UNPACK_FLIP_Y_WEBGL = 0x9240
 * Pixel storage modes - Constant passed to pixelStorei().
 */
export const GL_UNPACK_FLIP_Y_WEBGL = 0x9240

/**
 * UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241
 * Pixel storage modes - Constant passed to pixelStorei().
 */
export const GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241

/**
 * UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243
 * Pixel storage modes - Constant passed to pixelStorei().
 */
export const GL_UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243

// Getting GL parameter information - Constants passed to getParameter() to specify what information to return.

/**
 * READ_BUFFER = 0x0C02
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_READ_BUFFER = 0x0c02

/**
 * UNPACK_ROW_LENGTH = 0x0CF2
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_ROW_LENGTH = 0x0cf2

/**
 * UNPACK_SKIP_ROWS = 0x0CF3
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_SKIP_ROWS = 0x0cf3

/**
 * UNPACK_SKIP_PIXELS = 0x0CF4
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_SKIP_PIXELS = 0x0cf4

/**
 * PACK_ROW_LENGTH = 0x0D02
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_PACK_ROW_LENGTH = 0x0d02

/**
 * PACK_SKIP_ROWS = 0x0D03
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_PACK_SKIP_ROWS = 0x0d03

/**
 * PACK_SKIP_PIXELS = 0x0D04
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_PACK_SKIP_PIXELS = 0x0d04

/**
 * TEXTURE_BINDING_3D = 0x806A
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_TEXTURE_BINDING_3D = 0x806a

/**
 * UNPACK_SKIP_IMAGES = 0x806D
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_SKIP_IMAGES = 0x806d

/**
 * UNPACK_IMAGE_HEIGHT = 0x806E
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_IMAGE_HEIGHT = 0x806e

/**
 * MAX_3D_TEXTURE_SIZE = 0x8073
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_3D_TEXTURE_SIZE = 0x8073

/**
 * MAX_ELEMENTS_VERTICES = 0x80E8
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_ELEMENTS_VERTICES = 0x80e8

/**
 * MAX_ELEMENTS_INDICES = 0x80E9
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_ELEMENTS_INDICES = 0x80e9

/**
 * MAX_TEXTURE_LOD_BIAS = 0x84FD
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_TEXTURE_LOD_BIAS = 0x84fd

/**
 * MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8B49
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49

/**
 * MAX_VERTEX_UNIFORM_COMPONENTS = 0x8B4A
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a

/**
 * MAX_ARRAY_TEXTURE_LAYERS = 0x88FF
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_ARRAY_TEXTURE_LAYERS = 0x88ff

/**
 * MIN_PROGRAM_TEXEL_OFFSET = 0x8904
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MIN_PROGRAM_TEXEL_OFFSET = 0x8904

/**
 * MAX_PROGRAM_TEXEL_OFFSET = 0x8905
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_PROGRAM_TEXEL_OFFSET = 0x8905

/**
 * MAX_VARYING_COMPONENTS = 0x8B4B
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_VARYING_COMPONENTS = 0x8b4b

/**
 * FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8B8B
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b

/**
 * RASTERIZER_DISCARD = 0x8C89
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_RASTERIZER_DISCARD = 0x8c89

/**
 * VERTEX_ARRAY_BINDING = 0x85B5
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_VERTEX_ARRAY_BINDING = 0x85b5

/**
 * MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122

/**
 * MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125

/**
 * MAX_SERVER_WAIT_TIMEOUT = 0x9111
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_SERVER_WAIT_TIMEOUT = 0x9111

/**
 * MAX_ELEMENT_INDEX = 0x8D6B
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_ELEMENT_INDEX = 0x8d6b

// Textures - Constants passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.

/**
 * RED = 0x1903
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RED = 0x1903

/**
 * RGB8 = 0x8051
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB8 = 0x8051

/**
 * RGBA8 = 0x8058
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA8 = 0x8058

/**
 * RGB10_A2 = 0x8059
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB10_A2 = 0x8059

/**
 * TEXTURE_3D = 0x806F
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_3D = 0x806f

/**
 * TEXTURE_WRAP_R = 0x8072
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_WRAP_R = 0x8072

/**
 * TEXTURE_MIN_LOD = 0x813A
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_MIN_LOD = 0x813a

/**
 * TEXTURE_MAX_LOD = 0x813B
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_MAX_LOD = 0x813b

/**
 * TEXTURE_BASE_LEVEL = 0x813C
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_BASE_LEVEL = 0x813c

/**
 * TEXTURE_MAX_LEVEL = 0x813D
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_MAX_LEVEL = 0x813d

/**
 * TEXTURE_COMPARE_MODE = 0x884C
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_COMPARE_MODE = 0x884c

/**
 * TEXTURE_COMPARE_FUNC = 0x884D
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_COMPARE_FUNC = 0x884d

/**
 * SRGB = 0x8C40
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_SRGB = 0x8c40

/**
 * SRGB8 = 0x8C41
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_SRGB8 = 0x8c41

/**
 * SRGB8_ALPHA8 = 0x8C43
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_SRGB8_ALPHA8 = 0x8c43

/**
 * COMPARE_REF_TO_TEXTURE = 0x884E
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_COMPARE_REF_TO_TEXTURE = 0x884e

/**
 * RGBA32F = 0x8814
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA32F = 0x8814

/**
 * RGB32F = 0x8815
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB32F = 0x8815

/**
 * RGBA16F = 0x881A
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA16F = 0x881a

/**
 * RGB16F = 0x881B
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB16F = 0x881b

/**
 * TEXTURE_2D_ARRAY = 0x8C1A
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_2D_ARRAY = 0x8c1a

/**
 * TEXTURE_BINDING_2D_ARRAY = 0x8C1D
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_BINDING_2D_ARRAY = 0x8c1d

/**
 * R11F_G11F_B10F = 0x8C3A
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R11F_G11F_B10F = 0x8c3a

/**
 * RGB9_E5 = 0x8C3D
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB9_E5 = 0x8c3d

/**
 * RGBA32UI = 0x8D70
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA32UI = 0x8d70

/**
 * RGB32UI = 0x8D71
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB32UI = 0x8d71

/**
 * RGBA16UI = 0x8D76
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA16UI = 0x8d76

/**
 * RGB16UI = 0x8D77
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB16UI = 0x8d77

/**
 * RGBA8UI = 0x8D7C
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA8UI = 0x8d7c

/**
 * RGB8UI = 0x8D7D
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB8UI = 0x8d7d

/**
 * RGBA32I = 0x8D82
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA32I = 0x8d82

/**
 * RGB32I = 0x8D83
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB32I = 0x8d83

/**
 * RGBA16I = 0x8D88
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA16I = 0x8d88

/**
 * RGB16I = 0x8D89
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB16I = 0x8d89

/**
 * RGBA8I = 0x8D8E
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA8I = 0x8d8e

/**
 * RGB8I = 0x8D8F
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB8I = 0x8d8f

/**
 * RED_INTEGER = 0x8D94
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RED_INTEGER = 0x8d94

/**
 * RGB_INTEGER = 0x8D98
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB_INTEGER = 0x8d98

/**
 * RGBA_INTEGER = 0x8D99
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA_INTEGER = 0x8d99

/**
 * R8 = 0x8229
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R8 = 0x8229

/**
 * RG8 = 0x822B
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG8 = 0x822b

/**
 * R16F = 0x822D
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R16F = 0x822d

/**
 * R32F = 0x822E
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R32F = 0x822e

/**
 * RG16F = 0x822F
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG16F = 0x822f

/**
 * RG32F = 0x8230
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG32F = 0x8230

/**
 * R8I = 0x8231
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R8I = 0x8231

/**
 * R8UI = 0x8232
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R8UI = 0x8232

/**
 * R16I = 0x8233
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R16I = 0x8233

/**
 * R16UI = 0x8234
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R16UI = 0x8234

/**
 * R32I = 0x8235
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R32I = 0x8235

/**
 * R32UI = 0x8236
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R32UI = 0x8236

/**
 * RG8I = 0x8237
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG8I = 0x8237

/**
 * RG8UI = 0x8238
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG8UI = 0x8238

/**
 * RG16I = 0x8239
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG16I = 0x8239

/**
 * RG16UI = 0x823A
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG16UI = 0x823a

/**
 * RG32I = 0x823B
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG32I = 0x823b

/**
 * RG32UI = 0x823C
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG32UI = 0x823c

/**
 * R8_SNORM = 0x8F94
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R8_SNORM = 0x8f94

/**
 * RG8_SNORM = 0x8F95
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG8_SNORM = 0x8f95

/**
 * RGB8_SNORM = 0x8F96
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB8_SNORM = 0x8f96

/**
 * RGBA8_SNORM = 0x8F97
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA8_SNORM = 0x8f97

/**
 * RGB10_A2UI = 0x906F
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB10_A2UI = 0x906f

/**
 * TEXTURE_IMMUTABLE_FORMAT = 0x912F
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_IMMUTABLE_FORMAT = 0x912f

/**
 * TEXTURE_IMMUTABLE_LEVELS = 0x82DF
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_IMMUTABLE_LEVELS = 0x82df

// Pixel types

/**
 * UNSIGNED_INT_2_10_10_10_REV = 0x8368
 * Pixel types
 */
export const GL_UNSIGNED_INT_2_10_10_10_REV = 0x8368

/**
 * UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B
 * Pixel types
 */
export const GL_UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b

/**
 * UNSIGNED_INT_5_9_9_9_REV = 0x8C3E
 * Pixel types
 */
export const GL_UNSIGNED_INT_5_9_9_9_REV = 0x8c3e

/**
 * FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD
 * Pixel types
 */
export const GL_FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad

/**
 * UNSIGNED_INT_24_8 = 0x84FA
 * Pixel types
 */
export const GL_UNSIGNED_INT_24_8 = 0x84fa

/**
 * HALF_FLOAT = 0x140B
 * Pixel types
 */
export const GL_HALF_FLOAT = 0x140b

/**
 * RG = 0x8227
 * Pixel types
 */
export const GL_RG = 0x8227

/**
 * RG_INTEGER = 0x8228
 * Pixel types
 */
export const GL_RG_INTEGER = 0x8228

/**
 * INT_2_10_10_10_REV = 0x8D9F
 * Pixel types
 */
export const GL_INT_2_10_10_10_REV = 0x8d9f

// Queries

/**
 * CURRENT_QUERY = 0x8865
 * Queries
 */
export const GL_CURRENT_QUERY = 0x8865

/**
 * QUERY_RESULT = 0x8866
 * Queries
 */
export const GL_QUERY_RESULT = 0x8866

/**
 * QUERY_RESULT_AVAILABLE = 0x8867
 * Queries
 */
export const GL_QUERY_RESULT_AVAILABLE = 0x8867

/**
 * ANY_SAMPLES_PASSED = 0x8C2F
 * Queries
 */
export const GL_ANY_SAMPLES_PASSED = 0x8c2f

/**
 * ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8D6A
 * Queries
 */
export const GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a

// Draw buffers

/**
 * MAX_DRAW_BUFFERS = 0x8824
 * Draw buffers
 */
export const GL_MAX_DRAW_BUFFERS = 0x8824

/**
 * DRAW_BUFFER0 = 0x8825
 * Draw buffers
 */
export const GL_DRAW_BUFFER0 = 0x8825

/**
 * DRAW_BUFFER1 = 0x8826
 * Draw buffers
 */
export const GL_DRAW_BUFFER1 = 0x8826

/**
 * DRAW_BUFFER2 = 0x8827
 * Draw buffers
 */
export const GL_DRAW_BUFFER2 = 0x8827

/**
 * DRAW_BUFFER3 = 0x8828
 * Draw buffers
 */
export const GL_DRAW_BUFFER3 = 0x8828

/**
 * DRAW_BUFFER4 = 0x8829
 * Draw buffers
 */
export const GL_DRAW_BUFFER4 = 0x8829

/**
 * DRAW_BUFFER5 = 0x882A
 * Draw buffers
 */
export const GL_DRAW_BUFFER5 = 0x882a

/**
 * DRAW_BUFFER6 = 0x882B
 * Draw buffers
 */
export const GL_DRAW_BUFFER6 = 0x882b

/**
 * DRAW_BUFFER7 = 0x882C
 * Draw buffers
 */
export const GL_DRAW_BUFFER7 = 0x882c

/**
 * DRAW_BUFFER8 = 0x882D
 * Draw buffers
 */
export const GL_DRAW_BUFFER8 = 0x882d

/**
 * DRAW_BUFFER9 = 0x882E
 * Draw buffers
 */
export const GL_DRAW_BUFFER9 = 0x882e

/**
 * DRAW_BUFFER10 = 0x882F
 * Draw buffers
 */
export const GL_DRAW_BUFFER10 = 0x882f

/**
 * DRAW_BUFFER11 = 0x8830
 * Draw buffers
 */
export const GL_DRAW_BUFFER11 = 0x8830

/**
 * DRAW_BUFFER12 = 0x8831
 * Draw buffers
 */
export const GL_DRAW_BUFFER12 = 0x8831

/**
 * DRAW_BUFFER13 = 0x8832
 * Draw buffers
 */
export const GL_DRAW_BUFFER13 = 0x8832

/**
 * DRAW_BUFFER14 = 0x8833
 * Draw buffers
 */
export const GL_DRAW_BUFFER14 = 0x8833

/**
 * DRAW_BUFFER15 = 0x8834
 * Draw buffers
 */
export const GL_DRAW_BUFFER15 = 0x8834

/**
 * MAX_COLOR_ATTACHMENTS = 0x8CDF
 * Draw buffers
 */
export const GL_MAX_COLOR_ATTACHMENTS = 0x8cdf

/**
 * COLOR_ATTACHMENT1 = 0x8CE1
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT1 = 0x8ce1

/**
 * COLOR_ATTACHMENT2 = 0x8CE2
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT2 = 0x8ce2

/**
 * COLOR_ATTACHMENT3 = 0x8CE3
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT3 = 0x8ce3

/**
 * COLOR_ATTACHMENT4 = 0x8CE4
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT4 = 0x8ce4

/**
 * COLOR_ATTACHMENT5 = 0x8CE5
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT5 = 0x8ce5

/**
 * COLOR_ATTACHMENT6 = 0x8CE6
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT6 = 0x8ce6

/**
 * COLOR_ATTACHMENT7 = 0x8CE7
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT7 = 0x8ce7

/**
 * COLOR_ATTACHMENT8 = 0x8CE8
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT8 = 0x8ce8

/**
 * COLOR_ATTACHMENT9 = 0x8CE9
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT9 = 0x8ce9

/**
 * COLOR_ATTACHMENT10 = 0x8CEA
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT10 = 0x8cea

/**
 * COLOR_ATTACHMENT11 = 0x8CEB
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT11 = 0x8ceb

/**
 * COLOR_ATTACHMENT12 = 0x8CEC
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT12 = 0x8cec

/**
 * COLOR_ATTACHMENT13 = 0x8CED
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT13 = 0x8ced

/**
 * COLOR_ATTACHMENT14 = 0x8CEE
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT14 = 0x8cee

/**
 * COLOR_ATTACHMENT15 = 0x8CEF
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT15 = 0x8cef

// Samplers

/**
 * SAMPLER_3D = 0x8B5F
 * Samplers
 */
export const GL_SAMPLER_3D = 0x8b5f

/**
 * SAMPLER_2D_SHADOW = 0x8B62
 * Samplers
 */
export const GL_SAMPLER_2D_SHADOW = 0x8b62

/**
 * SAMPLER_2D_ARRAY = 0x8DC1
 * Samplers
 */
export const GL_SAMPLER_2D_ARRAY = 0x8dc1

/**
 * SAMPLER_2D_ARRAY_SHADOW = 0x8DC4
 * Samplers
 */
export const GL_SAMPLER_2D_ARRAY_SHADOW = 0x8dc4

/**
 * SAMPLER_CUBE_SHADOW = 0x8DC5
 * Samplers
 */
export const GL_SAMPLER_CUBE_SHADOW = 0x8dc5

/**
 * INT_SAMPLER_2D = 0x8DCA
 * Samplers
 */
export const GL_INT_SAMPLER_2D = 0x8dca

/**
 * INT_SAMPLER_3D = 0x8DCB
 * Samplers
 */
export const GL_INT_SAMPLER_3D = 0x8dcb

/**
 * INT_SAMPLER_CUBE = 0x8DCC
 * Samplers
 */
export const GL_INT_SAMPLER_CUBE = 0x8dcc

/**
 * INT_SAMPLER_2D_ARRAY = 0x8DCF
 * Samplers
 */
export const GL_INT_SAMPLER_2D_ARRAY = 0x8dcf

/**
 * UNSIGNED_INT_SAMPLER_2D = 0x8DD2
 * Samplers
 */
export const GL_UNSIGNED_INT_SAMPLER_2D = 0x8dd2

/**
 * UNSIGNED_INT_SAMPLER_3D = 0x8DD3
 * Samplers
 */
export const GL_UNSIGNED_INT_SAMPLER_3D = 0x8dd3

/**
 * UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4
 * Samplers
 */
export const GL_UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4

/**
 * UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7
 * Samplers
 */
export const GL_UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7

/**
 * MAX_SAMPLES = 0x8D57
 * Samplers
 */
export const GL_MAX_SAMPLES = 0x8d57

/**
 * SAMPLER_BINDING = 0x8919
 * Samplers
 */
export const GL_SAMPLER_BINDING = 0x8919

// Buffers

/**
 * PIXEL_PACK_BUFFER = 0x88EB
 * Buffers
 */
export const GL_PIXEL_PACK_BUFFER = 0x88eb

/**
 * PIXEL_UNPACK_BUFFER = 0x88EC
 * Buffers
 */
export const GL_PIXEL_UNPACK_BUFFER = 0x88ec

/**
 * PIXEL_PACK_BUFFER_BINDING = 0x88ED
 * Buffers
 */
export const GL_PIXEL_PACK_BUFFER_BINDING = 0x88ed

/**
 * PIXEL_UNPACK_BUFFER_BINDING = 0x88EF
 * Buffers
 */
export const GL_PIXEL_UNPACK_BUFFER_BINDING = 0x88ef

/**
 * COPY_READ_BUFFER = 0x8F36
 * Buffers
 */
export const GL_COPY_READ_BUFFER = 0x8f36

/**
 * COPY_WRITE_BUFFER = 0x8F37
 * Buffers
 */
export const GL_COPY_WRITE_BUFFER = 0x8f37

/**
 * COPY_READ_BUFFER_BINDING = 0x8F36
 * Buffers
 */
export const GL_COPY_READ_BUFFER_BINDING = 0x8f36

/**
 * COPY_WRITE_BUFFER_BINDING = 0x8F37
 * Buffers
 */
export const GL_COPY_WRITE_BUFFER_BINDING = 0x8f37

// Data types

/**
 * FLOAT_MAT2x3 = 0x8B65
 * Data types
 */
export const GL_FLOAT_MAT2x3 = 0x8b65

/**
 * FLOAT_MAT2x4 = 0x8B66
 * Data types
 */
export const GL_FLOAT_MAT2x4 = 0x8b66

/**
 * FLOAT_MAT3x2 = 0x8B67
 * Data types
 */
export const GL_FLOAT_MAT3x2 = 0x8b67

/**
 * FLOAT_MAT3x4 = 0x8B68
 * Data types
 */
export const GL_FLOAT_MAT3x4 = 0x8b68

/**
 * FLOAT_MAT4x2 = 0x8B69
 * Data types
 */
export const GL_FLOAT_MAT4x2 = 0x8b69

/**
 * FLOAT_MAT4x3 = 0x8B6A
 * Data types
 */
export const GL_FLOAT_MAT4x3 = 0x8b6a

/**
 * UNSIGNED_INT_VEC2 = 0x8DC6
 * Data types
 */
export const GL_UNSIGNED_INT_VEC2 = 0x8dc6

/**
 * UNSIGNED_INT_VEC3 = 0x8DC7
 * Data types
 */
export const GL_UNSIGNED_INT_VEC3 = 0x8dc7

/**
 * UNSIGNED_INT_VEC4 = 0x8DC8
 * Data types
 */
export const GL_UNSIGNED_INT_VEC4 = 0x8dc8

/**
 * UNSIGNED_NORMALIZED = 0x8C17
 * Data types
 */
export const GL_UNSIGNED_NORMALIZED = 0x8c17

/**
 * SIGNED_NORMALIZED = 0x8F9C
 * Data types
 */
export const GL_SIGNED_NORMALIZED = 0x8f9c

// Vertex attributes

/**
 * VERTEX_ATTRIB_ARRAY_INTEGER = 0x88FD
 * Vertex attributes
 */
export const GL_VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd

/**
 * VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88FE
 * Vertex attributes
 */
export const GL_VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe

// Transform feedback

/**
 * TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8C7F
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f

/**
 * MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8C80
 * Transform feedback
 */
export const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80

/**
 * TRANSFORM_FEEDBACK_VARYINGS = 0x8C83
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_VARYINGS = 0x8c83

/**
 * TRANSFORM_FEEDBACK_BUFFER_START = 0x8C84
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84

/**
 * TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8C85
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85

/**
 * TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8C88
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88

/**
 * MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8C8A
 * Transform feedback
 */
export const GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a

/**
 * MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8C8B
 * Transform feedback
 */
export const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b

/**
 * INTERLEAVED_ATTRIBS = 0x8C8C
 * Transform feedback
 */
export const GL_INTERLEAVED_ATTRIBS = 0x8c8c

/**
 * SEPARATE_ATTRIBS = 0x8C8D
 * Transform feedback
 */
export const GL_SEPARATE_ATTRIBS = 0x8c8d

/**
 * TRANSFORM_FEEDBACK_BUFFER = 0x8C8E
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER = 0x8c8e

/**
 * TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8C8F
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f

/**
 * TRANSFORM_FEEDBACK = 0x8E22
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK = 0x8e22

/**
 * TRANSFORM_FEEDBACK_PAUSED = 0x8E23
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_PAUSED = 0x8e23

/**
 * TRANSFORM_FEEDBACK_ACTIVE = 0x8E24
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_ACTIVE = 0x8e24

/**
 * TRANSFORM_FEEDBACK_BINDING = 0x8E25
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BINDING = 0x8e25

// Framebuffers and renderbuffers

/**
 * FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210

/**
 * FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211

/**
 * FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212

/**
 * FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213

/**
 * FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214

/**
 * FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215

/**
 * FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216

/**
 * FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217

/**
 * FRAMEBUFFER_DEFAULT = 0x8218
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_DEFAULT = 0x8218

/*
 * DEPTH_STENCIL_ATTACHMENT = 0x821A
 * Framebuffers and renderbuffers
 */
// GL_DEPTH_STENCIL_ATTACHMENT = 0x821A

/*
 * DEPTH_STENCIL = 0x84F9
 * Framebuffers and renderbuffers
 */
// GL_DEPTH_STENCIL = 0x84F9

/**
 * DEPTH24_STENCIL8 = 0x88F0
 * Framebuffers and renderbuffers
 */
export const GL_DEPTH24_STENCIL8 = 0x88f0

/**
 * DRAW_FRAMEBUFFER_BINDING = 0x8CA6
 * Framebuffers and renderbuffers
 */
export const GL_DRAW_FRAMEBUFFER_BINDING = 0x8ca6

/**
 * READ_FRAMEBUFFER = 0x8CA8
 * Framebuffers and renderbuffers
 */
export const GL_READ_FRAMEBUFFER = 0x8ca8

/**
 * DRAW_FRAMEBUFFER = 0x8CA9
 * Framebuffers and renderbuffers
 */
export const GL_DRAW_FRAMEBUFFER = 0x8ca9

/**
 * READ_FRAMEBUFFER_BINDING = 0x8CAA
 * Framebuffers and renderbuffers
 */
export const GL_READ_FRAMEBUFFER_BINDING = 0x8caa

/**
 * RENDERBUFFER_SAMPLES = 0x8CAB
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_SAMPLES = 0x8cab

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8CD4
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4

/**
 * FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8D56
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56

// Uniforms

/**
 * UNIFORM_BUFFER = 0x8A11
 * Uniforms
 */
export const GL_UNIFORM_BUFFER = 0x8a11

/**
 * UNIFORM_BUFFER_BINDING = 0x8A28
 * Uniforms
 */
export const GL_UNIFORM_BUFFER_BINDING = 0x8a28

/**
 * UNIFORM_BUFFER_START = 0x8A29
 * Uniforms
 */
export const GL_UNIFORM_BUFFER_START = 0x8a29

/**
 * UNIFORM_BUFFER_SIZE = 0x8A2A
 * Uniforms
 */
export const GL_UNIFORM_BUFFER_SIZE = 0x8a2a

/**
 * MAX_VERTEX_UNIFORM_BLOCKS = 0x8A2B
 * Uniforms
 */
export const GL_MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b

/**
 * MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8A2D
 * Uniforms
 */
export const GL_MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d

/**
 * MAX_COMBINED_UNIFORM_BLOCKS = 0x8A2E
 * Uniforms
 */
export const GL_MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e

/**
 * MAX_UNIFORM_BUFFER_BINDINGS = 0x8A2F
 * Uniforms
 */
export const GL_MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f

/**
 * MAX_UNIFORM_BLOCK_SIZE = 0x8A30
 * Uniforms
 */
export const GL_MAX_UNIFORM_BLOCK_SIZE = 0x8a30

/**
 * MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8A31
 * Uniforms
 */
export const GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31

/**
 * MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8A33
 * Uniforms
 */
export const GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33

/**
 * UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8A34
 * Uniforms
 */
export const GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34

/**
 * ACTIVE_UNIFORM_BLOCKS = 0x8A36
 * Uniforms
 */
export const GL_ACTIVE_UNIFORM_BLOCKS = 0x8a36

/**
 * UNIFORM_TYPE = 0x8A37
 * Uniforms
 */
export const GL_UNIFORM_TYPE = 0x8a37

/**
 * UNIFORM_SIZE = 0x8A38
 * Uniforms
 */
export const GL_UNIFORM_SIZE = 0x8a38

/**
 * UNIFORM_BLOCK_INDEX = 0x8A3A
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_INDEX = 0x8a3a

/**
 * UNIFORM_OFFSET = 0x8A3B
 * Uniforms
 */
export const GL_UNIFORM_OFFSET = 0x8a3b

/**
 * UNIFORM_ARRAY_STRIDE = 0x8A3C
 * Uniforms
 */
export const GL_UNIFORM_ARRAY_STRIDE = 0x8a3c

/**
 * UNIFORM_MATRIX_STRIDE = 0x8A3D
 * Uniforms
 */
export const GL_UNIFORM_MATRIX_STRIDE = 0x8a3d

/**
 * UNIFORM_IS_ROW_MAJOR = 0x8A3E
 * Uniforms
 */
export const GL_UNIFORM_IS_ROW_MAJOR = 0x8a3e

/**
 * UNIFORM_BLOCK_BINDING = 0x8A3F
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_BINDING = 0x8a3f

/**
 * UNIFORM_BLOCK_DATA_SIZE = 0x8A40
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_DATA_SIZE = 0x8a40

/**
 * UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8A42
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42

/**
 * UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8A43
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43

/**
 * UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8A44
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44

/**
 * UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8A46
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46

// Sync objects

/**
 * OBJECT_TYPE = 0x9112
 * Sync objects
 */
export const GL_OBJECT_TYPE = 0x9112

/**
 * SYNC_CONDITION = 0x9113
 * Sync objects
 */
export const GL_SYNC_CONDITION = 0x9113

/**
 * SYNC_STATUS = 0x9114
 * Sync objects
 */
export const GL_SYNC_STATUS = 0x9114

/**
 * SYNC_FLAGS = 0x9115
 * Sync objects
 */
export const GL_SYNC_FLAGS = 0x9115

/**
 * SYNC_FENCE = 0x9116
 * Sync objects
 */
export const GL_SYNC_FENCE = 0x9116

/**
 * SYNC_GPU_COMMANDS_COMPLETE = 0x9117
 * Sync objects
 */
export const GL_SYNC_GPU_COMMANDS_COMPLETE = 0x9117

/**
 * UNSIGNALED = 0x9118
 * Sync objects
 */
export const GL_UNSIGNALED = 0x9118

/**
 * SIGNALED = 0x9119
 * Sync objects
 */
export const GL_SIGNALED = 0x9119

/**
 * ALREADY_SIGNALED = 0x911A
 * Sync objects
 */
export const GL_ALREADY_SIGNALED = 0x911a

/**
 * TIMEOUT_EXPIRED = 0x911B
 * Sync objects
 */
export const GL_TIMEOUT_EXPIRED = 0x911b

/**
 * CONDITION_SATISFIED = 0x911C
 * Sync objects
 */
export const GL_CONDITION_SATISFIED = 0x911c

/**
 * WAIT_FAILED = 0x911D
 * Sync objects
 */
export const GL_WAIT_FAILED = 0x911d

/**
 * SYNC_FLUSH_COMMANDS_BIT = 0x00000001
 * Sync objects
 */
export const GL_SYNC_FLUSH_COMMANDS_BIT = 0x00000001

// Miscellaneous constants

/**
 * COLOR = 0x1800
 * Miscellaneous constants
 */
export const GL_COLOR = 0x1800

/**
 * DEPTH = 0x1801
 * Miscellaneous constants
 */
export const GL_DEPTH = 0x1801

/**
 * STENCIL = 0x1802
 * Miscellaneous constants
 */
export const GL_STENCIL = 0x1802

/**
 * MIN = 0x8007
 * Miscellaneous constants
 */
export const GL_MIN = 0x8007

/**
 * MAX = 0x8008
 * Miscellaneous constants
 */
export const GL_MAX = 0x8008

/**
 * DEPTH_COMPONENT24 = 0x81A6
 * Miscellaneous constants
 */
export const GL_DEPTH_COMPONENT24 = 0x81a6

/**
 * STREAM_READ = 0x88E1
 * Miscellaneous constants
 */
export const GL_STREAM_READ = 0x88e1

/**
 * STREAM_COPY = 0x88E2
 * Miscellaneous constants
 */
export const GL_STREAM_COPY = 0x88e2

/**
 * STATIC_READ = 0x88E5
 * Miscellaneous constants
 */
export const GL_STATIC_READ = 0x88e5

/**
 * STATIC_COPY = 0x88E6
 * Miscellaneous constants
 */
export const GL_STATIC_COPY = 0x88e6

/**
 * DYNAMIC_READ = 0x88E9
 * Miscellaneous constants
 */
export const GL_DYNAMIC_READ = 0x88e9

/**
 * DYNAMIC_COPY = 0x88EA
 * Miscellaneous constants
 */
export const GL_DYNAMIC_COPY = 0x88ea

/**
 * DEPTH_COMPONENT32F = 0x8CAC
 * Miscellaneous constants
 */
export const GL_DEPTH_COMPONENT32F = 0x8cac

/**
 * DEPTH32F_STENCIL8 = 0x8CAD
 * Miscellaneous constants
 */
export const GL_DEPTH32F_STENCIL8 = 0x8cad

/**
 * INVALID_INDEX = 0xFFFFFFFF
 * Miscellaneous constants
 */
export const GL_INVALID_INDEX = 0xffffffff

/**
 * TIMEOUT_IGNORED = -1
 * Miscellaneous constants
 */
export const GL_TIMEOUT_IGNORED = -1

/**
 * MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247
 * Miscellaneous constants
 */
export const GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247

// ANGLE_instanced_arrays

/**
 * VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE
 * Describes the frequency divisor used for instanced rendering.
 * ANGLE_instanced_arrays
 */
export const GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88fe

// WEBGL_debug_renderer_info

/**
 * UNMASKED_VENDOR_WEBGL = 0x9245
 * Passed to getParameter to get the vendor string of the graphics driver.
 * WEBGL_debug_renderer_info
 */
export const GL_UNMASKED_VENDOR_WEBGL = 0x9245

/**
 * UNMASKED_RENDERER_WEBGL = 0x9246
 * Passed to getParameter to get the renderer string of the graphics driver.
 * WEBGL_debug_renderer_info
 */
export const GL_UNMASKED_RENDERER_WEBGL = 0x9246

// EXT_texture_filter_anisotropic

/**
 * MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84FF
 * Returns the maximum available anisotropy.
 * EXT_texture_filter_anisotropic
 */
export const GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff

/**
 * TEXTURE_MAX_ANISOTROPY_EXT = 0x84FE
 * Passed to texParameter to set the desired maximum anisotropy for a texture.
 * EXT_texture_filter_anisotropic
 */
export const GL_TEXTURE_MAX_ANISOTROPY_EXT = 0x84fe

// WEBGL_compressed_texture_s3tc

/**
 * COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0
 * A DXT1-compressed image in an RGB image format.
 * WEBGL_compressed_texture_s3tc
 */
export const GL_COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83f0

/**
 * COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1
 * A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
 * WEBGL_compressed_texture_s3tc
 */
export const GL_COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83f1

/**
 * COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2
 * A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
 * WEBGL_compressed_texture_s3tc
 */
export const GL_COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83f2

/**
 * COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3
 * A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done.
 * WEBGL_compressed_texture_s3tc
 */
export const GL_COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83f3

// WEBGL_compressed_texture_etc

/**
 * COMPRESSED_R11_EAC = 0x9270
 * One-channel (red) unsigned format compression.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_R11_EAC = 0x9270

/**
 * COMPRESSED_SIGNED_R11_EAC = 0x9271
 * One-channel (red) signed format compression.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_SIGNED_R11_EAC = 0x9271

/**
 * COMPRESSED_RG11_EAC = 0x9272
 * Two-channel (red and green) unsigned format compression.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_RG11_EAC = 0x9272

/**
 * COMPRESSED_SIGNED_RG11_EAC = 0x9273
 * Two-channel (red and green) signed format compression.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_SIGNED_RG11_EAC = 0x9273

/**
 * COMPRESSED_RGB8_ETC2 = 0x9274
 * Compresses RBG8 data with no alpha channel.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_RGB8_ETC2 = 0x9274

/**
 * COMPRESSED_RGBA8_ETC2_EAC = 0x9275
 * Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_RGBA8_ETC2_EAC = 0x9275

/**
 * COMPRESSED_SRGB8_ETC2 = 0x9276
 * Compresses sRBG8 data with no alpha channel.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_SRGB8_ETC2 = 0x9276

/**
 * COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9277
 * Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9277

/**
 * COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9278
 * Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9278

/**
 * COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9279
 * Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9279

// WEBGL_compressed_texture_pvrtc

/**
 * COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8C00
 * RGB compression in 4-bit mode. One block for each 4×4 pixels.
 * WEBGL_compressed_texture_pvrtc
 */
export const GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8c00

/**
 * COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8C02
 * RGBA compression in 4-bit mode. One block for each 4×4 pixels.
 * WEBGL_compressed_texture_pvrtc
 */
export const GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8c02

/**
 * COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8C01
 * RGB compression in 2-bit mode. One block for each 8×4 pixels.
 * WEBGL_compressed_texture_pvrtc
 */
export const GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8c01

/**
 * COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8C03
 * RGBA compression in 2-bit mode. One block for each 8×4 pixe
 * WEBGL_compressed_texture_pvrtc
 */
export const GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8c03

// WEBGL_compressed_texture_etc1

/**
 * COMPRESSED_RGB_ETC1_WEBGL = 0x8D64
 * Compresses 24-bit RGB data with no alpha channel.
 * WEBGL_compressed_texture_etc1
 */
export const GL_COMPRESSED_RGB_ETC1_WEBGL = 0x8d64

// WEBGL_compressed_texture_atc

/**
 * COMPRESSED_RGB_ATC_WEBGL = 0x8C92
 * Compresses RGB textures with no alpha channel.
 * WEBGL_compressed_texture_atc
 */
export const GL_COMPRESSED_RGB_ATC_WEBGL = 0x8c92

/**
 * COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 0x8C92
 * Compresses RGBA textures using explicit alpha encoding (useful when alpha transitions are sharp).
 * WEBGL_compressed_texture_atc
 */
export const GL_COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 0x8c92

/**
 * COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 0x87EE
 * Compresses RGBA textures using interpolated alpha encoding (useful when alpha transitions are gradient).
 * WEBGL_compressed_texture_atc
 */
export const GL_COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 0x87ee

// WEBGL_depth_texture

/**
 * UNSIGNED_INT_24_8_WEBGL = 0x84FA
 * Unsigned integer type for 24-bit depth texture data.
 * WEBGL_depth_texture
 */
export const GL_UNSIGNED_INT_24_8_WEBGL = 0x84fa

// OES_texture_half_float

/**
 * HALF_FLOAT_OES = 0x8D61
 * Half floating-point type (16-bit).
 * OES_texture_half_float
 */
export const GL_HALF_FLOAT_OES = 0x8d61

// WEBGL_color_buffer_float

/**
 * RGBA32F_EXT = 0x8814
 * RGBA 32-bit floating-point color-renderable format.
 * WEBGL_color_buffer_float
 */
export const GL_RGBA32F_EXT = 0x8814

/**
 * RGB32F_EXT = 0x8815
 * RGB 32-bit floating-point color-renderable format.
 * WEBGL_color_buffer_float
 */
export const GL_RGB32F_EXT = 0x8815

/**
 * FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211
 * WEBGL_color_buffer_float
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211

/**
 * UNSIGNED_NORMALIZED_EXT = 0x8C17
 * WEBGL_color_buffer_float
 */
export const GL_UNSIGNED_NORMALIZED_EXT = 0x8c17

// EXT_blend_minmax

/**
 * MIN_EXT = 0x8007
 * Produces the minimum color components of the source and destination colors.
 * EXT_blend_minmax
 */
export const GL_MIN_EXT = 0x8007

/**
 * MAX_EXT = 0x8008
 * Produces the maximum color components of the source and destination colors.
 * EXT_blend_minmax
 */
export const GL_MAX_EXT = 0x8008

// EXT_sRGB

/**
 * SRGB_EXT = 0x8C40
 * Unsized sRGB format that leaves the precision up to the driver.
 * EXT_sRGB
 */
export const GL_SRGB_EXT = 0x8c40

/**
 * SRGB_ALPHA_EXT = 0x8C42
 * Unsized sRGB format with unsized alpha component.
 * EXT_sRGB
 */
export const GL_SRGB_ALPHA_EXT = 0x8c42

/**
 * SRGB8_ALPHA8_EXT = 0x8C43
 * Sized (8-bit) sRGB and alpha formats.
 * EXT_sRGB
 */
export const GL_SRGB8_ALPHA8_EXT = 0x8c43

/**
 * FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210
 * Returns the framebuffer color encoding.
 * EXT_sRGB
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210

// OES_standard_derivatives

/**
 * FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8B8B
 * Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth.
 * OES_standard_derivatives
 */
export const GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8b8b

// WEBGL_draw_buffers

/**
 * COLOR_ATTACHMENT0_WEBGL = 0x8CE0
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT0_WEBGL = 0x8ce0

/**
 * COLOR_ATTACHMENT1_WEBGL = 0x8CE1
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT1_WEBGL = 0x8ce1

/**
 * COLOR_ATTACHMENT2_WEBGL = 0x8CE2
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT2_WEBGL = 0x8ce2

/**
 * COLOR_ATTACHMENT3_WEBGL = 0x8CE3
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT3_WEBGL = 0x8ce3

/**
 * COLOR_ATTACHMENT4_WEBGL = 0x8CE4
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT4_WEBGL = 0x8ce4

/**
 * COLOR_ATTACHMENT5_WEBGL = 0x8CE5
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT5_WEBGL = 0x8ce5

/**
 * COLOR_ATTACHMENT6_WEBGL = 0x8CE6
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT6_WEBGL = 0x8ce6

/**
 * COLOR_ATTACHMENT7_WEBGL = 0x8CE7
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT7_WEBGL = 0x8ce7

/**
 * COLOR_ATTACHMENT8_WEBGL = 0x8CE8
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT8_WEBGL = 0x8ce8

/**
 * COLOR_ATTACHMENT9_WEBGL = 0x8CE9
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT9_WEBGL = 0x8ce9

/**
 * COLOR_ATTACHMENT10_WEBGL = 0x8CEA
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT10_WEBGL = 0x8cea

/**
 * COLOR_ATTACHMENT11_WEBGL = 0x8CEB
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT11_WEBGL = 0x8ceb

/**
 * COLOR_ATTACHMENT12_WEBGL = 0x8CEC
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT12_WEBGL = 0x8cec

/**
 * COLOR_ATTACHMENT13_WEBGL = 0x8CED
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT13_WEBGL = 0x8ced

/**
 * COLOR_ATTACHMENT14_WEBGL = 0x8CEE
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT14_WEBGL = 0x8cee

/**
 * COLOR_ATTACHMENT15_WEBGL = 0x8CEF
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT15_WEBGL = 0x8cef

/**
 * DRAW_BUFFER0_WEBGL = 0x8825
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER0_WEBGL = 0x8825

/**
 * DRAW_BUFFER1_WEBGL = 0x8826
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER1_WEBGL = 0x8826

/**
 * DRAW_BUFFER2_WEBGL = 0x8827
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER2_WEBGL = 0x8827

/**
 * DRAW_BUFFER3_WEBGL = 0x8828
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER3_WEBGL = 0x8828

/**
 * DRAW_BUFFER4_WEBGL = 0x8829
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER4_WEBGL = 0x8829

/**
 * DRAW_BUFFER5_WEBGL = 0x882A
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER5_WEBGL = 0x882a

/**
 * DRAW_BUFFER6_WEBGL = 0x882B
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER6_WEBGL = 0x882b

/**
 * DRAW_BUFFER7_WEBGL = 0x882C
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER7_WEBGL = 0x882c

/**
 * DRAW_BUFFER8_WEBGL = 0x882D
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER8_WEBGL = 0x882d

/**
 * DRAW_BUFFER9_WEBGL = 0x882E
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER9_WEBGL = 0x882e

/**
 * DRAW_BUFFER10_WEBGL = 0x882F
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER10_WEBGL = 0x882f

/**
 * DRAW_BUFFER11_WEBGL = 0x8830
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER11_WEBGL = 0x8830

/**
 * DRAW_BUFFER12_WEBGL = 0x8831
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER12_WEBGL = 0x8831

/**
 * DRAW_BUFFER13_WEBGL = 0x8832
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER13_WEBGL = 0x8832

/**
 * DRAW_BUFFER14_WEBGL = 0x8833
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER14_WEBGL = 0x8833

/**
 * DRAW_BUFFER15_WEBGL = 0x8834
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER15_WEBGL = 0x8834

/**
 * MAX_COLOR_ATTACHMENTS_WEBGL = 0x8CDF
 * Maximum number of framebuffer color attachment points
 * WEBGL_draw_buffers
 */
export const GL_MAX_COLOR_ATTACHMENTS_WEBGL = 0x8cdf

/**
 * MAX_DRAW_BUFFERS_WEBGL = 0x8824
 * Maximum number of draw buffers
 * WEBGL_draw_buffers
 */
export const GL_MAX_DRAW_BUFFERS_WEBGL = 0x8824

// OES_vertex_array_object

/**
 * VERTEX_ARRAY_BINDING_OES = 0x85B5
 * The bound vertex array object (VAO).
 * OES_vertex_array_object
 */
export const GL_VERTEX_ARRAY_BINDING_OES = 0x85b5

// EXT_disjoint_timer_query

/**
 * QUERY_COUNTER_BITS_EXT = 0x8864
 * The number of bits used to hold the query result for the given target.
 * EXT_disjoint_timer_query
 */
export const GL_QUERY_COUNTER_BITS_EXT = 0x8864

/**
 * CURRENT_QUERY_EXT = 0x8865
 * The currently active query.
 * EXT_disjoint_timer_query
 */
export const GL_CURRENT_QUERY_EXT = 0x8865

/**
 * QUERY_RESULT_EXT = 0x8866
 * The query result.
 * EXT_disjoint_timer_query
 */
export const GL_QUERY_RESULT_EXT = 0x8866

/**
 * QUERY_RESULT_AVAILABLE_EXT = 0x8867
 * A Boolean indicating whether or not a query result is available.
 * EXT_disjoint_timer_query
 */
export const GL_QUERY_RESULT_AVAILABLE_EXT = 0x8867

/**
 * TIME_ELAPSED_EXT = 0x88BF
 * Elapsed time (in nanoseconds).
 * EXT_disjoint_timer_query
 */
export const GL_TIME_ELAPSED_EXT = 0x88bf

/**
 * TIMESTAMP_EXT = 0x8E28
 * The current time.
 * EXT_disjoint_timer_query
 */
export const GL_TIMESTAMP_EXT = 0x8e28

/**
 * GPU_DISJOINT_EXT = 0x8FBB
 * A Boolean indicating whether or not the GPU performed any disjoint operation.
 * EXT_disjoint_timer_query
 */
export const GL_GPU_DISJOINT_EXT = 0x8fbb
