import {FPInterface, Mobile,Canvas, TouchSupport} from './IFingerprint';

import 'clientjs'
import * as Fingerprint2 from 'fingerprintjs2';
import hash from 'hash.js';
// @TODO addblock is not in fingerprint because in Chrome incognito is not enabled by default
export default class Fingerprint {

  private client = new ClientJS();
  private id: string;
 
  private fp: FPInterface = {
    adBlock : '',
    addBehavior : '',
    audio : '',
    availableScreenResolutionHeight : '',
    availableScreenResolutionWidth : '',
    browser : '',
    browserMajorVersion : '',
    browserVersion : '',
    canvas : {
      canvasWinding : '',
      fingerprint : ''
    } as Canvas,
    colorDepth : '',
    cpu : '',
    cpuClass : '',
    currentResolution : '',
    // webgl data FP2
    data : '',
    device : '',
    deviceMemory : '',
    deviceType : '',
    deviceVendor : '',
    engine : '',
    engineVersion : '',
    extensions : '',
    id : '',
    flash : '',
    flashVersion : '',
    fonts : [],
    getSoftwareVersion : '',
    hardwareConcurrency : '',
    hasLiedBrowser : '',
    hasLiedLanguages : '',
    hasLiedOs : '',
    hasLiedResolution : '',
    indexedDb : '',
    ismimeType : '',
    java : '',
    javaVersion : '',
    language : '',
    localStorage : '',
    mimeType : '',
    mobile : {
      isMobile : '',
      isMobileSafari : '',
      isMobileMajor : '',
      isMobileAndroid : '',
      isMobileOpera : '',
      isMobileWindows : '',
      isMobileBlackBerry : '',
      isMobileIOS : '',
      isIphone : '',
      isIpad : '',
      isIpod : ''
    } as Mobile,
    openDatabase : '',
    os : '',
    osVersion : '',
    platform : '',
    plugins : [],
    screenResolutionHeight : '',
    screenResolutionWidth : '',
    sessionStorage : '',
    silverlight : '',
    silverlightVersion : '',
    systemLanguage : '',
    timeZoneAbbreviation : '',
    timezone : '',
    timezoneOffset : '',
    touchSupport : {
      maxTouchPoints: '',
      touchEvent : '',
      touchStart : ''
    },
    userAgent : '',
    webdriver : '',
    webglAliasedLineWidthRange : '',
    webglAliasedPointSizeRange : '',
    webglAlphaBits : '',
    webglAntialiasing : '',
    webglBlueBits : '',
    webglDepthBits : '',
    webglFragmentShaderHighFloatPrecision : '',
    webglFragmentShaderHighFloatPrecisionRangeMax : '',
    webglFragmentShaderHighFloatPrecisionRangeMin : '',
    webglFragmentShaderHighIntPrecision : '',
    webglFragmentShaderHighIntPrecisionRangeMax : '',
    webglFragmentShaderHighIntPrecisionRangeMin : '',
    webglFragmentShaderLowFloatPrecision : '',
    webglFragmentShaderLowFloatPrecisionRangeMax : '',
    webglFragmentShaderLowFloatPrecisionRangeMin : '',
    webglFragmentShaderLowIntPrecision : '',
    webglFragmentShaderLowIntPrecisionRangeMax : '',
    webglFragmentShaderLowIntPrecisionRangeMin : '',
    webglFragmentShaderMediumFloatPrecision : '',
    webglFragmentShaderMediumFloatPrecisionRangeMax : '',
    webglFragmentShaderMediumFloatPrecisionRangeMin : '',
    webglFragmentShaderMediumIntPrecision : '',
    webglFragmentShaderMediumIntPrecisionRangeMax : '',
    webglFragmentShaderMediumIntPrecisionRangeMin : '',
    webglGreenBits : '',
    webglMaxAnisotropy : '',
    webglMaxCombinedTextureImageUnits : '',
    webglMaxCubeMapTextureSize : '',
    webglMaxFragmentUniformVectors : '',
    webglMaxRenderBufferSize : '',
    webglMaxTextureImageUnits : '',
    webglMaxTextureSize : '',
    webglMaxVaryingVectors : '',
    webglMaxVertexAttribs : '',
    webglMaxVertexTextureImageUnits : '',
    webglMaxVertexUniformVectors : '',
    webglMaxViewportDims : '',
    webglRedBits : '',
    webglRenderer : '',
    webglShadingLanguageVersion : '',
    webglStencilBits : '',
    webglUnmaskedRenderer : '',
    webglUnmaskedVendor : '',
    webglVendor : '',
    webglVendorAndRenderer : '',
    webglVersion : '',
    webglVertexShaderHighFloatPrecision : '',
    webglVertexShaderHighFloatPrecisionRangeMax : '',
    webglVertexShaderHighFloatPrecisionRangeMin : '',
    webglVertexShaderHighIntPrecision : '',
    webglVertexShaderHighIntPrecisionRangeMax : '',
    webglVertexShaderHighIntPrecisionRangeMin : '',
    webglVertexShaderLowFloatPrecision : '',
    webglVertexShaderLowFloatPrecisionRangeMax : '',
    webglVertexShaderLowFloatPrecisionRangeMin : '',
    webglVertexShaderLowIntPrecision : '',
    webglVertexShaderLowIntPrecisionRangeMax : '',
    webglVertexShaderLowIntPrecisionRangeMin : '',
    webglVertexShaderMediumFloatPrecision : '',
    webglVertexShaderMediumFloatPrecisionRangeMax : '',
    webglVertexShaderMediumFloatPrecisionRangeMin : '',
    webglVertexShaderMediumIntPrecision : '',
    webglVertexShaderMediumIntPrecisionRangeMax : '',
    webglVertexShaderMediumIntPrecisionRangeMin : ''
  }; 



