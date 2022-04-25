import * as crypto from 'crypto-js';
import { Util } from '../utils/util';
/**
* @description This decorator for attributes decrypts the value of this.
* @author Andres Herrera
* @returns PropertyDecorator
*/
export function decoratedProperty(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    let util = new Util();
    let original: any = target[propertyKey];
    Reflect.deleteProperty(target, propertyKey);
    Reflect.defineProperty(target, propertyKey, {
      get: () => original,
      set: newVal => {
        original = util.decrypt(newVal);
      },
      enumerable: true,
      configurable: true
    });
  };
}

function encrypt(value: any) {
  debugger;

  decrypt('a');
  const secretKey = "922e95a6f18fcd16c4724484f31c0c3d";
  const encryptMD5 = crypto.MD5(secretKey).toString();
  const encryptAES = crypto.AES.decrypt(value, secretKey).toString(crypto.enc.Utf8);
  return encryptAES;
}


function decrypt(value: any) {
  debugger;
  const secretKey = "922e95a6f18fcd16c4724484f31c0c3d";
  const encryptMD5 = crypto.MD5(secretKey).toString();
  const encryptAES = crypto.AES.encrypt('Secret key', secretKey).toString();;
  return encryptAES;
} 
