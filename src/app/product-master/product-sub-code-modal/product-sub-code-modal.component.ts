import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UtilityService } from 'src/app/core/services/utility.service';
import { AlertTypeEnum } from 'src/app/enum/alert-type.enum';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-sub-code-modal',
  templateUrl: './product-sub-code-modal.component.html',
  styleUrls: ['./product-sub-code-modal.component.css']
})
export class ProductSubCodeModalComponent implements OnInit {

  btnSubmitPopup_Visible = false;
  btnEditPopup_Visible = true;
  btnSubCodeEdit_Visible = false;
  btnSubCodeClose_Visible = true;
  myObjectProductSubCode: any = {};


  thePopupTitle: string;

  constructor(
    private _theRouter: Router,
    public _theMatDialog: MatDialog,
    private _theProductService: ProductService,
    private _theUtilityService: UtilityService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data
  ) {

  }

  ngOnInit() { 
    if (this.data.myListProductSubCode == 0) {
      this.btnSubCodeClose_Visible = false;
      this.btnSubmitPopup_Visible = true;
      this.btnEditPopup_Visible = false;
    }
    else {
      this.thePopupTitle = this.data.thePopupTitle;
      this.myObjectProductSubCode = this.data.myListProductSubCode;
    }
  }

  btnEditPopup_OnClick() {
    this.btnSubCodeClose_Visible = false;
    this.btnSubmitPopup_Visible = true;
    this.btnEditPopup_Visible = false;
  }

  btnSubmitPopup_OnClick() {

    if (this.myObjectProductSubCode.pack_qty == 0 || this.myObjectProductSubCode.pack_qty == undefined) {
      this._theUtilityService.FocusWithSetTimeOut('#txtInnerBox');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Inner Box Qty is missing");
      return;
    } else if (this.myObjectProductSubCode.cartoon_qty == 0 || this.myObjectProductSubCode.cartoon_qty == undefined) {
      this._theUtilityService.FocusWithSetTimeOut('#txtOuterBox');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Outer Box Qty is missing");
      return;
    } else if (this.myObjectProductSubCode.mrp == 0 || this.myObjectProductSubCode.mrp == undefined) {
      this._theUtilityService.FocusWithSetTimeOut('#txtMRP');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "MRP is missing");
      return;
    } else if (this.myObjectProductSubCode.saleprice == 0 || this.myObjectProductSubCode.saleprice == undefined) {
      this._theUtilityService.FocusWithSetTimeOut('#txtSalePrice');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Sale price is missing");
      return;
    } else if (this.myObjectProductSubCode.points1 == 0 || this.myObjectProductSubCode.points1 == undefined) {
      this._theUtilityService.FocusWithSetTimeOut('#txtPoints1');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Points-1 is missing");
      return;
    } else if (this.myObjectProductSubCode.points2 == 0 || this.myObjectProductSubCode.points2 == undefined) {
      this._theUtilityService.FocusWithSetTimeOut('#txtPoints2');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Points-2 is missing");
      return;
    }

    localStorage.setItem('myObjectProduct', JSON.stringify(this.myObjectProductSubCode)); 

    this._theProductService.myListProductSubCode.push(this.myObjectProductSubCode);
    if (this.myObjectProductSubCode.id == null)
      this._theUtilityService.Alert(AlertTypeEnum.Success, 'Sub code is created successfully');
    else
      this._theUtilityService.Alert(AlertTypeEnum.Success, 'Sub code is updated successfully');

    this._theMatDialog.closeAll();
    this._theRouter.navigate(['/product/productcrud']);
  }

}
