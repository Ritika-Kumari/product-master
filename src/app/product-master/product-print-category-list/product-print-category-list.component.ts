import { Component, OnInit } from '@angular/core'; 
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductAddEditModalComponent } from '../product-add-edit-modal/product-add-edit-modal.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-print-category-list',
  templateUrl: './product-print-category-list.component.html',
  styleUrls: ['./product-print-category-list.component.css']
})
export class ProductPrintCategoryListComponent implements OnInit {

  theCategoryHeading: string;
  theCategoryName: string;
  theProductCategoryName: string;

  liAddCategory_Visible = true;
  tdCategoryEdit_Visible = true;
  tdCategoryDelete_Visible = true;

  btnCategoryEdit_Visible = true;

  myListProductPrintCategory = [];

  constructor( public _theMatDialog: MatDialog,
    private _theProductService: ProductService) { }

  ngOnInit() {
    this.myListProductPrintCategory = this._theProductService.myListProductCategory;
  } 

  btnCategory_OnClick(categoryName: string) { 
    this.theCategoryHeading = "Category/Add";
    this.OpenModal(categoryName, this.theCategoryHeading);
  }


  btnEditCategory_OnClick(categoryName: string) { 
    this.theCategoryHeading = "Category/Edit";
    this.OpenModal(categoryName, this.theCategoryHeading);
  }

  btnDeleteCategory_OnClick() {
    confirm('Are you sure to delete this category?');
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
    
    this._theMatDialog.open(ProductAddEditModalComponent,  myObjectDialogConfig );
 
  }

}
