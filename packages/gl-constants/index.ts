// WebGL constants from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
// It gets minified better to use the raw constants instad of using webglContext.CONSTANT
// Those values are standard in all browsers.

/* eslint-disable @typescript-eslint/no-redeclare */

// Clearing buffers - Constants passed to clear() to clear buffer masks.

/**
 * DEPTH_BUFFER_BIT = 0x00000100
 * Passed to clear the current depth buffer.
 * Clearing buffers - Constant passed to clear() to clear buffer masks.
 */
export const GL_DEPTH_BUFFER_BIT = 0x00000100

/**
 * DEPTH_BUFFER_BIT = 0x00000100
 * Passed to clear the current depth buffer.
 * Clearing buffers - Constant passed to clear() to clear buffer masks.
 */
export type GL_DEPTH_BUFFER_BIT = typeof GL_DEPTH_BUFFER_BIT

/**
 * STENCIL_BUFFER_BIT = 0x00000400
 * Passed to clear the current stencil buffer.
 * Clearing buffers - Constant passed to clear() to clear buffer masks.
 */
export const GL_STENCIL_BUFFER_BIT = 0x00000400

/**
 * STENCIL_BUFFER_BIT = 0x00000400
 * Passed to clear the current stencil buffer.
 * Clearing buffers - Constant passed to clear() to clear buffer masks.
 */
export type GL_STENCIL_BUFFER_BIT = typeof GL_STENCIL_BUFFER_BIT

/**
 * COLOR_BUFFER_BIT = 0x00004000
 * Passed to clear the current color buffer.
 * Clearing buffers - Constant passed to clear() to clear buffer masks.
 */
export const GL_COLOR_BUFFER_BIT = 0x00004000

/**
 * COLOR_BUFFER_BIT = 0x00004000
 * Passed to clear the current color buffer.
 * Clearing buffers - Constant passed to clear() to clear buffer masks.
 */
export type GL_COLOR_BUFFER_BIT = typeof GL_COLOR_BUFFER_BIT

// Rendering primitives - Constants passed to drawElements() or drawArrays() to specify what kind of primitive to render.

/**
 * POINTS = 0x0000
 * Passed to drawElements or drawArrays to draw single points.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_POINTS = 0x0000

/**
 * POINTS = 0x0000
 * Passed to drawElements or drawArrays to draw single points.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export type GL_POINTS = typeof GL_POINTS

/**
 * LINES = 0x0001
 * Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_LINES = 0x0001

/**
 * LINES = 0x0001
 * Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export type GL_LINES = typeof GL_LINES

/**
 * LINE_LOOP = 0x0002
 * Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_LINE_LOOP = 0x0002

/**
 * LINE_LOOP = 0x0002
 * Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export type GL_LINE_LOOP = typeof GL_LINE_LOOP

/**
 * LINE_STRIP = 0x0003
 * Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_LINE_STRIP = 0x0003

/**
 * LINE_STRIP = 0x0003
 * Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export type GL_LINE_STRIP = typeof GL_LINE_STRIP

/**
 * TRIANGLES = 0x0004
 * Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_TRIANGLES = 0x0004

/**
 * TRIANGLES = 0x0004
 * Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export type GL_TRIANGLES = typeof GL_TRIANGLES

/**
 * TRIANGLE_STRIP = 0x0005
 * Passed to drawElements or drawArrays to draw a connected group of triangles.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_TRIANGLE_STRIP = 0x0005

/**
 * TRIANGLE_STRIP = 0x0005
 * Passed to drawElements or drawArrays to draw a connected group of triangles.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export type GL_TRIANGLE_STRIP = typeof GL_TRIANGLE_STRIP

/**
 * TRIANGLE_FAN = 0x0006
 * Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export const GL_TRIANGLE_FAN = 0x0006

/**
 * TRIANGLE_FAN = 0x0006
 * Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan.
 * Rendering primitives - Constant passed to drawElements() or drawArrays() to specify what kind of primitive to render.
 */
export type GL_TRIANGLE_FAN = typeof GL_TRIANGLE_FAN

// Blending modes - Constants passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).

/**
 * ZERO = 0
 * Passed to blendFunc or blendFuncSeparate to turn off a component.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ZERO = 0

/**
 * ZERO = 0
 * Passed to blendFunc or blendFuncSeparate to turn off a component.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_ZERO = typeof GL_ZERO

/**
 * ONE = 1
 * Passed to blendFunc or blendFuncSeparate to turn on a component.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE = 1

/**
 * ONE = 1
 * Passed to blendFunc or blendFuncSeparate to turn on a component.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_ONE = typeof GL_ONE

/**
 * SRC_COLOR = 0x0300
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_SRC_COLOR = 0x0300

/**
 * SRC_COLOR = 0x0300
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_SRC_COLOR = typeof GL_SRC_COLOR

/**
 * ONE_MINUS_SRC_COLOR = 0x0301
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_SRC_COLOR = 0x0301

/**
 * ONE_MINUS_SRC_COLOR = 0x0301
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_ONE_MINUS_SRC_COLOR = typeof GL_ONE_MINUS_SRC_COLOR

/**
 * SRC_ALPHA = 0x0302
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_SRC_ALPHA = 0x0302

/**
 * SRC_ALPHA = 0x0302
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_SRC_ALPHA = typeof GL_SRC_ALPHA

/**
 * ONE_MINUS_SRC_ALPHA = 0x0303
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_SRC_ALPHA = 0x0303

/**
 * ONE_MINUS_SRC_ALPHA = 0x0303
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_ONE_MINUS_SRC_ALPHA = typeof GL_ONE_MINUS_SRC_ALPHA

/**
 * DST_ALPHA = 0x0304
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_DST_ALPHA = 0x0304

/**
 * DST_ALPHA = 0x0304
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_DST_ALPHA = typeof GL_DST_ALPHA

/**
 * ONE_MINUS_DST_ALPHA = 0x0305
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_DST_ALPHA = 0x0305

/**
 * ONE_MINUS_DST_ALPHA = 0x0305
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_ONE_MINUS_DST_ALPHA = typeof GL_ONE_MINUS_DST_ALPHA

/**
 * DST_COLOR = 0x0306
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_DST_COLOR = 0x0306

/**
 * DST_COLOR = 0x0306
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_DST_COLOR = typeof GL_DST_COLOR

/**
 * ONE_MINUS_DST_COLOR = 0x0307
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_DST_COLOR = 0x0307

/**
 * ONE_MINUS_DST_COLOR = 0x0307
 * Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_ONE_MINUS_DST_COLOR = typeof GL_ONE_MINUS_DST_COLOR

/**
 * SRC_ALPHA_SATURATE = 0x0308
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_SRC_ALPHA_SATURATE = 0x0308

/**
 * SRC_ALPHA_SATURATE = 0x0308
 * Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_SRC_ALPHA_SATURATE = typeof GL_SRC_ALPHA_SATURATE

/**
 * CONSTANT_COLOR = 0x8001
 * Passed to blendFunc or blendFuncSeparate to specify a constant color blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_CONSTANT_COLOR = 0x8001

/**
 * CONSTANT_COLOR = 0x8001
 * Passed to blendFunc or blendFuncSeparate to specify a constant color blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_CONSTANT_COLOR = typeof GL_CONSTANT_COLOR

/**
 * ONE_MINUS_CONSTANT_COLOR = 0x8002
 * Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_CONSTANT_COLOR = 0x8002

/**
 * ONE_MINUS_CONSTANT_COLOR = 0x8002
 * Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_ONE_MINUS_CONSTANT_COLOR = typeof GL_ONE_MINUS_CONSTANT_COLOR

/**
 * CONSTANT_ALPHA = 0x8003
 * Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_CONSTANT_ALPHA = 0x8003

/**
 * CONSTANT_ALPHA = 0x8003
 * Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_CONSTANT_ALPHA = typeof GL_CONSTANT_ALPHA

/**
 * ONE_MINUS_CONSTANT_ALPHA = 0x8004
 * Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export const GL_ONE_MINUS_CONSTANT_ALPHA = 0x8004

/**
 * ONE_MINUS_CONSTANT_ALPHA = 0x8004
 * Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function.
 * Blending modes - Constant passed to blendFunc() or blendFuncSeparate() to specify the blending mode (for both, RBG and alpha, or separately).
 */
export type GL_ONE_MINUS_CONSTANT_ALPHA = typeof GL_ONE_MINUS_CONSTANT_ALPHA

// Blending equations - Constants passed to blendEquation() or blendEquationSeparate() to control how the blending is calculated (for both, RBG and alpha, or separately).

/**
 * FUNC_ADD = 0x8006
 * Passed to blendEquation or blendEquationSeparate to set an addition blend function.
 * Blending equations - Constant passed to blendEquation() or blendEquationSeparate() to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export const GL_FUNC_ADD = 0x8006

/**
 * FUNC_ADD = 0x8006
 * Passed to blendEquation or blendEquationSeparate to set an addition blend function.
 * Blending equations - Constant passed to blendEquation() or blendEquationSeparate() to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export type GL_FUNC_ADD = typeof GL_FUNC_ADD

/**
 * FUNC_SUBTRACT = 0x800a
 * Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination).
 * Blending equations - Constant passed to blendEquation() or blendEquationSeparate() to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export const GL_FUNC_SUBTRACT = 0x800a

/**
 * FUNC_SUBTRACT = 0x800a
 * Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination).
 * Blending equations - Constant passed to blendEquation() or blendEquationSeparate() to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export type GL_FUNC_SUBTRACT = typeof GL_FUNC_SUBTRACT

/**
 * FUNC_REVERSE_SUBTRACT = 0x800b
 * Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source).
 * Blending equations - Constant passed to blendEquation() or blendEquationSeparate() to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export const GL_FUNC_REVERSE_SUBTRACT = 0x800b

/**
 * FUNC_REVERSE_SUBTRACT = 0x800b
 * Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source).
 * Blending equations - Constant passed to blendEquation() or blendEquationSeparate() to control how the blending is calculated (for both, RBG and alpha, or separately).
 */
export type GL_FUNC_REVERSE_SUBTRACT = typeof GL_FUNC_REVERSE_SUBTRACT

// Getting GL parameter information - Constants passed to getParameter() to specify what information to return.

/**
 * BLEND_EQUATION = 0x8009
 * Passed to getParameter to get the current RGB blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_EQUATION = 0x8009

/**
 * BLEND_EQUATION = 0x8009
 * Passed to getParameter to get the current RGB blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_BLEND_EQUATION = typeof GL_BLEND_EQUATION

/**
 * BLEND_EQUATION_RGB = 0x8009
 * Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_EQUATION_RGB = 0x8009

/**
 * BLEND_EQUATION_RGB = 0x8009
 * Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_BLEND_EQUATION_RGB = typeof GL_BLEND_EQUATION_RGB

/**
 * BLEND_EQUATION_ALPHA = 0x883d
 * Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_EQUATION_ALPHA = 0x883d

/**
 * BLEND_EQUATION_ALPHA = 0x883d
 * Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_BLEND_EQUATION_ALPHA = typeof GL_BLEND_EQUATION_ALPHA

/**
 * BLEND_DST_RGB = 0x80c8
 * Passed to getParameter to get the current destination RGB blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_DST_RGB = 0x80c8

/**
 * BLEND_DST_RGB = 0x80c8
 * Passed to getParameter to get the current destination RGB blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_BLEND_DST_RGB = typeof GL_BLEND_DST_RGB

/**
 * BLEND_SRC_RGB = 0x80c9
 * Passed to getParameter to get the current destination RGB blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_SRC_RGB = 0x80c9

/**
 * BLEND_SRC_RGB = 0x80c9
 * Passed to getParameter to get the current destination RGB blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_BLEND_SRC_RGB = typeof GL_BLEND_SRC_RGB

/**
 * BLEND_DST_ALPHA = 0x80ca
 * Passed to getParameter to get the current destination alpha blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_DST_ALPHA = 0x80ca

/**
 * BLEND_DST_ALPHA = 0x80ca
 * Passed to getParameter to get the current destination alpha blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_BLEND_DST_ALPHA = typeof GL_BLEND_DST_ALPHA

/**
 * BLEND_SRC_ALPHA = 0x80cb
 * Passed to getParameter to get the current source alpha blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_SRC_ALPHA = 0x80cb

/**
 * BLEND_SRC_ALPHA = 0x80cb
 * Passed to getParameter to get the current source alpha blend function.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_BLEND_SRC_ALPHA = typeof GL_BLEND_SRC_ALPHA

/**
 * BLEND_COLOR = 0x8005
 * Passed to getParameter to return a the current blend color.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLEND_COLOR = 0x8005

/**
 * BLEND_COLOR = 0x8005
 * Passed to getParameter to return a the current blend color.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_BLEND_COLOR = typeof GL_BLEND_COLOR

/**
 * ARRAY_BUFFER_BINDING = 0x8894
 * Passed to getParameter to get the array buffer binding.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_ARRAY_BUFFER_BINDING = 0x8894

/**
 * ARRAY_BUFFER_BINDING = 0x8894
 * Passed to getParameter to get the array buffer binding.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_ARRAY_BUFFER_BINDING = typeof GL_ARRAY_BUFFER_BINDING

/**
 * ELEMENT_ARRAY_BUFFER_BINDING = 0x8895
 * Passed to getParameter to get the current element array buffer.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_ELEMENT_ARRAY_BUFFER_BINDING = 0x8895

/**
 * ELEMENT_ARRAY_BUFFER_BINDING = 0x8895
 * Passed to getParameter to get the current element array buffer.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_ELEMENT_ARRAY_BUFFER_BINDING = typeof GL_ELEMENT_ARRAY_BUFFER_BINDING

/**
 * LINE_WIDTH = 0x0b21
 * Passed to getParameter to get the current lineWidth (set by the lineWidth method).
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_LINE_WIDTH = 0x0b21

/**
 * LINE_WIDTH = 0x0b21
 * Passed to getParameter to get the current lineWidth (set by the lineWidth method).
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_LINE_WIDTH = typeof GL_LINE_WIDTH

/**
 * ALIASED_POINT_SIZE_RANGE = 0x846d
 * Passed to getParameter to get the current size of a point drawn with gl.POINTS
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_ALIASED_POINT_SIZE_RANGE = 0x846d

/**
 * ALIASED_POINT_SIZE_RANGE = 0x846d
 * Passed to getParameter to get the current size of a point drawn with gl.POINTS
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_ALIASED_POINT_SIZE_RANGE = typeof GL_ALIASED_POINT_SIZE_RANGE

/**
 * ALIASED_LINE_WIDTH_RANGE = 0x846e
 * Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_ALIASED_LINE_WIDTH_RANGE = 0x846e

/**
 * ALIASED_LINE_WIDTH_RANGE = 0x846e
 * Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_ALIASED_LINE_WIDTH_RANGE = typeof GL_ALIASED_LINE_WIDTH_RANGE

/**
 * CULL_FACE_MODE = 0x0b45
 * Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_CULL_FACE_MODE = 0x0b45

/**
 * CULL_FACE_MODE = 0x0b45
 * Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_CULL_FACE_MODE = typeof GL_CULL_FACE_MODE

/**
 * FRONT_FACE = 0x0b46
 * Passed to getParameter to determine the current value of frontFace. Should return CW or CCW.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_FRONT_FACE = 0x0b46

/**
 * FRONT_FACE = 0x0b46
 * Passed to getParameter to determine the current value of frontFace. Should return CW or CCW.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_FRONT_FACE = typeof GL_FRONT_FACE

/**
 * DEPTH_RANGE = 0x0b70
 * Passed to getParameter to return a length-2 array of floats giving the current depth range.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_DEPTH_RANGE = 0x0b70

/**
 * DEPTH_RANGE = 0x0b70
 * Passed to getParameter to return a length-2 array of floats giving the current depth range.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_DEPTH_RANGE = typeof GL_DEPTH_RANGE

/**
 * DEPTH_WRITEMASK = 0x0b72
 * Passed to getParameter to determine if the depth write mask is enabled.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_DEPTH_WRITEMASK = 0x0b72

/**
 * DEPTH_WRITEMASK = 0x0b72
 * Passed to getParameter to determine if the depth write mask is enabled.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_DEPTH_WRITEMASK = typeof GL_DEPTH_WRITEMASK

/**
 * DEPTH_CLEAR_VALUE = 0x0b73
 * Passed to getParameter to determine the current depth clear value.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_DEPTH_CLEAR_VALUE = 0x0b73

/**
 * DEPTH_CLEAR_VALUE = 0x0b73
 * Passed to getParameter to determine the current depth clear value.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_DEPTH_CLEAR_VALUE = typeof GL_DEPTH_CLEAR_VALUE

/**
 * DEPTH_FUNC = 0x0b74
 * Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_DEPTH_FUNC = 0x0b74

/**
 * DEPTH_FUNC = 0x0b74
 * Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_DEPTH_FUNC = typeof GL_DEPTH_FUNC

/**
 * STENCIL_CLEAR_VALUE = 0x0b91
 * Passed to getParameter to get the value the stencil will be cleared to.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_CLEAR_VALUE = 0x0b91

/**
 * STENCIL_CLEAR_VALUE = 0x0b91
 * Passed to getParameter to get the value the stencil will be cleared to.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_CLEAR_VALUE = typeof GL_STENCIL_CLEAR_VALUE

/**
 * STENCIL_FUNC = 0x0b92
 * Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_FUNC = 0x0b92

/**
 * STENCIL_FUNC = 0x0b92
 * Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_FUNC = typeof GL_STENCIL_FUNC

/**
 * STENCIL_FAIL = 0x0b94
 * Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_FAIL = 0x0b94

/**
 * STENCIL_FAIL = 0x0b94
 * Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_FAIL = typeof GL_STENCIL_FAIL

/**
 * STENCIL_PASS_DEPTH_FAIL = 0x0b95
 * Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_PASS_DEPTH_FAIL = 0x0b95

/**
 * STENCIL_PASS_DEPTH_FAIL = 0x0b95
 * Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_PASS_DEPTH_FAIL = typeof GL_STENCIL_PASS_DEPTH_FAIL

/**
 * STENCIL_PASS_DEPTH_PASS = 0x0b96
 * Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_PASS_DEPTH_PASS = 0x0b96

/**
 * STENCIL_PASS_DEPTH_PASS = 0x0b96
 * Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_PASS_DEPTH_PASS = typeof GL_STENCIL_PASS_DEPTH_PASS

/**
 * STENCIL_REF = 0x0b97
 * Passed to getParameter to get the reference value used for stencil tests.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_REF = 0x0b97

/**
 * STENCIL_REF = 0x0b97
 * Passed to getParameter to get the reference value used for stencil tests.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_REF = typeof GL_STENCIL_REF

/**
 * STENCIL_VALUE_MASK = 0x0b93
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_VALUE_MASK = 0x0b93

/**
 * STENCIL_VALUE_MASK = 0x0b93
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_VALUE_MASK = typeof GL_STENCIL_VALUE_MASK

/**
 * STENCIL_WRITEMASK = 0x0b98
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_WRITEMASK = 0x0b98

/**
 * STENCIL_WRITEMASK = 0x0b98
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_WRITEMASK = typeof GL_STENCIL_WRITEMASK

/**
 * STENCIL_BACK_FUNC = 0x8800
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_FUNC = 0x8800

/**
 * STENCIL_BACK_FUNC = 0x8800
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_BACK_FUNC = typeof GL_STENCIL_BACK_FUNC

/**
 * STENCIL_BACK_FAIL = 0x8801
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_FAIL = 0x8801

/**
 * STENCIL_BACK_FAIL = 0x8801
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_BACK_FAIL = typeof GL_STENCIL_BACK_FAIL

/**
 * STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802

/**
 * STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_BACK_PASS_DEPTH_FAIL = typeof GL_STENCIL_BACK_PASS_DEPTH_FAIL

/**
 * STENCIL_BACK_PASS_DEPTH_PASS = 0x8803
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_PASS_DEPTH_PASS = 0x8803

/**
 * STENCIL_BACK_PASS_DEPTH_PASS = 0x8803
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_BACK_PASS_DEPTH_PASS = typeof GL_STENCIL_BACK_PASS_DEPTH_PASS

/**
 * STENCIL_BACK_REF = 0x8ca3
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_REF = 0x8ca3

/**
 * STENCIL_BACK_REF = 0x8ca3
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_BACK_REF = typeof GL_STENCIL_BACK_REF

/**
 * STENCIL_BACK_VALUE_MASK = 0x8ca4
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_VALUE_MASK = 0x8ca4

/**
 * STENCIL_BACK_VALUE_MASK = 0x8ca4
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_BACK_VALUE_MASK = typeof GL_STENCIL_BACK_VALUE_MASK

/**
 * STENCIL_BACK_WRITEMASK = 0x8ca5
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BACK_WRITEMASK = 0x8ca5

/**
 * STENCIL_BACK_WRITEMASK = 0x8ca5
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_BACK_WRITEMASK = typeof GL_STENCIL_BACK_WRITEMASK

/**
 * VIEWPORT = 0x0ba2
 * Returns an Int32Array with four elements for the current viewport dimensions.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_VIEWPORT = 0x0ba2

/**
 * VIEWPORT = 0x0ba2
 * Returns an Int32Array with four elements for the current viewport dimensions.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_VIEWPORT = typeof GL_VIEWPORT

/**
 * SCISSOR_BOX = 0x0c10
 * Returns an Int32Array with four elements for the current scissor box dimensions.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SCISSOR_BOX = 0x0c10

/**
 * SCISSOR_BOX = 0x0c10
 * Returns an Int32Array with four elements for the current scissor box dimensions.
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_SCISSOR_BOX = typeof GL_SCISSOR_BOX

/**
 * COLOR_CLEAR_VALUE = 0x0c22
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_COLOR_CLEAR_VALUE = 0x0c22

/**
 * COLOR_CLEAR_VALUE = 0x0c22
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_COLOR_CLEAR_VALUE = typeof GL_COLOR_CLEAR_VALUE

/**
 * COLOR_WRITEMASK = 0x0c23
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_COLOR_WRITEMASK = 0x0c23

/**
 * COLOR_WRITEMASK = 0x0c23
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_COLOR_WRITEMASK = typeof GL_COLOR_WRITEMASK

/**
 * UNPACK_ALIGNMENT = 0x0cf5
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_ALIGNMENT = 0x0cf5

/**
 * UNPACK_ALIGNMENT = 0x0cf5
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_UNPACK_ALIGNMENT = typeof GL_UNPACK_ALIGNMENT

/**
 * PACK_ALIGNMENT = 0x0d05
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_PACK_ALIGNMENT = 0x0d05

/**
 * PACK_ALIGNMENT = 0x0d05
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_PACK_ALIGNMENT = typeof GL_PACK_ALIGNMENT

/**
 * MAX_TEXTURE_SIZE = 0x0d33
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_TEXTURE_SIZE = 0x0d33

/**
 * MAX_TEXTURE_SIZE = 0x0d33
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_TEXTURE_SIZE = typeof GL_MAX_TEXTURE_SIZE

/**
 * MAX_VIEWPORT_DIMS = 0x0d3a
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_VIEWPORT_DIMS = 0x0d3a

/**
 * MAX_VIEWPORT_DIMS = 0x0d3a
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_VIEWPORT_DIMS = typeof GL_MAX_VIEWPORT_DIMS

/**
 * SUBPIXEL_BITS = 0x0d50
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SUBPIXEL_BITS = 0x0d50

/**
 * SUBPIXEL_BITS = 0x0d50
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_SUBPIXEL_BITS = typeof GL_SUBPIXEL_BITS

/**
 * RED_BITS = 0x0d52
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_RED_BITS = 0x0d52

/**
 * RED_BITS = 0x0d52
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_RED_BITS = typeof GL_RED_BITS

/**
 * GREEN_BITS = 0x0d53
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_GREEN_BITS = 0x0d53

/**
 * GREEN_BITS = 0x0d53
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_GREEN_BITS = typeof GL_GREEN_BITS

/**
 * BLUE_BITS = 0x0d54
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BLUE_BITS = 0x0d54

/**
 * BLUE_BITS = 0x0d54
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_BLUE_BITS = typeof GL_BLUE_BITS

/**
 * ALPHA_BITS = 0x0d55
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_ALPHA_BITS = 0x0d55

/**
 * ALPHA_BITS = 0x0d55
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_ALPHA_BITS = typeof GL_ALPHA_BITS

/**
 * DEPTH_BITS = 0x0d56
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_DEPTH_BITS = 0x0d56

/**
 * DEPTH_BITS = 0x0d56
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_DEPTH_BITS = typeof GL_DEPTH_BITS

/**
 * STENCIL_BITS = 0x0d57
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_STENCIL_BITS = 0x0d57

/**
 * STENCIL_BITS = 0x0d57
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_STENCIL_BITS = typeof GL_STENCIL_BITS

/**
 * POLYGON_OFFSET_UNITS = 0x2a00
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_POLYGON_OFFSET_UNITS = 0x2a00

/**
 * POLYGON_OFFSET_UNITS = 0x2a00
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_POLYGON_OFFSET_UNITS = typeof GL_POLYGON_OFFSET_UNITS

/**
 * POLYGON_OFFSET_FACTOR = 0x8038
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_POLYGON_OFFSET_FACTOR = 0x8038

/**
 * POLYGON_OFFSET_FACTOR = 0x8038
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_POLYGON_OFFSET_FACTOR = typeof GL_POLYGON_OFFSET_FACTOR

/**
 * TEXTURE_BINDING_2D = 0x8069
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_TEXTURE_BINDING_2D = 0x8069

/**
 * TEXTURE_BINDING_2D = 0x8069
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_TEXTURE_BINDING_2D = typeof GL_TEXTURE_BINDING_2D

/**
 * SAMPLE_BUFFERS = 0x80a8
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SAMPLE_BUFFERS = 0x80a8

/**
 * SAMPLE_BUFFERS = 0x80a8
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_SAMPLE_BUFFERS = typeof GL_SAMPLE_BUFFERS

/**
 * SAMPLES = 0x80a9
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SAMPLES = 0x80a9

/**
 * SAMPLES = 0x80a9
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_SAMPLES = typeof GL_SAMPLES

/**
 * SAMPLE_COVERAGE_VALUE = 0x80aa
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SAMPLE_COVERAGE_VALUE = 0x80aa

/**
 * SAMPLE_COVERAGE_VALUE = 0x80aa
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_SAMPLE_COVERAGE_VALUE = typeof GL_SAMPLE_COVERAGE_VALUE

/**
 * SAMPLE_COVERAGE_INVERT = 0x80ab
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_SAMPLE_COVERAGE_INVERT = 0x80ab

/**
 * SAMPLE_COVERAGE_INVERT = 0x80ab
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_SAMPLE_COVERAGE_INVERT = typeof GL_SAMPLE_COVERAGE_INVERT

/**
 * COMPRESSED_TEXTURE_FORMATS = 0x86a3
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_COMPRESSED_TEXTURE_FORMATS = 0x86a3

/**
 * COMPRESSED_TEXTURE_FORMATS = 0x86a3
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_COMPRESSED_TEXTURE_FORMATS = typeof GL_COMPRESSED_TEXTURE_FORMATS

/**
 * VENDOR = 0x1f00
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_VENDOR = 0x1f00

/**
 * VENDOR = 0x1f00
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_VENDOR = typeof GL_VENDOR

/**
 * RENDERER = 0x1f01
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_RENDERER = 0x1f01

/**
 * RENDERER = 0x1f01
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_RENDERER = typeof GL_RENDERER

/**
 * VERSION = 0x1f02
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_VERSION = 0x1f02

/**
 * VERSION = 0x1f02
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_VERSION = typeof GL_VERSION

/**
 * IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a

/**
 * IMPLEMENTATION_COLOR_READ_TYPE = 0x8b9a
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_IMPLEMENTATION_COLOR_READ_TYPE = typeof GL_IMPLEMENTATION_COLOR_READ_TYPE

/**
 * IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b

/**
 * IMPLEMENTATION_COLOR_READ_FORMAT = 0x8b9b
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_IMPLEMENTATION_COLOR_READ_FORMAT = typeof GL_IMPLEMENTATION_COLOR_READ_FORMAT

/**
 * BROWSER_DEFAULT_WEBGL = 0x9244
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_BROWSER_DEFAULT_WEBGL = 0x9244

/**
 * BROWSER_DEFAULT_WEBGL = 0x9244
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_BROWSER_DEFAULT_WEBGL = typeof GL_BROWSER_DEFAULT_WEBGL

// Buffers - Constants passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().

/**
 * STATIC_DRAW = 0x88e4
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_STATIC_DRAW = 0x88e4

/**
 * STATIC_DRAW = 0x88e4
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export type GL_STATIC_DRAW = typeof GL_STATIC_DRAW

/**
 * STREAM_DRAW = 0x88e0
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_STREAM_DRAW = 0x88e0

/**
 * STREAM_DRAW = 0x88e0
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export type GL_STREAM_DRAW = typeof GL_STREAM_DRAW

/**
 * DYNAMIC_DRAW = 0x88e8
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_DYNAMIC_DRAW = 0x88e8

/**
 * DYNAMIC_DRAW = 0x88e8
 * Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export type GL_DYNAMIC_DRAW = typeof GL_DYNAMIC_DRAW

/**
 * ARRAY_BUFFER = 0x8892
 * Passed to bindBuffer or bufferData to specify the type of buffer being used.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_ARRAY_BUFFER = 0x8892

/**
 * ARRAY_BUFFER = 0x8892
 * Passed to bindBuffer or bufferData to specify the type of buffer being used.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export type GL_ARRAY_BUFFER = typeof GL_ARRAY_BUFFER

/**
 * ELEMENT_ARRAY_BUFFER = 0x8893
 * Passed to bindBuffer or bufferData to specify the type of buffer being used.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_ELEMENT_ARRAY_BUFFER = 0x8893

/**
 * ELEMENT_ARRAY_BUFFER = 0x8893
 * Passed to bindBuffer or bufferData to specify the type of buffer being used.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export type GL_ELEMENT_ARRAY_BUFFER = typeof GL_ELEMENT_ARRAY_BUFFER

/**
 * BUFFER_SIZE = 0x8764
 * Passed to getBufferParameter to get a buffer's size.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_BUFFER_SIZE = 0x8764

/**
 * BUFFER_SIZE = 0x8764
 * Passed to getBufferParameter to get a buffer's size.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export type GL_BUFFER_SIZE = typeof GL_BUFFER_SIZE

/**
 * BUFFER_USAGE = 0x8765
 * Passed to getBufferParameter to get the hint for the buffer passed in when it was created.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export const GL_BUFFER_USAGE = 0x8765

/**
 * BUFFER_USAGE = 0x8765
 * Passed to getBufferParameter to get the hint for the buffer passed in when it was created.
 * Buffers - Constant passed to bufferData(), bufferSubData(), bindBuffer(), or getBufferParameter().
 */
