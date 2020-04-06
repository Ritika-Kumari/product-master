import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import * as ip from 'what-is-my-ip-address';

// import { AlertTypeEnum } from 'src/app/enum/alert-type.enum';

// import { SpinnerService } from './spinner.service';
// import { EncryptionDecryptionService } from './encryption-decryption.service';

// Declared global varibale to use toastr
declare var toastr: any;
declare let $: any;
declare var moment: any;

@Injectable({
  providedIn: "root"
})
export class UtilityService {

  theIPAddress: string;
  theCurrentUserKey = "U2FsdGVkX1xMl37tofPsIL3yFOMyQCvteCh0u9jwmJsAvUMl32";
  private _theToastr: any = toastr;

  constructor(private _theRouter: Router,
    //  private _theSpinner: SpinnerService,
     private zone: NgZone,
    // private _theEnryptionDeCryptionService: EncryptionDecryptionService
    ) {

    let theIpkey = 'U2FsdGVkX1+Qu7y7PhqmV0jfyZNOt2HqwcMtlKp18GY';
    // if (localStorage.getItem(theIpkey) == null || localStorage.getItem(theIpkey) == '') {
    //   ip.v4()
    //     .then((ip) => {
    //       this.theIPAddress = ip;
    //       localStorage.setItem(theIpkey, this._theEnryptionDeCryptionService.set(this.theIPAddress));
    //     });
    // }
    // else {
    //   this.theIPAddress = this._theEnryptionDeCryptionService.get(localStorage.getItem(theIpkey));
    // }

    this._theToastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: true,
      progressBar: true,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut"
    };
  }

  Alert(theType: string, theTitle: string) {
    this._theToastr[theType](theTitle);
  }

  // ThrowError(theError: string | HttpErrorResponse) {
  //   this._theSpinner.Hide();
  //   if (typeof (theError) == 'string') {
  //     throw new Error(theError);
  //   }
  //   else {
  //     throw theError;
  //   }
  // }

  // GlobalServerHandlerAlert(theErrorMessage: string) {
  //   this.zone.run(() => {
  //     this._theSpinner.Hide();
  //     if (environment.redirectToError) {
  //       this._theRouter.navigate(['/error']);
  //     }
  //     else {
  //       this.Alert(AlertTypeEnum.Error, theErrorMessage);
  //     }
  //   });
  // }

  FocusWithSetTimeOut(theSelector: string, theTimeInterval = 500) {
    setTimeout(() => {
      let theElement = $(theSelector);
      if (theElement) {
        theElement.focus();
      }
    }, theTimeInterval);
  }

  // GlobalClientHandlerAlert(theErrorMessage: string) {
  //   this.zone.run(() => {
  //     this._theSpinner.Hide();
  //     this.Alert(AlertTypeEnum.Error, theErrorMessage);
  //   });
  // }

  GetListClone(myListList: any) {
    return myListList.map((item: any) => Object.assign({}, item));
  }

  GetObjectClone(myObject: any) {
    return Object.assign({}, myObject);
  }

  // GetLocalStorageItem(theItemName: string): any {
  //   if (theItemName == "CurrentUser") {
  //     theItemName = this.theCurrentUserKey;
  //     const value = localStorage.getItem(theItemName);
  //     if (value) {
  //       try {
  //         return JSON.parse(this._theEnryptionDeCryptionService.get(value));
  //       } catch (error) {
  //         return value;
  //       }
  //     }
  //   } else {
  //     const value = localStorage.getItem(theItemName);
  //     if (value) {
  //       try {
  //         return JSON.parse(value);
  //       } catch (error) {
  //         return value;
  //       }
  //     }
  //   }
  // }

  // SetLocalStorageItemForSearch(theItemKey: string, theItemValue: any) {
  //   let value = this._theEnryptionDeCryptionService.set(JSON.stringify(theItemValue));
  //   localStorage.setItem(theItemKey, value);
  // }


  // GetLocalStorageItemForSearch(theItemKey: string): any {
  //   let value = localStorage.getItem(theItemKey);
  //   if (value) {
  //     try {
  //       return JSON.parse(this._theEnryptionDeCryptionService.get(value));
  //     } catch (error) {
  //       return value;
  //     }
  //   }
  // }

  CheckLocalStorageItemAvailable(theItemKey) {
    if (localStorage.getItem(theItemKey) == null) {
      return false;
    }
    else {
      return true;
    }
  }

  RemoveLocalStorageItem(theItemKey) {
    localStorage.removeItem(theItemKey);
  }


  GeneratePassword() {
    let length = 5;
    let charset = "0123456789";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
}