  constructor() {
    this.id = '';
  }
  
  public static create(): FPInterface {
    let fingerprint = new Fingerprint();
    fingerprint.generateFingerprint();
    return fingerprint.fp;
  }

  private generateFingerprint(): void {
      Fingerprint2.get((components: any[]) => {
      this.getCustomFingerPr(components);
      this.buildfp(components);
      });
  }

  private getCustomFingerPr(fp2components: any[]): void {
    this.clientJsFingerprint();
    this.fingerPrint2jsFingerprint(fp2components);
  }
    
  private buildfp(fp2components: any[]): void {
    this.fp['id'] = hash.sha1().update(this.id).digest('hex');
    fp2components.forEach((data) => {
      if (data.key == 'availableScreenResolution') {
        this.setAvailableScreenResolutin(data);
      } else if (data.key == 'screenResolution') {
        this.setScreenResolution(data);      
      } else if (data.key == 'canvas') {
        this.setCanvas(data);
      } else if (data.key == 'plugins') {
        this.setPlugins(data);
      } else if (data.key == 'webgl') {
        this.setWebgl(data);
      } else if (data.key == 'touchSupport') {
        this.setTouchSupport(data);
      } else {
        this.fp[data.key] = String(data.value);
      }
    });
    this.setClientJsComponents();
  }

  private setTouchSupport(data: any) : void {
    let ts : TouchSupport = {
      maxTouchPoints: '',
      touchEvent: '',
      touchStart: ''
    }
    ts.maxTouchPoints = String(data.value[0]);
    ts.touchEvent = String(data.value[1]);
    ts.touchStart = String(data.value[2]);
    this.fp.touchSupport = ts;
  }

  private clientJsFingerprint(): void {
    this.id = this.client.getFingerprint()+'-'
    this.id += this.client.getCustomFingerprint(this.client.getTimeZone()) + '-'
    this.id += this.client.getCustomFingerprint(this.client.getLanguage()) + '-'
    this.id += this.client.getCustomFingerprint(this.client.getEngine(),this.client.getBrowser(),this.client.getBrowserVersion()) + '-'
    this.id += this.client.getCustomFingerprint(this.client.getDevice(), this.client.getDeviceType())+ '-'
    this.id += this.client.getCustomFingerprint(this.client.getCPU()) + '-'
    this.id += this.client.getCustomFingerprint(this.client.getOS.toString(),this.client.getOSVersion(),this.client.getSystemLanguage()) + '-'
    this.id += this.client.getCustomFingerprint(this.client.isWindows().toString(),this.client.isMac().toString(), this.client.isLinux().toString(),this.client.isUbuntu().toString(),this.client.isSolaris().toString()) + '-'
    this.id += this.client.getCustomFingerprint(this.client.isChrome().toString(),this.client.isSafari().toString(),this.client.isMobileSafari().toString(),this.client.isOpera().toString()) + '-'
    this.id += this.client.getCustomFingerprint(this.client.isMobile().toString(),this.client.isMobileMajor().toString(),this.client.isMobileAndroid().toString(),this.client.isMobileOpera().toString(),this.client.isMobileWindows().toString(),this.client.isMobileBlackBerry().toString()) + '-'
    this.id += this.client.getCustomFingerprint(this.client.getScreenPrint()) + '-'
    this.id += this.client.getCustomFingerprint(this.client.isJava().toString(),this.client.isFlash().toString(),this.client.getFlashVersion()) + '-' 
  }
   
  private fingerPrint2jsFingerprint(fp2comp: any[]): void {
    for (var i = 0; i < fp2comp.length; i++) {
      if (Array.isArray(fp2comp[i].value)) {
        for (var j = 0; j < fp2comp[i].value.length; j++) {
          this.id += this.client.getCustomFingerprint(fp2comp[i].value[j])
          if (j < fp2comp[i].value.length - 1) {
            this.id += '-';
          }
        }
      } else {
        if (fp2comp[i].key == 'adBlock') {
          continue;
        }
        this.id += this.client.getCustomFingerprint(fp2comp[i].value) 
        }
      if (i < fp2comp.length - 1) {
        this.id += '-';
      }
    }
  }
    
