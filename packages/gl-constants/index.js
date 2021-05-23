// WebGL constants from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants
// It gets minified better to use the raw constants instad of using webglContext.CONSTANT
// Those values are standard in all browsers.

/** Clearing buffers: Passed to clear to clear the current depth buffer. */
export const GL_DEPTH_BUFFER_BIT = 256

/** Clearing buffers: Passed to clear to clear the current stencil buffer. */
export const GL_STENCIL_BUFFER_BIT = 1024

/** Clearing buffers: Passed to clear to clear the current color buffer. */
export const GL_COLOR_BUFFER_BIT = 16384

/** Rendering primitives: Passed to drawElements or drawArrays to draw single points. */
export const GL_POINTS = 0

/** Rendering primitives: Passed to drawElements or drawArrays to draw lines. Each vertex connects to the one after it. */
export const GL_LINES = 1

/** Rendering primitives: Passed to drawElements or drawArrays to draw lines. Each set of two vertices is treated as a separate line segment. */
export const GL_LINE_LOOP = 2

/** Rendering primitives: Passed to drawElements or drawArrays to draw a connected group of line segments from the first vertex to the last. */
export const GL_LINE_STRIP = 3

/** Rendering primitives: Passed to drawElements or drawArrays to draw triangles. Each set of three vertices creates a separate triangle. */
export const GL_TRIANGLES = 4

/** Rendering primitives: Passed to drawElements or drawArrays to draw a connected group of triangles. */
export const GL_TRIANGLE_STRIP = 5

/** Rendering primitives: Passed to drawElements or drawArrays to draw a connected group of triangles. Each vertex connects to the previous and the first vertex in the fan. */
export const GL_TRIANGLE_FAN = 6

/** Blending modes: Passed to blendFunc or blendFuncSeparate to turn off a component. */
export const GL_ZERO = 0

/** Blending modes: Passed to blendFunc or blendFuncSeparate to turn on a component. */
export const GL_ONE = 1

/** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by the source elements color. */
export const GL_SRC_COLOR = 768

/** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source elements color. */
export const GL_ONE_MINUS_SRC_COLOR = 769

/** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by the source's alpha. */
export const GL_SRC_ALPHA = 770

/** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the source's alpha. */
export const GL_ONE_MINUS_SRC_ALPHA = 771

/** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's alpha. */
export const GL_DST_ALPHA = 772

/** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's alpha. */
export const GL_ONE_MINUS_DST_ALPHA = 773

/** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by the destination's color. */
export const GL_DST_COLOR = 774

/** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by one minus the destination's color. */
export const GL_ONE_MINUS_DST_COLOR = 775

/** Blending modes: Passed to blendFunc or blendFuncSeparate to multiply a component by the minimum of source's alpha or one minus the destination's alpha. */
export const GL_SRC_ALPHA_SATURATE = 776

/** Blending modes: Passed to blendFunc or blendFuncSeparate to specify a constant color blend function. */
export const GL_CONSTANT_COLOR = 32769

/** Blending modes: Passed to blendFunc or blendFuncSeparate to specify one minus a constant color blend function. */
export const GL_ONE_MINUS_CONSTANT_COLOR = 32770

/** Blending modes: Passed to blendFunc or blendFuncSeparate to specify a constant alpha blend function. */
export const GL_CONSTANT_ALPHA = 32771

/** Blending modes: Passed to blendFunc or blendFuncSeparate to specify one minus a constant alpha blend function. */
export const GL_ONE_MINUS_CONSTANT_ALPHA = 32772

/** Blending equations: Passed to blendEquation or blendEquationSeparate to set an addition blend function. */
export const GL_FUNC_ADD = 32774

/** Blending equations: Passed to blendEquation or blendEquationSeparate to specify a subtraction blend function (source - destination). */
export const GL_FUNC_SUBTRACT = 32778

/** Blending equations: Passed to blendEquation or blendEquationSeparate to specify a reverse subtraction blend function (destination - source). */
export const GL_FUNC_REVERSE_SUBTRACT = 32779

/** Getting GL parameter information: Passed to getParameter to get the current RGB blend function. */
export const GL_BLEND_EQUATION = 32777

/** Getting GL parameter information: Passed to getParameter to get the current RGB blend function. Same as BLEND_EQUATION */
export const GL_BLEND_EQUATION_RGB = 32777

/** Getting GL parameter information: Passed to getParameter to get the current alpha blend function. Same as BLEND_EQUATION */
export const GL_BLEND_EQUATION_ALPHA = 34877

/** Getting GL parameter information: Passed to getParameter to get the current destination RGB blend function. */
export const GL_BLEND_DST_RGB = 32968

/** Getting GL parameter information: Passed to getParameter to get the current destination RGB blend function. */
export const GL_BLEND_SRC_RGB = 32969

/** Getting GL parameter information: Passed to getParameter to get the current destination alpha blend function. */
export const GL_BLEND_DST_ALPHA = 32970

/** Getting GL parameter information: Passed to getParameter to get the current source alpha blend function. */
export const GL_BLEND_SRC_ALPHA = 32971

/** Getting GL parameter information: Passed to getParameter to return a the current blend color. */
export const GL_BLEND_COLOR = 32773

/** Getting GL parameter information: Passed to getParameter to get the array buffer binding. */
export const GL_ARRAY_BUFFER_BINDING = 34964

/** Getting GL parameter information: Passed to getParameter to get the current element array buffer. */
export const GL_ELEMENT_ARRAY_BUFFER_BINDING = 34965

/** Getting GL parameter information: Passed to getParameter to get the current lineWidth (set by the lineWidth method). */
export const GL_LINE_WIDTH = 2849

/** Getting GL parameter information: Passed to getParameter to get the current size of a point drawn with GL_POINTS */
export const GL_ALIASED_POINT_SIZE_RANGE = 33901

/** Getting GL parameter information: Passed to getParameter to get the range of available widths for a line. Returns a length-2 array with the lo value at 0, and hight at 1. */
export const GL_ALIASED_LINE_WIDTH_RANGE = 33902

/** Getting GL parameter information: Passed to getParameter to get the current value of cullFace. Should return FRONT, BACK, or FRONT_AND_BACK */
export const GL_CULL_FACE_MODE = 2885

/** Getting GL parameter information: Passed to getParameter to determine the current value of frontFace. Should return CW or CCW. */
export const GL_FRONT_FACE = 2886

/** Getting GL parameter information: Passed to getParameter to return a length-2 array of floats giving the current depth range. */
export const GL_DEPTH_RANGE = 2928

/** Getting GL parameter information: Passed to getParameter to determine if the depth write mask is enabled. */
export const GL_DEPTH_WRITEMASK = 2930

/** Getting GL parameter information: Passed to getParameter to determine the current depth clear value. */
export const GL_DEPTH_CLEAR_VALUE = 2931

/** Getting GL parameter information: Passed to getParameter to get the current depth function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL. */
export const GL_DEPTH_FUNC = 2932

/** Getting GL parameter information: Passed to getParameter to get the value the stencil will be cleared to. */
export const GL_STENCIL_CLEAR_VALUE = 2961

/** Getting GL parameter information: Passed to getParameter to get the current stencil function. Returns NEVER, ALWAYS, LESS, EQUAL, LEQUAL, GREATER, GEQUAL, or NOTEQUAL. */
export const GL_STENCIL_FUNC = 2962

