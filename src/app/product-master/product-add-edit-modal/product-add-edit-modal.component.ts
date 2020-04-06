import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA  } from '@angular/material';

@Component({
  selector: 'app-product-add-edit-modal',
  templateUrl: './product-add-edit-modal.component.html',
  styleUrls: ['./product-add-edit-modal.component.css']
})
export class ProductAddEditModalComponent implements OnInit {

  theCategoryHeading: string;
  theCategoryName: string;

  constructor(  
    @Optional() @Inject(MAT_DIALOG_DATA) public data
    ) {  }  

  ngOnInit() { 
    this.theCategoryHeading = this.data.categoryValue;
    this.theCategoryName = this.data.categoryName
  }

  btnSubmitCategory_OnClick(){
    
  }

}
