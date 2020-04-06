import { Component, OnInit } from '@angular/core'; 
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  theSearchText: string;

  liMessage_Visible = false;

  myListProduct = [];
  
  constructor(private _theProductService: ProductService) { }

  ngOnInit() {
  } 

  btnSearch_OnClick() {
    if (this.theSearchText === "product1") {
      this.liMessage_Visible = false;
      this.myListProduct = this._theProductService.myListProductSubCode;
    }
    else if (this.theSearchText === "product2") {
      this.liMessage_Visible = false;
      this.myListProduct = this._theProductService.myListProductItems;
    }
    else {
      this.liMessage_Visible = true;
      this.myListProduct = [];
    }

  }

  btnReset_OnClick() {
    this.theSearchText = "";
    this.myListProduct = [];
  } 

}