export type GL_BUFFER_USAGE = typeof GL_BUFFER_USAGE

// Vertex attributes - Constants passed to getVertexAttrib().

/**
 * CURRENT_VERTEX_ATTRIB = 0x8626
 * Passed to getVertexAttrib to read back the current vertex attribute.
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_CURRENT_VERTEX_ATTRIB = 0x8626

/**
 * CURRENT_VERTEX_ATTRIB = 0x8626
 * Passed to getVertexAttrib to read back the current vertex attribute.
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export type GL_CURRENT_VERTEX_ATTRIB = typeof GL_CURRENT_VERTEX_ATTRIB

/**
 * VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622

/**
 * VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export type GL_VERTEX_ATTRIB_ARRAY_ENABLED = typeof GL_VERTEX_ATTRIB_ARRAY_ENABLED

/**
 * VERTEX_ATTRIB_ARRAY_SIZE = 0x8623
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_SIZE = 0x8623

/**
 * VERTEX_ATTRIB_ARRAY_SIZE = 0x8623
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export type GL_VERTEX_ATTRIB_ARRAY_SIZE = typeof GL_VERTEX_ATTRIB_ARRAY_SIZE

/**
 * VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624

/**
 * VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export type GL_VERTEX_ATTRIB_ARRAY_STRIDE = typeof GL_VERTEX_ATTRIB_ARRAY_STRIDE

/**
 * VERTEX_ATTRIB_ARRAY_TYPE = 0x8625
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_TYPE = 0x8625

/**
 * VERTEX_ATTRIB_ARRAY_TYPE = 0x8625
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export type GL_VERTEX_ATTRIB_ARRAY_TYPE = typeof GL_VERTEX_ATTRIB_ARRAY_TYPE

/**
 * VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a

/**
 * VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886a
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export type GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = typeof GL_VERTEX_ATTRIB_ARRAY_NORMALIZED

/**
 * VERTEX_ATTRIB_ARRAY_POINTER = 0x8645
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_POINTER = 0x8645

/**
 * VERTEX_ATTRIB_ARRAY_POINTER = 0x8645
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export type GL_VERTEX_ATTRIB_ARRAY_POINTER = typeof GL_VERTEX_ATTRIB_ARRAY_POINTER

/**
 * VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export const GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f

/**
 * VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889f
 * Vertex attributes - Constant passed to getVertexAttrib().
 */
export type GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = typeof GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING

// Culling - Constants passed to cullFace().

/**
 * CULL_FACE = 0x0b44
 * Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method.
 * Culling - Constant passed to cullFace().
 */
export const GL_CULL_FACE = 0x0b44

/**
 * CULL_FACE = 0x0b44
 * Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method.
 * Culling - Constant passed to cullFace().
 */
export type GL_CULL_FACE = typeof GL_CULL_FACE

/**
 * FRONT = 0x0404
 * Passed to cullFace to specify that only front faces should be culled.
 * Culling - Constant passed to cullFace().
 */
export const GL_FRONT = 0x0404

/**
 * FRONT = 0x0404
 * Passed to cullFace to specify that only front faces should be culled.
 * Culling - Constant passed to cullFace().
 */
export type GL_FRONT = typeof GL_FRONT

/**
 * BACK = 0x0405
 * Passed to cullFace to specify that only back faces should be culled.
 * Culling - Constant passed to cullFace().
 */
export const GL_BACK = 0x0405

/**
 * BACK = 0x0405
 * Passed to cullFace to specify that only back faces should be culled.
 * Culling - Constant passed to cullFace().
 */
export type GL_BACK = typeof GL_BACK

/**
 * FRONT_AND_BACK = 0x0408
 * Passed to cullFace to specify that front and back faces should be culled.
 * Culling - Constant passed to cullFace().
 */
export const GL_FRONT_AND_BACK = 0x0408

/**
 * FRONT_AND_BACK = 0x0408
 * Passed to cullFace to specify that front and back faces should be culled.
 * Culling - Constant passed to cullFace().
 */
export type GL_FRONT_AND_BACK = typeof GL_FRONT_AND_BACK

// Enabling and disabling - Constants passed to enable() or disable().

/**
 * BLEND = 0x0be2
 * Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_BLEND = 0x0be2

/**
 * BLEND = 0x0be2
 * Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export type GL_BLEND = typeof GL_BLEND

/**
 * DEPTH_TEST = 0x0b71
 * Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_DEPTH_TEST = 0x0b71

/**
 * DEPTH_TEST = 0x0b71
 * Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export type GL_DEPTH_TEST = typeof GL_DEPTH_TEST

/**
 * DITHER = 0x0bd0
 * Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_DITHER = 0x0bd0

/**
 * DITHER = 0x0bd0
 * Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export type GL_DITHER = typeof GL_DITHER

/**
 * POLYGON_OFFSET_FILL = 0x8037
 * Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_POLYGON_OFFSET_FILL = 0x8037

/**
 * POLYGON_OFFSET_FILL = 0x8037
 * Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export type GL_POLYGON_OFFSET_FILL = typeof GL_POLYGON_OFFSET_FILL

/**
 * SAMPLE_ALPHA_TO_COVERAGE = 0x809e
 * Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_SAMPLE_ALPHA_TO_COVERAGE = 0x809e

/**
 * SAMPLE_ALPHA_TO_COVERAGE = 0x809e
 * Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export type GL_SAMPLE_ALPHA_TO_COVERAGE = typeof GL_SAMPLE_ALPHA_TO_COVERAGE

/**
 * SAMPLE_COVERAGE = 0x80a0
 * Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_SAMPLE_COVERAGE = 0x80a0

/**
 * SAMPLE_COVERAGE = 0x80a0
 * Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export type GL_SAMPLE_COVERAGE = typeof GL_SAMPLE_COVERAGE

/**
 * SCISSOR_TEST = 0x0c11
 * Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_SCISSOR_TEST = 0x0c11

/**
 * SCISSOR_TEST = 0x0c11
 * Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export type GL_SCISSOR_TEST = typeof GL_SCISSOR_TEST

/**
 * STENCIL_TEST = 0x0b90
 * Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export const GL_STENCIL_TEST = 0x0b90

/**
 * STENCIL_TEST = 0x0b90
 * Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test.
 * Enabling and disabling - Constant passed to enable() or disable().
 */
export type GL_STENCIL_TEST = typeof GL_STENCIL_TEST

// Errors - Constants returned from getError().

/**
 * NO_ERROR = 0
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_NO_ERROR = 0

/**
 * NO_ERROR = 0
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export type GL_NO_ERROR = typeof GL_NO_ERROR

/**
 * INVALID_ENUM = 0x0500
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_INVALID_ENUM = 0x0500

/**
 * INVALID_ENUM = 0x0500
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export type GL_INVALID_ENUM = typeof GL_INVALID_ENUM

/**
 * INVALID_VALUE = 0x0501
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_INVALID_VALUE = 0x0501

/**
 * INVALID_VALUE = 0x0501
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export type GL_INVALID_VALUE = typeof GL_INVALID_VALUE

/**
 * INVALID_OPERATION = 0x0502
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_INVALID_OPERATION = 0x0502

/**
 * INVALID_OPERATION = 0x0502
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export type GL_INVALID_OPERATION = typeof GL_INVALID_OPERATION

/**
 * OUT_OF_MEMORY = 0x0505
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_OUT_OF_MEMORY = 0x0505

/**
 * OUT_OF_MEMORY = 0x0505
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export type GL_OUT_OF_MEMORY = typeof GL_OUT_OF_MEMORY

/**
 * CONTEXT_LOST_WEBGL = 0x9242
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export const GL_CONTEXT_LOST_WEBGL = 0x9242

/**
 * CONTEXT_LOST_WEBGL = 0x9242
 * Returned from getError.
 * Errors - Constant returned from getError().
 */
export type GL_CONTEXT_LOST_WEBGL = typeof GL_CONTEXT_LOST_WEBGL

// Front face directions - Constants passed to frontFace().

/**
 * CW = 0x0900
 * Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction
 * Front face directions - Constant passed to frontFace().
 */
export const GL_CW = 0x0900

/**
 * CW = 0x0900
 * Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction
 * Front face directions - Constant passed to frontFace().
 */
export type GL_CW = typeof GL_CW

/**
 * CCW = 0x0901
 * Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction
 * Front face directions - Constant passed to frontFace().
 */
export const GL_CCW = 0x0901

/**
 * CCW = 0x0901
 * Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction
 * Front face directions - Constant passed to frontFace().
 */
export type GL_CCW = typeof GL_CCW

// Hints - Constants passed to hint()

/**
 * DONT_CARE = 0x1100
 * There is no preference for this behavior.
 * Hints - Constant passed to hint()
 */
export const GL_DONT_CARE = 0x1100

/**
 * DONT_CARE = 0x1100
 * There is no preference for this behavior.
 * Hints - Constant passed to hint()
 */
export type GL_DONT_CARE = typeof GL_DONT_CARE

/**
 * FASTEST = 0x1101
 * The most efficient behavior should be used.
 * Hints - Constant passed to hint()
 */
export const GL_FASTEST = 0x1101

/**
 * FASTEST = 0x1101
 * The most efficient behavior should be used.
 * Hints - Constant passed to hint()
 */
export type GL_FASTEST = typeof GL_FASTEST

/**
 * NICEST = 0x1102
 * The most correct or the highest quality option should be used.
 * Hints - Constant passed to hint()
 */
export const GL_NICEST = 0x1102

/**
 * NICEST = 0x1102
 * The most correct or the highest quality option should be used.
 * Hints - Constant passed to hint()
 */
export type GL_NICEST = typeof GL_NICEST

/**
 * GENERATE_MIPMAP_HINT = 0x8192
 * Hint for the quality of filtering when generating mipmap images with generateMipmap().
 * Hints - Constant passed to hint()
 */
export const GL_GENERATE_MIPMAP_HINT = 0x8192

/**
 * GENERATE_MIPMAP_HINT = 0x8192
 * Hint for the quality of filtering when generating mipmap images with generateMipmap().
 * Hints - Constant passed to hint()
 */
export type GL_GENERATE_MIPMAP_HINT = typeof GL_GENERATE_MIPMAP_HINT

// Data types

/**
 * BYTE = 0x1400
 * Data types
 */
export const GL_BYTE = 0x1400

/**
 * BYTE = 0x1400
 * Data types
 */
export type GL_BYTE = typeof GL_BYTE

/**
 * UNSIGNED_BYTE = 0x1401
 * Data types
 */
export const GL_UNSIGNED_BYTE = 0x1401

/**
 * UNSIGNED_BYTE = 0x1401
 * Data types
 */
export type GL_UNSIGNED_BYTE = typeof GL_UNSIGNED_BYTE

/**
 * SHORT = 0x1402
 * Data types
 */
export const GL_SHORT = 0x1402

/**
 * SHORT = 0x1402
 * Data types
 */
export type GL_SHORT = typeof GL_SHORT

/**
 * UNSIGNED_SHORT = 0x1403
 * Data types
 */
export const GL_UNSIGNED_SHORT = 0x1403

/**
 * UNSIGNED_SHORT = 0x1403
 * Data types
 */
export type GL_UNSIGNED_SHORT = typeof GL_UNSIGNED_SHORT

/**
 * INT = 0x1404
 * Data types
 */
export const GL_INT = 0x1404

/**
 * INT = 0x1404
 * Data types
 */
export type GL_INT = typeof GL_INT

/**
 * UNSIGNED_INT = 0x1405
 * Data types
 */
export const GL_UNSIGNED_INT = 0x1405

/**
 * UNSIGNED_INT = 0x1405
 * Data types
 */
export type GL_UNSIGNED_INT = typeof GL_UNSIGNED_INT

/**
 * FLOAT = 0x1406
 * Data types
 */
export const GL_FLOAT = 0x1406

/**
 * FLOAT = 0x1406
 * Data types
 */
export type GL_FLOAT = typeof GL_FLOAT

// Pixel formats

/**
 * DEPTH_COMPONENT = 0x1902
 * Pixel formats
 */
export const GL_DEPTH_COMPONENT = 0x1902

/**
 * DEPTH_COMPONENT = 0x1902
 * Pixel formats
 */
export type GL_DEPTH_COMPONENT = typeof GL_DEPTH_COMPONENT

/**
 * ALPHA = 0x1906
 * Pixel formats
 */
export const GL_ALPHA = 0x1906

/**
 * ALPHA = 0x1906
 * Pixel formats
 */
export type GL_ALPHA = typeof GL_ALPHA

/**
 * RGB = 0x1907
 * Pixel formats
 */
export const GL_RGB = 0x1907

/**
 * RGB = 0x1907
 * Pixel formats
 */
export type GL_RGB = typeof GL_RGB

/**
 * RGBA = 0x1908
 * Pixel formats
 */
export const GL_RGBA = 0x1908

/**
 * RGBA = 0x1908
 * Pixel formats
 */
export type GL_RGBA = typeof GL_RGBA

/**
 * LUMINANCE = 0x1909
 * Pixel formats
 */
export const GL_LUMINANCE = 0x1909

/**
 * LUMINANCE = 0x1909
 * Pixel formats
 */
export type GL_LUMINANCE = typeof GL_LUMINANCE

/**
 * LUMINANCE_ALPHA = 0x190a
 * Pixel formats
 */
export const GL_LUMINANCE_ALPHA = 0x190a

/**
 * LUMINANCE_ALPHA = 0x190a
 * Pixel formats
 */
export type GL_LUMINANCE_ALPHA = typeof GL_LUMINANCE_ALPHA

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
 * UNSIGNED_SHORT_4_4_4_4 = 0x8033
 * Pixel types
 */
export type GL_UNSIGNED_SHORT_4_4_4_4 = typeof GL_UNSIGNED_SHORT_4_4_4_4

/**
 * UNSIGNED_SHORT_5_5_5_1 = 0x8034
 * Pixel types
 */
export const GL_UNSIGNED_SHORT_5_5_5_1 = 0x8034

/**
 * UNSIGNED_SHORT_5_5_5_1 = 0x8034
 * Pixel types
 */
export type GL_UNSIGNED_SHORT_5_5_5_1 = typeof GL_UNSIGNED_SHORT_5_5_5_1

/**
 * UNSIGNED_SHORT_5_6_5 = 0x8363
 * Pixel types
 */