/** Getting GL parameter information: Passed to getParameter to get the current stencil fail function. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP. */
export const GL_STENCIL_FAIL = 2964

/** Getting GL parameter information: Passed to getParameter to get the current stencil fail function should the depth buffer test fail. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP. */
export const GL_STENCIL_PASS_DEPTH_FAIL = 2965

/** Getting GL parameter information: Passed to getParameter to get the current stencil fail function should the depth buffer test pass. Should return KEEP, REPLACE, INCR, DECR, INVERT, INCR_WRAP, or DECR_WRAP. */
export const GL_STENCIL_PASS_DEPTH_PASS = 2966

/** Getting GL parameter information: Passed to getParameter to get the reference value used for stencil tests. */
export const GL_STENCIL_REF = 2967

/** Getting GL parameter information: passed to getParameter */
export const GL_STENCIL_VALUE_MASK = 2963

/** Getting GL parameter information: passed to getParameter */
export const GL_STENCIL_WRITEMASK = 2968

/** Getting GL parameter information: passed to getParameter */
export const GL_STENCIL_BACK_FUNC = 34816

/** Getting GL parameter information: passed to getParameter */
export const GL_STENCIL_BACK_FAIL = 34817

/** Getting GL parameter information: passed to getParameter */
export const GL_STENCIL_BACK_PASS_DEPTH_FAIL = 34818

/** Getting GL parameter information: passed to getParameter */
export const GL_STENCIL_BACK_PASS_DEPTH_PASS = 34819

/** Getting GL parameter information: passed to getParameter */
export const GL_STENCIL_BACK_REF = 36003

/** Getting GL parameter information: passed to getParameter */
export const GL_STENCIL_BACK_VALUE_MASK = 36004

/** Getting GL parameter information: passed to getParameter */
export const GL_STENCIL_BACK_WRITEMASK = 36005

/** Getting GL parameter information: passed to getParameter, returns an Int32Array with four elements for the current viewport dimensions. */
export const GL_VIEWPORT = 2978

/** Getting GL parameter information: passed to getParameter, returns an Int32Array with four elements for the current scissor box dimensions. */
export const GL_SCISSOR_BOX = 3088

/** Getting GL parameter information: passed to getParameter */
export const GL_COLOR_CLEAR_VALUE = 3106

/** Getting GL parameter information: passed to getParameter */
export const GL_COLOR_WRITEMASK = 3107

/** Getting GL parameter information: passed to getParameter */
export const GL_UNPACK_ALIGNMENT = 3317

/** Getting GL parameter information: passed to getParameter */
export const GL_PACK_ALIGNMENT = 3333

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_TEXTURE_SIZE = 3379

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_VIEWPORT_DIMS = 3386

/** Getting GL parameter information: passed to getParameter */
export const GL_SUBPIXEL_BITS = 3408

/** Getting GL parameter information: passed to getParameter */
export const GL_RED_BITS = 3410

/** Getting GL parameter information: passed to getParameter */
export const GL_GREEN_BITS = 3411

/** Getting GL parameter information: passed to getParameter */
export const GL_BLUE_BITS = 3412

/** Getting GL parameter information: passed to getParameter */
export const GL_ALPHA_BITS = 3413

/** Getting GL parameter information: passed to getParameter */
export const GL_DEPTH_BITS = 3414

/** Getting GL parameter information: passed to getParameter */
export const GL_STENCIL_BITS = 3415

/** Getting GL parameter information: passed to getParameter */
export const GL_POLYGON_OFFSET_UNITS = 10752

/** Getting GL parameter information: passed to getParameter */
export const GL_POLYGON_OFFSET_FACTOR = 32824

/** Getting GL parameter information: passed to getParameter */
export const GL_TEXTURE_BINDING_2D = 32873

/** Getting GL parameter information: passed to getParameter */
export const GL_SAMPLE_BUFFERS = 32936

/** Getting GL parameter information: passed to getParameter */
export const GL_SAMPLES = 32937

/** Getting GL parameter information: passed to getParameter */
export const GL_SAMPLE_COVERAGE_VALUE = 32938

/** Getting GL parameter information: passed to getParameter */
export const GL_SAMPLE_COVERAGE_INVERT = 32939

/** Getting GL parameter information: passed to getParameter */
export const GL_COMPRESSED_TEXTURE_FORMATS = 34467

/** Getting GL parameter information: passed to getParameter */
export const GL_VENDOR = 7936

/** Getting GL parameter information: passed to getParameter */
export const GL_RENDERER = 7937

/** Getting GL parameter information: passed to getParameter */
export const GL_VERSION = 7938

/** Getting GL parameter information: passed to getParameter */
export const GL_IMPLEMENTATION_COLOR_READ_TYPE = 35738

/** Getting GL parameter information: passed to getParameter */
export const GL_IMPLEMENTATION_COLOR_READ_FORMAT = 35739

/** Getting GL parameter information: passed to getParameter */
export const GL_BROWSER_DEFAULT_WEBGL = 37444

/** Buffers: Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and not change often. */
export const GL_STATIC_DRAW = 35044

/** Buffers: Passed to bufferData as a hint about whether the contents of the buffer are likely to not be used often. */
export const GL_STREAM_DRAW = 35040

/** Buffers: Passed to bufferData as a hint about whether the contents of the buffer are likely to be used often and change often. */
export const GL_DYNAMIC_DRAW = 35048

/** Buffers: Passed to bindBuffer or bufferData to specify the type of buffer being used. */
export const GL_ARRAY_BUFFER = 34962

/** Buffers: Passed to bindBuffer or bufferData to specify the type of buffer being used. */
export const GL_ELEMENT_ARRAY_BUFFER = 34963

/** Buffers: Passed to getBufferParameter to get a buffer's size. */
export const GL_BUFFER_SIZE = 34660

/** Buffers: Passed to getBufferParameter to get the hint for the buffer passed in when it was created. */
export const GL_BUFFER_USAGE = 34661

/** Vertex attributes: Passed to getVertexAttrib to read back the current vertex attribute. */
export const GL_CURRENT_VERTEX_ATTRIB = 34342

/** Vertex attributes: Passed to getVertexAttrib */
export const GL_VERTEX_ATTRIB_ARRAY_ENABLED = 34338

/** Vertex attributes: Passed to getVertexAttrib */
export const GL_VERTEX_ATTRIB_ARRAY_SIZE = 34339

/** Vertex attributes: Passed to getVertexAttrib */
export const GL_VERTEX_ATTRIB_ARRAY_STRIDE = 34340

/** Vertex attributes: Passed to getVertexAttrib */
export const GL_VERTEX_ATTRIB_ARRAY_TYPE = 34341

/** Vertex attributes: Passed to getVertexAttrib */
export const GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922

/** Vertex attributes: Passed to getVertexAttrib */
export const GL_VERTEX_ATTRIB_ARRAY_POINTER = 34373

/** Vertex attributes: Passed to getVertexAttrib */
export const GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975

/** Culling: Passed to enable/disable to turn on/off culling. Can also be used with getParameter to find the current culling method. */
export const GL_CULL_FACE = 2884

/** Culling: Passed to cullFace to specify that only front faces should be culled. */
export const GL_FRONT = 1028

