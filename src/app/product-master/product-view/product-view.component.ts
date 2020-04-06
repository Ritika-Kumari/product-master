import { Component, OnInit } from '@angular/core';
import { ProductModesEnum } from '../../enum/product-modes.enum';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  liProductAdd_Visible = true; 
  get ModeType() { return ProductModesEnum; }

  constructor() { }

  ngOnInit() {
  }

}