export const GL_UNSIGNED_SHORT_5_6_5 = 0x8363

/**
 * UNSIGNED_SHORT_5_6_5 = 0x8363
 * Pixel types
 */
export type GL_UNSIGNED_SHORT_5_6_5 = typeof GL_UNSIGNED_SHORT_5_6_5

// Shaders - Constants passed to createShader() or getShaderParameter()

/**
 * FRAGMENT_SHADER = 0x8b30
 * Passed to createShader to define a fragment shader.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_FRAGMENT_SHADER = 0x8b30

/**
 * FRAGMENT_SHADER = 0x8b30
 * Passed to createShader to define a fragment shader.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_FRAGMENT_SHADER = typeof GL_FRAGMENT_SHADER

/**
 * VERTEX_SHADER = 0x8b31
 * Passed to createShader to define a vertex shader
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_VERTEX_SHADER = 0x8b31

/**
 * VERTEX_SHADER = 0x8b31
 * Passed to createShader to define a vertex shader
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_VERTEX_SHADER = typeof GL_VERTEX_SHADER

/**
 * COMPILE_STATUS = 0x8b81
 * Passed to getShaderParameter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_COMPILE_STATUS = 0x8b81

/**
 * COMPILE_STATUS = 0x8b81
 * Passed to getShaderParameter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_COMPILE_STATUS = typeof GL_COMPILE_STATUS

/**
 * DELETE_STATUS = 0x8b80
 * Passed to getShaderParameter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_DELETE_STATUS = 0x8b80

/**
 * DELETE_STATUS = 0x8b80
 * Passed to getShaderParameter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_DELETE_STATUS = typeof GL_DELETE_STATUS

/**
 * LINK_STATUS = 0x8b82
 * Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_LINK_STATUS = 0x8b82

/**
 * LINK_STATUS = 0x8b82
 * Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_LINK_STATUS = typeof GL_LINK_STATUS

/**
 * VALIDATE_STATUS = 0x8b83
 * Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_VALIDATE_STATUS = 0x8b83

/**
 * VALIDATE_STATUS = 0x8b83
 * Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_VALIDATE_STATUS = typeof GL_VALIDATE_STATUS

/**
 * ATTACHED_SHADERS = 0x8b85
 * Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_ATTACHED_SHADERS = 0x8b85

/**
 * ATTACHED_SHADERS = 0x8b85
 * Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_ATTACHED_SHADERS = typeof GL_ATTACHED_SHADERS

/**
 * ACTIVE_ATTRIBUTES = 0x8b89
 * Passed to getProgramParameter to get the number of attributes active in a program.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_ACTIVE_ATTRIBUTES = 0x8b89

/**
 * ACTIVE_ATTRIBUTES = 0x8b89
 * Passed to getProgramParameter to get the number of attributes active in a program.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_ACTIVE_ATTRIBUTES = typeof GL_ACTIVE_ATTRIBUTES

/**
 * ACTIVE_UNIFORMS = 0x8b86
 * Passed to getProgramParameter to get the number of uniforms active in a program.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_ACTIVE_UNIFORMS = 0x8b86

/**
 * ACTIVE_UNIFORMS = 0x8b86
 * Passed to getProgramParameter to get the number of uniforms active in a program.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_ACTIVE_UNIFORMS = typeof GL_ACTIVE_UNIFORMS

/**
 * MAX_VERTEX_ATTRIBS = 0x8869
 * The maximum number of entries possible in the vertex attribute list.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_VERTEX_ATTRIBS = 0x8869

/**
 * MAX_VERTEX_ATTRIBS = 0x8869
 * The maximum number of entries possible in the vertex attribute list.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_MAX_VERTEX_ATTRIBS = typeof GL_MAX_VERTEX_ATTRIBS

/**
 * MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb

/**
 * MAX_VERTEX_UNIFORM_VECTORS = 0x8dfb
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_MAX_VERTEX_UNIFORM_VECTORS = typeof GL_MAX_VERTEX_UNIFORM_VECTORS

/**
 * MAX_VARYING_VECTORS = 0x8dfc
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_VARYING_VECTORS = 0x8dfc

/**
 * MAX_VARYING_VECTORS = 0x8dfc
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_MAX_VARYING_VECTORS = typeof GL_MAX_VARYING_VECTORS

/**
 * MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d

/**
 * MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8b4d
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = typeof GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS

/**
 * MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c

/**
 * MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8b4c
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = typeof GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS

/**
 * MAX_TEXTURE_IMAGE_UNITS = 0x8872
 * Implementation dependent number of maximum texture units. At least 8.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_TEXTURE_IMAGE_UNITS = 0x8872

/**
 * MAX_TEXTURE_IMAGE_UNITS = 0x8872
 * Implementation dependent number of maximum texture units. At least 8.
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_MAX_TEXTURE_IMAGE_UNITS = typeof GL_MAX_TEXTURE_IMAGE_UNITS

/**
 * MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd

/**
 * MAX_FRAGMENT_UNIFORM_VECTORS = 0x8dfd
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_MAX_FRAGMENT_UNIFORM_VECTORS = typeof GL_MAX_FRAGMENT_UNIFORM_VECTORS

/**
 * SHADER_TYPE = 0x8b4f
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_SHADER_TYPE = 0x8b4f

/**
 * SHADER_TYPE = 0x8b4f
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_SHADER_TYPE = typeof GL_SHADER_TYPE

/**
 * SHADING_LANGUAGE_VERSION = 0x8b8c
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_SHADING_LANGUAGE_VERSION = 0x8b8c

/**
 * SHADING_LANGUAGE_VERSION = 0x8b8c
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_SHADING_LANGUAGE_VERSION = typeof GL_SHADING_LANGUAGE_VERSION

/**
 * CURRENT_PROGRAM = 0x8b8d
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export const GL_CURRENT_PROGRAM = 0x8b8d

/**
 * CURRENT_PROGRAM = 0x8b8d
 * Shaders - Constant passed to createShader() or getShaderParameter()
 */
export type GL_CURRENT_PROGRAM = typeof GL_CURRENT_PROGRAM

// Depth or stencil tests - Constants passed to depthFunc() or stencilFunc().

/**
 * NEVER = 0x0200
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_NEVER = 0x0200

/**
 * NEVER = 0x0200
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export type GL_NEVER = typeof GL_NEVER

/**
 * LESS = 0x0201
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_LESS = 0x0201

/**
 * LESS = 0x0201
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export type GL_LESS = typeof GL_LESS

/**
 * EQUAL = 0x0202
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_EQUAL = 0x0202

/**
 * EQUAL = 0x0202
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export type GL_EQUAL = typeof GL_EQUAL

/**
 * LEQUAL = 0x0203
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_LEQUAL = 0x0203

/**
 * LEQUAL = 0x0203
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export type GL_LEQUAL = typeof GL_LEQUAL

/**
 * GREATER = 0x0204
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_GREATER = 0x0204

/**
 * GREATER = 0x0204
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export type GL_GREATER = typeof GL_GREATER

/**
 * NOTEQUAL = 0x0205
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_NOTEQUAL = 0x0205

/**
 * NOTEQUAL = 0x0205
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export type GL_NOTEQUAL = typeof GL_NOTEQUAL

/**
 * GEQUAL = 0x0206
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_GEQUAL = 0x0206

/**
 * GEQUAL = 0x0206
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export type GL_GEQUAL = typeof GL_GEQUAL

/**
 * ALWAYS = 0x0207
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export const GL_ALWAYS = 0x0207

/**
 * ALWAYS = 0x0207
 * Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn.
 * Depth or stencil tests - Constant passed to depthFunc() or stencilFunc().
 */
export type GL_ALWAYS = typeof GL_ALWAYS

// Stencil actions - Constants passed to stencilOp().

/**
 * KEEP = 0x1e00
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_KEEP = 0x1e00

/**
 * KEEP = 0x1e00
 * Stencil actions - Constant passed to stencilOp().
 */
export type GL_KEEP = typeof GL_KEEP

/**
 * REPLACE = 0x1e01
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_REPLACE = 0x1e01

/**
 * REPLACE = 0x1e01
 * Stencil actions - Constant passed to stencilOp().
 */
export type GL_REPLACE = typeof GL_REPLACE

/**
 * INCR = 0x1e02
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_INCR = 0x1e02

/**
 * INCR = 0x1e02
 * Stencil actions - Constant passed to stencilOp().
 */
export type GL_INCR = typeof GL_INCR

/**
 * DECR = 0x1e03
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_DECR = 0x1e03

/**
 * DECR = 0x1e03
 * Stencil actions - Constant passed to stencilOp().
 */
export type GL_DECR = typeof GL_DECR

/**
 * INVERT = 0x150a
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_INVERT = 0x150a

/**
 * INVERT = 0x150a
 * Stencil actions - Constant passed to stencilOp().
 */
export type GL_INVERT = typeof GL_INVERT

/**
 * INCR_WRAP = 0x8507
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_INCR_WRAP = 0x8507

/**
 * INCR_WRAP = 0x8507
 * Stencil actions - Constant passed to stencilOp().
 */
export type GL_INCR_WRAP = typeof GL_INCR_WRAP

/**
 * DECR_WRAP = 0x8508
 * Stencil actions - Constant passed to stencilOp().
 */
export const GL_DECR_WRAP = 0x8508

/**
 * DECR_WRAP = 0x8508
 * Stencil actions - Constant passed to stencilOp().
 */
export type GL_DECR_WRAP = typeof GL_DECR_WRAP

// Textures - Constants passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.

/**
 * NEAREST = 0x2600
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_NEAREST = 0x2600

/**
 * NEAREST = 0x2600
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_NEAREST = typeof GL_NEAREST

/**
 * LINEAR = 0x2601
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_LINEAR = 0x2601

/**
 * LINEAR = 0x2601
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_LINEAR = typeof GL_LINEAR

/**
 * NEAREST_MIPMAP_NEAREST = 0x2700
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_NEAREST_MIPMAP_NEAREST = 0x2700

/**
 * NEAREST_MIPMAP_NEAREST = 0x2700
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_NEAREST_MIPMAP_NEAREST = typeof GL_NEAREST_MIPMAP_NEAREST

/**
 * LINEAR_MIPMAP_NEAREST = 0x2701
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_LINEAR_MIPMAP_NEAREST = 0x2701

/**
 * LINEAR_MIPMAP_NEAREST = 0x2701
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_LINEAR_MIPMAP_NEAREST = typeof GL_LINEAR_MIPMAP_NEAREST

/**
 * NEAREST_MIPMAP_LINEAR = 0x2702
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_NEAREST_MIPMAP_LINEAR = 0x2702

/**
 * NEAREST_MIPMAP_LINEAR = 0x2702
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_NEAREST_MIPMAP_LINEAR = typeof GL_NEAREST_MIPMAP_LINEAR

/**
 * LINEAR_MIPMAP_LINEAR = 0x2703
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_LINEAR_MIPMAP_LINEAR = 0x2703

/**
 * LINEAR_MIPMAP_LINEAR = 0x2703
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_LINEAR_MIPMAP_LINEAR = typeof GL_LINEAR_MIPMAP_LINEAR

/**
 * TEXTURE_MAG_FILTER = 0x2800
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_MAG_FILTER = 0x2800

/**
 * TEXTURE_MAG_FILTER = 0x2800
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_MAG_FILTER = typeof GL_TEXTURE_MAG_FILTER

/**
 * TEXTURE_MIN_FILTER = 0x2801
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_MIN_FILTER = 0x2801

/**
 * TEXTURE_MIN_FILTER = 0x2801
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_MIN_FILTER = typeof GL_TEXTURE_MIN_FILTER

/**
 * TEXTURE_WRAP_S = 0x2802
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_WRAP_S = 0x2802

/**
 * TEXTURE_WRAP_S = 0x2802
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_WRAP_S = typeof GL_TEXTURE_WRAP_S

/**
 * TEXTURE_WRAP_T = 0x2803
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_WRAP_T = 0x2803

/**
 * TEXTURE_WRAP_T = 0x2803
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_WRAP_T = typeof GL_TEXTURE_WRAP_T

/**
 * TEXTURE_2D = 0x0de1
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_2D = 0x0de1

/**
 * TEXTURE_2D = 0x0de1
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_2D = typeof GL_TEXTURE_2D

/**
 * TEXTURE = 0x1702
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE = 0x1702

/**
 * TEXTURE = 0x1702
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE = typeof GL_TEXTURE

/**
 * TEXTURE_CUBE_MAP = 0x8513
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP = 0x8513

/**
 * TEXTURE_CUBE_MAP = 0x8513
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_CUBE_MAP = typeof GL_TEXTURE_CUBE_MAP

/**
 * TEXTURE_BINDING_CUBE_MAP = 0x8514
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_BINDING_CUBE_MAP = 0x8514

/**
 * TEXTURE_BINDING_CUBE_MAP = 0x8514
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_BINDING_CUBE_MAP = typeof GL_TEXTURE_BINDING_CUBE_MAP

/**
 * TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515

/**
 * TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_CUBE_MAP_POSITIVE_X = typeof GL_TEXTURE_CUBE_MAP_POSITIVE_X

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_CUBE_MAP_NEGATIVE_X = typeof GL_TEXTURE_CUBE_MAP_NEGATIVE_X

/**
 * TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517

/**
 * TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_CUBE_MAP_POSITIVE_Y = typeof GL_TEXTURE_CUBE_MAP_POSITIVE_Y

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = typeof GL_TEXTURE_CUBE_MAP_NEGATIVE_Y

/**
 * TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519

/**
 * TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_CUBE_MAP_POSITIVE_Z = typeof GL_TEXTURE_CUBE_MAP_POSITIVE_Z

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a

/**
 * TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = typeof GL_TEXTURE_CUBE_MAP_NEGATIVE_Z

/**
 * MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c

/**
 * MAX_CUBE_MAP_TEXTURE_SIZE = 0x851c
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_MAX_CUBE_MAP_TEXTURE_SIZE = typeof GL_MAX_CUBE_MAP_TEXTURE_SIZE

/**
 * ACTIVE_TEXTURE = 0x84e0
 * The current active texture unit.
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_ACTIVE_TEXTURE = 0x84e0

/**
 * ACTIVE_TEXTURE = 0x84e0
 * The current active texture unit.
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_ACTIVE_TEXTURE = typeof GL_ACTIVE_TEXTURE

/**
 * REPEAT = 0x2901
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_REPEAT = 0x2901

/**
 * REPEAT = 0x2901
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_REPEAT = typeof GL_REPEAT

/**
 * CLAMP_TO_EDGE = 0x812f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_CLAMP_TO_EDGE = 0x812f

/**
 * CLAMP_TO_EDGE = 0x812f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_CLAMP_TO_EDGE = typeof GL_CLAMP_TO_EDGE

/**
 * MIRRORED_REPEAT = 0x8370
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_MIRRORED_REPEAT = 0x8370

/**
 * MIRRORED_REPEAT = 0x8370
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_MIRRORED_REPEAT = typeof GL_MIRRORED_REPEAT

// Uniform types

/**
 * FLOAT_VEC2 = 0x8b50
 * Uniform types
 */
export const GL_FLOAT_VEC2 = 0x8b50

/**
 * FLOAT_VEC2 = 0x8b50
 * Uniform types
 */
export type GL_FLOAT_VEC2 = typeof GL_FLOAT_VEC2

/**
 * FLOAT_VEC3 = 0x8b51
 * Uniform types
 */
export const GL_FLOAT_VEC3 = 0x8b51

/**
 * FLOAT_VEC3 = 0x8b51
 * Uniform types
 */
export type GL_FLOAT_VEC3 = typeof GL_FLOAT_VEC3

/**
 * FLOAT_VEC4 = 0x8b52
 * Uniform types
 */
export const GL_FLOAT_VEC4 = 0x8b52

/**
 * FLOAT_VEC4 = 0x8b52
 * Uniform types
 */
export type GL_FLOAT_VEC4 = typeof GL_FLOAT_VEC4

/**
 * INT_VEC2 = 0x8b53
 * Uniform types
 */
export const GL_INT_VEC2 = 0x8b53

/**
 * INT_VEC2 = 0x8b53
 * Uniform types
 */
export type GL_INT_VEC2 = typeof GL_INT_VEC2

/**
 * INT_VEC3 = 0x8b54
 * Uniform types
 */
export const GL_INT_VEC3 = 0x8b54

/**
 * INT_VEC3 = 0x8b54
 * Uniform types
 */
export type GL_INT_VEC3 = typeof GL_INT_VEC3

/**
 * INT_VEC4 = 0x8b55
 * Uniform types
 */
export const GL_INT_VEC4 = 0x8b55

/**
 * INT_VEC4 = 0x8b55
 * Uniform types
 */
export type GL_INT_VEC4 = typeof GL_INT_VEC4

/**
 * BOOL = 0x8b56
 * Uniform types
 */
export const GL_BOOL = 0x8b56

/**
 * BOOL = 0x8b56
 * Uniform types
 */
export type GL_BOOL = typeof GL_BOOL

/**
 * BOOL_VEC2 = 0x8b57
 * Uniform types
 */
export const GL_BOOL_VEC2 = 0x8b57

/**
 * BOOL_VEC2 = 0x8b57
 * Uniform types
 */
export type GL_BOOL_VEC2 = typeof GL_BOOL_VEC2

/**
 * BOOL_VEC3 = 0x8b58
 * Uniform types
 */
export const GL_BOOL_VEC3 = 0x8b58

/**
 * BOOL_VEC3 = 0x8b58
 * Uniform types
 */
export type GL_BOOL_VEC3 = typeof GL_BOOL_VEC3

/**
 * BOOL_VEC4 = 0x8b59
 * Uniform types
 */
export const GL_BOOL_VEC4 = 0x8b59

/**
 * BOOL_VEC4 = 0x8b59
 * Uniform types
 */
export type GL_BOOL_VEC4 = typeof GL_BOOL_VEC4

/**
 * FLOAT_MAT2 = 0x8b5a
 * Uniform types
 */
export const GL_FLOAT_MAT2 = 0x8b5a

/**
 * FLOAT_MAT2 = 0x8b5a
 * Uniform types
 */
export type GL_FLOAT_MAT2 = typeof GL_FLOAT_MAT2

/**
 * FLOAT_MAT3 = 0x8b5b
 * Uniform types
 */
export const GL_FLOAT_MAT3 = 0x8b5b

/**
 * FLOAT_MAT3 = 0x8b5b
 * Uniform types
 */
export type GL_FLOAT_MAT3 = typeof GL_FLOAT_MAT3

/**
 * FLOAT_MAT4 = 0x8b5c
 * Uniform types
 */
export const GL_FLOAT_MAT4 = 0x8b5c

/**
 * FLOAT_MAT4 = 0x8b5c
 * Uniform types
 */
export type GL_FLOAT_MAT4 = typeof GL_FLOAT_MAT4

/**
 * SAMPLER_2D = 0x8b5e
 * Uniform types
 */
export const GL_SAMPLER_2D = 0x8b5e

/**
 * SAMPLER_2D = 0x8b5e
 * Uniform types
 */
export type GL_SAMPLER_2D = typeof GL_SAMPLER_2D

/**
 * SAMPLER_CUBE = 0x8b60
 * Uniform types
 */
export const GL_SAMPLER_CUBE = 0x8b60

/**
 * SAMPLER_CUBE = 0x8b60
 * Uniform types
 */
export type GL_SAMPLER_CUBE = typeof GL_SAMPLER_CUBE

// Shader precision-specified types

/**
 * LOW_FLOAT = 0x8df0
 * Shader precision-specified types
 */
export const GL_LOW_FLOAT = 0x8df0

/**
 * LOW_FLOAT = 0x8df0
 * Shader precision-specified types
 */
export type GL_LOW_FLOAT = typeof GL_LOW_FLOAT

/**
 * MEDIUM_FLOAT = 0x8df1
 * Shader precision-specified types
 */
export const GL_MEDIUM_FLOAT = 0x8df1

/**
 * MEDIUM_FLOAT = 0x8df1
 * Shader precision-specified types
 */
export type GL_MEDIUM_FLOAT = typeof GL_MEDIUM_FLOAT

/**
 * HIGH_FLOAT = 0x8df2
 * Shader precision-specified types
 */
export const GL_HIGH_FLOAT = 0x8df2

/**
 * HIGH_FLOAT = 0x8df2
 * Shader precision-specified types
 */
export type GL_HIGH_FLOAT = typeof GL_HIGH_FLOAT

/**
 * LOW_INT = 0x8df3
 * Shader precision-specified types
 */
export const GL_LOW_INT = 0x8df3

/**
 * LOW_INT = 0x8df3
 * Shader precision-specified types
 */
export type GL_LOW_INT = typeof GL_LOW_INT

/**
 * MEDIUM_INT = 0x8df4
 * Shader precision-specified types
 */
export const GL_MEDIUM_INT = 0x8df4

/**
 * MEDIUM_INT = 0x8df4
 * Shader precision-specified types
 */
export type GL_MEDIUM_INT = typeof GL_MEDIUM_INT

/**
 * HIGH_INT = 0x8df5
 * Shader precision-specified types
 */
export const GL_HIGH_INT = 0x8df5

/**
 * HIGH_INT = 0x8df5
 * Shader precision-specified types
 */
export type GL_HIGH_INT = typeof GL_HIGH_INT

// Framebuffers and renderbuffers

/**
 * FRAMEBUFFER = 0x8d40
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER = 0x8d40

/**
 * FRAMEBUFFER = 0x8d40
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER = typeof GL_FRAMEBUFFER

/**
 * RENDERBUFFER = 0x8d41
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER = 0x8d41

/**
 * RENDERBUFFER = 0x8d41
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER = typeof GL_RENDERBUFFER

/**
 * RGBA4 = 0x8056
 * Framebuffers and renderbuffers
 */
export const GL_RGBA4 = 0x8056

/**
 * RGBA4 = 0x8056
 * Framebuffers and renderbuffers
 */
export type GL_RGBA4 = typeof GL_RGBA4

/**
 * RGB5_A1 = 0x8057
 * Framebuffers and renderbuffers
 */
export const GL_RGB5_A1 = 0x8057

/**
 * RGB5_A1 = 0x8057
 * Framebuffers and renderbuffers
 */
export type GL_RGB5_A1 = typeof GL_RGB5_A1

/**
 * RGB565 = 0x8d62
 * Framebuffers and renderbuffers
 */
export const GL_RGB565 = 0x8d62

/**
 * RGB565 = 0x8d62
 * Framebuffers and renderbuffers
 */
export type GL_RGB565 = typeof GL_RGB565