/** Culling: Passed to cullFace to specify that only back faces should be culled. */
export const GL_BACK = 1029

/** Culling: Passed to cullFace to specify that front and back faces should be culled. */
export const GL_FRONT_AND_BACK = 1032

/** Enabling and disabling: Passed to enable/disable to turn on/off blending. Can also be used with getParameter to find the current blending method. */
export const GL_BLEND = 3042

/** Enabling and disabling: Passed to enable/disable to turn on/off the depth test. Can also be used with getParameter to query the depth test. */
export const GL_DEPTH_TEST = 2929

/** Enabling and disabling: Passed to enable/disable to turn on/off dithering. Can also be used with getParameter to find the current dithering method. */
export const GL_DITHER = 3024

/** Enabling and disabling: Passed to enable/disable to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with getParameter to query the scissor test. */
export const GL_POLYGON_OFFSET_FILL = 32823

/** Enabling and disabling: Passed to enable/disable to turn on/off the alpha to coverage. Used in multi-sampling alpha channels. */
export const GL_SAMPLE_ALPHA_TO_COVERAGE = 32926

/** Enabling and disabling: Passed to enable/disable to turn on/off the sample coverage. Used in multi-sampling. */
export const GL_SAMPLE_COVERAGE = 32928

/** Enabling and disabling: Passed to enable/disable to turn on/off the scissor test. Can also be used with getParameter to query the scissor test. */
export const GL_SCISSOR_TEST = 3089

/** Enabling and disabling: Passed to enable/disable to turn on/off the stencil test. Can also be used with getParameter to query the stencil test. */
export const GL_STENCIL_TEST = 2960

/** Errors: Returned from getError. */
export const GL_NO_ERROR = 0

/** Errors: Returned from getError. */
export const GL_INVALID_ENUM = 1280

/** Errors: Returned from getError. */
export const GL_INVALID_VALUE = 1281

/** Errors: Returned from getError. */
export const GL_INVALID_OPERATION = 1282

/** Errors: Returned from getError. */
export const GL_OUT_OF_MEMORY = 1285

/** Errors: Returned from getError. */
export const GL_CONTEXT_LOST_WEBGL = 37442

/** Front face directions: Passed to frontFace to specify the front face of a polygon is drawn in the clockwise direction */
export const GL_CW = 2304

/** Front face directions: Passed to frontFace to specify the front face of a polygon is drawn in the counter clockwise direction */
export const GL_CCW = 2305

/** Hints: There is no preference for this behavior. */
export const GL_DONT_CARE = 4352

/** Hints: The most efficient behavior should be used. */
export const GL_FASTEST = 4353

/** Hints: The most correct or the highest quality option should be used. */
export const GL_NICEST = 4354

/** Hints: Hint for the quality of filtering when generating mipmap images with WebGLRenderingContext.generateMipmap(). */
export const GL_GENERATE_MIPMAP_HINT = 33170

/** Data types: */
export const GL_BYTE = 5120

/** Data types and Pixel types: */
export const GL_UNSIGNED_BYTE = 5121

/** Data types: */
export const GL_SHORT = 5122

/** Data types: */
export const GL_UNSIGNED_SHORT = 5123

/** Data types: */
export const GL_INT = 5124

/** Data types: */
export const GL_UNSIGNED_INT = 5125

/** Data types: */
export const GL_FLOAT = 5126

/** Pixel formats: */
export const GL_DEPTH_COMPONENT = 6402

/** Pixel formats: */
export const GL_ALPHA = 6406

/** Pixel formats: */
export const GL_RGB = 6407

/** Pixel formats: */
export const GL_RGBA = 6408

/** Pixel formats: */
export const GL_LUMINANCE = 6409

/** Pixel formats: */
export const GL_LUMINANCE_ALPHA = 6410

/** Pixel types: */
export const GL_UNSIGNED_SHORT_4_4_4_4 = 32819

/** Pixel types: */
export const GL_UNSIGNED_SHORT_5_5_5_1 = 32820

/** Pixel types: */
export const GL_UNSIGNED_SHORT_5_6_5 = 33635

/** Shaders: Passed to createShader to define a fragment shader. */
export const GL_FRAGMENT_SHADER = 35632

/** Shaders: Passed to createShader to define a vertex shader */
export const GL_VERTEX_SHADER = 35633

/** Shaders: Passed to getShaderParamter to get the status of the compilation. Returns false if the shader was not compiled. You can then query getShaderInfoLog to find the exact error */
export const GL_COMPILE_STATUS = 35713

/** Shaders: Passed to getShaderParamter to determine if a shader was deleted via deleteShader. Returns true if it was, false otherwise. */
export const GL_DELETE_STATUS = 35712

/** Shaders: Passed to getProgramParameter after calling linkProgram to determine if a program was linked correctly. Returns false if there were errors. Use getProgramInfoLog to find the exact error. */
export const GL_LINK_STATUS = 35714

/** Shaders: Passed to getProgramParameter after calling validateProgram to determine if it is valid. Returns false if errors were found. */
export const GL_VALIDATE_STATUS = 35715

/** Shaders: Passed to getProgramParameter after calling attachShader to determine if the shader was attached correctly. Returns false if errors occurred. */
export const GL_ATTACHED_SHADERS = 35717

/** Shaders: Passed to getProgramParameter to get the number of attributes active in a program. */
export const GL_ACTIVE_ATTRIBUTES = 35721

/** Shaders: Passed to getProgramParamter to get the number of uniforms active in a program. */
export const GL_ACTIVE_UNIFORMS = 35718

/** Shaders: The maximum number of entries possible in the vertex attribute list. */
export const GL_MAX_VERTEX_ATTRIBS = 34921

/** Shaders: */
export const GL_MAX_VERTEX_UNIFORM_VECTORS = 36347

/** Shaders: */
export const GL_MAX_VARYING_VECTORS = 36348

/** Shaders: */
export const GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661

/** Shaders: */
export const GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660

/** Shaders: Implementation dependent number of maximum texture units. At least 8. */
export const GL_MAX_TEXTURE_IMAGE_UNITS = 34930

/** Shaders: */
export const GL_MAX_FRAGMENT_UNIFORM_VECTORS = 36349

/** Shaders: */
export const GL_SHADER_TYPE = 35663

/** Shaders: */
export const GL_SHADING_LANGUAGE_VERSION = 35724

/** Shaders: */
export const GL_CURRENT_PROGRAM = 35725

/** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn. */
export const GL_NEVER = 512

/** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value. */
export const GL_LESS = 513

/** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value. */
export const GL_EQUAL = 514

/** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value. */
export const GL_LEQUAL = 515

/** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value. */
export const GL_GREATER = 516

/** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value. */
export const GL_NOTEQUAL = 517

/** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value. */
export const GL_GEQUAL = 518

/** Depth or stencil tests: Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn. */
export const GL_ALWAYS = 519

/** Stencil actions: */
export const GL_KEEP = 7680

/** Stencil actions: */
export const GL_REPLACE = 7681

/** Stencil actions: */
export const GL_INCR = 7682

/** Stencil actions: */
export const GL_DECR = 7683

/** Stencil actions: */
export const GL_INVERT = 5386

/** Stencil actions: */
export const GL_INCR_WRAP = 34055

/** Stencil actions: */
export const GL_DECR_WRAP = 34056

