import { Component, OnInit, ElementRef } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ProductAddEditModalComponent } from '../product-add-edit-modal/product-add-edit-modal.component';
import { ProductService } from '../services/product.service';

declare var $: any;

@Component({
  selector: 'app-product-display-category-list',
  templateUrl: './product-display-category-list.component.html',
  styleUrls: ['./product-display-category-list.component.css']
})
export class ProductDisplayCategoryListComponent implements OnInit {

  theCategoryHeading: string; 
  theCategoryName: string;
  theFooterVisible = false;

  liAddCategory_Visible = true;
  tdSortingControls_Visible = true;
  tdCategoryEdit_Visible = true;
  tdCategoryDelete_Visible = true;

  myObjectProductCategoryModel = [];
  myListProductDisplayCategory = [];

  constructor( public _theMatDialog: MatDialog,
    private _theProductService: ProductService
  ) { }

  ngOnInit() { 
    this.myListProductDisplayCategory = this._theProductService.myListProductCategory;
  
  } 

  btnCategory_OnClick(itemName: string) { 
    this.theCategoryHeading = "Category/Add";
    this.OpenModal(itemName, this.theCategoryHeading);
  }

  btnCategoryDown_OnClick(item: [], theIndex: number) {
    if (theIndex < this.myListProductDisplayCategory.length) {
      this.theFooterVisible = true;
      let tempRow = this.myListProductDisplayCategory[theIndex + 1];
      this.myListProductDisplayCategory[theIndex + 1] = this.myListProductDisplayCategory[theIndex];
      this.myListProductDisplayCategory[theIndex] = tempRow;
    }
  }

  btnCategoryUP_OnClick(categoryName: [], theIndex: number) {
    if (theIndex > 0) {
      this.theFooterVisible = true;
      let tempRow = this.myListProductDisplayCategory[theIndex - 1];
      this.myListProductDisplayCategory[theIndex - 1] = this.myListProductDisplayCategory[theIndex];
      this.myListProductDisplayCategory[theIndex] = tempRow;
    }
  }

  btnEditCategory_OnClick(categoryName: string) { 
    this.theCategoryHeading = "Category/Edit";
    this.OpenModal(categoryName, this.theCategoryHeading);
  }

  btnDeleteCategory_OnClick(){
    confirm('Are you sure to delete this category?');
  }

  btnApply_OnClick(){
  }

  btnCancel_OnClick() {
    confirm('Are you sure to cancel?');
  }

  OpenModal(categoryName: string, theCategoryHeading: string) {
    const myObjectDialogConfig = new MatDialogConfig();

    myObjectDialogConfig.disableClose = true;
    myObjectDialogConfig.autoFocus = true;
    myObjectDialogConfig.height = "300px";
    myObjectDialogConfig.width = "600px"; 
    myObjectDialogConfig.data = {
      categoryValue: theCategoryHeading,
      categoryName: categoryName
    };
    this._theMatDialog.open(ProductAddEditModalComponent, myObjectDialogConfig);
  }

}