/**
 * DEPTH_COMPONENT16 = 0x81a5
 * Framebuffers and renderbuffers
 */
export const GL_DEPTH_COMPONENT16 = 0x81a5

/**
 * DEPTH_COMPONENT16 = 0x81a5
 * Framebuffers and renderbuffers
 */
export type GL_DEPTH_COMPONENT16 = typeof GL_DEPTH_COMPONENT16

/**
 * STENCIL_INDEX8 = 0x8d48
 * Framebuffers and renderbuffers
 */
export const GL_STENCIL_INDEX8 = 0x8d48

/**
 * STENCIL_INDEX8 = 0x8d48
 * Framebuffers and renderbuffers
 */
export type GL_STENCIL_INDEX8 = typeof GL_STENCIL_INDEX8

/**
 * DEPTH_STENCIL = 0x84f9
 * Framebuffers and renderbuffers
 */
export const GL_DEPTH_STENCIL = 0x84f9

/**
 * DEPTH_STENCIL = 0x84f9
 * Framebuffers and renderbuffers
 */
export type GL_DEPTH_STENCIL = typeof GL_DEPTH_STENCIL

/**
 * RENDERBUFFER_WIDTH = 0x8d42
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_WIDTH = 0x8d42

/**
 * RENDERBUFFER_WIDTH = 0x8d42
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER_WIDTH = typeof GL_RENDERBUFFER_WIDTH

/**
 * RENDERBUFFER_HEIGHT = 0x8d43
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_HEIGHT = 0x8d43

/**
 * RENDERBUFFER_HEIGHT = 0x8d43
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER_HEIGHT = typeof GL_RENDERBUFFER_HEIGHT

/**
 * RENDERBUFFER_INTERNAL_FORMAT = 0x8d44
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_INTERNAL_FORMAT = 0x8d44

/**
 * RENDERBUFFER_INTERNAL_FORMAT = 0x8d44
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER_INTERNAL_FORMAT = typeof GL_RENDERBUFFER_INTERNAL_FORMAT

/**
 * RENDERBUFFER_RED_SIZE = 0x8d50
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_RED_SIZE = 0x8d50

/**
 * RENDERBUFFER_RED_SIZE = 0x8d50
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER_RED_SIZE = typeof GL_RENDERBUFFER_RED_SIZE

/**
 * RENDERBUFFER_GREEN_SIZE = 0x8d51
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_GREEN_SIZE = 0x8d51

/**
 * RENDERBUFFER_GREEN_SIZE = 0x8d51
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER_GREEN_SIZE = typeof GL_RENDERBUFFER_GREEN_SIZE

/**
 * RENDERBUFFER_BLUE_SIZE = 0x8d52
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_BLUE_SIZE = 0x8d52

/**
 * RENDERBUFFER_BLUE_SIZE = 0x8d52
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER_BLUE_SIZE = typeof GL_RENDERBUFFER_BLUE_SIZE

/**
 * RENDERBUFFER_ALPHA_SIZE = 0x8d53
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_ALPHA_SIZE = 0x8d53

/**
 * RENDERBUFFER_ALPHA_SIZE = 0x8d53
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER_ALPHA_SIZE = typeof GL_RENDERBUFFER_ALPHA_SIZE

/**
 * RENDERBUFFER_DEPTH_SIZE = 0x8d54
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_DEPTH_SIZE = 0x8d54

/**
 * RENDERBUFFER_DEPTH_SIZE = 0x8d54
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER_DEPTH_SIZE = typeof GL_RENDERBUFFER_DEPTH_SIZE

/**
 * RENDERBUFFER_STENCIL_SIZE = 0x8d55
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_STENCIL_SIZE = 0x8d55

/**
 * RENDERBUFFER_STENCIL_SIZE = 0x8d55
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER_STENCIL_SIZE = typeof GL_RENDERBUFFER_STENCIL_SIZE

/**
 * FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0

/**
 * FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8cd0
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = typeof GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE

/**
 * FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1

/**
 * FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8cd1
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = typeof GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8cd2
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = typeof GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8cd3
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = typeof GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE

/**
 * COLOR_ATTACHMENT0 = 0x8ce0
 * Framebuffers and renderbuffers
 */
export const GL_COLOR_ATTACHMENT0 = 0x8ce0

/**
 * COLOR_ATTACHMENT0 = 0x8ce0
 * Framebuffers and renderbuffers
 */
export type GL_COLOR_ATTACHMENT0 = typeof GL_COLOR_ATTACHMENT0

/**
 * DEPTH_ATTACHMENT = 0x8d00
 * Framebuffers and renderbuffers
 */
export const GL_DEPTH_ATTACHMENT = 0x8d00

/**
 * DEPTH_ATTACHMENT = 0x8d00
 * Framebuffers and renderbuffers
 */
export type GL_DEPTH_ATTACHMENT = typeof GL_DEPTH_ATTACHMENT

/**
 * STENCIL_ATTACHMENT = 0x8d20
 * Framebuffers and renderbuffers
 */
export const GL_STENCIL_ATTACHMENT = 0x8d20

/**
 * STENCIL_ATTACHMENT = 0x8d20
 * Framebuffers and renderbuffers
 */
export type GL_STENCIL_ATTACHMENT = typeof GL_STENCIL_ATTACHMENT

/**
 * DEPTH_STENCIL_ATTACHMENT = 0x821a
 * Framebuffers and renderbuffers
 */
export const GL_DEPTH_STENCIL_ATTACHMENT = 0x821a

/**
 * DEPTH_STENCIL_ATTACHMENT = 0x821a
 * Framebuffers and renderbuffers
 */
export type GL_DEPTH_STENCIL_ATTACHMENT = typeof GL_DEPTH_STENCIL_ATTACHMENT

/**
 * NONE = 0
 * Framebuffers and renderbuffers
 */
export const GL_NONE = 0

/**
 * NONE = 0
 * Framebuffers and renderbuffers
 */
export type GL_NONE = typeof GL_NONE

/**
 * FRAMEBUFFER_COMPLETE = 0x8cd5
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_COMPLETE = 0x8cd5

/**
 * FRAMEBUFFER_COMPLETE = 0x8cd5
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_COMPLETE = typeof GL_FRAMEBUFFER_COMPLETE

/**
 * FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6

/**
 * FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8cd6
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = typeof GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT

/**
 * FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7

/**
 * FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8cd7
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = typeof GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT

/**
 * FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9

/**
 * FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8cd9
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = typeof GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS

/**
 * FRAMEBUFFER_UNSUPPORTED = 0x8cdd
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_UNSUPPORTED = 0x8cdd

/**
 * FRAMEBUFFER_UNSUPPORTED = 0x8cdd
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_UNSUPPORTED = typeof GL_FRAMEBUFFER_UNSUPPORTED

/**
 * FRAMEBUFFER_BINDING = 0x8ca6
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_BINDING = 0x8ca6

/**
 * FRAMEBUFFER_BINDING = 0x8ca6
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_BINDING = typeof GL_FRAMEBUFFER_BINDING

/**
 * RENDERBUFFER_BINDING = 0x8ca7
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_BINDING = 0x8ca7

/**
 * RENDERBUFFER_BINDING = 0x8ca7
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER_BINDING = typeof GL_RENDERBUFFER_BINDING

/**
 * MAX_RENDERBUFFER_SIZE = 0x84e8
 * Framebuffers and renderbuffers
 */
export const GL_MAX_RENDERBUFFER_SIZE = 0x84e8

/**
 * MAX_RENDERBUFFER_SIZE = 0x84e8
 * Framebuffers and renderbuffers
 */
export type GL_MAX_RENDERBUFFER_SIZE = typeof GL_MAX_RENDERBUFFER_SIZE

/**
 * INVALID_FRAMEBUFFER_OPERATION = 0x0506
 * Framebuffers and renderbuffers
 */
export const GL_INVALID_FRAMEBUFFER_OPERATION = 0x0506

/**
 * INVALID_FRAMEBUFFER_OPERATION = 0x0506
 * Framebuffers and renderbuffers
 */
export type GL_INVALID_FRAMEBUFFER_OPERATION = typeof GL_INVALID_FRAMEBUFFER_OPERATION

// Pixel storage modes - Constants passed to pixelStorei().

/**
 * UNPACK_FLIP_Y_WEBGL = 0x9240
 * Pixel storage modes - Constant passed to pixelStorei().
 */
export const GL_UNPACK_FLIP_Y_WEBGL = 0x9240

/**
 * UNPACK_FLIP_Y_WEBGL = 0x9240
 * Pixel storage modes - Constant passed to pixelStorei().
 */
export type GL_UNPACK_FLIP_Y_WEBGL = typeof GL_UNPACK_FLIP_Y_WEBGL

/**
 * UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241
 * Pixel storage modes - Constant passed to pixelStorei().
 */
export const GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241

/**
 * UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241
 * Pixel storage modes - Constant passed to pixelStorei().
 */
export type GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL = typeof GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL

/**
 * UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243
 * Pixel storage modes - Constant passed to pixelStorei().
 */
export const GL_UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243

/**
 * UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243
 * Pixel storage modes - Constant passed to pixelStorei().
 */
export type GL_UNPACK_COLORSPACE_CONVERSION_WEBGL = typeof GL_UNPACK_COLORSPACE_CONVERSION_WEBGL

// Getting GL parameter information - Constants passed to getParameter() to specify what information to return.

/**
 * READ_BUFFER = 0x0c02
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_READ_BUFFER = 0x0c02

/**
 * READ_BUFFER = 0x0c02
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_READ_BUFFER = typeof GL_READ_BUFFER

/**
 * UNPACK_ROW_LENGTH = 0x0cf2
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_ROW_LENGTH = 0x0cf2

/**
 * UNPACK_ROW_LENGTH = 0x0cf2
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_UNPACK_ROW_LENGTH = typeof GL_UNPACK_ROW_LENGTH

/**
 * UNPACK_SKIP_ROWS = 0x0cf3
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_SKIP_ROWS = 0x0cf3

/**
 * UNPACK_SKIP_ROWS = 0x0cf3
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_UNPACK_SKIP_ROWS = typeof GL_UNPACK_SKIP_ROWS

/**
 * UNPACK_SKIP_PIXELS = 0x0cf4
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_SKIP_PIXELS = 0x0cf4

/**
 * UNPACK_SKIP_PIXELS = 0x0cf4
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_UNPACK_SKIP_PIXELS = typeof GL_UNPACK_SKIP_PIXELS

/**
 * PACK_ROW_LENGTH = 0x0d02
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_PACK_ROW_LENGTH = 0x0d02

/**
 * PACK_ROW_LENGTH = 0x0d02
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_PACK_ROW_LENGTH = typeof GL_PACK_ROW_LENGTH

/**
 * PACK_SKIP_ROWS = 0x0d03
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_PACK_SKIP_ROWS = 0x0d03

/**
 * PACK_SKIP_ROWS = 0x0d03
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_PACK_SKIP_ROWS = typeof GL_PACK_SKIP_ROWS

/**
 * PACK_SKIP_PIXELS = 0x0d04
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_PACK_SKIP_PIXELS = 0x0d04

/**
 * PACK_SKIP_PIXELS = 0x0d04
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_PACK_SKIP_PIXELS = typeof GL_PACK_SKIP_PIXELS

/**
 * TEXTURE_BINDING_3D = 0x806a
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_TEXTURE_BINDING_3D = 0x806a

/**
 * TEXTURE_BINDING_3D = 0x806a
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_TEXTURE_BINDING_3D = typeof GL_TEXTURE_BINDING_3D

/**
 * UNPACK_SKIP_IMAGES = 0x806d
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_SKIP_IMAGES = 0x806d

/**
 * UNPACK_SKIP_IMAGES = 0x806d
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_UNPACK_SKIP_IMAGES = typeof GL_UNPACK_SKIP_IMAGES

/**
 * UNPACK_IMAGE_HEIGHT = 0x806e
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_UNPACK_IMAGE_HEIGHT = 0x806e

/**
 * UNPACK_IMAGE_HEIGHT = 0x806e
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_UNPACK_IMAGE_HEIGHT = typeof GL_UNPACK_IMAGE_HEIGHT

/**
 * MAX_3D_TEXTURE_SIZE = 0x8073
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_3D_TEXTURE_SIZE = 0x8073

/**
 * MAX_3D_TEXTURE_SIZE = 0x8073
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_3D_TEXTURE_SIZE = typeof GL_MAX_3D_TEXTURE_SIZE

/**
 * MAX_ELEMENTS_VERTICES = 0x80e8
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_ELEMENTS_VERTICES = 0x80e8

/**
 * MAX_ELEMENTS_VERTICES = 0x80e8
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_ELEMENTS_VERTICES = typeof GL_MAX_ELEMENTS_VERTICES

/**
 * MAX_ELEMENTS_INDICES = 0x80e9
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_ELEMENTS_INDICES = 0x80e9

/**
 * MAX_ELEMENTS_INDICES = 0x80e9
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_ELEMENTS_INDICES = typeof GL_MAX_ELEMENTS_INDICES

/**
 * MAX_TEXTURE_LOD_BIAS = 0x84fd
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_TEXTURE_LOD_BIAS = 0x84fd

/**
 * MAX_TEXTURE_LOD_BIAS = 0x84fd
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_TEXTURE_LOD_BIAS = typeof GL_MAX_TEXTURE_LOD_BIAS

/**
 * MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49

/**
 * MAX_FRAGMENT_UNIFORM_COMPONENTS = 0x8b49
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_FRAGMENT_UNIFORM_COMPONENTS = typeof GL_MAX_FRAGMENT_UNIFORM_COMPONENTS

/**
 * MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a

/**
 * MAX_VERTEX_UNIFORM_COMPONENTS = 0x8b4a
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_VERTEX_UNIFORM_COMPONENTS = typeof GL_MAX_VERTEX_UNIFORM_COMPONENTS

/**
 * MAX_ARRAY_TEXTURE_LAYERS = 0x88ff
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_ARRAY_TEXTURE_LAYERS = 0x88ff

/**
 * MAX_ARRAY_TEXTURE_LAYERS = 0x88ff
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_ARRAY_TEXTURE_LAYERS = typeof GL_MAX_ARRAY_TEXTURE_LAYERS

/**
 * MIN_PROGRAM_TEXEL_OFFSET = 0x8904
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MIN_PROGRAM_TEXEL_OFFSET = 0x8904

/**
 * MIN_PROGRAM_TEXEL_OFFSET = 0x8904
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MIN_PROGRAM_TEXEL_OFFSET = typeof GL_MIN_PROGRAM_TEXEL_OFFSET

/**
 * MAX_PROGRAM_TEXEL_OFFSET = 0x8905
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_PROGRAM_TEXEL_OFFSET = 0x8905

/**
 * MAX_PROGRAM_TEXEL_OFFSET = 0x8905
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_PROGRAM_TEXEL_OFFSET = typeof GL_MAX_PROGRAM_TEXEL_OFFSET

/**
 * MAX_VARYING_COMPONENTS = 0x8b4b
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_VARYING_COMPONENTS = 0x8b4b

/**
 * MAX_VARYING_COMPONENTS = 0x8b4b
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_VARYING_COMPONENTS = typeof GL_MAX_VARYING_COMPONENTS

/**
 * FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b

/**
 * FRAGMENT_SHADER_DERIVATIVE_HINT = 0x8b8b
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_FRAGMENT_SHADER_DERIVATIVE_HINT = typeof GL_FRAGMENT_SHADER_DERIVATIVE_HINT

/**
 * RASTERIZER_DISCARD = 0x8c89
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_RASTERIZER_DISCARD = 0x8c89

/**
 * RASTERIZER_DISCARD = 0x8c89
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_RASTERIZER_DISCARD = typeof GL_RASTERIZER_DISCARD

/**
 * VERTEX_ARRAY_BINDING = 0x85b5
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_VERTEX_ARRAY_BINDING = 0x85b5

/**
 * VERTEX_ARRAY_BINDING = 0x85b5
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_VERTEX_ARRAY_BINDING = typeof GL_VERTEX_ARRAY_BINDING

/**
 * MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122

/**
 * MAX_VERTEX_OUTPUT_COMPONENTS = 0x9122
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_VERTEX_OUTPUT_COMPONENTS = typeof GL_MAX_VERTEX_OUTPUT_COMPONENTS

/**
 * MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125

/**
 * MAX_FRAGMENT_INPUT_COMPONENTS = 0x9125
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_FRAGMENT_INPUT_COMPONENTS = typeof GL_MAX_FRAGMENT_INPUT_COMPONENTS

/**
 * MAX_SERVER_WAIT_TIMEOUT = 0x9111
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_SERVER_WAIT_TIMEOUT = 0x9111

/**
 * MAX_SERVER_WAIT_TIMEOUT = 0x9111
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_SERVER_WAIT_TIMEOUT = typeof GL_MAX_SERVER_WAIT_TIMEOUT

/**
 * MAX_ELEMENT_INDEX = 0x8d6b
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export const GL_MAX_ELEMENT_INDEX = 0x8d6b

/**
 * MAX_ELEMENT_INDEX = 0x8d6b
 * Getting GL parameter information - Constant passed to getParameter() to specify what information to return.
 */
export type GL_MAX_ELEMENT_INDEX = typeof GL_MAX_ELEMENT_INDEX

// Textures - Constants passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.

