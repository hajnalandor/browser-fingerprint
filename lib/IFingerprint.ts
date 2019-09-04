export interface FPInterface {
  adBlock : string
  addBehavior : string
  audio : string
  availableScreenResolutionHeight : string
  availableScreenResolutionWidth : string
  browser : string
  browserMajorVersion : string
  browserVersion : string
  canvas : Canvas
  colorDepth : string
  cpu : string
  cpuClass : string
  currentResolution : string
  // webglData
  data : string
  device : string
  deviceMemory : string
  deviceType : string
  deviceVendor : string
  engine : string
  engineVersion : string
  extensions : string
  id : string
  flash : string
  flashVersion : string
  fonts : string[]
  getSoftwareVersion : string
  hardwareConcurrency : string
  hasLiedBrowser : string
  hasLiedLanguages : string
  hasLiedOs : string
  hasLiedResolution : string
  indexedDb : string
  ismimeType : string
  java : string
  javaVersion : string
  language : string
  localStorage : string
  mimeType : string
  mobile : Mobile
  openDatabase : string
  os : string
  osVersion : string
  platform : string
  plugins : string[]
  screenResolutionHeight : string
  screenResolutionWidth : string
  sessionStorage : string
  silverlight : string
  silverlightVersion : string
  systemLanguage : string
  timeZoneAbbreviation : string
  timezone : string
  timezoneOffset : string
  touchSupport : TouchSupport
  userAgent : string
  webdriver : string
  webglAliasedLineWidthRange : string
  webglAliasedPointSizeRange : string
  webglAlphaBits : string
  webglAntialiasing : string
  webglBlueBits : string
  webglDepthBits : string
  webglFragmentShaderHighFloatPrecision : string
  webglFragmentShaderHighFloatPrecisionRangeMax : string
  webglFragmentShaderHighFloatPrecisionRangeMin : string
  webglFragmentShaderHighIntPrecision : string
  webglFragmentShaderHighIntPrecisionRangeMax : string
  webglFragmentShaderHighIntPrecisionRangeMin : string
  webglFragmentShaderLowFloatPrecision : string
  webglFragmentShaderLowFloatPrecisionRangeMax : string
  webglFragmentShaderLowFloatPrecisionRangeMin : string
  webglFragmentShaderLowIntPrecision : string
  webglFragmentShaderLowIntPrecisionRangeMax : string
  webglFragmentShaderLowIntPrecisionRangeMin : string
  webglFragmentShaderMediumFloatPrecision : string
  webglFragmentShaderMediumFloatPrecisionRangeMax : string
  webglFragmentShaderMediumFloatPrecisionRangeMin : string
  webglFragmentShaderMediumIntPrecision : string
  webglFragmentShaderMediumIntPrecisionRangeMax : string
  webglFragmentShaderMediumIntPrecisionRangeMin : string
  webglGreenBits : string
  webglMaxAnisotropy : string
  webglMaxCombinedTextureImageUnits : string
  webglMaxCubeMapTextureSize : string
  webglMaxFragmentUniformVectors : string
  webglMaxRenderBufferSize : string
  webglMaxTextureImageUnits : string
  webglMaxTextureSize : string
  webglMaxVaryingVectors : string
  webglMaxVertexAttribs : string
  webglMaxVertexTextureImageUnits : string
  webglMaxVertexUniformVectors : string
  webglMaxViewportDims : string
  webglRedBits : string
  webglRenderer : string
  webglShadingLanguageVersion : string
  webglStencilBits : string
  webglUnmaskedRenderer : string
  webglUnmaskedVendor : string
  webglVendor : string
  webglVendorAndRenderer : string
  webglVersion : string
  webglVertexShaderHighFloatPrecision : string
  webglVertexShaderHighFloatPrecisionRangeMax : string
  webglVertexShaderHighFloatPrecisionRangeMin : string
  webglVertexShaderHighIntPrecision : string
  webglVertexShaderHighIntPrecisionRangeMax : string
  webglVertexShaderHighIntPrecisionRangeMin : string
  webglVertexShaderLowFloatPrecision : string
  webglVertexShaderLowFloatPrecisionRangeMax : string
  webglVertexShaderLowFloatPrecisionRangeMin : string
  webglVertexShaderLowIntPrecision : string
  webglVertexShaderLowIntPrecisionRangeMax : string
  webglVertexShaderLowIntPrecisionRangeMin : string
  webglVertexShaderMediumFloatPrecision : string
  webglVertexShaderMediumFloatPrecisionRangeMax : string
  webglVertexShaderMediumFloatPrecisionRangeMin : string
  webglVertexShaderMediumIntPrecision : string
  webglVertexShaderMediumIntPrecisionRangeMax : string
  webglVertexShaderMediumIntPrecisionRangeMin : string
   [key: string] : string|string[]|Object
}

export interface TouchSupport {
  maxTouchPoints: string
  touchEvent: string
  touchStart: string
}


export interface Canvas {
  canvasWinding : string
  fingerprint : string
  // [key: string] : string|''
}

export interface Mobile {
  isMobile : string
  isMobileSafari : string
  isMobileMajor : string
  isMobileAndroid : string
  isMobileOpera : string
  isMobileWindows : string
  isMobileBlackBerry : string
  isMobileIOS : string
  isIphone : string
  isIpad : string
  isIpod : string
}
