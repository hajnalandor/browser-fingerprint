"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("clientjs");
var Fingerprint2 = require("fingerprintjs2");
var Fingerprint = (function () {
    function Fingerprint() {
        this.client = new ClientJS();
        this.fp = {
            adBlock: '',
            addBehavior: undefined,
            audio: undefined,
            availableScreenResolutionHeight: undefined,
            availableScreenResolutionWidth: undefined,
            browser: undefined,
            browserMajorVersion: undefined,
            browserVersion: undefined,
            canvas: {
                canvasWinding: undefined,
                canvasFp: undefined
            },
            canvasPrint: undefined,
            colorDepth: undefined,
            cpu: undefined,
            cpuClass: undefined,
            currentResolution: undefined,
            data: undefined,
            device: undefined,
            deviceMemory: undefined,
            deviceType: undefined,
            deviceVendor: undefined,
            engine: undefined,
            engineVersion: undefined,
            extensions: undefined,
            fingerPrintId: undefined,
            flash: undefined,
            flashVersion: undefined,
            fonts: [],
            getSoftwareVersion: undefined,
            hardwareConcurrency: undefined,
            hasLiedBrowser: undefined,
            hasLiedLanguages: undefined,
            hasLiedOs: undefined,
            hasLiedResolution: undefined,
            indexedDb: undefined,
            ismimeType: undefined,
            java: undefined,
            javaVersion: undefined,
            language: undefined,
            localStorage: undefined,
            mimeType: undefined,
            mobile: {
                isMobile: undefined,
                isMobileSafari: undefined,
                isMobileMajor: undefined,
                isMobileAndroid: undefined,
                isMobileOpera: undefined,
                isMobileWindows: undefined,
                isMobileBlackBerry: undefined,
                isMobileIOS: undefined,
                isIphone: undefined,
                isIpad: undefined,
                isIpod: undefined
            },
            openDatabase: undefined,
            os: undefined,
            osVersion: undefined,
            platform: undefined,
            plugins: [],
            screenResolutionHeight: undefined,
            screenResolutionWidth: undefined,
            sessionStorage: undefined,
            silverlight: undefined,
            silverlightVersion: undefined,
            systemLanguage: undefined,
            timeZoneAbbreviation: undefined,
            timezone: undefined,
            timezoneOffset: undefined,
            touchSupport: [],
            userAgent: undefined,
            webdriver: undefined,
            webglAliasedLineWidthRange: [],
            webglAliasedPointSizeRange: [],
            webglAlphaBits: undefined,
            webglAntialiasing: undefined,
            webglBlueBits: undefined,
            webglDepthBits: undefined,
            webglFragmentShaderHighFloatPrecision: undefined,
            webglFragmentShaderHighFloatPrecisionRangeMax: undefined,
            webglFragmentShaderHighFloatPrecisionRangeMin: undefined,
            webglFragmentShaderHighIntPrecision: undefined,
            webglFragmentShaderHighIntPrecisionRangeMax: undefined,
            webglFragmentShaderHighIntPrecisionRangeMin: undefined,
            webglFragmentShaderLowFloatPrecision: undefined,
            webglFragmentShaderLowFloatPrecisionRangeMax: undefined,
            webglFragmentShaderLowFloatPrecisionRangeMin: undefined,
            webglFragmentShaderLowIntPrecision: undefined,
            webglFragmentShaderLowIntPrecisionRangeMax: undefined,
            webglFragmentShaderLowIntPrecisionRangeMin: undefined,
            webglFragmentShaderMediumFloatPrecision: undefined,
            webglFragmentShaderMediumFloatPrecisionRangeMax: undefined,
            webglFragmentShaderMediumFloatPrecisionRangeMin: undefined,
            webglFragmentShaderMediumIntPrecision: undefined,
            webglFragmentShaderMediumIntPrecisionRangeMax: undefined,
            webglFragmentShaderMediumIntPrecisionRangeMin: undefined,
            webglGreenBits: undefined,
            webglMaxAnisotropy: undefined,
            webglMaxCombinedTextureImageUnits: undefined,
            webglMaxCubeMapTextureSize: undefined,
            webglMaxFragmentUniformVectors: undefined,
            webglMaxRenderBufferSize: undefined,
            webglMaxTextureImageUnits: undefined,
            webglMaxTextureSize: undefined,
            webglMaxVaryingVectors: undefined,
            webglMaxVertexAttribs: undefined,
            webglMaxVertexTextureImageUnits: undefined,
            webglMaxVertexUniformVectors: undefined,
            webglMaxViewportDims: undefined,
            webglRedBits: undefined,
            webglRenderer: undefined,
            webglShadingLanguageVersion: undefined,
            webglStencilBits: undefined,
            webglUnmaskedRenderer: undefined,
            webglUnmaskedVendor: undefined,
            webglVendor: undefined,
            webglVendorAndRenderer: undefined,
            webglVersion: undefined,
            webglVertexShaderHighFloatPrecision: undefined,
            webglVertexShaderHighFloatPrecisionRangeMax: undefined,
            webglVertexShaderHighFloatPrecisionRangeMin: undefined,
            webglVertexShaderHighIntPrecision: undefined,
            webglVertexShaderHighIntPrecisionRangeMax: undefined,
            webglVertexShaderHighIntPrecisionRangeMin: undefined,
            webglVertexShaderLowFloatPrecision: undefined,
            webglVertexShaderLowFloatPrecisionRangeMax: undefined,
            webglVertexShaderLowFloatPrecisionRangeMin: undefined,
            webglVertexShaderLowIntPrecision: undefined,
            webglVertexShaderLowIntPrecisionRangeMax: undefined,
            webglVertexShaderLowIntPrecisionRangeMin: undefined,
            webglVertexShaderMediumFloatPrecision: undefined,
            webglVertexShaderMediumFloatPrecisionRangeMax: undefined,
            webglVertexShaderMediumFloatPrecisionRangeMin: undefined,
            webglVertexShaderMediumIntPrecision: undefined,
            webglVertexShaderMediumIntPrecisionRangeMax: undefined,
            webglVertexShaderMediumIntPrecisionRangeMin: undefined
        };
        this.fingerprintId = '';
    }
    Fingerprint.prototype.create = function () {
        this.generateFingerprint();
        return this.fp;
    };
    Fingerprint.prototype.generateFingerprint = function () {
        var _this = this;
        Fingerprint2.get(function (components) {
            _this.getCustomFingerPr(components);
            _this.buildfp(components);
        });
    };
    Fingerprint.prototype.getCustomFingerPr = function (fp2components) {
        this.clientJsFingerprint();
        this.fingerPrint2jsFingerprint(fp2components);
        this.fingerprintId = btoa(this.fingerprintId);
    };
    Fingerprint.prototype.buildfp = function (fp2components) {
        var _this = this;
        this.fp['fingerPrintId'] = this.fingerprintId;
        fp2components.forEach(function (data) {
            if (data.key == 'availableScreenResolution') {
                _this.setAvailableScreenResolutin(data);
            }
            else if (data.key == 'screenResolution') {
                _this.setScreenResolution(data);
            }
            else if (data.key == 'canvas') {
                _this.setCanvas(data);
            }
            else if (data.key == 'plugins') {
                _this.setPlugins(data);
            }
            else if (data.key == 'webgl') {
                _this.setWebgl(data);
            }
            else {
                _this.fp[data.key] = data.value;
            }
        });
        this.setClientJsComponents();
    };
    Fingerprint.prototype.clientJsFingerprint = function () {
        this.fingerprintId = this.client.getFingerprint() + '-';
        this.fingerprintId += this.client.getCustomFingerprint(this.client.getTimeZone()) + '-';
        this.fingerprintId += this.client.getCustomFingerprint(this.client.getLanguage()) + '-';
        this.fingerprintId += this.client.getCustomFingerprint(this.client.getEngine(), this.client.getBrowser(), this.client.getBrowserVersion()) + '-';
        this.fingerprintId += this.client.getCustomFingerprint(this.client.getDevice(), this.client.getDeviceType()) + '-';
        this.fingerprintId += this.client.getCustomFingerprint(this.client.getCPU()) + '-';
        this.fingerprintId += this.client.getCustomFingerprint(this.client.getOS.toString(), this.client.getOSVersion(), this.client.getSystemLanguage()) + '-';
        this.fingerprintId += this.client.getCustomFingerprint(this.client.isWindows().toString(), this.client.isMac().toString(), this.client.isLinux().toString(), this.client.isUbuntu().toString(), this.client.isSolaris().toString()) + '-';
        this.fingerprintId += this.client.getCustomFingerprint(this.client.isChrome().toString(), this.client.isSafari().toString(), this.client.isMobileSafari().toString(), this.client.isOpera().toString()) + '-';
        this.fingerprintId += this.client.getCustomFingerprint(this.client.isMobile().toString(), this.client.isMobileMajor().toString(), this.client.isMobileAndroid().toString(), this.client.isMobileOpera().toString(), this.client.isMobileWindows().toString(), this.client.isMobileBlackBerry().toString()) + '-';
        this.fingerprintId += this.client.getCustomFingerprint(this.client.getScreenPrint()) + '-';
        this.fingerprintId += this.client.getCustomFingerprint(this.client.isJava().toString(), this.client.isFlash().toString(), this.client.getFlashVersion()) + '-';
    };
    Fingerprint.prototype.fingerPrint2jsFingerprint = function (fp2comp) {
        for (var i = 0; i < fp2comp.length; i++) {
            if (Array.isArray(fp2comp[i].value)) {
                for (var j = 0; j < fp2comp[i].value.length; j++) {
                    this.fingerprintId += this.client.getCustomFingerprint(fp2comp[i].value[j]);
                    if (j < fp2comp[i].value.length - 1) {
                        this.fingerprintId += '-';
                    }
                }
            }
            else {
                if (fp2comp[i].key == 'adBlock') {
                    continue;
                }
                this.fingerprintId += this.client.getCustomFingerprint(fp2comp[i].value);
            }
            if (i < fp2comp.length - 1) {
                this.fingerprintId += '-';
            }
        }
    };
    Fingerprint.prototype.setAvailableScreenResolutin = function (data) {
        this.fp['availableScreenResolutionWidth'] = data.value[1];
        this.fp['availableScreenResolutionHeight'] = data.value[0];
    };
    Fingerprint.prototype.setScreenResolution = function (data) {
        this.fp['screenResolutionWidth'] = data.value[1];
        this.fp['screenResolutionHeight'] = data.value[0];
    };
    Fingerprint.prototype.setCanvas = function (data) {
        var canvas = {
            canvasWinding: undefined,
            canvasFp: undefined
        };
        data.value.forEach(function (canvasElement) {
            if (canvasElement.substring(0, canvasElement.indexOf(':')) === 'canvas fp') {
                canvas['canvasFp'] = canvasElement.substring(canvasElement.indexOf(':') + 1, canvasElement.length);
            }
            else if (canvasElement.substring(0, canvasElement.indexOf(':')) === 'canvas winding') {
                canvas['canvasWinding'] = canvasElement.substring(canvasElement.indexOf(':') + 1, canvasElement.length);
            }
        });
        this.fp['canvas'] = canvas;
    };
    Fingerprint.prototype.setPlugins = function (data) {
        var plugins = [];
        data.value.forEach(function (element) {
            plugins.push(element[0]);
        });
        this.fp['plugins'] = plugins;
    };
    Fingerprint.prototype.setWebgl = function (data) {
        var _this = this;
        data.value.forEach(function (element) {
            var key = element.substring(0, element.indexOf(':'));
            var index = key.indexOf(" ");
            while (index != -1) {
                key = key.replace(" ", "");
                key = key.substring(0, index) + key.charAt(index).toUpperCase() + key.substring(index + 1, key.length);
                index = key.indexOf(" ");
            }
            _this.fp[key] = element.substring(element.indexOf(':') + 1, element.length);
        });
    };
    Fingerprint.prototype.setClientJsComponents = function () {
        this.fp['currentResolution'] = this.client.getCurrentResolution();
        this.fp['timeZoneAbbreviation'] = this.client.getTimeZone();
        this.fp['engine'] = this.client.getEngine();
        this.fp['engineVersion'] = this.client.getEngineVersion();
        this.fp['cpu'] = this.client.getCPU();
        this.fp['os'] = this.client.getOS();
        this.fp['osVersion'] = this.client.getOSVersion();
        this.fp['systemLanguage'] = this.client.getSystemLanguage();
        this.fp['getSoftwareVersion'] = this.client.getSoftwareVersion();
        this.fp['silverlight'] = this.client.isSilverlight();
        this.fp['silverlightVersion'] = this.client.getSilverlightVersion();
        this.fp['mimeType'] = this.client.getMimeTypes();
        this.fp['ismimeType'] = this.client.isMimeTypes();
        this.fp['canvasPrint'] = this.client.getCanvasPrint();
        this.setMobileInformations();
        this.setBrowserInformation();
        this.setDeviceInformation();
        this.setFlashAndJava();
    };
    Fingerprint.prototype.setMobileInformations = function () {
        var mobile = {
            isMobile: undefined,
            isMobileSafari: undefined,
            isMobileMajor: undefined,
            isMobileAndroid: undefined,
            isMobileOpera: undefined,
            isMobileWindows: undefined,
            isMobileBlackBerry: undefined,
            isMobileIOS: undefined,
            isIphone: undefined,
            isIpad: undefined,
            isIpod: undefined
        };
        mobile['isMobileSafari'] = this.client.isMobileSafari();
        mobile['isMobile'] = this.client.isMobile();
        mobile['isMobileMajor'] = this.client.isMobileMajor();
        mobile['isMobileAndroid'] = this.client.isMobileAndroid();
        mobile['isMobileOpera'] = this.client.isMobileOpera();
        mobile['isMobileWindows'] = this.client.isMobileWindows();
        mobile['isMobileBlackBerry'] = this.client.isMobileBlackBerry();
        mobile['isMobileIOS'] = this.client.isMobileIOS();
        mobile['isIphone'] = this.client.isIphone();
        mobile['isIpad'] = this.client.isIpad();
        mobile['isIpod'] = this.client.isIpod();
        this.fp['mobile'] = mobile;
    };
    Fingerprint.prototype.setBrowserInformation = function () {
        this.fp['browserMajorVersion'] = this.client.getBrowserMajorVersion();
        this.fp['browser'] = this.client.getBrowser();
        this.fp['browserVersion'] = this.client.getBrowserVersion();
    };
    Fingerprint.prototype.setDeviceInformation = function () {
        this.fp['device'] = this.client.getDevice();
        this.fp['deviceType'] = this.client.getDeviceType();
        this.fp['deviceVendor'] = this.client.getDeviceVendor();
        this.fp['deviceType'] = this.client.getDeviceType();
    };
    Fingerprint.prototype.setFlashAndJava = function () {
        this.fp['java'] = this.client.isJava();
        this.fp['javaVersion'] = this.client.getJavaVersion();
        this.fp['flash'] = this.client.isFlash();
        this.fp['flashVersion'] = this.client.getFlashVersion();
    };
    return Fingerprint;
}());
exports.default = Fingerprint;