/**
 * RED = 0x1903
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RED = 0x1903

/**
 * RED = 0x1903
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RED = typeof GL_RED

/**
 * RGB8 = 0x8051
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB8 = 0x8051

/**
 * RGB8 = 0x8051
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB8 = typeof GL_RGB8

/**
 * RGBA8 = 0x8058
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA8 = 0x8058

/**
 * RGBA8 = 0x8058
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGBA8 = typeof GL_RGBA8

/**
 * RGB10_A2 = 0x8059
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB10_A2 = 0x8059

/**
 * RGB10_A2 = 0x8059
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB10_A2 = typeof GL_RGB10_A2

/**
 * TEXTURE_3D = 0x806f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_3D = 0x806f

/**
 * TEXTURE_3D = 0x806f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_3D = typeof GL_TEXTURE_3D

/**
 * TEXTURE_WRAP_R = 0x8072
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_WRAP_R = 0x8072

/**
 * TEXTURE_WRAP_R = 0x8072
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_WRAP_R = typeof GL_TEXTURE_WRAP_R

/**
 * TEXTURE_MIN_LOD = 0x813a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_MIN_LOD = 0x813a

/**
 * TEXTURE_MIN_LOD = 0x813a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_MIN_LOD = typeof GL_TEXTURE_MIN_LOD

/**
 * TEXTURE_MAX_LOD = 0x813b
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_MAX_LOD = 0x813b

/**
 * TEXTURE_MAX_LOD = 0x813b
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_MAX_LOD = typeof GL_TEXTURE_MAX_LOD

/**
 * TEXTURE_BASE_LEVEL = 0x813c
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_BASE_LEVEL = 0x813c

/**
 * TEXTURE_BASE_LEVEL = 0x813c
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_BASE_LEVEL = typeof GL_TEXTURE_BASE_LEVEL

/**
 * TEXTURE_MAX_LEVEL = 0x813d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_MAX_LEVEL = 0x813d

/**
 * TEXTURE_MAX_LEVEL = 0x813d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_MAX_LEVEL = typeof GL_TEXTURE_MAX_LEVEL

/**
 * TEXTURE_COMPARE_MODE = 0x884c
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_COMPARE_MODE = 0x884c

/**
 * TEXTURE_COMPARE_MODE = 0x884c
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_COMPARE_MODE = typeof GL_TEXTURE_COMPARE_MODE

/**
 * TEXTURE_COMPARE_FUNC = 0x884d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_COMPARE_FUNC = 0x884d

/**
 * TEXTURE_COMPARE_FUNC = 0x884d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_COMPARE_FUNC = typeof GL_TEXTURE_COMPARE_FUNC

/**
 * SRGB = 0x8c40
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_SRGB = 0x8c40

/**
 * SRGB = 0x8c40
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_SRGB = typeof GL_SRGB

/**
 * SRGB8 = 0x8c41
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_SRGB8 = 0x8c41

/**
 * SRGB8 = 0x8c41
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_SRGB8 = typeof GL_SRGB8

/**
 * SRGB8_ALPHA8 = 0x8c43
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_SRGB8_ALPHA8 = 0x8c43

/**
 * SRGB8_ALPHA8 = 0x8c43
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_SRGB8_ALPHA8 = typeof GL_SRGB8_ALPHA8

/**
 * COMPARE_REF_TO_TEXTURE = 0x884e
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_COMPARE_REF_TO_TEXTURE = 0x884e

/**
 * COMPARE_REF_TO_TEXTURE = 0x884e
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_COMPARE_REF_TO_TEXTURE = typeof GL_COMPARE_REF_TO_TEXTURE

/**
 * RGBA32F = 0x8814
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA32F = 0x8814

/**
 * RGBA32F = 0x8814
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGBA32F = typeof GL_RGBA32F

/**
 * RGB32F = 0x8815
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB32F = 0x8815

/**
 * RGB32F = 0x8815
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB32F = typeof GL_RGB32F

/**
 * RGBA16F = 0x881a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA16F = 0x881a

/**
 * RGBA16F = 0x881a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGBA16F = typeof GL_RGBA16F

/**
 * RGB16F = 0x881b
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB16F = 0x881b

/**
 * RGB16F = 0x881b
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB16F = typeof GL_RGB16F

/**
 * TEXTURE_2D_ARRAY = 0x8c1a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_2D_ARRAY = 0x8c1a

/**
 * TEXTURE_2D_ARRAY = 0x8c1a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_2D_ARRAY = typeof GL_TEXTURE_2D_ARRAY

/**
 * TEXTURE_BINDING_2D_ARRAY = 0x8c1d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_BINDING_2D_ARRAY = 0x8c1d

/**
 * TEXTURE_BINDING_2D_ARRAY = 0x8c1d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_BINDING_2D_ARRAY = typeof GL_TEXTURE_BINDING_2D_ARRAY

/**
 * R11F_G11F_B10F = 0x8c3a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R11F_G11F_B10F = 0x8c3a

/**
 * R11F_G11F_B10F = 0x8c3a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_R11F_G11F_B10F = typeof GL_R11F_G11F_B10F

/**
 * RGB9_E5 = 0x8c3d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB9_E5 = 0x8c3d

/**
 * RGB9_E5 = 0x8c3d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB9_E5 = typeof GL_RGB9_E5

/**
 * RGBA32UI = 0x8d70
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA32UI = 0x8d70

/**
 * RGBA32UI = 0x8d70
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGBA32UI = typeof GL_RGBA32UI

/**
 * RGB32UI = 0x8d71
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB32UI = 0x8d71

/**
 * RGB32UI = 0x8d71
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB32UI = typeof GL_RGB32UI

/**
 * RGBA16UI = 0x8d76
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA16UI = 0x8d76

/**
 * RGBA16UI = 0x8d76
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGBA16UI = typeof GL_RGBA16UI

/**
 * RGB16UI = 0x8d77
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB16UI = 0x8d77

/**
 * RGB16UI = 0x8d77
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB16UI = typeof GL_RGB16UI

/**
 * RGBA8UI = 0x8d7c
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA8UI = 0x8d7c

/**
 * RGBA8UI = 0x8d7c
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGBA8UI = typeof GL_RGBA8UI

/**
 * RGB8UI = 0x8d7d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB8UI = 0x8d7d

/**
 * RGB8UI = 0x8d7d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB8UI = typeof GL_RGB8UI

/**
 * RGBA32I = 0x8d82
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA32I = 0x8d82

/**
 * RGBA32I = 0x8d82
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGBA32I = typeof GL_RGBA32I

/**
 * RGB32I = 0x8d83
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB32I = 0x8d83

/**
 * RGB32I = 0x8d83
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB32I = typeof GL_RGB32I

/**
 * RGBA16I = 0x8d88
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA16I = 0x8d88

/**
 * RGBA16I = 0x8d88
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGBA16I = typeof GL_RGBA16I

/**
 * RGB16I = 0x8d89
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB16I = 0x8d89

/**
 * RGB16I = 0x8d89
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB16I = typeof GL_RGB16I

/**
 * RGBA8I = 0x8d8e
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA8I = 0x8d8e

/**
 * RGBA8I = 0x8d8e
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGBA8I = typeof GL_RGBA8I

/**
 * RGB8I = 0x8d8f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB8I = 0x8d8f

/**
 * RGB8I = 0x8d8f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB8I = typeof GL_RGB8I

/**
 * RED_INTEGER = 0x8d94
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RED_INTEGER = 0x8d94

/**
 * RED_INTEGER = 0x8d94
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RED_INTEGER = typeof GL_RED_INTEGER

/**
 * RGB_INTEGER = 0x8d98
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB_INTEGER = 0x8d98

/**
 * RGB_INTEGER = 0x8d98
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB_INTEGER = typeof GL_RGB_INTEGER

/**
 * RGBA_INTEGER = 0x8d99
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA_INTEGER = 0x8d99

/**
 * RGBA_INTEGER = 0x8d99
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGBA_INTEGER = typeof GL_RGBA_INTEGER

/**
 * R8 = 0x8229
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R8 = 0x8229

/**
 * R8 = 0x8229
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_R8 = typeof GL_R8

/**
 * RG8 = 0x822b
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG8 = 0x822b

/**
 * RG8 = 0x822b
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RG8 = typeof GL_RG8

/**
 * R16F = 0x822d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R16F = 0x822d

/**
 * R16F = 0x822d
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_R16F = typeof GL_R16F

/**
 * R32F = 0x822e
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R32F = 0x822e

/**
 * R32F = 0x822e
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_R32F = typeof GL_R32F

/**
 * RG16F = 0x822f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG16F = 0x822f

/**
 * RG16F = 0x822f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RG16F = typeof GL_RG16F

/**
 * RG32F = 0x8230
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG32F = 0x8230

/**
 * RG32F = 0x8230
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RG32F = typeof GL_RG32F

/**
 * R8I = 0x8231
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R8I = 0x8231

/**
 * R8I = 0x8231
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_R8I = typeof GL_R8I

/**
 * R8UI = 0x8232
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R8UI = 0x8232

/**
 * R8UI = 0x8232
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_R8UI = typeof GL_R8UI

/**
 * R16I = 0x8233
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R16I = 0x8233

/**
 * R16I = 0x8233
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_R16I = typeof GL_R16I

/**
 * R16UI = 0x8234
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R16UI = 0x8234

/**
 * R16UI = 0x8234
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_R16UI = typeof GL_R16UI

/**
 * R32I = 0x8235
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R32I = 0x8235

/**
 * R32I = 0x8235
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_R32I = typeof GL_R32I

/**
 * R32UI = 0x8236
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R32UI = 0x8236

/**
 * R32UI = 0x8236
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_R32UI = typeof GL_R32UI

/**
 * RG8I = 0x8237
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG8I = 0x8237

/**
 * RG8I = 0x8237
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RG8I = typeof GL_RG8I

/**
 * RG8UI = 0x8238
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG8UI = 0x8238

/**
 * RG8UI = 0x8238
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RG8UI = typeof GL_RG8UI

/**
 * RG16I = 0x8239
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG16I = 0x8239

/**
 * RG16I = 0x8239
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RG16I = typeof GL_RG16I

/**
 * RG16UI = 0x823a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG16UI = 0x823a

/**
 * RG16UI = 0x823a
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RG16UI = typeof GL_RG16UI

/**
 * RG32I = 0x823b
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG32I = 0x823b

/**
 * RG32I = 0x823b
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RG32I = typeof GL_RG32I

/**
 * RG32UI = 0x823c
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG32UI = 0x823c

/**
 * RG32UI = 0x823c
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RG32UI = typeof GL_RG32UI

/**
 * R8_SNORM = 0x8f94
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_R8_SNORM = 0x8f94

/**
 * R8_SNORM = 0x8f94
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_R8_SNORM = typeof GL_R8_SNORM

/**
 * RG8_SNORM = 0x8f95
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RG8_SNORM = 0x8f95

/**
 * RG8_SNORM = 0x8f95
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RG8_SNORM = typeof GL_RG8_SNORM

/**
 * RGB8_SNORM = 0x8f96
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB8_SNORM = 0x8f96

/**
 * RGB8_SNORM = 0x8f96
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB8_SNORM = typeof GL_RGB8_SNORM

/**
 * RGBA8_SNORM = 0x8f97
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGBA8_SNORM = 0x8f97

/**
 * RGBA8_SNORM = 0x8f97
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGBA8_SNORM = typeof GL_RGBA8_SNORM

/**
 * RGB10_A2UI = 0x906f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_RGB10_A2UI = 0x906f

/**
 * RGB10_A2UI = 0x906f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_RGB10_A2UI = typeof GL_RGB10_A2UI

/**
 * TEXTURE_IMMUTABLE_FORMAT = 0x912f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_IMMUTABLE_FORMAT = 0x912f

/**
 * TEXTURE_IMMUTABLE_FORMAT = 0x912f
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_IMMUTABLE_FORMAT = typeof GL_TEXTURE_IMMUTABLE_FORMAT

/**
 * TEXTURE_IMMUTABLE_LEVELS = 0x82df
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export const GL_TEXTURE_IMMUTABLE_LEVELS = 0x82df

/**
 * TEXTURE_IMMUTABLE_LEVELS = 0x82df
 * Textures - Constant passed to texParameteri(), texParameterf(), bindTexture(), texImage2D(), and others.
 */
export type GL_TEXTURE_IMMUTABLE_LEVELS = typeof GL_TEXTURE_IMMUTABLE_LEVELS

// Pixel types

/**
 * UNSIGNED_INT_2_10_10_10_REV = 0x8368
 * Pixel types
 */
export const GL_UNSIGNED_INT_2_10_10_10_REV = 0x8368

/**
 * UNSIGNED_INT_2_10_10_10_REV = 0x8368
 * Pixel types
 */
export type GL_UNSIGNED_INT_2_10_10_10_REV = typeof GL_UNSIGNED_INT_2_10_10_10_REV

/**
 * UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b
 * Pixel types
 */
export const GL_UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b

/**
 * UNSIGNED_INT_10F_11F_11F_REV = 0x8c3b
 * Pixel types
 */
export type GL_UNSIGNED_INT_10F_11F_11F_REV = typeof GL_UNSIGNED_INT_10F_11F_11F_REV

/**
 * UNSIGNED_INT_5_9_9_9_REV = 0x8c3e
 * Pixel types
 */
export const GL_UNSIGNED_INT_5_9_9_9_REV = 0x8c3e

/**
 * UNSIGNED_INT_5_9_9_9_REV = 0x8c3e
 * Pixel types
 */
export type GL_UNSIGNED_INT_5_9_9_9_REV = typeof GL_UNSIGNED_INT_5_9_9_9_REV

/**
 * FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad
 * Pixel types
 */
export const GL_FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad

/**
 * FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8dad
 * Pixel types
 */
export type GL_FLOAT_32_UNSIGNED_INT_24_8_REV = typeof GL_FLOAT_32_UNSIGNED_INT_24_8_REV

/**
 * UNSIGNED_INT_24_8 = 0x84fa
 * Pixel types
 */
export const GL_UNSIGNED_INT_24_8 = 0x84fa

/**
 * UNSIGNED_INT_24_8 = 0x84fa
 * Pixel types
 */
export type GL_UNSIGNED_INT_24_8 = typeof GL_UNSIGNED_INT_24_8

/**
 * HALF_FLOAT = 0x140b
 * Pixel types
 */
export const GL_HALF_FLOAT = 0x140b

/**
 * HALF_FLOAT = 0x140b
 * Pixel types
 */
export type GL_HALF_FLOAT = typeof GL_HALF_FLOAT

/**
 * RG = 0x8227
 * Pixel types
 */
export const GL_RG = 0x8227

/**
 * RG = 0x8227
 * Pixel types
 */
export type GL_RG = typeof GL_RG

/**
 * RG_INTEGER = 0x8228
 * Pixel types
 */
export const GL_RG_INTEGER = 0x8228

/**
 * RG_INTEGER = 0x8228
 * Pixel types
 */
export type GL_RG_INTEGER = typeof GL_RG_INTEGER

/**
 * INT_2_10_10_10_REV = 0x8d9f
 * Pixel types
 */
export const GL_INT_2_10_10_10_REV = 0x8d9f

/**
 * INT_2_10_10_10_REV = 0x8d9f
 * Pixel types
 */
export type GL_INT_2_10_10_10_REV = typeof GL_INT_2_10_10_10_REV

// Queries

/**
 * CURRENT_QUERY = 0x8865
 * Queries
 */
export const GL_CURRENT_QUERY = 0x8865

/**
 * CURRENT_QUERY = 0x8865
 * Queries
 */
export type GL_CURRENT_QUERY = typeof GL_CURRENT_QUERY

/**
 * QUERY_RESULT = 0x8866
 * Queries
 */
export const GL_QUERY_RESULT = 0x8866

/**
 * QUERY_RESULT = 0x8866
 * Queries
 */
export type GL_QUERY_RESULT = typeof GL_QUERY_RESULT

/**
 * QUERY_RESULT_AVAILABLE = 0x8867
 * Queries
 */
export const GL_QUERY_RESULT_AVAILABLE = 0x8867

/**
 * QUERY_RESULT_AVAILABLE = 0x8867
 * Queries
 */
export type GL_QUERY_RESULT_AVAILABLE = typeof GL_QUERY_RESULT_AVAILABLE

/**
 * ANY_SAMPLES_PASSED = 0x8c2f
 * Queries
 */
export const GL_ANY_SAMPLES_PASSED = 0x8c2f

/**
 * ANY_SAMPLES_PASSED = 0x8c2f
 * Queries
 */
export type GL_ANY_SAMPLES_PASSED = typeof GL_ANY_SAMPLES_PASSED

/**
 * ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a
 * Queries
 */
export const GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a

/**
 * ANY_SAMPLES_PASSED_CONSERVATIVE = 0x8d6a
 * Queries
 */
export type GL_ANY_SAMPLES_PASSED_CONSERVATIVE = typeof GL_ANY_SAMPLES_PASSED_CONSERVATIVE

// Draw buffers

/**
 * MAX_DRAW_BUFFERS = 0x8824
 * Draw buffers
 */
export const GL_MAX_DRAW_BUFFERS = 0x8824

/**
 * MAX_DRAW_BUFFERS = 0x8824
 * Draw buffers
 */
export type GL_MAX_DRAW_BUFFERS = typeof GL_MAX_DRAW_BUFFERS

/**
 * DRAW_BUFFER0 = 0x8825
 * Draw buffers
 */
export const GL_DRAW_BUFFER0 = 0x8825

/**
 * DRAW_BUFFER0 = 0x8825
 * Draw buffers
 */
export type GL_DRAW_BUFFER0 = typeof GL_DRAW_BUFFER0

/**
 * DRAW_BUFFER1 = 0x8826
 * Draw buffers
 */
export const GL_DRAW_BUFFER1 = 0x8826

/**
 * DRAW_BUFFER1 = 0x8826
 * Draw buffers
 */
export type GL_DRAW_BUFFER1 = typeof GL_DRAW_BUFFER1

/**
 * DRAW_BUFFER2 = 0x8827
 * Draw buffers
 */
export const GL_DRAW_BUFFER2 = 0x8827

/**
 * DRAW_BUFFER2 = 0x8827
 * Draw buffers
 */
export type GL_DRAW_BUFFER2 = typeof GL_DRAW_BUFFER2

/**
 * DRAW_BUFFER3 = 0x8828
 * Draw buffers
 */
export const GL_DRAW_BUFFER3 = 0x8828

/**
 * DRAW_BUFFER3 = 0x8828
 * Draw buffers
 */
export type GL_DRAW_BUFFER3 = typeof GL_DRAW_BUFFER3

/**
 * DRAW_BUFFER4 = 0x8829
 * Draw buffers
 */
export const GL_DRAW_BUFFER4 = 0x8829

/**
 * DRAW_BUFFER4 = 0x8829
 * Draw buffers
 */
export type GL_DRAW_BUFFER4 = typeof GL_DRAW_BUFFER4

/**
 * DRAW_BUFFER5 = 0x882a
 * Draw buffers
 */
export const GL_DRAW_BUFFER5 = 0x882a

/**
 * DRAW_BUFFER5 = 0x882a
 * Draw buffers
 */
export type GL_DRAW_BUFFER5 = typeof GL_DRAW_BUFFER5

/**
 * DRAW_BUFFER6 = 0x882b
 * Draw buffers
 */
export const GL_DRAW_BUFFER6 = 0x882b

/**
 * DRAW_BUFFER6 = 0x882b
 * Draw buffers
 */
export type GL_DRAW_BUFFER6 = typeof GL_DRAW_BUFFER6

/**
 * DRAW_BUFFER7 = 0x882c
 * Draw buffers
 */
export const GL_DRAW_BUFFER7 = 0x882c

/**
 * DRAW_BUFFER7 = 0x882c
 * Draw buffers
 */
export type GL_DRAW_BUFFER7 = typeof GL_DRAW_BUFFER7

/**
 * DRAW_BUFFER8 = 0x882d
 * Draw buffers
 */
export const GL_DRAW_BUFFER8 = 0x882d

/**
 * DRAW_BUFFER8 = 0x882d
 * Draw buffers
 */
export type GL_DRAW_BUFFER8 = typeof GL_DRAW_BUFFER8

/**
 * DRAW_BUFFER9 = 0x882e
 * Draw buffers
 */
export const GL_DRAW_BUFFER9 = 0x882e

/**
 * DRAW_BUFFER9 = 0x882e
 * Draw buffers
 */
export type GL_DRAW_BUFFER9 = typeof GL_DRAW_BUFFER9

/**
 * DRAW_BUFFER10 = 0x882f
 * Draw buffers
 */
export const GL_DRAW_BUFFER10 = 0x882f

/**
 * DRAW_BUFFER10 = 0x882f
 * Draw buffers
 */
export type GL_DRAW_BUFFER10 = typeof GL_DRAW_BUFFER10

/**
 * DRAW_BUFFER11 = 0x8830
 * Draw buffers
 */
export const GL_DRAW_BUFFER11 = 0x8830

/**
 * DRAW_BUFFER11 = 0x8830
 * Draw buffers
 */
export type GL_DRAW_BUFFER11 = typeof GL_DRAW_BUFFER11

/**
 * DRAW_BUFFER12 = 0x8831
 * Draw buffers
 */
export const GL_DRAW_BUFFER12 = 0x8831

/**
 * DRAW_BUFFER12 = 0x8831
 * Draw buffers
 */
export type GL_DRAW_BUFFER12 = typeof GL_DRAW_BUFFER12

/**
 * DRAW_BUFFER13 = 0x8832
 * Draw buffers
 */
export const GL_DRAW_BUFFER13 = 0x8832

/**
 * DRAW_BUFFER13 = 0x8832
 * Draw buffers
 */
export type GL_DRAW_BUFFER13 = typeof GL_DRAW_BUFFER13

/**
 * DRAW_BUFFER14 = 0x8833
 * Draw buffers
 */
export const GL_DRAW_BUFFER14 = 0x8833

/**
 * DRAW_BUFFER14 = 0x8833
 * Draw buffers
 */
export type GL_DRAW_BUFFER14 = typeof GL_DRAW_BUFFER14

/**
 * DRAW_BUFFER15 = 0x8834
 * Draw buffers
 */
export const GL_DRAW_BUFFER15 = 0x8834

/**
 * DRAW_BUFFER15 = 0x8834
 * Draw buffers
 */
export type GL_DRAW_BUFFER15 = typeof GL_DRAW_BUFFER15

/**
 * MAX_COLOR_ATTACHMENTS = 0x8cdf
 * Draw buffers
 */
export const GL_MAX_COLOR_ATTACHMENTS = 0x8cdf

/**
 * MAX_COLOR_ATTACHMENTS = 0x8cdf
 * Draw buffers
 */
export type GL_MAX_COLOR_ATTACHMENTS = typeof GL_MAX_COLOR_ATTACHMENTS

/**
 * COLOR_ATTACHMENT1 = 0x8ce1
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT1 = 0x8ce1

/**
 * COLOR_ATTACHMENT1 = 0x8ce1
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT1 = typeof GL_COLOR_ATTACHMENT1

/**
 * COLOR_ATTACHMENT2 = 0x8ce2
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT2 = 0x8ce2

/**
 * COLOR_ATTACHMENT2 = 0x8ce2
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT2 = typeof GL_COLOR_ATTACHMENT2

/**
 * COLOR_ATTACHMENT3 = 0x8ce3
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT3 = 0x8ce3

/**
 * COLOR_ATTACHMENT3 = 0x8ce3
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT3 = typeof GL_COLOR_ATTACHMENT3

/**
 * COLOR_ATTACHMENT4 = 0x8ce4
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT4 = 0x8ce4

/**
 * COLOR_ATTACHMENT4 = 0x8ce4
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT4 = typeof GL_COLOR_ATTACHMENT4

/**
 * COLOR_ATTACHMENT5 = 0x8ce5
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT5 = 0x8ce5

/**
 * COLOR_ATTACHMENT5 = 0x8ce5
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT5 = typeof GL_COLOR_ATTACHMENT5

/**
 * COLOR_ATTACHMENT6 = 0x8ce6
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT6 = 0x8ce6

/**
 * COLOR_ATTACHMENT6 = 0x8ce6
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT6 = typeof GL_COLOR_ATTACHMENT6

/**
 * COLOR_ATTACHMENT7 = 0x8ce7
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT7 = 0x8ce7

/**
 * COLOR_ATTACHMENT7 = 0x8ce7
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT7 = typeof GL_COLOR_ATTACHMENT7

/**
 * COLOR_ATTACHMENT8 = 0x8ce8
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT8 = 0x8ce8

/**
 * COLOR_ATTACHMENT8 = 0x8ce8
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT8 = typeof GL_COLOR_ATTACHMENT8

/**
 * COLOR_ATTACHMENT9 = 0x8ce9
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT9 = 0x8ce9

/**
 * COLOR_ATTACHMENT9 = 0x8ce9
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT9 = typeof GL_COLOR_ATTACHMENT9

/**
 * COLOR_ATTACHMENT10 = 0x8cea
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT10 = 0x8cea

/**
 * COLOR_ATTACHMENT10 = 0x8cea
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT10 = typeof GL_COLOR_ATTACHMENT10

/**
 * COLOR_ATTACHMENT11 = 0x8ceb
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT11 = 0x8ceb

/**
 * COLOR_ATTACHMENT11 = 0x8ceb
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT11 = typeof GL_COLOR_ATTACHMENT11

/**
 * COLOR_ATTACHMENT12 = 0x8cec
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT12 = 0x8cec

/**
 * COLOR_ATTACHMENT12 = 0x8cec
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT12 = typeof GL_COLOR_ATTACHMENT12

/**
 * COLOR_ATTACHMENT13 = 0x8ced
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT13 = 0x8ced

/**
 * COLOR_ATTACHMENT13 = 0x8ced
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT13 = typeof GL_COLOR_ATTACHMENT13

/**
 * COLOR_ATTACHMENT14 = 0x8cee
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT14 = 0x8cee

/**
 * COLOR_ATTACHMENT14 = 0x8cee
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT14 = typeof GL_COLOR_ATTACHMENT14

/**
 * COLOR_ATTACHMENT15 = 0x8cef
 * Draw buffers
 */
export const GL_COLOR_ATTACHMENT15 = 0x8cef

/**
 * COLOR_ATTACHMENT15 = 0x8cef
 * Draw buffers
 */
export type GL_COLOR_ATTACHMENT15 = typeof GL_COLOR_ATTACHMENT15

// Samplers

/**
 * SAMPLER_3D = 0x8b5f
 * Samplers
 */
export const GL_SAMPLER_3D = 0x8b5f

/**
 * SAMPLER_3D = 0x8b5f
 * Samplers
 */
export type GL_SAMPLER_3D = typeof GL_SAMPLER_3D

/**
 * SAMPLER_2D_SHADOW = 0x8b62
 * Samplers
 */
export const GL_SAMPLER_2D_SHADOW = 0x8b62

/**
 * SAMPLER_2D_SHADOW = 0x8b62
 * Samplers
 */
export type GL_SAMPLER_2D_SHADOW = typeof GL_SAMPLER_2D_SHADOW

/**
 * SAMPLER_2D_ARRAY = 0x8dc1
 * Samplers
 */
export const GL_SAMPLER_2D_ARRAY = 0x8dc1

/**
 * SAMPLER_2D_ARRAY = 0x8dc1
 * Samplers
 */
export type GL_SAMPLER_2D_ARRAY = typeof GL_SAMPLER_2D_ARRAY

/**
 * SAMPLER_2D_ARRAY_SHADOW = 0x8dc4
 * Samplers
 */
export const GL_SAMPLER_2D_ARRAY_SHADOW = 0x8dc4

