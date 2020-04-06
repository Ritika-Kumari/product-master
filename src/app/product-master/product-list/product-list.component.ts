import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { EncryptionDecryptionService } from 'src/app/core/services/encryption-decryption.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  theExpansionPanelIndex: number;
  linkProductView_Visible = true;
  btnEdit_Visible = false;

  myListProducts = [];
  myListProductItems = [];

  @ViewChildren(MatExpansionPanel) viewPanels: QueryList<MatExpansionPanel>;

  constructor(private _theRouter: Router,
    private _theProductService: ProductService, ) { }

  ngOnInit() {
    this.myListProducts = this._theProductService.myListProducts;
    this.myListProductItems = this._theProductService.myListProductItems; 
  }

  btnViewProduct_OnClick(theBaseCode: string) { 
    this.btnEdit_Visible = true; 
    this._theRouter.navigate(['/product/productcrud', { btnEdit_Visible : this.btnEdit_Visible, theProductBaseCode : theBaseCode }]);
  }

}
