# browser-fingerprint

The library generates and returns a unique identifier with other data of a browser without using cookies or any information that can be easily reset by a malicious user. 
browser-fingerprint returns a client object to find out as much useful information as you can about what devices are connecting to your site and your product. There are specific informations like, “does the user have an iOS or Android device?” or better yet, “is the user's device an iPad?”

Browser-fingerprint attempts to solve the problem of making client data more easily available. Good data is necessary for good analytics that help you make better business and tech choices. Do you have good informative data about how your users connect to your site? Do you know their average screen size? BF can help you collect data and make good decisions for your application and business.
This library uses clientjs and fingerprintjs2
## 2 major fingerprint hash which has uniqueness more than 95% accuracy in single browser (including incognito mode)
### 1. fingerprintId (id) generated from all data
### 2. canvas fingerprint (canvas.fp) generated from custom canvas element


## Project setup
  ```
  npm install
  ```
## Compiles and hot-reloads for development
  ```
  npm run serve
  ```
## Compiles and minifies for production
  ```
  npm run build
  ```
## Usage
```
import Fingerprint from '../node_modules/@hajnalandor/browser-fingerprint/dist/fingerprint' 
...
...
console.log(Fingerprint.create());
```
## Return object
  ```
  { 
    adBlock : string 
    addBehavior : boolean 
    audio : string 
    availableScreenResolutionHeight : number 
    availableScreenResolutionWidth : number 
    browser : string 
    browserMajorVersion : string
    browserVersion : string 
    canvas : {
       canvasWinding : string 
       canvasFp : string 
    }
    colorDepth : number  
    cpu : string 
    cpuClass : string 
    currentResolution : string 
    data : string //webglData 
    device : string 
    deviceMemory : number 
    deviceType : string 
    deviceVendor : string 
    engine : string 
    engineVersion : string 
    extensions : string 
    fingerPrintId : string 
    flash : boolean 
    flashVersion : string 
    fonts : string[] 
    getSoftwareVersion : string 
    hardwareConcurrency : number 
    hasLiedBrowser : boolean 
    hasLiedLanguages : boolean 
    hasLiedOs : boolean 
    hasLiedResolution : boolean 
    indexedDb : boolean 
    ismimeType : boolean 
    java : boolean 
    javaVersion : string 
    language : string 
    localStorage : boolean 
    mimeType : string 
    mobile : {
      isMobile : boolean 
      isMobileSafari : boolean 
      isMobileMajor : boolean 
      isMobileAndroid : boolean 
      isMobileOpera : boolean 
      isMobileWindows : boolean 
      isMobileBlackBerry : boolean 
      isMobileIOS : boolean 
      isIphone : boolean 
      isIpad : boolean 
      isIpod : boolean
    }
    openDatabase : boolean 
    os : string 
    osVersion : string 
    platform : string 
    plugins : string[] 
    screenResolutionHeight : number
    screenResolutionWidth : number 
    sessionStorage : boolean 
    silverlight : boolean 
    silverlightVersion : string 
    systemLanguage : string 
    timeZoneAbbreviation : string
    timezone : string 
    timezoneOffset : number 
    touchSupport : { 
      maxTouchPoints: number 
      touchEvent: boolean 
      touchStart: boolean 
    } 
    userAgent : string 
    webdriver : string 
    webglAliasedLineWidthRange : string[] 
    webglAliasedPointSizeRange : string[] 
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
  }
```