/**
 * SAMPLER_2D_ARRAY_SHADOW = 0x8dc4
 * Samplers
 */
export type GL_SAMPLER_2D_ARRAY_SHADOW = typeof GL_SAMPLER_2D_ARRAY_SHADOW

/**
 * SAMPLER_CUBE_SHADOW = 0x8dc5
 * Samplers
 */
export const GL_SAMPLER_CUBE_SHADOW = 0x8dc5

/**
 * SAMPLER_CUBE_SHADOW = 0x8dc5
 * Samplers
 */
export type GL_SAMPLER_CUBE_SHADOW = typeof GL_SAMPLER_CUBE_SHADOW

/**
 * INT_SAMPLER_2D = 0x8dca
 * Samplers
 */
export const GL_INT_SAMPLER_2D = 0x8dca

/**
 * INT_SAMPLER_2D = 0x8dca
 * Samplers
 */
export type GL_INT_SAMPLER_2D = typeof GL_INT_SAMPLER_2D

/**
 * INT_SAMPLER_3D = 0x8dcb
 * Samplers
 */
export const GL_INT_SAMPLER_3D = 0x8dcb

/**
 * INT_SAMPLER_3D = 0x8dcb
 * Samplers
 */
export type GL_INT_SAMPLER_3D = typeof GL_INT_SAMPLER_3D

/**
 * INT_SAMPLER_CUBE = 0x8dcc
 * Samplers
 */
export const GL_INT_SAMPLER_CUBE = 0x8dcc

/**
 * INT_SAMPLER_CUBE = 0x8dcc
 * Samplers
 */
export type GL_INT_SAMPLER_CUBE = typeof GL_INT_SAMPLER_CUBE

/**
 * INT_SAMPLER_2D_ARRAY = 0x8dcf
 * Samplers
 */
export const GL_INT_SAMPLER_2D_ARRAY = 0x8dcf

/**
 * INT_SAMPLER_2D_ARRAY = 0x8dcf
 * Samplers
 */
export type GL_INT_SAMPLER_2D_ARRAY = typeof GL_INT_SAMPLER_2D_ARRAY

/**
 * UNSIGNED_INT_SAMPLER_2D = 0x8dd2
 * Samplers
 */
export const GL_UNSIGNED_INT_SAMPLER_2D = 0x8dd2

/**
 * UNSIGNED_INT_SAMPLER_2D = 0x8dd2
 * Samplers
 */
export type GL_UNSIGNED_INT_SAMPLER_2D = typeof GL_UNSIGNED_INT_SAMPLER_2D

/**
 * UNSIGNED_INT_SAMPLER_3D = 0x8dd3
 * Samplers
 */
export const GL_UNSIGNED_INT_SAMPLER_3D = 0x8dd3

/**
 * UNSIGNED_INT_SAMPLER_3D = 0x8dd3
 * Samplers
 */
export type GL_UNSIGNED_INT_SAMPLER_3D = typeof GL_UNSIGNED_INT_SAMPLER_3D

/**
 * UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4
 * Samplers
 */
export const GL_UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4

/**
 * UNSIGNED_INT_SAMPLER_CUBE = 0x8dd4
 * Samplers
 */
export type GL_UNSIGNED_INT_SAMPLER_CUBE = typeof GL_UNSIGNED_INT_SAMPLER_CUBE

/**
 * UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7
 * Samplers
 */
export const GL_UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7

/**
 * UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8dd7
 * Samplers
 */
export type GL_UNSIGNED_INT_SAMPLER_2D_ARRAY = typeof GL_UNSIGNED_INT_SAMPLER_2D_ARRAY

/**
 * MAX_SAMPLES = 0x8d57
 * Samplers
 */
export const GL_MAX_SAMPLES = 0x8d57

/**
 * MAX_SAMPLES = 0x8d57
 * Samplers
 */
export type GL_MAX_SAMPLES = typeof GL_MAX_SAMPLES

/**
 * SAMPLER_BINDING = 0x8919
 * Samplers
 */
export const GL_SAMPLER_BINDING = 0x8919

/**
 * SAMPLER_BINDING = 0x8919
 * Samplers
 */
export type GL_SAMPLER_BINDING = typeof GL_SAMPLER_BINDING

// Buffers

/**
 * PIXEL_PACK_BUFFER = 0x88eb
 * Buffers
 */
export const GL_PIXEL_PACK_BUFFER = 0x88eb

/**
 * PIXEL_PACK_BUFFER = 0x88eb
 * Buffers
 */
export type GL_PIXEL_PACK_BUFFER = typeof GL_PIXEL_PACK_BUFFER

/**
 * PIXEL_UNPACK_BUFFER = 0x88ec
 * Buffers
 */
export const GL_PIXEL_UNPACK_BUFFER = 0x88ec

/**
 * PIXEL_UNPACK_BUFFER = 0x88ec
 * Buffers
 */
export type GL_PIXEL_UNPACK_BUFFER = typeof GL_PIXEL_UNPACK_BUFFER

/**
 * PIXEL_PACK_BUFFER_BINDING = 0x88ed
 * Buffers
 */
export const GL_PIXEL_PACK_BUFFER_BINDING = 0x88ed

/**
 * PIXEL_PACK_BUFFER_BINDING = 0x88ed
 * Buffers
 */
export type GL_PIXEL_PACK_BUFFER_BINDING = typeof GL_PIXEL_PACK_BUFFER_BINDING

/**
 * PIXEL_UNPACK_BUFFER_BINDING = 0x88ef
 * Buffers
 */
export const GL_PIXEL_UNPACK_BUFFER_BINDING = 0x88ef

/**
 * PIXEL_UNPACK_BUFFER_BINDING = 0x88ef
 * Buffers
 */
export type GL_PIXEL_UNPACK_BUFFER_BINDING = typeof GL_PIXEL_UNPACK_BUFFER_BINDING

/**
 * COPY_READ_BUFFER = 0x8f36
 * Buffers
 */
export const GL_COPY_READ_BUFFER = 0x8f36

/**
 * COPY_READ_BUFFER = 0x8f36
 * Buffers
 */
export type GL_COPY_READ_BUFFER = typeof GL_COPY_READ_BUFFER

/**
 * COPY_WRITE_BUFFER = 0x8f37
 * Buffers
 */
export const GL_COPY_WRITE_BUFFER = 0x8f37

/**
 * COPY_WRITE_BUFFER = 0x8f37
 * Buffers
 */
export type GL_COPY_WRITE_BUFFER = typeof GL_COPY_WRITE_BUFFER

/**
 * COPY_READ_BUFFER_BINDING = 0x8f36
 * Buffers
 */
export const GL_COPY_READ_BUFFER_BINDING = 0x8f36

/**
 * COPY_READ_BUFFER_BINDING = 0x8f36
 * Buffers
 */
export type GL_COPY_READ_BUFFER_BINDING = typeof GL_COPY_READ_BUFFER_BINDING

/**
 * COPY_WRITE_BUFFER_BINDING = 0x8f37
 * Buffers
 */
export const GL_COPY_WRITE_BUFFER_BINDING = 0x8f37

/**
 * COPY_WRITE_BUFFER_BINDING = 0x8f37
 * Buffers
 */
export type GL_COPY_WRITE_BUFFER_BINDING = typeof GL_COPY_WRITE_BUFFER_BINDING

// Data types

/**
 * FLOAT_MAT2x3 = 0x8b65
 * Data types
 */
export const GL_FLOAT_MAT2x3 = 0x8b65

/**
 * FLOAT_MAT2x3 = 0x8b65
 * Data types
 */
export type GL_FLOAT_MAT2x3 = typeof GL_FLOAT_MAT2x3

/**
 * FLOAT_MAT2x4 = 0x8b66
 * Data types
 */
export const GL_FLOAT_MAT2x4 = 0x8b66

/**
 * FLOAT_MAT2x4 = 0x8b66
 * Data types
 */
export type GL_FLOAT_MAT2x4 = typeof GL_FLOAT_MAT2x4

/**
 * FLOAT_MAT3x2 = 0x8b67
 * Data types
 */
export const GL_FLOAT_MAT3x2 = 0x8b67

/**
 * FLOAT_MAT3x2 = 0x8b67
 * Data types
 */
export type GL_FLOAT_MAT3x2 = typeof GL_FLOAT_MAT3x2

/**
 * FLOAT_MAT3x4 = 0x8b68
 * Data types
 */
export const GL_FLOAT_MAT3x4 = 0x8b68

/**
 * FLOAT_MAT3x4 = 0x8b68
 * Data types
 */
export type GL_FLOAT_MAT3x4 = typeof GL_FLOAT_MAT3x4

/**
 * FLOAT_MAT4x2 = 0x8b69
 * Data types
 */
export const GL_FLOAT_MAT4x2 = 0x8b69

/**
 * FLOAT_MAT4x2 = 0x8b69
 * Data types
 */
export type GL_FLOAT_MAT4x2 = typeof GL_FLOAT_MAT4x2

/**
 * FLOAT_MAT4x3 = 0x8b6a
 * Data types
 */
export const GL_FLOAT_MAT4x3 = 0x8b6a

/**
 * FLOAT_MAT4x3 = 0x8b6a
 * Data types
 */
export type GL_FLOAT_MAT4x3 = typeof GL_FLOAT_MAT4x3

/**
 * UNSIGNED_INT_VEC2 = 0x8dc6
 * Data types
 */
export const GL_UNSIGNED_INT_VEC2 = 0x8dc6

/**
 * UNSIGNED_INT_VEC2 = 0x8dc6
 * Data types
 */
export type GL_UNSIGNED_INT_VEC2 = typeof GL_UNSIGNED_INT_VEC2

/**
 * UNSIGNED_INT_VEC3 = 0x8dc7
 * Data types
 */
export const GL_UNSIGNED_INT_VEC3 = 0x8dc7

/**
 * UNSIGNED_INT_VEC3 = 0x8dc7
 * Data types
 */
export type GL_UNSIGNED_INT_VEC3 = typeof GL_UNSIGNED_INT_VEC3

/**
 * UNSIGNED_INT_VEC4 = 0x8dc8
 * Data types
 */
export const GL_UNSIGNED_INT_VEC4 = 0x8dc8

/**
 * UNSIGNED_INT_VEC4 = 0x8dc8
 * Data types
 */
export type GL_UNSIGNED_INT_VEC4 = typeof GL_UNSIGNED_INT_VEC4

/**
 * UNSIGNED_NORMALIZED = 0x8c17
 * Data types
 */
export const GL_UNSIGNED_NORMALIZED = 0x8c17

/**
 * UNSIGNED_NORMALIZED = 0x8c17
 * Data types
 */
export type GL_UNSIGNED_NORMALIZED = typeof GL_UNSIGNED_NORMALIZED

/**
 * SIGNED_NORMALIZED = 0x8f9c
 * Data types
 */
export const GL_SIGNED_NORMALIZED = 0x8f9c

/**
 * SIGNED_NORMALIZED = 0x8f9c
 * Data types
 */
export type GL_SIGNED_NORMALIZED = typeof GL_SIGNED_NORMALIZED

// Vertex attributes

/**
 * VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd
 * Vertex attributes
 */
export const GL_VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd

/**
 * VERTEX_ATTRIB_ARRAY_INTEGER = 0x88fd
 * Vertex attributes
 */
export type GL_VERTEX_ATTRIB_ARRAY_INTEGER = typeof GL_VERTEX_ATTRIB_ARRAY_INTEGER

/**
 * VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe
 * Vertex attributes
 */
export const GL_VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe

/**
 * VERTEX_ATTRIB_ARRAY_DIVISOR = 0x88fe
 * Vertex attributes
 */
export type GL_VERTEX_ATTRIB_ARRAY_DIVISOR = typeof GL_VERTEX_ATTRIB_ARRAY_DIVISOR

// Transform feedback

/**
 * TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f

/**
 * TRANSFORM_FEEDBACK_BUFFER_MODE = 0x8c7f
 * Transform feedback
 */
export type GL_TRANSFORM_FEEDBACK_BUFFER_MODE = typeof GL_TRANSFORM_FEEDBACK_BUFFER_MODE

/**
 * MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80
 * Transform feedback
 */
export const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80

/**
 * MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 0x8c80
 * Transform feedback
 */
export type GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = typeof GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS

/**
 * TRANSFORM_FEEDBACK_VARYINGS = 0x8c83
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_VARYINGS = 0x8c83

/**
 * TRANSFORM_FEEDBACK_VARYINGS = 0x8c83
 * Transform feedback
 */
export type GL_TRANSFORM_FEEDBACK_VARYINGS = typeof GL_TRANSFORM_FEEDBACK_VARYINGS

/**
 * TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84

/**
 * TRANSFORM_FEEDBACK_BUFFER_START = 0x8c84
 * Transform feedback
 */
export type GL_TRANSFORM_FEEDBACK_BUFFER_START = typeof GL_TRANSFORM_FEEDBACK_BUFFER_START

/**
 * TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85

/**
 * TRANSFORM_FEEDBACK_BUFFER_SIZE = 0x8c85
 * Transform feedback
 */
export type GL_TRANSFORM_FEEDBACK_BUFFER_SIZE = typeof GL_TRANSFORM_FEEDBACK_BUFFER_SIZE

/**
 * TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88

/**
 * TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 0x8c88
 * Transform feedback
 */
export type GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = typeof GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN

/**
 * MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a
 * Transform feedback
 */
export const GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a

/**
 * MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 0x8c8a
 * Transform feedback
 */
export type GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = typeof GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS

/**
 * MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b
 * Transform feedback
 */
export const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b

/**
 * MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 0x8c8b
 * Transform feedback
 */
export type GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = typeof GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS

/**
 * INTERLEAVED_ATTRIBS = 0x8c8c
 * Transform feedback
 */
export const GL_INTERLEAVED_ATTRIBS = 0x8c8c

/**
 * INTERLEAVED_ATTRIBS = 0x8c8c
 * Transform feedback
 */
export type GL_INTERLEAVED_ATTRIBS = typeof GL_INTERLEAVED_ATTRIBS

/**
 * SEPARATE_ATTRIBS = 0x8c8d
 * Transform feedback
 */
export const GL_SEPARATE_ATTRIBS = 0x8c8d

/**
 * SEPARATE_ATTRIBS = 0x8c8d
 * Transform feedback
 */
export type GL_SEPARATE_ATTRIBS = typeof GL_SEPARATE_ATTRIBS

/**
 * TRANSFORM_FEEDBACK_BUFFER = 0x8c8e
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER = 0x8c8e

/**
 * TRANSFORM_FEEDBACK_BUFFER = 0x8c8e
 * Transform feedback
 */
export type GL_TRANSFORM_FEEDBACK_BUFFER = typeof GL_TRANSFORM_FEEDBACK_BUFFER

/**
 * TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f

/**
 * TRANSFORM_FEEDBACK_BUFFER_BINDING = 0x8c8f
 * Transform feedback
 */
export type GL_TRANSFORM_FEEDBACK_BUFFER_BINDING = typeof GL_TRANSFORM_FEEDBACK_BUFFER_BINDING

/**
 * TRANSFORM_FEEDBACK = 0x8e22
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK = 0x8e22

/**
 * TRANSFORM_FEEDBACK = 0x8e22
 * Transform feedback
 */
export type GL_TRANSFORM_FEEDBACK = typeof GL_TRANSFORM_FEEDBACK

/**
 * TRANSFORM_FEEDBACK_PAUSED = 0x8e23
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_PAUSED = 0x8e23

/**
 * TRANSFORM_FEEDBACK_PAUSED = 0x8e23
 * Transform feedback
 */
export type GL_TRANSFORM_FEEDBACK_PAUSED = typeof GL_TRANSFORM_FEEDBACK_PAUSED

/**
 * TRANSFORM_FEEDBACK_ACTIVE = 0x8e24
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_ACTIVE = 0x8e24

/**
 * TRANSFORM_FEEDBACK_ACTIVE = 0x8e24
 * Transform feedback
 */
export type GL_TRANSFORM_FEEDBACK_ACTIVE = typeof GL_TRANSFORM_FEEDBACK_ACTIVE

/**
 * TRANSFORM_FEEDBACK_BINDING = 0x8e25
 * Transform feedback
 */
export const GL_TRANSFORM_FEEDBACK_BINDING = 0x8e25

/**
 * TRANSFORM_FEEDBACK_BINDING = 0x8e25
 * Transform feedback
 */
export type GL_TRANSFORM_FEEDBACK_BINDING = typeof GL_TRANSFORM_FEEDBACK_BINDING

// Framebuffers and renderbuffers

/**
 * FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210

/**
 * FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 0x8210
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = typeof GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING

/**
 * FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211

/**
 * FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 0x8211
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = typeof GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE

/**
 * FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212

/**
 * FRAMEBUFFER_ATTACHMENT_RED_SIZE = 0x8212
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE = typeof GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE

/**
 * FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213

/**
 * FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 0x8213
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = typeof GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE

/**
 * FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214

/**
 * FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 0x8214
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = typeof GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE

/**
 * FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215

/**
 * FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 0x8215
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = typeof GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE

/**
 * FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216

/**
 * FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 0x8216
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = typeof GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE

/**
 * FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217

/**
 * FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 0x8217
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = typeof GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE

/**
 * FRAMEBUFFER_DEFAULT = 0x8218
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_DEFAULT = 0x8218

/**
 * FRAMEBUFFER_DEFAULT = 0x8218
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_DEFAULT = typeof GL_FRAMEBUFFER_DEFAULT

/*
 * DEPTH_STENCIL_ATTACHMENT = 0x821a
 * Framebuffers and renderbuffers
 */
// GL_DEPTH_STENCIL_ATTACHMENT = 0x821a

/*
 * DEPTH_STENCIL = 0x84f9
 * Framebuffers and renderbuffers
 */
// GL_DEPTH_STENCIL = 0x84f9

/**
 * DEPTH24_STENCIL8 = 0x88f0
 * Framebuffers and renderbuffers
 */
export const GL_DEPTH24_STENCIL8 = 0x88f0

/**
 * DEPTH24_STENCIL8 = 0x88f0
 * Framebuffers and renderbuffers
 */
export type GL_DEPTH24_STENCIL8 = typeof GL_DEPTH24_STENCIL8

/**
 * DRAW_FRAMEBUFFER_BINDING = 0x8ca6
 * Framebuffers and renderbuffers
 */
export const GL_DRAW_FRAMEBUFFER_BINDING = 0x8ca6

/**
 * DRAW_FRAMEBUFFER_BINDING = 0x8ca6
 * Framebuffers and renderbuffers
 */
export type GL_DRAW_FRAMEBUFFER_BINDING = typeof GL_DRAW_FRAMEBUFFER_BINDING

/**
 * READ_FRAMEBUFFER = 0x8ca8
 * Framebuffers and renderbuffers
 */
export const GL_READ_FRAMEBUFFER = 0x8ca8

/**
 * READ_FRAMEBUFFER = 0x8ca8
 * Framebuffers and renderbuffers
 */
export type GL_READ_FRAMEBUFFER = typeof GL_READ_FRAMEBUFFER

/**
 * DRAW_FRAMEBUFFER = 0x8ca9
 * Framebuffers and renderbuffers
 */
export const GL_DRAW_FRAMEBUFFER = 0x8ca9

/**
 * DRAW_FRAMEBUFFER = 0x8ca9
 * Framebuffers and renderbuffers
 */
export type GL_DRAW_FRAMEBUFFER = typeof GL_DRAW_FRAMEBUFFER

/**
 * READ_FRAMEBUFFER_BINDING = 0x8caa
 * Framebuffers and renderbuffers
 */
export const GL_READ_FRAMEBUFFER_BINDING = 0x8caa

/**
 * READ_FRAMEBUFFER_BINDING = 0x8caa
 * Framebuffers and renderbuffers
 */
export type GL_READ_FRAMEBUFFER_BINDING = typeof GL_READ_FRAMEBUFFER_BINDING

/**
 * RENDERBUFFER_SAMPLES = 0x8cab
 * Framebuffers and renderbuffers
 */
export const GL_RENDERBUFFER_SAMPLES = 0x8cab

/**
 * RENDERBUFFER_SAMPLES = 0x8cab
 * Framebuffers and renderbuffers
 */
export type GL_RENDERBUFFER_SAMPLES = typeof GL_RENDERBUFFER_SAMPLES

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4

/**
 * FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 0x8cd4
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = typeof GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER

/**
 * FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56
 * Framebuffers and renderbuffers
 */
export const GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56

/**
 * FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 0x8d56
 * Framebuffers and renderbuffers
 */
export type GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = typeof GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE

// Uniforms

/**
 * UNIFORM_BUFFER = 0x8a11
 * Uniforms
 */
export const GL_UNIFORM_BUFFER = 0x8a11

/**
 * UNIFORM_BUFFER = 0x8a11
 * Uniforms
 */
export type GL_UNIFORM_BUFFER = typeof GL_UNIFORM_BUFFER

/**
 * UNIFORM_BUFFER_BINDING = 0x8a28
 * Uniforms
 */
export const GL_UNIFORM_BUFFER_BINDING = 0x8a28

/**
 * UNIFORM_BUFFER_BINDING = 0x8a28
 * Uniforms
 */
export type GL_UNIFORM_BUFFER_BINDING = typeof GL_UNIFORM_BUFFER_BINDING

/**
 * UNIFORM_BUFFER_START = 0x8a29
 * Uniforms
 */
export const GL_UNIFORM_BUFFER_START = 0x8a29

/**
 * UNIFORM_BUFFER_START = 0x8a29
 * Uniforms
 */
export type GL_UNIFORM_BUFFER_START = typeof GL_UNIFORM_BUFFER_START

/**
 * UNIFORM_BUFFER_SIZE = 0x8a2a
 * Uniforms
 */
export const GL_UNIFORM_BUFFER_SIZE = 0x8a2a

/**
 * UNIFORM_BUFFER_SIZE = 0x8a2a
 * Uniforms
 */
export type GL_UNIFORM_BUFFER_SIZE = typeof GL_UNIFORM_BUFFER_SIZE

/**
 * MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b
 * Uniforms
 */
export const GL_MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b

/**
 * MAX_VERTEX_UNIFORM_BLOCKS = 0x8a2b
 * Uniforms
 */
export type GL_MAX_VERTEX_UNIFORM_BLOCKS = typeof GL_MAX_VERTEX_UNIFORM_BLOCKS

/**
 * MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d
 * Uniforms
 */
export const GL_MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d

/**
 * MAX_FRAGMENT_UNIFORM_BLOCKS = 0x8a2d
 * Uniforms
 */
