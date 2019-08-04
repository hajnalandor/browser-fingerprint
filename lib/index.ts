import Fingerprint from './Fingerprint'
/**
* @Method: Returns the browser fingerprint
* @Param {}
* @Return {Fingerprint object}
*/
export function getFingerprint() : any {
  const fingerprint = new Fingerprint();
  return fingerprint.create();
}