/** Textures: */
export const GL_NEAREST = 9728

/** Textures: */
export const GL_LINEAR = 9729

/** Textures: */
export const GL_NEAREST_MIPMAP_NEAREST = 9984

/** Textures: */
export const GL_LINEAR_MIPMAP_NEAREST = 9985

/** Textures: */
export const GL_NEAREST_MIPMAP_LINEAR = 9986

/** Textures: */
export const GL_LINEAR_MIPMAP_LINEAR = 9987

/** Textures: */
export const GL_TEXTURE_MAG_FILTER = 10240

/** Textures: */
export const GL_TEXTURE_MIN_FILTER = 10241

/** Textures: */
export const GL_TEXTURE_WRAP_S = 10242

/** Textures: */
export const GL_TEXTURE_WRAP_T = 10243

/** Textures: */
export const GL_TEXTURE_2D = 3553

/** Textures: */
export const GL_TEXTURE = 5890

/** Textures: */
export const GL_TEXTURE_CUBE_MAP = 34067

/** Textures: */
export const GL_TEXTURE_BINDING_CUBE_MAP = 34068

/** Textures: */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_X = 34069

/** Textures: */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 34070

/** Textures: */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 34071

/** Textures: */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072

/** Textures: */
export const GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 34073

/** Textures: */
export const GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074

/** Textures: */
export const GL_MAX_CUBE_MAP_TEXTURE_SIZE = 34076

/** Textures: A texture unit. */
export const GL_TEXTURE0 = 33984

/** Textures: A texture unit. */
export const GL_TEXTURE1 = 33985

/** Textures: A texture unit. */
export const GL_TEXTURE2 = 33986

/** Textures: A texture unit. */
export const GL_TEXTURE3 = 33987

/** Textures: A texture unit. */
export const GL_TEXTURE4 = 33988

/** Textures: A texture unit. */
export const GL_TEXTURE5 = 33989

/** Textures: A texture unit. */
export const GL_TEXTURE6 = 33990

/** Textures: A texture unit. */
export const GL_TEXTURE7 = 33991

/** Textures: A texture unit. */
export const GL_TEXTURE8 = 33992

/** Textures: A texture unit. */
export const GL_TEXTURE9 = 33993

/** Textures: A texture unit. */
export const GL_TEXTURE10 = 33994

/** Textures: A texture unit. */
export const GL_TEXTURE11 = 33995

/** Textures: A texture unit. */
export const GL_TEXTURE12 = 33996

/** Textures: A texture unit. */
export const GL_TEXTURE13 = 33997

/** Textures: A texture unit. */
export const GL_TEXTURE14 = 33998

/** Textures: A texture unit. */
export const GL_TEXTURE15 = 33999

/** Textures: A texture unit. */
export const GL_TEXTURE16 = 34000

/** Textures: A texture unit. */
export const GL_TEXTURE17 = 34001

/** Textures: A texture unit. */
export const GL_TEXTURE18 = 34002

/** Textures: A texture unit. */
export const GL_TEXTURE19 = 34003

/** Textures: A texture unit. */
export const GL_TEXTURE20 = 34004

/** Textures: A texture unit. */
export const GL_TEXTURE21 = 34005

/** Textures: A texture unit. */
export const GL_TEXTURE22 = 34006

/** Textures: A texture unit. */
export const GL_TEXTURE23 = 34007

/** Textures: A texture unit. */
export const GL_TEXTURE24 = 34008

/** Textures: A texture unit. */
export const GL_TEXTURE25 = 34009

/** Textures: A texture unit. */
export const GL_TEXTURE26 = 34010

/** Textures: A texture unit. */
export const GL_TEXTURE27 = 34011

/** Textures: A texture unit. */
export const GL_TEXTURE28 = 34012

/** Textures: A texture unit. */
export const GL_TEXTURE29 = 34013

/** Textures: A texture unit. */
export const GL_TEXTURE30 = 34014

/** Textures: A texture unit. */
export const GL_TEXTURE31 = 34015

/** Textures: The current active texture unit. */
export const GL_ACTIVE_TEXTURE = 34016

/** Textures: */
export const GL_REPEAT = 10497

/** Textures: */
export const GL_CLAMP_TO_EDGE = 33071

/** Textures: */
export const GL_MIRRORED_REPEAT = 33648

/** Uniform types: */
export const GL_FLOAT_VEC2 = 35664

/** Uniform types: */
export const GL_FLOAT_VEC3 = 35665

/** Uniform types: */
export const GL_FLOAT_VEC4 = 35666

/** Uniform types: */
export const GL_INT_VEC2 = 35667

/** Uniform types: */
export const GL_INT_VEC3 = 35668

/** Uniform types: */
export const GL_INT_VEC4 = 35669

/** Uniform types: */
export const GL_BOOL = 35670

/** Uniform types: */
export const GL_BOOL_VEC2 = 35671

/** Uniform types: */
export const GL_BOOL_VEC3 = 35672

/** Uniform types: */
export const GL_BOOL_VEC4 = 35673

/** Uniform types: */
export const GL_FLOAT_MAT2 = 35674

/** Uniform types: */
export const GL_FLOAT_MAT3 = 35675

/** Uniform types: */
export const GL_FLOAT_MAT4 = 35676

/** Uniform types: */
export const GL_SAMPLER_2D = 35678

/** Uniform types: */
export const GL_SAMPLER_CUBE = 35680

/** Shader precision-specified types: */
export const GL_LOW_FLOAT = 36336

/** Shader precision-specified types: */
export const GL_MEDIUM_FLOAT = 36337

/** Shader precision-specified types: */
export const GL_HIGH_FLOAT = 36338

/** Shader precision-specified types: */
export const GL_LOW_INT = 36339

/** Shader precision-specified types: */
export const GL_MEDIUM_INT = 36340

/** Shader precision-specified types: */
export const GL_HIGH_INT = 36341

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER = 36160

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER = 36161

/** Framebuffers and renderbuffers: */
export const GL_RGBA4 = 32854

/** Framebuffers and renderbuffers: */
export const GL_RGB5_A1 = 32855

/** Framebuffers and renderbuffers: */
export const GL_RGB565 = 36194

/** Framebuffers and renderbuffers: */
export const GL_DEPTH_COMPONENT16 = 33189

/** Framebuffers and renderbuffers: */
export const GL_STENCIL_INDEX8 = 36168

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER_WIDTH = 36162

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER_HEIGHT = 36163

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER_INTERNAL_FORMAT = 36164

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER_RED_SIZE = 36176

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER_GREEN_SIZE = 36177

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER_BLUE_SIZE = 36178

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER_ALPHA_SIZE = 36179

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER_DEPTH_SIZE = 36180

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER_STENCIL_SIZE = 36181

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051

/** Framebuffers and renderbuffers: */
export const GL_COLOR_ATTACHMENT0 = 36064

/** Framebuffers and renderbuffers: */
export const GL_DEPTH_ATTACHMENT = 36096

/** Framebuffers and renderbuffers: */
export const GL_STENCIL_ATTACHMENT = 36128

/** Framebuffers and renderbuffers: */
export const GL_NONE = 0

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_COMPLETE = 36053

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_UNSUPPORTED = 36061

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_BINDING = 36006

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER_BINDING = 36007