export type GL_MAX_FRAGMENT_UNIFORM_BLOCKS = typeof GL_MAX_FRAGMENT_UNIFORM_BLOCKS

/**
 * MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e
 * Uniforms
 */
export const GL_MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e

/**
 * MAX_COMBINED_UNIFORM_BLOCKS = 0x8a2e
 * Uniforms
 */
export type GL_MAX_COMBINED_UNIFORM_BLOCKS = typeof GL_MAX_COMBINED_UNIFORM_BLOCKS

/**
 * MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f
 * Uniforms
 */
export const GL_MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f

/**
 * MAX_UNIFORM_BUFFER_BINDINGS = 0x8a2f
 * Uniforms
 */
export type GL_MAX_UNIFORM_BUFFER_BINDINGS = typeof GL_MAX_UNIFORM_BUFFER_BINDINGS

/**
 * MAX_UNIFORM_BLOCK_SIZE = 0x8a30
 * Uniforms
 */
export const GL_MAX_UNIFORM_BLOCK_SIZE = 0x8a30

/**
 * MAX_UNIFORM_BLOCK_SIZE = 0x8a30
 * Uniforms
 */
export type GL_MAX_UNIFORM_BLOCK_SIZE = typeof GL_MAX_UNIFORM_BLOCK_SIZE

/**
 * MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31
 * Uniforms
 */
export const GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31

/**
 * MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 0x8a31
 * Uniforms
 */
export type GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = typeof GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS

/**
 * MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33
 * Uniforms
 */
export const GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33

/**
 * MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 0x8a33
 * Uniforms
 */
export type GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = typeof GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS

/**
 * UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34
 * Uniforms
 */
export const GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34

/**
 * UNIFORM_BUFFER_OFFSET_ALIGNMENT = 0x8a34
 * Uniforms
 */
export type GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT = typeof GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT

/**
 * ACTIVE_UNIFORM_BLOCKS = 0x8a36
 * Uniforms
 */
export const GL_ACTIVE_UNIFORM_BLOCKS = 0x8a36

/**
 * ACTIVE_UNIFORM_BLOCKS = 0x8a36
 * Uniforms
 */
export type GL_ACTIVE_UNIFORM_BLOCKS = typeof GL_ACTIVE_UNIFORM_BLOCKS

/**
 * UNIFORM_TYPE = 0x8a37
 * Uniforms
 */
export const GL_UNIFORM_TYPE = 0x8a37

/**
 * UNIFORM_TYPE = 0x8a37
 * Uniforms
 */
export type GL_UNIFORM_TYPE = typeof GL_UNIFORM_TYPE

/**
 * UNIFORM_SIZE = 0x8a38
 * Uniforms
 */
export const GL_UNIFORM_SIZE = 0x8a38

/**
 * UNIFORM_SIZE = 0x8a38
 * Uniforms
 */
export type GL_UNIFORM_SIZE = typeof GL_UNIFORM_SIZE

/**
 * UNIFORM_BLOCK_INDEX = 0x8a3a
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_INDEX = 0x8a3a

/**
 * UNIFORM_BLOCK_INDEX = 0x8a3a
 * Uniforms
 */
export type GL_UNIFORM_BLOCK_INDEX = typeof GL_UNIFORM_BLOCK_INDEX

/**
 * UNIFORM_OFFSET = 0x8a3b
 * Uniforms
 */
export const GL_UNIFORM_OFFSET = 0x8a3b

/**
 * UNIFORM_OFFSET = 0x8a3b
 * Uniforms
 */
export type GL_UNIFORM_OFFSET = typeof GL_UNIFORM_OFFSET

/**
 * UNIFORM_ARRAY_STRIDE = 0x8a3c
 * Uniforms
 */
export const GL_UNIFORM_ARRAY_STRIDE = 0x8a3c

/**
 * UNIFORM_ARRAY_STRIDE = 0x8a3c
 * Uniforms
 */
export type GL_UNIFORM_ARRAY_STRIDE = typeof GL_UNIFORM_ARRAY_STRIDE

/**
 * UNIFORM_MATRIX_STRIDE = 0x8a3d
 * Uniforms
 */
export const GL_UNIFORM_MATRIX_STRIDE = 0x8a3d

/**
 * UNIFORM_MATRIX_STRIDE = 0x8a3d
 * Uniforms
 */
export type GL_UNIFORM_MATRIX_STRIDE = typeof GL_UNIFORM_MATRIX_STRIDE

/**
 * UNIFORM_IS_ROW_MAJOR = 0x8a3e
 * Uniforms
 */
export const GL_UNIFORM_IS_ROW_MAJOR = 0x8a3e

/**
 * UNIFORM_IS_ROW_MAJOR = 0x8a3e
 * Uniforms
 */
export type GL_UNIFORM_IS_ROW_MAJOR = typeof GL_UNIFORM_IS_ROW_MAJOR

/**
 * UNIFORM_BLOCK_BINDING = 0x8a3f
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_BINDING = 0x8a3f

/**
 * UNIFORM_BLOCK_BINDING = 0x8a3f
 * Uniforms
 */
export type GL_UNIFORM_BLOCK_BINDING = typeof GL_UNIFORM_BLOCK_BINDING

/**
 * UNIFORM_BLOCK_DATA_SIZE = 0x8a40
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_DATA_SIZE = 0x8a40

/**
 * UNIFORM_BLOCK_DATA_SIZE = 0x8a40
 * Uniforms
 */
export type GL_UNIFORM_BLOCK_DATA_SIZE = typeof GL_UNIFORM_BLOCK_DATA_SIZE

/**
 * UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42

/**
 * UNIFORM_BLOCK_ACTIVE_UNIFORMS = 0x8a42
 * Uniforms
 */
export type GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS = typeof GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS

/**
 * UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43

/**
 * UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43
 * Uniforms
 */
export type GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = typeof GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES

/**
 * UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44

/**
 * UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44
 * Uniforms
 */
export type GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = typeof GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER

/**
 * UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46
 * Uniforms
 */
export const GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46

/**
 * UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46
 * Uniforms
 */
export type GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = typeof GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER

// Sync objects

/**
 * OBJECT_TYPE = 0x9112
 * Sync objects
 */
export const GL_OBJECT_TYPE = 0x9112

/**
 * OBJECT_TYPE = 0x9112
 * Sync objects
 */
export type GL_OBJECT_TYPE = typeof GL_OBJECT_TYPE

/**
 * SYNC_CONDITION = 0x9113
 * Sync objects
 */
export const GL_SYNC_CONDITION = 0x9113

/**
 * SYNC_CONDITION = 0x9113
 * Sync objects
 */
export type GL_SYNC_CONDITION = typeof GL_SYNC_CONDITION

/**
 * SYNC_STATUS = 0x9114
 * Sync objects
 */
export const GL_SYNC_STATUS = 0x9114

/**
 * SYNC_STATUS = 0x9114
 * Sync objects
 */
export type GL_SYNC_STATUS = typeof GL_SYNC_STATUS

/**
 * SYNC_FLAGS = 0x9115
 * Sync objects
 */
export const GL_SYNC_FLAGS = 0x9115

/**
 * SYNC_FLAGS = 0x9115
 * Sync objects
 */
export type GL_SYNC_FLAGS = typeof GL_SYNC_FLAGS

/**
 * SYNC_FENCE = 0x9116
 * Sync objects
 */
export const GL_SYNC_FENCE = 0x9116

/**
 * SYNC_FENCE = 0x9116
 * Sync objects
 */
export type GL_SYNC_FENCE = typeof GL_SYNC_FENCE

/**
 * SYNC_GPU_COMMANDS_COMPLETE = 0x9117
 * Sync objects
 */
export const GL_SYNC_GPU_COMMANDS_COMPLETE = 0x9117

/**
 * SYNC_GPU_COMMANDS_COMPLETE = 0x9117
 * Sync objects
 */
export type GL_SYNC_GPU_COMMANDS_COMPLETE = typeof GL_SYNC_GPU_COMMANDS_COMPLETE

/**
 * UNSIGNALED = 0x9118
 * Sync objects
 */
export const GL_UNSIGNALED = 0x9118

/**
 * UNSIGNALED = 0x9118
 * Sync objects
 */
export type GL_UNSIGNALED = typeof GL_UNSIGNALED

/**
 * SIGNALED = 0x9119
 * Sync objects
 */
export const GL_SIGNALED = 0x9119

/**
 * SIGNALED = 0x9119
 * Sync objects
 */
export type GL_SIGNALED = typeof GL_SIGNALED

/**
 * ALREADY_SIGNALED = 0x911a
 * Sync objects
 */
export const GL_ALREADY_SIGNALED = 0x911a

/**
 * ALREADY_SIGNALED = 0x911a
 * Sync objects
 */
export type GL_ALREADY_SIGNALED = typeof GL_ALREADY_SIGNALED

/**
 * TIMEOUT_EXPIRED = 0x911b
 * Sync objects
 */
export const GL_TIMEOUT_EXPIRED = 0x911b

/**
 * TIMEOUT_EXPIRED = 0x911b
 * Sync objects
 */
export type GL_TIMEOUT_EXPIRED = typeof GL_TIMEOUT_EXPIRED

/**
 * CONDITION_SATISFIED = 0x911c
 * Sync objects
 */
export const GL_CONDITION_SATISFIED = 0x911c

/**
 * CONDITION_SATISFIED = 0x911c
 * Sync objects
 */
export type GL_CONDITION_SATISFIED = typeof GL_CONDITION_SATISFIED

/**
 * WAIT_FAILED = 0x911d
 * Sync objects
 */
export const GL_WAIT_FAILED = 0x911d

/**
 * WAIT_FAILED = 0x911d
 * Sync objects
 */
export type GL_WAIT_FAILED = typeof GL_WAIT_FAILED

/**
 * SYNC_FLUSH_COMMANDS_BIT = 0x00000001
 * Sync objects
 */
export const GL_SYNC_FLUSH_COMMANDS_BIT = 0x00000001

/**
 * SYNC_FLUSH_COMMANDS_BIT = 0x00000001
 * Sync objects
 */
export type GL_SYNC_FLUSH_COMMANDS_BIT = typeof GL_SYNC_FLUSH_COMMANDS_BIT

// Miscellaneous constants

/**
 * COLOR = 0x1800
 * Miscellaneous constants
 */
export const GL_COLOR = 0x1800

/**
 * COLOR = 0x1800
 * Miscellaneous constants
 */
export type GL_COLOR = typeof GL_COLOR

/**
 * DEPTH = 0x1801
 * Miscellaneous constants
 */
export const GL_DEPTH = 0x1801

/**
 * DEPTH = 0x1801
 * Miscellaneous constants
 */
export type GL_DEPTH = typeof GL_DEPTH

/**
 * STENCIL = 0x1802
 * Miscellaneous constants
 */
export const GL_STENCIL = 0x1802

/**
 * STENCIL = 0x1802
 * Miscellaneous constants
 */
export type GL_STENCIL = typeof GL_STENCIL

/**
 * MIN = 0x8007
 * Miscellaneous constants
 */
export const GL_MIN = 0x8007

/**
 * MIN = 0x8007
 * Miscellaneous constants
 */
export type GL_MIN = typeof GL_MIN

/**
 * MAX = 0x8008
 * Miscellaneous constants
 */
export const GL_MAX = 0x8008

/**
 * MAX = 0x8008
 * Miscellaneous constants
 */
export type GL_MAX = typeof GL_MAX

/**
 * DEPTH_COMPONENT24 = 0x81a6
 * Miscellaneous constants
 */
export const GL_DEPTH_COMPONENT24 = 0x81a6

/**
 * DEPTH_COMPONENT24 = 0x81a6
 * Miscellaneous constants
 */
export type GL_DEPTH_COMPONENT24 = typeof GL_DEPTH_COMPONENT24

/**
 * STREAM_READ = 0x88e1
 * Miscellaneous constants
 */
export const GL_STREAM_READ = 0x88e1

/**
 * STREAM_READ = 0x88e1
 * Miscellaneous constants
 */
export type GL_STREAM_READ = typeof GL_STREAM_READ

/**
 * STREAM_COPY = 0x88e2
 * Miscellaneous constants
 */
export const GL_STREAM_COPY = 0x88e2

/**
 * STREAM_COPY = 0x88e2
 * Miscellaneous constants
 */
export type GL_STREAM_COPY = typeof GL_STREAM_COPY

/**
 * STATIC_READ = 0x88e5
 * Miscellaneous constants
 */
export const GL_STATIC_READ = 0x88e5

/**
 * STATIC_READ = 0x88e5
 * Miscellaneous constants
 */
export type GL_STATIC_READ = typeof GL_STATIC_READ

/**
 * STATIC_COPY = 0x88e6
 * Miscellaneous constants
 */
export const GL_STATIC_COPY = 0x88e6

/**
 * STATIC_COPY = 0x88e6
 * Miscellaneous constants
 */
export type GL_STATIC_COPY = typeof GL_STATIC_COPY

/**
 * DYNAMIC_READ = 0x88e9
 * Miscellaneous constants
 */
export const GL_DYNAMIC_READ = 0x88e9

/**
 * DYNAMIC_READ = 0x88e9
 * Miscellaneous constants
 */
export type GL_DYNAMIC_READ = typeof GL_DYNAMIC_READ

/**
 * DYNAMIC_COPY = 0x88ea
 * Miscellaneous constants
 */
export const GL_DYNAMIC_COPY = 0x88ea

/**
 * DYNAMIC_COPY = 0x88ea
 * Miscellaneous constants
 */
export type GL_DYNAMIC_COPY = typeof GL_DYNAMIC_COPY

/**
 * DEPTH_COMPONENT32F = 0x8cac
 * Miscellaneous constants
 */
export const GL_DEPTH_COMPONENT32F = 0x8cac

/**
 * DEPTH_COMPONENT32F = 0x8cac
 * Miscellaneous constants
 */
export type GL_DEPTH_COMPONENT32F = typeof GL_DEPTH_COMPONENT32F

/**
 * DEPTH32F_STENCIL8 = 0x8cad
 * Miscellaneous constants
 */
export const GL_DEPTH32F_STENCIL8 = 0x8cad

/**
 * DEPTH32F_STENCIL8 = 0x8cad
 * Miscellaneous constants
 */
export type GL_DEPTH32F_STENCIL8 = typeof GL_DEPTH32F_STENCIL8

/**
 * INVALID_INDEX = 0xffffffff
 * Miscellaneous constants
 */
export const GL_INVALID_INDEX = 0xffffffff

/**
 * INVALID_INDEX = 0xffffffff
 * Miscellaneous constants
 */
export type GL_INVALID_INDEX = typeof GL_INVALID_INDEX

/**
 * TIMEOUT_IGNORED = -1
 * Miscellaneous constants
 */
export const GL_TIMEOUT_IGNORED = -1

/**
 * TIMEOUT_IGNORED = -1
 * Miscellaneous constants
 */
export type GL_TIMEOUT_IGNORED = typeof GL_TIMEOUT_IGNORED

/**
 * MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247
 * Miscellaneous constants
 */
export const GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247

/**
 * MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 0x9247
 * Miscellaneous constants
 */
export type GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL = typeof GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL

// ANGLE_instanced_arrays

/**
 * VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88fe
 * Describes the frequency divisor used for instanced rendering.
 * ANGLE_instanced_arrays
 */
export const GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88fe

/**
 * VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88fe
 * Describes the frequency divisor used for instanced rendering.
 * ANGLE_instanced_arrays
 */
export type GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = typeof GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE

// WEBGL_debug_renderer_info

/**
 * UNMASKED_VENDOR_WEBGL = 0x9245
 * Passed to getParameter to get the vendor string of the graphics driver.
 * WEBGL_debug_renderer_info
 */
export const GL_UNMASKED_VENDOR_WEBGL = 0x9245

/**
 * UNMASKED_VENDOR_WEBGL = 0x9245
 * Passed to getParameter to get the vendor string of the graphics driver.
 * WEBGL_debug_renderer_info
 */
export type GL_UNMASKED_VENDOR_WEBGL = typeof GL_UNMASKED_VENDOR_WEBGL

/**
 * UNMASKED_RENDERER_WEBGL = 0x9246
 * Passed to getParameter to get the renderer string of the graphics driver.
 * WEBGL_debug_renderer_info
 */
export const GL_UNMASKED_RENDERER_WEBGL = 0x9246

/**
 * UNMASKED_RENDERER_WEBGL = 0x9246
 * Passed to getParameter to get the renderer string of the graphics driver.
 * WEBGL_debug_renderer_info
 */
export type GL_UNMASKED_RENDERER_WEBGL = typeof GL_UNMASKED_RENDERER_WEBGL

// EXT_texture_filter_anisotropic

/**
 * MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff
 * Returns the maximum available anisotropy.
 * EXT_texture_filter_anisotropic
 */
export const GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff

/**
 * MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84ff
 * Returns the maximum available anisotropy.
 * EXT_texture_filter_anisotropic
 */
export type GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = typeof GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT

/**
 * TEXTURE_MAX_ANISOTROPY_EXT = 0x84fe
 * Passed to texParameter to set the desired maximum anisotropy for a texture.
 * EXT_texture_filter_anisotropic
 */
export const GL_TEXTURE_MAX_ANISOTROPY_EXT = 0x84fe

/**
 * TEXTURE_MAX_ANISOTROPY_EXT = 0x84fe
 * Passed to texParameter to set the desired maximum anisotropy for a texture.
 * EXT_texture_filter_anisotropic
 */
export type GL_TEXTURE_MAX_ANISOTROPY_EXT = typeof GL_TEXTURE_MAX_ANISOTROPY_EXT

// WEBGL_compressed_texture_s3tc

/**
 * COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83f0
 * A DXT1-compressed image in an RGB image format.
 * WEBGL_compressed_texture_s3tc
 */
export const GL_COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83f0

/**
 * COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83f0
 * A DXT1-compressed image in an RGB image format.
 * WEBGL_compressed_texture_s3tc
 */
export type GL_COMPRESSED_RGB_S3TC_DXT1_EXT = typeof GL_COMPRESSED_RGB_S3TC_DXT1_EXT

/**
 * COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83f1
 * A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
 * WEBGL_compressed_texture_s3tc
 */
export const GL_COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83f1

/**
 * COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83f1
 * A DXT1-compressed image in an RGB image format with a simple on/off alpha value.
 * WEBGL_compressed_texture_s3tc
 */
export type GL_COMPRESSED_RGBA_S3TC_DXT1_EXT = typeof GL_COMPRESSED_RGBA_S3TC_DXT1_EXT

/**
 * COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83f2
 * A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
 * WEBGL_compressed_texture_s3tc
 */
export const GL_COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83f2

/**
 * COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83f2
 * A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.
 * WEBGL_compressed_texture_s3tc
 */
export type GL_COMPRESSED_RGBA_S3TC_DXT3_EXT = typeof GL_COMPRESSED_RGBA_S3TC_DXT3_EXT

/**
 * COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83f3
 * A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done.
 * WEBGL_compressed_texture_s3tc
 */
export const GL_COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83f3

/**
 * COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83f3
 * A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done.
 * WEBGL_compressed_texture_s3tc
 */
export type GL_COMPRESSED_RGBA_S3TC_DXT5_EXT = typeof GL_COMPRESSED_RGBA_S3TC_DXT5_EXT

// WEBGL_compressed_texture_etc

/**
 * COMPRESSED_R11_EAC = 0x9270
 * One-channel (red) unsigned format compression.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_R11_EAC = 0x9270

/**
 * COMPRESSED_R11_EAC = 0x9270
 * One-channel (red) unsigned format compression.
 * WEBGL_compressed_texture_etc
 */
export type GL_COMPRESSED_R11_EAC = typeof GL_COMPRESSED_R11_EAC

/**
 * COMPRESSED_SIGNED_R11_EAC = 0x9271
 * One-channel (red) signed format compression.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_SIGNED_R11_EAC = 0x9271

/**
 * COMPRESSED_SIGNED_R11_EAC = 0x9271
 * One-channel (red) signed format compression.
 * WEBGL_compressed_texture_etc
 */
export type GL_COMPRESSED_SIGNED_R11_EAC = typeof GL_COMPRESSED_SIGNED_R11_EAC

/**
 * COMPRESSED_RG11_EAC = 0x9272
 * Two-channel (red and green) unsigned format compression.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_RG11_EAC = 0x9272

/**
 * COMPRESSED_RG11_EAC = 0x9272
 * Two-channel (red and green) unsigned format compression.
 * WEBGL_compressed_texture_etc
 */
export type GL_COMPRESSED_RG11_EAC = typeof GL_COMPRESSED_RG11_EAC

/**
 * COMPRESSED_SIGNED_RG11_EAC = 0x9273
 * Two-channel (red and green) signed format compression.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_SIGNED_RG11_EAC = 0x9273

/**
 * COMPRESSED_SIGNED_RG11_EAC = 0x9273
 * Two-channel (red and green) signed format compression.
 * WEBGL_compressed_texture_etc
 */
export type GL_COMPRESSED_SIGNED_RG11_EAC = typeof GL_COMPRESSED_SIGNED_RG11_EAC

/**
 * COMPRESSED_RGB8_ETC2 = 0x9274
 * Compresses RBG8 data with no alpha channel.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_RGB8_ETC2 = 0x9274

/**
 * COMPRESSED_RGB8_ETC2 = 0x9274
 * Compresses RBG8 data with no alpha channel.
 * WEBGL_compressed_texture_etc
 */
export type GL_COMPRESSED_RGB8_ETC2 = typeof GL_COMPRESSED_RGB8_ETC2

/**
 * COMPRESSED_RGBA8_ETC2_EAC = 0x9275
 * Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_RGBA8_ETC2_EAC = 0x9275

/**
 * COMPRESSED_RGBA8_ETC2_EAC = 0x9275
 * Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately.
 * WEBGL_compressed_texture_etc
 */
export type GL_COMPRESSED_RGBA8_ETC2_EAC = typeof GL_COMPRESSED_RGBA8_ETC2_EAC

/**
 * COMPRESSED_SRGB8_ETC2 = 0x9276
 * Compresses sRBG8 data with no alpha channel.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_SRGB8_ETC2 = 0x9276

/**
 * COMPRESSED_SRGB8_ETC2 = 0x9276
 * Compresses sRBG8 data with no alpha channel.
 * WEBGL_compressed_texture_etc
 */
export type GL_COMPRESSED_SRGB8_ETC2 = typeof GL_COMPRESSED_SRGB8_ETC2

/**
 * COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9277
 * Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9277

/**
 * COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 0x9277
 * Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately.
 * WEBGL_compressed_texture_etc
 */
