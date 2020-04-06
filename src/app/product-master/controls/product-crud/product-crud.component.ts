import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service'; 
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ProductSubCodeModalComponent } from '../../product-sub-code-modal/product-sub-code-modal.component';
import { UtilityService } from 'src/app/core/services/utility.service';
import { AlertTypeEnum } from 'src/app/enum/alert-type.enum'; 

declare let $: any;

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {        

  theSubCode_Visible: string;
  thePopupTitle: string;
  theProductBasecode: string;
  btnSubmitPopup_Visible = false;
  btnEditPopup_Visible = false;

  btnEdit_Visible: string;
  btnSubCodeEdit_Visible = false;
  btnAddSubCode_Visible = true;
  btnSubCodeClose_Visible = false;
  btnSubmit_Visible = false;

  myObjectProduct: any = {};
  myListProductSubCode: any = {};
  myObjectProductSubCode:  [];

  constructor(
    private _theRouter: Router,
    private _theActivatedRoute: ActivatedRoute,
    private _theProductService: ProductService,
    public _theMatDialog: MatDialog, 
    private _theUtilityService: UtilityService, 
  ) { }

  ngOnInit() { 
    this._theActivatedRoute.params.subscribe((params) => {  
      if(params.btnEdit_Visible != null && params.theProductBaseCode != null){ 
        this.btnEdit_Visible = params.btnEdit_Visible; 
          this.theProductBasecode =  params.theProductBaseCode; 
      }  
    }); 
    
    if (this.btnEdit_Visible != null ) {   
      this.myObjectProduct = this._theProductService.myListProductItems;
       this.myObjectProduct.forEach(result => {
         if(result.basecode == this.theProductBasecode){
          this.myObjectProduct = result;  
         }
         this.myListProductSubCode = this._theProductService.myListProductSubCode;  
      });
    }

  } 

  btnSubmit_OnClick() { 

    if (this.myObjectProduct.basecode=="" || this.myObjectProduct.basecode==undefined) {
      this._theUtilityService.FocusWithSetTimeOut('#txtBaseCode');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Base code is missing");
      return;
    } else if (this.myObjectProduct.name=="" || this.myObjectProduct.name==undefined) {
      this._theUtilityService.FocusWithSetTimeOut('#txtName');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Name is missing");
      return;
    } else if (this.myObjectProduct.name1=="" || this.myObjectProduct.name1==undefined) {
      this._theUtilityService.FocusWithSetTimeOut('#txtName1');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Display Name is missing");
      return;
    } else if (this.myObjectProduct.packing=="" || this.myObjectProduct.packing==undefined) {
      this._theUtilityService.FocusWithSetTimeOut('#txtPacking');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Packing is missing");
      return;
    } else if (this.myObjectProduct.category_id==0) {
      this._theUtilityService.FocusWithSetTimeOut('#ddlCategory');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Display Category is missing");
      return;
    } else if (this.myObjectProduct.category_id1==0) {
      this._theUtilityService.FocusWithSetTimeOut('#ddlCategory1');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Print Category is missing");
      return;
    } else if (this.myObjectProduct.slab_id==0) {
      this._theUtilityService.FocusWithSetTimeOut('#ddlTaxSlab');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Tax Slab is missing");
      return;
    } else if (this.myObjectProduct.hsncode=="" || this.myObjectProduct.hsncode==undefined) {
      this._theUtilityService.FocusWithSetTimeOut('#txtHsnCode');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "HSN Code is missing");
      return;
    } else if (this.myObjectProduct.discount_slab==0) {
      this._theUtilityService.FocusWithSetTimeOut('#ddlDiscountSlab');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Discount Slab is missing");
      return;
    } else if (this.myObjectProduct.discount_type==0) {
      this._theUtilityService.FocusWithSetTimeOut('#ddlDiscountType');
      this._theUtilityService.Alert(AlertTypeEnum.Info, "Discount Type is missing");
      return;
    }

    localStorage.setItem('myObjectProduct',JSON.stringify(this.myObjectProduct)); 

    this._theProductService.myListProductItems.push(this.myObjectProduct);
    if (this.myObjectProduct.id == null)
    this._theUtilityService.Alert(AlertTypeEnum.Success, 'Product is created successfully');
    else
    this._theUtilityService.Alert(AlertTypeEnum.Success, 'Product is updated successfully');
    this._theRouter.navigate(['/product/productlist']); 

  }

  btnCancel_OnClick() {
    this._theRouter.navigate(['/product/productlist']); 
  }

  btnEdit_OnClick() {
    this.btnEdit_Visible = null; 
  }

  btnAddSubCode_OnClick() {
    this.thePopupTitle = "Sub Code/Add"; 
    this.myObjectProductSubCode = [];
    this.OpenModal(this.thePopupTitle, this.myObjectProductSubCode); 
  }

  tdViewLink_OnClick(item: []) { 
    this.thePopupTitle = "Sub Code/View";
    this.myObjectProductSubCode = item; 
    this.OpenModal(this.thePopupTitle, this.myObjectProductSubCode); 
  }

  OpenModal(thePopupTitle: string, myListProductSubCode : [] ) {
    const myObjectDialogConfig = new MatDialogConfig();

    myObjectDialogConfig.disableClose = true;
    myObjectDialogConfig.autoFocus = true;
    myObjectDialogConfig.height = "800px";
    myObjectDialogConfig.width = "800px"; 
    myObjectDialogConfig.data = { 
      thePopupTitle: thePopupTitle,
      myListProductSubCode: myListProductSubCode
    };
    
    this._theMatDialog.open(ProductSubCodeModalComponent, myObjectDialogConfig);
 
  }

}
