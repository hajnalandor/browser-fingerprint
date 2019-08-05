export interface FPInterface {
  adBlock? : string
  addBehavior? : boolean
  audio? : string
  availableScreenResolutionHeight? : number
  availableScreenResolutionWidth? : number
  browser? : string
  browserMajorVersion? : string
  browserVersion? : string
  canvas? : Canvas
  colorDepth? : number
  cpu? : string
  cpuClass? : string
  currentResolution? : string
  // webglData
  data? : string
  device? : string
  deviceMemory? : number
  deviceType? : string
  deviceVendor? : string
  engine? : string
  engineVersion? : string
  extensions? : string
  fingerPrintId? : string
  flash? : boolean
  flashVersion? : string
  fonts? : string[]
  getSoftwareVersion? : string
  hardwareConcurrency? : number
  hasLiedBrowser? : boolean
  hasLiedLanguages? : boolean
  hasLiedOs? : boolean
  hasLiedResolution? : boolean
  indexedDb? : boolean
  ismimeType? : boolean
  java? : boolean
  javaVersion? : string
  language? : string
  localStorage? : boolean
  mimeType? : string
  mobile? : Mobile
  openDatabase? : boolean
  os? : string
  osVersion? : string
  platform? : string
  plugins? : string[]
  screenResolutionHeight? : number
  screenResolutionWidth? : number
  sessionStorage? : boolean
  silverlight? : boolean
  silverlightVersion? : string
  systemLanguage? : string
  timeZoneAbbreviation? : string
  timezone? : string
  timezoneOffset? : number
  touchSupport? : TouchSupport;
  userAgent? : string
  webdriver? : string
  webglAliasedLineWidthRange? : string[]
  webglAliasedPointSizeRange? : string[]
  webglAlphaBits? : string
  webglAntialiasing? : string
  webglBlueBits? : string
  webglDepthBits? : string
  webglFragmentShaderHighFloatPrecision? : string
  webglFragmentShaderHighFloatPrecisionRangeMax? : string
  webglFragmentShaderHighFloatPrecisionRangeMin? : string
  webglFragmentShaderHighIntPrecision? : string
  webglFragmentShaderHighIntPrecisionRangeMax? : string
  webglFragmentShaderHighIntPrecisionRangeMin? : string
  webglFragmentShaderLowFloatPrecision? : string
  webglFragmentShaderLowFloatPrecisionRangeMax? : string
  webglFragmentShaderLowFloatPrecisionRangeMin? : string
  webglFragmentShaderLowIntPrecision? : string
  webglFragmentShaderLowIntPrecisionRangeMax? : string
  webglFragmentShaderLowIntPrecisionRangeMin? : string
  webglFragmentShaderMediumFloatPrecision? : string
  webglFragmentShaderMediumFloatPrecisionRangeMax? : string
  webglFragmentShaderMediumFloatPrecisionRangeMin? : string
  webglFragmentShaderMediumIntPrecision? : string
  webglFragmentShaderMediumIntPrecisionRangeMax? : string
  webglFragmentShaderMediumIntPrecisionRangeMin? : string
  webglGreenBits? : string
  webglMaxAnisotropy? : string
  webglMaxCombinedTextureImageUnits? : string
  webglMaxCubeMapTextureSize? : string
  webglMaxFragmentUniformVectors? : string
  webglMaxRenderBufferSize? : string
  webglMaxTextureImageUnits? : string
  webglMaxTextureSize? : string
  webglMaxVaryingVectors? : string
  webglMaxVertexAttribs? : string
  webglMaxVertexTextureImageUnits? : string
  webglMaxVertexUniformVectors? : string
  webglMaxViewportDims? : string
  webglRedBits? : string
  webglRenderer? : string
  webglShadingLanguageVersion? : string
  webglStencilBits? : string
  webglUnmaskedRenderer? : string
  webglUnmaskedVendor? : string
  webglVendor? : string
  webglVendorAndRenderer? : string
  webglVersion? : string
  webglVertexShaderHighFloatPrecision? : string
  webglVertexShaderHighFloatPrecisionRangeMax? : string
  webglVertexShaderHighFloatPrecisionRangeMin? : string
  webglVertexShaderHighIntPrecision? : string
  webglVertexShaderHighIntPrecisionRangeMax? : string
  webglVertexShaderHighIntPrecisionRangeMin? : string
  webglVertexShaderLowFloatPrecision? : string
  webglVertexShaderLowFloatPrecisionRangeMax? : string
  webglVertexShaderLowFloatPrecisionRangeMin? : string
  webglVertexShaderLowIntPrecision? : string
  webglVertexShaderLowIntPrecisionRangeMax? : string
  webglVertexShaderLowIntPrecisionRangeMin? : string
  webglVertexShaderMediumFloatPrecision? : string
  webglVertexShaderMediumFloatPrecisionRangeMax? : string
  webglVertexShaderMediumFloatPrecisionRangeMin? : string
  webglVertexShaderMediumIntPrecision? : string
  webglVertexShaderMediumIntPrecisionRangeMax? : string
  webglVertexShaderMediumIntPrecisionRangeMin? : string
  [key: string] : any|string|number|boolean
}

export interface TouchSupport {
  maxTouchPoints: number|undefined
  touchEvent: boolean|undefined
  touchStart: boolean|undefined
}


export interface Canvas {
  canvasWinding? : string
  canvasFp? : string
  [key: string] : string|undefined
}

export interface Mobile {
  isMobile? : boolean
  isMobileSafari? : boolean
  isMobileMajor? : boolean
  isMobileAndroid? : boolean
  isMobileOpera? : boolean
  isMobileWindows? : boolean
  isMobileBlackBerry? : boolean
  isMobileIOS? : boolean
  isIphone? : boolean
  isIpad? : boolean
  isIpod? : boolean
}