export type GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = typeof GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC

/**
 * COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9278
 * Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9278

/**
 * COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9278
 * Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
 * WEBGL_compressed_texture_etc
 */
export type GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = typeof GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2

/**
 * COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9279
 * Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
 * WEBGL_compressed_texture_etc
 */
export const GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9279

/**
 * COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 0x9279
 * Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.
 * WEBGL_compressed_texture_etc
 */
export type GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = typeof GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2

// WEBGL_compressed_texture_pvrtc

/**
 * COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8c00
 * RGB compression in 4-bit mode. One block for each 4×4 pixels.
 * WEBGL_compressed_texture_pvrtc
 */
export const GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8c00

/**
 * COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 0x8c00
 * RGB compression in 4-bit mode. One block for each 4×4 pixels.
 * WEBGL_compressed_texture_pvrtc
 */
export type GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG = typeof GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG

/**
 * COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8c02
 * RGBA compression in 4-bit mode. One block for each 4×4 pixels.
 * WEBGL_compressed_texture_pvrtc
 */
export const GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8c02

/**
 * COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 0x8c02
 * RGBA compression in 4-bit mode. One block for each 4×4 pixels.
 * WEBGL_compressed_texture_pvrtc
 */
export type GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = typeof GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG

/**
 * COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8c01
 * RGB compression in 2-bit mode. One block for each 8×4 pixels.
 * WEBGL_compressed_texture_pvrtc
 */
export const GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8c01

/**
 * COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 0x8c01
 * RGB compression in 2-bit mode. One block for each 8×4 pixels.
 * WEBGL_compressed_texture_pvrtc
 */
export type GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG = typeof GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG

/**
 * COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8c03
 * RGBA compression in 2-bit mode. One block for each 8×4 pixe
 * WEBGL_compressed_texture_pvrtc
 */
export const GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8c03

/**
 * COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 0x8c03
 * RGBA compression in 2-bit mode. One block for each 8×4 pixe
 * WEBGL_compressed_texture_pvrtc
 */
export type GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = typeof GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG

// WEBGL_compressed_texture_etc1

/**
 * COMPRESSED_RGB_ETC1_WEBGL = 0x8d64
 * Compresses 24-bit RGB data with no alpha channel.
 * WEBGL_compressed_texture_etc1
 */
export const GL_COMPRESSED_RGB_ETC1_WEBGL = 0x8d64

/**
 * COMPRESSED_RGB_ETC1_WEBGL = 0x8d64
 * Compresses 24-bit RGB data with no alpha channel.
 * WEBGL_compressed_texture_etc1
 */
export type GL_COMPRESSED_RGB_ETC1_WEBGL = typeof GL_COMPRESSED_RGB_ETC1_WEBGL

// WEBGL_depth_texture

/**
 * UNSIGNED_INT_24_8_WEBGL = 0x84fa
 * Unsigned integer type for 24-bit depth texture data.
 * WEBGL_depth_texture
 */
export const GL_UNSIGNED_INT_24_8_WEBGL = 0x84fa

/**
 * UNSIGNED_INT_24_8_WEBGL = 0x84fa
 * Unsigned integer type for 24-bit depth texture data.
 * WEBGL_depth_texture
 */
export type GL_UNSIGNED_INT_24_8_WEBGL = typeof GL_UNSIGNED_INT_24_8_WEBGL

// OES_texture_half_float

/**
 * HALF_FLOAT_OES = 0x8d61
 * Half floating-point type (16-bit).
 * OES_texture_half_float
 */
export const GL_HALF_FLOAT_OES = 0x8d61

/**
 * HALF_FLOAT_OES = 0x8d61
 * Half floating-point type (16-bit).
 * OES_texture_half_float
 */
export type GL_HALF_FLOAT_OES = typeof GL_HALF_FLOAT_OES

// WEBGL_color_buffer_float

/**
 * RGBA32F_EXT = 0x8814
 * RGBA 32-bit floating-point color-renderable format.
 * WEBGL_color_buffer_float
 */
export const GL_RGBA32F_EXT = 0x8814

/**
 * RGBA32F_EXT = 0x8814
 * RGBA 32-bit floating-point color-renderable format.
 * WEBGL_color_buffer_float
 */
export type GL_RGBA32F_EXT = typeof GL_RGBA32F_EXT

/**
 * RGB32F_EXT = 0x8815
 * RGB 32-bit floating-point color-renderable format.
 * WEBGL_color_buffer_float
 */
export const GL_RGB32F_EXT = 0x8815

/**
 * RGB32F_EXT = 0x8815
 * RGB 32-bit floating-point color-renderable format.
 * WEBGL_color_buffer_float
 */
export type GL_RGB32F_EXT = typeof GL_RGB32F_EXT

/**
 * FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211
 * WEBGL_color_buffer_float
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211

/**
 * FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 0x8211
 * WEBGL_color_buffer_float
 */
export type GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = typeof GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT

/**
 * UNSIGNED_NORMALIZED_EXT = 0x8c17
 * WEBGL_color_buffer_float
 */
export const GL_UNSIGNED_NORMALIZED_EXT = 0x8c17

/**
 * UNSIGNED_NORMALIZED_EXT = 0x8c17
 * WEBGL_color_buffer_float
 */
export type GL_UNSIGNED_NORMALIZED_EXT = typeof GL_UNSIGNED_NORMALIZED_EXT

// EXT_blend_minmax

/**
 * MIN_EXT = 0x8007
 * Produces the minimum color components of the source and destination colors.
 * EXT_blend_minmax
 */
export const GL_MIN_EXT = 0x8007

/**
 * MIN_EXT = 0x8007
 * Produces the minimum color components of the source and destination colors.
 * EXT_blend_minmax
 */
export type GL_MIN_EXT = typeof GL_MIN_EXT

/**
 * MAX_EXT = 0x8008
 * Produces the maximum color components of the source and destination colors.
 * EXT_blend_minmax
 */
export const GL_MAX_EXT = 0x8008

/**
 * MAX_EXT = 0x8008
 * Produces the maximum color components of the source and destination colors.
 * EXT_blend_minmax
 */
export type GL_MAX_EXT = typeof GL_MAX_EXT

// EXT_sRGB

/**
 * SRGB_EXT = 0x8c40
 * Unsized sRGB format that leaves the precision up to the driver.
 * EXT_sRGB
 */
export const GL_SRGB_EXT = 0x8c40

/**
 * SRGB_EXT = 0x8c40
 * Unsized sRGB format that leaves the precision up to the driver.
 * EXT_sRGB
 */
export type GL_SRGB_EXT = typeof GL_SRGB_EXT

/**
 * SRGB_ALPHA_EXT = 0x8c42
 * Unsized sRGB format with unsized alpha component.
 * EXT_sRGB
 */
export const GL_SRGB_ALPHA_EXT = 0x8c42

/**
 * SRGB_ALPHA_EXT = 0x8c42
 * Unsized sRGB format with unsized alpha component.
 * EXT_sRGB
 */
export type GL_SRGB_ALPHA_EXT = typeof GL_SRGB_ALPHA_EXT

/**
 * SRGB8_ALPHA8_EXT = 0x8c43
 * Sized (8-bit) sRGB and alpha formats.
 * EXT_sRGB
 */
export const GL_SRGB8_ALPHA8_EXT = 0x8c43

/**
 * SRGB8_ALPHA8_EXT = 0x8c43
 * Sized (8-bit) sRGB and alpha formats.
 * EXT_sRGB
 */
export type GL_SRGB8_ALPHA8_EXT = typeof GL_SRGB8_ALPHA8_EXT

/**
 * FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210
 * Returns the framebuffer color encoding.
 * EXT_sRGB
 */
export const GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210

/**
 * FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 0x8210
 * Returns the framebuffer color encoding.
 * EXT_sRGB
 */
export type GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = typeof GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT

// OES_standard_derivatives

/**
 * FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8b8b
 * Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth.
 * OES_standard_derivatives
 */
export const GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8b8b

/**
 * FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8b8b
 * Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth.
 * OES_standard_derivatives
 */
export type GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES = typeof GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES

// WEBGL_draw_buffers

/**
 * COLOR_ATTACHMENT0_WEBGL = 0x8ce0
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT0_WEBGL = 0x8ce0

/**
 * COLOR_ATTACHMENT0_WEBGL = 0x8ce0
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT0_WEBGL = typeof GL_COLOR_ATTACHMENT0_WEBGL

/**
 * COLOR_ATTACHMENT1_WEBGL = 0x8ce1
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT1_WEBGL = 0x8ce1

/**
 * COLOR_ATTACHMENT1_WEBGL = 0x8ce1
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT1_WEBGL = typeof GL_COLOR_ATTACHMENT1_WEBGL

/**
 * COLOR_ATTACHMENT2_WEBGL = 0x8ce2
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT2_WEBGL = 0x8ce2

/**
 * COLOR_ATTACHMENT2_WEBGL = 0x8ce2
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT2_WEBGL = typeof GL_COLOR_ATTACHMENT2_WEBGL

/**
 * COLOR_ATTACHMENT3_WEBGL = 0x8ce3
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT3_WEBGL = 0x8ce3

/**
 * COLOR_ATTACHMENT3_WEBGL = 0x8ce3
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT3_WEBGL = typeof GL_COLOR_ATTACHMENT3_WEBGL

/**
 * COLOR_ATTACHMENT4_WEBGL = 0x8ce4
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT4_WEBGL = 0x8ce4

/**
 * COLOR_ATTACHMENT4_WEBGL = 0x8ce4
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT4_WEBGL = typeof GL_COLOR_ATTACHMENT4_WEBGL

/**
 * COLOR_ATTACHMENT5_WEBGL = 0x8ce5
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT5_WEBGL = 0x8ce5

/**
 * COLOR_ATTACHMENT5_WEBGL = 0x8ce5
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT5_WEBGL = typeof GL_COLOR_ATTACHMENT5_WEBGL

/**
 * COLOR_ATTACHMENT6_WEBGL = 0x8ce6
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT6_WEBGL = 0x8ce6

/**
 * COLOR_ATTACHMENT6_WEBGL = 0x8ce6
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT6_WEBGL = typeof GL_COLOR_ATTACHMENT6_WEBGL

/**
 * COLOR_ATTACHMENT7_WEBGL = 0x8ce7
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT7_WEBGL = 0x8ce7

/**
 * COLOR_ATTACHMENT7_WEBGL = 0x8ce7
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT7_WEBGL = typeof GL_COLOR_ATTACHMENT7_WEBGL

/**
 * COLOR_ATTACHMENT8_WEBGL = 0x8ce8
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT8_WEBGL = 0x8ce8

/**
 * COLOR_ATTACHMENT8_WEBGL = 0x8ce8
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT8_WEBGL = typeof GL_COLOR_ATTACHMENT8_WEBGL

/**
 * COLOR_ATTACHMENT9_WEBGL = 0x8ce9
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT9_WEBGL = 0x8ce9

/**
 * COLOR_ATTACHMENT9_WEBGL = 0x8ce9
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT9_WEBGL = typeof GL_COLOR_ATTACHMENT9_WEBGL

/**
 * COLOR_ATTACHMENT10_WEBGL = 0x8cea
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT10_WEBGL = 0x8cea

/**
 * COLOR_ATTACHMENT10_WEBGL = 0x8cea
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT10_WEBGL = typeof GL_COLOR_ATTACHMENT10_WEBGL

/**
 * COLOR_ATTACHMENT11_WEBGL = 0x8ceb
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT11_WEBGL = 0x8ceb

/**
 * COLOR_ATTACHMENT11_WEBGL = 0x8ceb
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT11_WEBGL = typeof GL_COLOR_ATTACHMENT11_WEBGL

/**
 * COLOR_ATTACHMENT12_WEBGL = 0x8cec
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT12_WEBGL = 0x8cec

/**
 * COLOR_ATTACHMENT12_WEBGL = 0x8cec
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT12_WEBGL = typeof GL_COLOR_ATTACHMENT12_WEBGL

/**
 * COLOR_ATTACHMENT13_WEBGL = 0x8ced
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT13_WEBGL = 0x8ced

/**
 * COLOR_ATTACHMENT13_WEBGL = 0x8ced
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT13_WEBGL = typeof GL_COLOR_ATTACHMENT13_WEBGL

/**
 * COLOR_ATTACHMENT14_WEBGL = 0x8cee
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT14_WEBGL = 0x8cee

/**
 * COLOR_ATTACHMENT14_WEBGL = 0x8cee
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT14_WEBGL = typeof GL_COLOR_ATTACHMENT14_WEBGL

/**
 * COLOR_ATTACHMENT15_WEBGL = 0x8cef
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export const GL_COLOR_ATTACHMENT15_WEBGL = 0x8cef

/**
 * COLOR_ATTACHMENT15_WEBGL = 0x8cef
 * Framebuffer color attachment point
 * WEBGL_draw_buffers
 */
export type GL_COLOR_ATTACHMENT15_WEBGL = typeof GL_COLOR_ATTACHMENT15_WEBGL

/**
 * DRAW_BUFFER0_WEBGL = 0x8825
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER0_WEBGL = 0x8825

/**
 * DRAW_BUFFER0_WEBGL = 0x8825
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER0_WEBGL = typeof GL_DRAW_BUFFER0_WEBGL

/**
 * DRAW_BUFFER1_WEBGL = 0x8826
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER1_WEBGL = 0x8826

/**
 * DRAW_BUFFER1_WEBGL = 0x8826
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER1_WEBGL = typeof GL_DRAW_BUFFER1_WEBGL

/**
 * DRAW_BUFFER2_WEBGL = 0x8827
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER2_WEBGL = 0x8827

/**
 * DRAW_BUFFER2_WEBGL = 0x8827
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER2_WEBGL = typeof GL_DRAW_BUFFER2_WEBGL

/**
 * DRAW_BUFFER3_WEBGL = 0x8828
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER3_WEBGL = 0x8828

/**
 * DRAW_BUFFER3_WEBGL = 0x8828
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER3_WEBGL = typeof GL_DRAW_BUFFER3_WEBGL

/**
 * DRAW_BUFFER4_WEBGL = 0x8829
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER4_WEBGL = 0x8829

/**
 * DRAW_BUFFER4_WEBGL = 0x8829
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER4_WEBGL = typeof GL_DRAW_BUFFER4_WEBGL

/**
 * DRAW_BUFFER5_WEBGL = 0x882a
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER5_WEBGL = 0x882a

/**
 * DRAW_BUFFER5_WEBGL = 0x882a
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER5_WEBGL = typeof GL_DRAW_BUFFER5_WEBGL

/**
 * DRAW_BUFFER6_WEBGL = 0x882b
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER6_WEBGL = 0x882b

/**
 * DRAW_BUFFER6_WEBGL = 0x882b
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER6_WEBGL = typeof GL_DRAW_BUFFER6_WEBGL

/**
 * DRAW_BUFFER7_WEBGL = 0x882c
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER7_WEBGL = 0x882c

/**
 * DRAW_BUFFER7_WEBGL = 0x882c
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER7_WEBGL = typeof GL_DRAW_BUFFER7_WEBGL

/**
 * DRAW_BUFFER8_WEBGL = 0x882d
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER8_WEBGL = 0x882d

/**
 * DRAW_BUFFER8_WEBGL = 0x882d
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER8_WEBGL = typeof GL_DRAW_BUFFER8_WEBGL

/**
 * DRAW_BUFFER9_WEBGL = 0x882e
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER9_WEBGL = 0x882e

/**
 * DRAW_BUFFER9_WEBGL = 0x882e
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER9_WEBGL = typeof GL_DRAW_BUFFER9_WEBGL

/**
 * DRAW_BUFFER10_WEBGL = 0x882f
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER10_WEBGL = 0x882f

/**
 * DRAW_BUFFER10_WEBGL = 0x882f
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER10_WEBGL = typeof GL_DRAW_BUFFER10_WEBGL

/**
 * DRAW_BUFFER11_WEBGL = 0x8830
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER11_WEBGL = 0x8830

/**
 * DRAW_BUFFER11_WEBGL = 0x8830
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER11_WEBGL = typeof GL_DRAW_BUFFER11_WEBGL

/**
 * DRAW_BUFFER12_WEBGL = 0x8831
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER12_WEBGL = 0x8831

/**
 * DRAW_BUFFER12_WEBGL = 0x8831
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER12_WEBGL = typeof GL_DRAW_BUFFER12_WEBGL

/**
 * DRAW_BUFFER13_WEBGL = 0x8832
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER13_WEBGL = 0x8832

/**
 * DRAW_BUFFER13_WEBGL = 0x8832
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER13_WEBGL = typeof GL_DRAW_BUFFER13_WEBGL

/**
 * DRAW_BUFFER14_WEBGL = 0x8833
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER14_WEBGL = 0x8833

/**
 * DRAW_BUFFER14_WEBGL = 0x8833
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER14_WEBGL = typeof GL_DRAW_BUFFER14_WEBGL

/**
 * DRAW_BUFFER15_WEBGL = 0x8834
 * Draw buffer
 * WEBGL_draw_buffers
 */
export const GL_DRAW_BUFFER15_WEBGL = 0x8834

/**
 * DRAW_BUFFER15_WEBGL = 0x8834
 * Draw buffer
 * WEBGL_draw_buffers
 */
export type GL_DRAW_BUFFER15_WEBGL = typeof GL_DRAW_BUFFER15_WEBGL

/**
 * MAX_COLOR_ATTACHMENTS_WEBGL = 0x8cdf
 * Maximum number of framebuffer color attachment points
 * WEBGL_draw_buffers
 */
export const GL_MAX_COLOR_ATTACHMENTS_WEBGL = 0x8cdf

/**
 * MAX_COLOR_ATTACHMENTS_WEBGL = 0x8cdf
 * Maximum number of framebuffer color attachment points
 * WEBGL_draw_buffers
 */
export type GL_MAX_COLOR_ATTACHMENTS_WEBGL = typeof GL_MAX_COLOR_ATTACHMENTS_WEBGL

/**
 * MAX_DRAW_BUFFERS_WEBGL = 0x8824
 * Maximum number of draw buffers
 * WEBGL_draw_buffers
 */
export const GL_MAX_DRAW_BUFFERS_WEBGL = 0x8824

/**
 * MAX_DRAW_BUFFERS_WEBGL = 0x8824
 * Maximum number of draw buffers
 * WEBGL_draw_buffers
 */
export type GL_MAX_DRAW_BUFFERS_WEBGL = typeof GL_MAX_DRAW_BUFFERS_WEBGL

// OES_vertex_array_object

/**
 * VERTEX_ARRAY_BINDING_OES = 0x85b5
 * The bound vertex array object (VAO).
 * OES_vertex_array_object
 */
export const GL_VERTEX_ARRAY_BINDING_OES = 0x85b5

/**
 * VERTEX_ARRAY_BINDING_OES = 0x85b5
 * The bound vertex array object (VAO).
 * OES_vertex_array_object
 */
export type GL_VERTEX_ARRAY_BINDING_OES = typeof GL_VERTEX_ARRAY_BINDING_OES

// EXT_disjoint_timer_query

/**
 * QUERY_COUNTER_BITS_EXT = 0x8864
 * The number of bits used to hold the query result for the given target.
 * EXT_disjoint_timer_query
 */
export const GL_QUERY_COUNTER_BITS_EXT = 0x8864

/**
 * QUERY_COUNTER_BITS_EXT = 0x8864
 * The number of bits used to hold the query result for the given target.
 * EXT_disjoint_timer_query
 */
export type GL_QUERY_COUNTER_BITS_EXT = typeof GL_QUERY_COUNTER_BITS_EXT

/**
 * CURRENT_QUERY_EXT = 0x8865
 * The currently active query.
 * EXT_disjoint_timer_query
 */
export const GL_CURRENT_QUERY_EXT = 0x8865

/**
 * CURRENT_QUERY_EXT = 0x8865
 * The currently active query.
 * EXT_disjoint_timer_query
 */
export type GL_CURRENT_QUERY_EXT = typeof GL_CURRENT_QUERY_EXT

/**
 * QUERY_RESULT_EXT = 0x8866
 * The query result.
 * EXT_disjoint_timer_query
 */
export const GL_QUERY_RESULT_EXT = 0x8866

/**
 * QUERY_RESULT_EXT = 0x8866
 * The query result.
 * EXT_disjoint_timer_query
 */
export type GL_QUERY_RESULT_EXT = typeof GL_QUERY_RESULT_EXT

/**
 * QUERY_RESULT_AVAILABLE_EXT = 0x8867
 * A Boolean indicating whether or not a query result is available.
 * EXT_disjoint_timer_query
 */
export const GL_QUERY_RESULT_AVAILABLE_EXT = 0x8867

/**
 * QUERY_RESULT_AVAILABLE_EXT = 0x8867
 * A Boolean indicating whether or not a query result is available.
 * EXT_disjoint_timer_query
 */
export type GL_QUERY_RESULT_AVAILABLE_EXT = typeof GL_QUERY_RESULT_AVAILABLE_EXT

/**
 * TIME_ELAPSED_EXT = 0x88bf
 * Elapsed time (in nanoseconds).
 * EXT_disjoint_timer_query
 */
export const GL_TIME_ELAPSED_EXT = 0x88bf

/**
 * TIME_ELAPSED_EXT = 0x88bf
 * Elapsed time (in nanoseconds).
 * EXT_disjoint_timer_query
 */
export type GL_TIME_ELAPSED_EXT = typeof GL_TIME_ELAPSED_EXT

/**
 * TIMESTAMP_EXT = 0x8e28
 * The current time.
 * EXT_disjoint_timer_query
 */
export const GL_TIMESTAMP_EXT = 0x8e28

/**
 * TIMESTAMP_EXT = 0x8e28
 * The current time.
 * EXT_disjoint_timer_query
 */
export type GL_TIMESTAMP_EXT = typeof GL_TIMESTAMP_EXT

/**
 * GPU_DISJOINT_EXT = 0x8fbb
 * A Boolean indicating whether or not the GPU performed any disjoint operation.
 * EXT_disjoint_timer_query
 */
export const GL_GPU_DISJOINT_EXT = 0x8fbb

/**
 * GPU_DISJOINT_EXT = 0x8fbb
 * A Boolean indicating whether or not the GPU performed any disjoint operation.
 * EXT_disjoint_timer_query
 */
export type GL_GPU_DISJOINT_EXT = typeof GL_GPU_DISJOINT_EXT