/** Framebuffers and renderbuffers: */
export const GL_MAX_RENDERBUFFER_SIZE = 34024

/** Framebuffers and renderbuffers: */
export const GL_INVALID_FRAMEBUFFER_OPERATION = 1286

/** Pixel storage modes: */
export const GL_UNPACK_FLIP_Y_WEBGL = 37440

/** Pixel storage modes: */
export const GL_UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441

/** Pixel storage modes: */
export const GL_UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443

/** Getting GL parameter information: passed to getParameter */
export const GL_READ_BUFFER = 3074

/** Getting GL parameter information: passed to getParameter */
export const GL_UNPACK_ROW_LENGTH = 3314

/** Getting GL parameter information: passed to getParameter */
export const GL_UNPACK_SKIP_ROWS = 3315

/** Getting GL parameter information: passed to getParameter */
export const GL_UNPACK_SKIP_PIXELS = 3316

/** Getting GL parameter information: passed to getParameter */
export const GL_PACK_ROW_LENGTH = 3330

/** Getting GL parameter information: passed to getParameter */
export const GL_PACK_SKIP_ROWS = 3331

/** Getting GL parameter information: passed to getParameter */
export const GL_PACK_SKIP_PIXELS = 3332

/** Getting GL parameter information: passed to getParameter */
export const GL_TEXTURE_BINDING_3D = 32874

/** Getting GL parameter information: passed to getParameter */
export const GL_UNPACK_SKIP_IMAGES = 32877

/** Getting GL parameter information: passed to getParameter */
export const GL_UNPACK_IMAGE_HEIGHT = 32878

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_3D_TEXTURE_SIZE = 32883

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_ELEMENTS_VERTICES = 33000

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_ELEMENTS_INDICES = 33001

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_TEXTURE_LOD_BIAS = 34045

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_FRAGMENT_UNIFORM_COMPONENTS = 35657

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_VERTEX_UNIFORM_COMPONENTS = 35658

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_ARRAY_TEXTURE_LAYERS = 35071

/** Getting GL parameter information: passed to getParameter */
export const GL_MIN_PROGRAM_TEXEL_OFFSET = 35076

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_PROGRAM_TEXEL_OFFSET = 35077

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_VARYING_COMPONENTS = 35659

/** Getting GL parameter information: passed to getParameter */
export const GL_FRAGMENT_SHADER_DERIVATIVE_HINT = 35723

/** Getting GL parameter information: passed to getParameter */
export const GL_RASTERIZER_DISCARD = 35977

/** Getting GL parameter information: passed to getParameter */
export const GL_VERTEX_ARRAY_BINDING = 34229

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_VERTEX_OUTPUT_COMPONENTS = 37154

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_FRAGMENT_INPUT_COMPONENTS = 37157

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_SERVER_WAIT_TIMEOUT = 37137

/** Getting GL parameter information: passed to getParameter */
export const GL_MAX_ELEMENT_INDEX = 36203

/** Textures: */
export const GL_RED = 6403

/** Textures: */
export const GL_RGB8 = 32849

/** Textures: */
export const GL_RGBA8 = 32856

/** Textures: */
export const GL_RGB10_A2 = 32857

/** Textures: */
export const GL_TEXTURE_3D = 32879

/** Textures: */
export const GL_TEXTURE_WRAP_R = 32882

/** Textures: */
export const GL_TEXTURE_MIN_LOD = 33082

/** Textures: */
export const GL_TEXTURE_MAX_LOD = 33083

/** Textures: */
export const GL_TEXTURE_BASE_LEVEL = 33084

/** Textures: */
export const GL_TEXTURE_MAX_LEVEL = 33085

/** Textures: */
export const GL_TEXTURE_COMPARE_MODE = 34892

/** Textures: */
export const GL_TEXTURE_COMPARE_FUNC = 34893

/** Textures: */
export const GL_SRGB = 35904

/** Textures: */
export const GL_SRGB8 = 35905

/** Textures: */
export const GL_SRGB8_ALPHA8 = 35907

/** Textures: */
export const GL_COMPARE_REF_TO_TEXTURE = 34894

/** Textures: */
export const GL_RGBA32F = 34836

/** Textures: */
export const GL_RGB32F = 34837

/** Textures: */
export const GL_RGBA16F = 34842

/** Textures: */
export const GL_RGB16F = 34843

/** Textures: */
export const GL_TEXTURE_2D_ARRAY = 35866

/** Textures: */
export const GL_TEXTURE_BINDING_2D_ARRAY = 35869

/** Textures: */
export const GL_R11F_G11F_B10F = 35898

/** Textures: */
export const GL_RGB9_E5 = 35901

/** Textures: */
export const GL_RGBA32UI = 36208

/** Textures: */
export const GL_RGB32UI = 36209

/** Textures: */
export const GL_RGBA16UI = 36214

/** Textures: */
export const GL_RGB16UI = 36215

/** Textures: */
export const GL_RGBA8UI = 36220

/** Textures: */
export const GL_RGB8UI = 36221

/** Textures: */
export const GL_RGBA32I = 36226

/** Textures: */
export const GL_RGB32I = 36227

/** Textures: */
export const GL_RGBA16I = 36232

/** Textures: */
export const GL_RGB16I = 36233

/** Textures: */
export const GL_RGBA8I = 36238

/** Textures: */
export const GL_RGB8I = 36239

/** Textures: */
export const GL_RED_INTEGER = 36244

/** Textures: */
export const GL_RGB_INTEGER = 36248

/** Textures: */
export const GL_RGBA_INTEGER = 36249

/** Textures: */
export const GL_R8 = 33321

/** Textures: */
export const GL_RG8 = 33323

/** Textures: */
export const GL_R16F = 33325

/** Textures: */
export const GL_R32F = 33326

/** Textures: */
export const GL_RG16F = 33327

/** Textures: */
export const GL_RG32F = 33328

/** Textures: */
export const GL_R8I = 33329

/** Textures: */
export const GL_R8UI = 33330

/** Textures: */
export const GL_R16I = 33331

/** Textures: */
export const GL_R16UI = 33332

/** Textures: */
export const GL_R32I = 33333

/** Textures: */
export const GL_R32UI = 33334

/** Textures: */
export const GL_RG8I = 33335

/** Textures: */
export const GL_RG8UI = 33336

/** Textures: */
export const GL_RG16I = 33337

/** Textures: */
export const GL_RG16UI = 33338

/** Textures: */
export const GL_RG32I = 33339

/** Textures: */
export const GL_RG32UI = 33340

/** Textures: */
export const GL_R8_SNORM = 36756

/** Textures: */
export const GL_RG8_SNORM = 36757

/** Textures: */
export const GL_RGB8_SNORM = 36758

/** Textures: */
export const GL_RGBA8_SNORM = 36759

/** Textures: */
export const GL_RGB10_A2UI = 36975

/** Textures: */
export const GL_TEXTURE_IMMUTABLE_FORMAT = 37167

/** Textures: */
export const GL_TEXTURE_IMMUTABLE_LEVELS = 33503

/** Pixel types: */
export const GL_UNSIGNED_INT_2_10_10_10_REV = 33640

/** Pixel types: */
export const GL_UNSIGNED_INT_10F_11F_11F_REV = 35899

