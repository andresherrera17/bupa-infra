import * as crypto from 'crypto-js';
import { environment } from 'src/environments/environment';

export class Util {

  private secretKey: string;

  constructor() {
    this.secretKey = environment.secretKey;
  }

  encrypt(value: any) {
    const encryptAES = crypto.AES.encrypt(value, this.secretKey).toString();;
    return encryptAES;
  }


  decrypt(value: any) {
    const encryptAES = crypto.AES.decrypt(value, this.secretKey).toString(crypto.enc.Utf8);
    return encryptAES;
  }
}