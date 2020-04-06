import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class EncryptionDecryptionService {

  // The set method is use for encrypt the value.
  set(value: string) {
    let keys = '$#@^Root';
    let encrypted = CryptoJS.AES.encrypt(value, keys).toString();
    encrypted = encrypted.replace(/[+]/g, 'xMl3').replace(/[\/]/g, 'Por21').replace(/[=]/g, 'Ml32');
    return encrypted.toString();

    // let key = CryptoJS.enc.Utf8.parse('$#@^Root$#@^Root');
    // let iv = CryptoJS.enc.Utf8.parse('$#@^Root$#@^Root');

    // let encryptedlogin = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse("1"), key,
    //   {
    //     keySize: 128 / 8,
    //     iv,
    //     mode: CryptoJS.mode.CBC,
    //     padding: CryptoJS.pad.Pkcs7
    //   });
  }

  // The get method is use for decrypt the value.
  get(value: string) {
    let keys = '$#@^Root';
    value = value.replace(/(xMl3)/g, '+').replace(/(Por21)/g, '/').replace(/(Ml32)/g, '=');
    let decrypted = CryptoJS.AES.decrypt(value, keys).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }
}