/** Pixel types: */
export const GL_UNSIGNED_INT_5_9_9_9_REV = 35902

/** Pixel types: */
export const GL_FLOAT_32_UNSIGNED_INT_24_8_REV = 36269

/** Pixel types: */
export const GL_UNSIGNED_INT_24_8 = 34042

/** Pixel types: */
export const GL_HALF_FLOAT = 5131

/** Pixel types: */
export const GL_RG = 33319

/** Pixel types: */
export const GL_RG_INTEGER = 33320

/** Pixel types: */
export const GL_INT_2_10_10_10_REV = 36255

/** Queries: */
export const GL_CURRENT_QUERY = 34917

/** Queries: */
export const GL_QUERY_RESULT = 34918

/** Queries: */
export const GL_QUERY_RESULT_AVAILABLE = 34919

/** Queries: */
export const GL_ANY_SAMPLES_PASSED = 35887

/** Queries: */
export const GL_ANY_SAMPLES_PASSED_CONSERVATIVE = 36202

/** Draw buffers: */
export const GL_MAX_DRAW_BUFFERS = 34852

/** Draw buffers: */
export const GL_DRAW_BUFFER0 = 34853

/** Draw buffers: */
export const GL_DRAW_BUFFER1 = 34854

/** Draw buffers: */
export const GL_DRAW_BUFFER2 = 34855

/** Draw buffers: */
export const GL_DRAW_BUFFER3 = 34856

/** Draw buffers: */
export const GL_DRAW_BUFFER4 = 34857

/** Draw buffers: */
export const GL_DRAW_BUFFER5 = 34858

/** Draw buffers: */
export const GL_DRAW_BUFFER6 = 34859

/** Draw buffers: */
export const GL_DRAW_BUFFER7 = 34860

/** Draw buffers: */
export const GL_DRAW_BUFFER8 = 34861

/** Draw buffers: */
export const GL_DRAW_BUFFER9 = 34862

/** Draw buffers: */
export const GL_DRAW_BUFFER10 = 34863

/** Draw buffers: */
export const GL_DRAW_BUFFER11 = 34864

/** Draw buffers: */
export const GL_DRAW_BUFFER12 = 34865

/** Draw buffers: */
export const GL_DRAW_BUFFER13 = 34866

/** Draw buffers: */
export const GL_DRAW_BUFFER14 = 34867

/** Draw buffers: */
export const GL_DRAW_BUFFER15 = 34868

/** Draw buffers: */
export const GL_MAX_COLOR_ATTACHMENTS = 36063

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT1 = 36065

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT2 = 36066

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT3 = 36067

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT4 = 36068

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT5 = 36069

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT6 = 36070

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT7 = 36071

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT8 = 36072

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT9 = 36073

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT10 = 36074

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT11 = 36075

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT12 = 36076

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT13 = 36077

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT14 = 36078

/** Draw buffers: */
export const GL_COLOR_ATTACHMENT15 = 36079

/** Samplers: */
export const GL_SAMPLER_3D = 35679

/** Samplers: */
export const GL_SAMPLER_2D_SHADOW = 35682

/** Samplers: */
export const GL_SAMPLER_2D_ARRAY = 36289

/** Samplers: */
export const GL_SAMPLER_2D_ARRAY_SHADOW = 36292

/** Samplers: */
export const GL_SAMPLER_CUBE_SHADOW = 36293

/** Samplers: */
export const GL_INT_SAMPLER_2D = 36298

/** Samplers: */
export const GL_INT_SAMPLER_3D = 36299

/** Samplers: */
export const GL_INT_SAMPLER_CUBE = 36300

/** Samplers: */
export const GL_INT_SAMPLER_2D_ARRAY = 36303

/** Samplers: */
export const GL_UNSIGNED_INT_SAMPLER_2D = 36306

/** Samplers: */
export const GL_UNSIGNED_INT_SAMPLER_3D = 36307

/** Samplers: */
export const GL_UNSIGNED_INT_SAMPLER_CUBE = 36308

/** Samplers: */
export const GL_UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311

/** Samplers: */
export const GL_MAX_SAMPLES = 36183

/** Samplers: */
export const GL_SAMPLER_BINDING = 35097

/** Buffers: */
export const GL_PIXEL_PACK_BUFFER = 35051

/** Buffers: */
export const GL_PIXEL_UNPACK_BUFFER = 35052

/** Buffers: */
export const GL_PIXEL_PACK_BUFFER_BINDING = 35053

/** Buffers: */
export const GL_PIXEL_UNPACK_BUFFER_BINDING = 35055

/** Buffers: */
export const GL_COPY_READ_BUFFER = 36662

/** Buffers: */
export const GL_COPY_WRITE_BUFFER = 36663

/** Buffers: */
export const GL_COPY_READ_BUFFER_BINDING = 36662

/** Buffers: */
export const GL_COPY_WRITE_BUFFER_BINDING = 36663

/** Data types: */
export const GL_FLOAT_MAT2x3 = 35685

/** Data types: */
export const GL_FLOAT_MAT2x4 = 35686

/** Data types: */
export const GL_FLOAT_MAT3x2 = 35687

/** Data types: */
export const GL_FLOAT_MAT3x4 = 35688

/** Data types: */
export const GL_FLOAT_MAT4x2 = 35689

/** Data types: */
export const GL_FLOAT_MAT4x3 = 35690

/** Data types: */
export const GL_UNSIGNED_INT_VEC2 = 36294

/** Data types: */
export const GL_UNSIGNED_INT_VEC3 = 36295

/** Data types: */
export const GL_UNSIGNED_INT_VEC4 = 36296

/** Data types: */
export const GL_UNSIGNED_NORMALIZED = 35863

/** Data types: */
export const GL_SIGNED_NORMALIZED = 36764

/** Vertex attributes: */
export const GL_VERTEX_ATTRIB_ARRAY_INTEGER = 35069

/** Vertex attributes: */
export const GL_VERTEX_ATTRIB_ARRAY_DIVISOR = 35070

/** Transform feedback: */
export const GL_TRANSFORM_FEEDBACK_BUFFER_MODE = 35967

/** Transform feedback: */
export const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 35968

/** Transform feedback: */
export const GL_TRANSFORM_FEEDBACK_VARYINGS = 35971

/** Transform feedback: */
export const GL_TRANSFORM_FEEDBACK_BUFFER_START = 35972

/** Transform feedback: */
export const GL_TRANSFORM_FEEDBACK_BUFFER_SIZE = 35973

/** Transform feedback: */
export const GL_TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 35976

/** Transform feedback: */
export const GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 35978

/** Transform feedback: */
export const GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 35979

/** Transform feedback: */
export const GL_INTERLEAVED_ATTRIBS = 35980

/** Transform feedback: */
export const GL_SEPARATE_ATTRIBS = 35981

/** Transform feedback: */
export const GL_TRANSFORM_FEEDBACK_BUFFER = 35982

/** Transform feedback: */
export const GL_TRANSFORM_FEEDBACK_BUFFER_BINDING = 35983

/** Transform feedback: */
export const GL_TRANSFORM_FEEDBACK = 36386

/** Transform feedback: */
export const GL_TRANSFORM_FEEDBACK_PAUSED = 36387

/** Transform feedback: */
export const GL_TRANSFORM_FEEDBACK_ACTIVE = 36388

