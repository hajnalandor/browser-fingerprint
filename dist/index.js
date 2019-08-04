"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fingerprint_1 = require("./Fingerprint");
function getFingerprint() {
    var fingerprint = new Fingerprint_1.default();
    return fingerprint.create();
}
exports.getFingerprint = getFingerprint;