  private setAvailableScreenResolutin(data: any): void {
    this.fp['availableScreenResolutionWidth'] = String(data.value[1]);
    this.fp['availableScreenResolutionHeight'] = String(data.value[0]);
  }
    
  private setScreenResolution(data: any): void {
    this.fp['screenResolutionWidth'] = String(data.value[1]);
    this.fp['screenResolutionHeight'] = String(data.value[0]);
  }

  private setCanvas(data: any): void {
    var canvas : Canvas = {
      canvasWinding : '',
      fingerprint : ''
    };
    data.value.forEach((canvasElement: string) => {
      if (canvasElement.substring(0,canvasElement.indexOf(':')) === 'canvas fp') {
        canvas['fingerprint'] = canvasElement.substring(canvasElement.indexOf(':') + 1, canvasElement.length);
      } else if (canvasElement.substring(0,canvasElement.indexOf(':')) === 'canvas winding') {
        canvas['canvasWinding'] = canvasElement.substring(canvasElement.indexOf(':') + 1, canvasElement.length);
      }
    });
    this.fp['canvas'] = canvas;
  }

  private setPlugins(data: any): void {
    var plugins : string[] = [];
    data.value.forEach((element: any) => {
      plugins.push(String(element[0]));
    });
    this.fp['plugins'] = plugins;
  }

  private setWebgl(data: any): void {
    data.value.forEach((element: string) => {
      let key = element.substring(0,element.indexOf(':'));
      let index = key.indexOf(" ");
      while (index != -1) {
        key = key.replace(" ","");
        key = key.substring(0,index) + key.charAt(index).toUpperCase() + key.substring(index+1,key.length);
        index = key.indexOf(" ");
      }
      this.fp[key] = element.substring(element.indexOf(':') + 1, element.length); 
    });
  }

  private setClientJsComponents(): void {
    this.fp['currentResolution'] = this.client.getCurrentResolution();
    this.fp['timeZoneAbbreviation'] = this.client.getTimeZone();
    this.fp['engine'] = this.client.getEngine();
    this.fp['engineVersion'] = this.client.getEngineVersion();
    this.fp['cpu'] = this.client.getCPU();
    this.fp['os'] = this.client.getOS();
    this.fp['osVersion'] = this.client.getOSVersion();
    this.fp['systemLanguage'] = this.client.getSystemLanguage();
    this.fp['getSoftwareVersion'] = this.client.getSoftwareVersion();
    this.fp['silverlight'] = String(this.client.isSilverlight());
    this.fp['silverlightVersion'] = this.client.getSilverlightVersion();
    this.fp['mimeType'] = this.client.getMimeTypes();
    this.fp['ismimeType'] = String(this.client.isMimeTypes());
    this.setMobileInformations();
    this.setBrowserInformation();
    this.setDeviceInformation();
    this.setFlashAndJava();
  }

  private setMobileInformations(): void {
    var mobile :Mobile = {
      isMobile : '',
      isMobileSafari : '',
      isMobileMajor : '',
      isMobileAndroid : '',
      isMobileOpera : '',
      isMobileWindows : '',
      isMobileBlackBerry : '',
      isMobileIOS : '',
      isIphone : '',
      isIpad : '',
      isIpod : ''
    };
    
    mobile['isMobileSafari'] = String(this.client.isMobileSafari());
    mobile['isMobile'] = String(this.client.isMobile());
    mobile['isMobileMajor'] = String(this.client.isMobileMajor());
    mobile['isMobileAndroid'] = String(this.client.isMobileAndroid());
    mobile['isMobileOpera'] = String(this.client.isMobileOpera());
    mobile['isMobileWindows'] = String(this.client.isMobileWindows());
    mobile['isMobileBlackBerry'] = String(this.client.isMobileBlackBerry());
    mobile['isMobileIOS'] = String(this.client.isMobileIOS());
    mobile['isIphone'] = String(this.client.isIphone());
    mobile['isIpad'] = String(this.client.isIpad());
    mobile['isIpod'] = String(this.client.isIpod());

    this.fp['mobile'] = mobile;
  }

  private setBrowserInformation(): void {
    this.fp['browserMajorVersion'] = this.client.getBrowserMajorVersion();
    this.fp['browser'] = this.client.getBrowser();
    this.fp['browserVersion'] = this.client.getBrowserVersion();
  }

  private setDeviceInformation(): void {
    this.fp['device'] = this.client.getDevice();
    this.fp['deviceType'] = this.client.getDeviceType();
    this.fp['deviceVendor'] = this.client.getDeviceVendor();
    this.fp['deviceType'] = this.client.getDeviceType();
  }

  private setFlashAndJava(): void {
    this.fp['java'] = String(this.client.isJava());
    this.fp['javaVersion'] = String(this.client.getJavaVersion());
    this.fp['flash'] = String(this.client.isFlash());
    this.fp['flashVersion'] = String(this.client.getFlashVersion());
  }
}