/** Transform feedback: */
export const GL_TRANSFORM_FEEDBACK_BINDING = 36389

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 33296

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 33297

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE = 33298

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 33299

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 33300

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 33301

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 33302

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 33303

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_DEFAULT = 33304

/** Framebuffers and renderbuffers: */
export const GL_DEPTH_STENCIL_ATTACHMENT = 33306

/** Framebuffers and renderbuffers: */
export const GL_DEPTH_STENCIL = 34041

/** Framebuffers and renderbuffers: */
export const GL_DEPTH24_STENCIL8 = 35056

/** Framebuffers and renderbuffers: */
export const GL_DRAW_FRAMEBUFFER_BINDING = 36006

/** Framebuffers and renderbuffers: */
export const GL_READ_FRAMEBUFFER = 36008

/** Framebuffers and renderbuffers: */
export const GL_DRAW_FRAMEBUFFER = 36009

/** Framebuffers and renderbuffers: */
export const GL_READ_FRAMEBUFFER_BINDING = 36010

/** Framebuffers and renderbuffers: */
export const GL_RENDERBUFFER_SAMPLES = 36011

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 36052

/** Framebuffers and renderbuffers: */
export const GL_FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 36182

/** Uniforms: */
export const GL_UNIFORM_BUFFER = 35345

/** Uniforms: */
export const GL_UNIFORM_BUFFER_BINDING = 35368

/** Uniforms: */
export const GL_UNIFORM_BUFFER_START = 35369

/** Uniforms: */
export const GL_UNIFORM_BUFFER_SIZE = 35370

/** Uniforms: */
export const GL_MAX_VERTEX_UNIFORM_BLOCKS = 35371

/** Uniforms: */
export const GL_MAX_FRAGMENT_UNIFORM_BLOCKS = 35373

/** Uniforms: */
export const GL_MAX_COMBINED_UNIFORM_BLOCKS = 35374

/** Uniforms: */
export const GL_MAX_UNIFORM_BUFFER_BINDINGS = 35375

/** Uniforms: */
export const GL_MAX_UNIFORM_BLOCK_SIZE = 35376

/** Uniforms: */
export const GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 35377

/** Uniforms: */
export const GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 35379

/** Uniforms: */
export const GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 35380

/** Uniforms: */
export const GL_ACTIVE_UNIFORM_BLOCKS = 35382

/** Uniforms: */
export const GL_UNIFORM_TYPE = 35383

/** Uniforms: */
export const GL_UNIFORM_SIZE = 35384

/** Uniforms: */
export const GL_UNIFORM_BLOCK_INDEX = 35386

/** Uniforms: */
export const GL_UNIFORM_OFFSET = 35387

/** Uniforms: */
export const GL_UNIFORM_ARRAY_STRIDE = 35388

/** Uniforms: */
export const GL_UNIFORM_MATRIX_STRIDE = 35389

/** Uniforms: */
export const GL_UNIFORM_IS_ROW_MAJOR = 35390

/** Uniforms: */
export const GL_UNIFORM_BLOCK_BINDING = 35391

/** Uniforms: */
export const GL_UNIFORM_BLOCK_DATA_SIZE = 35392

/** Uniforms: */
export const GL_UNIFORM_BLOCK_ACTIVE_UNIFORMS = 35394

/** Uniforms: */
export const GL_UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 35395

/** Uniforms: */
export const GL_UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 35396

/** Uniforms: */
export const GL_UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 35398

/** Sync objects: */
export const GL_OBJECT_TYPE = 37138

/** Sync objects: */
export const GL_SYNC_CONDITION = 37139

/** Sync objects: */
export const GL_SYNC_STATUS = 37140

/** Sync objects: */
export const GL_SYNC_FLAGS = 37141

/** Sync objects: */
export const GL_SYNC_FENCE = 37142

/** Sync objects: */
export const GL_SYNC_GPU_COMMANDS_COMPLETE = 37143

/** Sync objects: */
export const GL_UNSIGNALED = 37144

/** Sync objects: */
export const GL_SIGNALED = 37145

/** Sync objects: */
export const GL_ALREADY_SIGNALED = 37146

/** Sync objects: */
export const GL_TIMEOUT_EXPIRED = 37147

/** Sync objects: */
export const GL_CONDITION_SATISFIED = 37148

/** Sync objects: */
export const GL_WAIT_FAILED = 37149

/** Sync objects: */
export const GL_SYNC_FLUSH_COMMANDS_BIT = 1

/** Miscellaneous constants: */
export const GL_COLOR = 6144

/** Miscellaneous constants: */
export const GL_DEPTH = 6145

/** Miscellaneous constants: */
export const GL_STENCIL = 6146

/** Miscellaneous constants: */
export const GL_MIN = 32775

/** Miscellaneous constants: */
export const GL_MAX = 32776

/** Miscellaneous constants: */
export const GL_DEPTH_COMPONENT24 = 33190

/** Miscellaneous constants: */
export const GL_STREAM_READ = 35041

/** Miscellaneous constants: */
export const GL_STREAM_COPY = 35042

/** Miscellaneous constants: */
export const GL_STATIC_READ = 35045

/** Miscellaneous constants: */
export const GL_STATIC_COPY = 35046

/** Miscellaneous constants: */
export const GL_DYNAMIC_READ = 35049

/** Miscellaneous constants: */
export const GL_DYNAMIC_COPY = 35050

/** Miscellaneous constants: */
export const GL_DEPTH_COMPONENT32F = 36012

/** Miscellaneous constants: */
export const GL_DEPTH32F_STENCIL8 = 36013

/** Miscellaneous constants: */
export const GL_INVALID_INDEX = 4294967295

/** Miscellaneous constants: */
export const GL_TIMEOUT_IGNORED = -1

/** Miscellaneous constants: */
export const GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL = 37447

/** ANGLE_instanced_arrays: Describes the frequency divisor used for instanced rendering. */
export const GL_VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 35070

/** WEBGL_debug_renderer_info: Passed to getParameter to get the vendor string of the graphics driver. */
export const GL_UNMASKED_VENDOR_WEBGL = 37445

/** WEBGL_debug_renderer_info: Passed to getParameter to get the renderer string of the graphics driver. */
export const GL_UNMASKED_RENDERER_WEBGL = 37446

/** EXT_texture_filter_anisotropic: Returns the maximum available anisotropy. */
export const GL_MAX_TEXTURE_MAX_ANISOTROPY_EXT = 34047

/** EXT_texture_filter_anisotropic: Passed to texParameter to set the desired maximum anisotropy for a texture. */
export const GL_TEXTURE_MAX_ANISOTROPY_EXT = 34046

/** WEBGL_compressed_texture_s3tc: A DXT1-compressed image in an RGB image format. */
export const GL_COMPRESSED_RGB_S3TC_DXT1_EXT = 33776

/** WEBGL_compressed_texture_s3tc: A DXT1-compressed image in an RGB image format with a simple on/off alpha value. */
export const GL_COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777

/** WEBGL_compressed_texture_s3tc: A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression. */
export const GL_COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778

/** WEBGL_compressed_texture_s3tc: A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done. */
export const GL_COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779

/** WEBGL_compressed_texture_etc: One-channel (red) unsigned format compression. */
export const GL_COMPRESSED_R11_EAC = 37488

/** WEBGL_compressed_texture_etc: One-channel (red) signed format compression. */
export const GL_COMPRESSED_SIGNED_R11_EAC = 37489

/** WEBGL_compressed_texture_etc: Two-channel (red and green) unsigned format compression. */
export const GL_COMPRESSED_RG11_EAC = 37490

/** WEBGL_compressed_texture_etc: Two-channel (red and green) signed format compression. */
export const GL_COMPRESSED_SIGNED_RG11_EAC = 37491

/** WEBGL_compressed_texture_etc: Compresses RBG8 data with no alpha channel. */
export const GL_COMPRESSED_RGB8_ETC2 = 37492

/** WEBGL_compressed_texture_etc: Compresses RGBA8 data. The RGB part is encoded the same as RGB_ETC2, but the alpha part is encoded separately. */
export const GL_COMPRESSED_RGBA8_ETC2_EAC = 37493

/** WEBGL_compressed_texture_etc: Compresses sRBG8 data with no alpha channel. */
export const GL_COMPRESSED_SRGB8_ETC2 = 37494

/** WEBGL_compressed_texture_etc: Compresses sRGBA8 data. The sRGB part is encoded the same as SRGB_ETC2, but the alpha part is encoded separately. */
export const GL_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37495

/** WEBGL_compressed_texture_etc: Similar to RGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent. */
export const GL_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37496

/** WEBGL_compressed_texture_etc: Similar to SRGB8_ETC, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent. */
export const GL_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37497

/** WEBGL_compressed_texture_pvrtc: RGB compression in 4-bit mode. One block for each 4×4 pixels. */
export const GL_COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840

/** WEBGL_compressed_texture_pvrtc: RGBA compression in 4-bit mode. One block for each 4×4 pixels. */
export const GL_COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842

/** WEBGL_compressed_texture_pvrtc: RGB compression in 2-bit mode. One block for each 8×4 pixels. */
export const GL_COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841

/** WEBGL_compressed_texture_pvrtc: RGBA compression in 2-bit mode. One block for each 8×4 pixe */
export const GL_COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843

/** WEBGL_compressed_texture_etc1: Compresses 24-bit RGB data with no alpha channel. */
export const GL_COMPRESSED_RGB_ETC1_WEBGL = 36196

/** WEBGL_compressed_texture_atc: Compresses RGB textures with no alpha channel. */
export const GL_COMPRESSED_RGB_ATC_WEBGL = 35986

/** WEBGL_compressed_texture_atc: Compresses RGBA textures using explicit alpha encoding (useful when alpha transitions are sharp). */
export const GL_COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986

/** WEBGL_compressed_texture_atc: Compresses RGBA textures using interpolated alpha encoding (useful when alpha transitions are gradient). */
export const GL_COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798

/** WEBGL_depth_texture: Unsigned integer type for 24-bit depth texture data. */
export const GL_UNSIGNED_INT_24_8_WEBGL = 34042

/** OES_texture_half_float: Half floating-point type (16-bit). */
export const GL_HALF_FLOAT_OES = 36193

/** WEBGL_color_buffer_float: RGBA 32-bit floating-point color-renderable format. */
export const GL_RGBA32F_EXT = 34836

/** WEBGL_color_buffer_float: RGB 32-bit floating-point color-renderable format. */
export const GL_RGB32F_EXT = 34837

/** WEBGL_color_buffer_float: */
export const GL_FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT = 33297

/** WEBGL_color_buffer_float: */
export const GL_UNSIGNED_NORMALIZED_EXT = 35863

/** EXT_blend_minmax: Produces the minimum color components of the source and destination colors. */
export const GL_MIN_EXT = 32775

/** EXT_blend_minmax: Produces the maximum color components of the source and destination colors. */
export const GL_MAX_EXT = 32776

/** EXT_sRGB: Unsized sRGB format that leaves the precision up to the driver. */
export const GL_SRGB_EXT = 35904

/** EXT_sRGB: Unsized sRGB format with unsized alpha component. */
export const GL_SRGB_ALPHA_EXT = 35906

/** EXT_sRGB: Sized (8-bit) sRGB and alpha formats. */
export const GL_SRGB8_ALPHA8_EXT = 35907

/** EXT_sRGB: Returns the framebuffer color encoding. */
export const GL_FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT = 33296

/** OES_standard_derivatives: Indicates the accuracy of the derivative calculation for the GLSL built-in functions: dFdx, dFdy, and fwidth. */
export const GL_FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 35723

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT0_WEBGL = 36064

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT1_WEBGL = 36065

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT2_WEBGL = 36066

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT3_WEBGL = 36067

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT4_WEBGL = 36068

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT5_WEBGL = 36069

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT6_WEBGL = 36070

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT7_WEBGL = 36071

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT8_WEBGL = 36072

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT9_WEBGL = 36073

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT10_WEBGL = 36074

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT11_WEBGL = 36075

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT12_WEBGL = 36076

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT13_WEBGL = 36077

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT14_WEBGL = 36078

/** WEBGL_draw_buffers: Framebuffer color attachment point */
export const GL_COLOR_ATTACHMENT15_WEBGL = 36079

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER0_WEBGL = 34853

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER1_WEBGL = 34854

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER2_WEBGL = 34855

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER3_WEBGL = 34856

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER4_WEBGL = 34857

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER5_WEBGL = 34858

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER6_WEBGL = 34859

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER7_WEBGL = 34860

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER8_WEBGL = 34861

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER9_WEBGL = 34862

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER10_WEBGL = 34863

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER11_WEBGL = 34864

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER12_WEBGL = 34865

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER13_WEBGL = 34866

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER14_WEBGL = 34867

/** WEBGL_draw_buffers: Draw buffer */
export const GL_DRAW_BUFFER15_WEBGL = 34868

/** WEBGL_draw_buffers: Maximum number of framebuffer color attachment points */
export const GL_MAX_COLOR_ATTACHMENTS_WEBGL = 36063

/** WEBGL_draw_buffers: Maximum number of draw buffers */
export const GL_MAX_DRAW_BUFFERS_WEBGL = 34852

/** OES_vertex_array_object: The bound vertex array object (VAO). */
export const GL_VERTEX_ARRAY_BINDING_OES = 34229

/** EXT_disjoint_timer_query: The number of bits used to hold the query result for the given target. */
export const GL_QUERY_COUNTER_BITS_EXT = 34916

/** EXT_disjoint_timer_query: The currently active query. */
export const GL_CURRENT_QUERY_EXT = 34917

/** EXT_disjoint_timer_query: The query result. */
export const GL_QUERY_RESULT_EXT = 34918

/** EXT_disjoint_timer_query: A Boolean indicating whether or not a query result is available. */
export const GL_QUERY_RESULT_AVAILABLE_EXT = 34919

/** EXT_disjoint_timer_query: Elapsed time (in nanoseconds). */
export const GL_TIME_ELAPSED_EXT = 35007

/** EXT_disjoint_timer_query: The current time. */
export const GL_TIMESTAMP_EXT = 36392

/** EXT_disjoint_timer_query: A Boolean indicating whether or not the GPU performed any disjoint operation. */
export const GL_GPU_DISJOINT_EXT = 36795
