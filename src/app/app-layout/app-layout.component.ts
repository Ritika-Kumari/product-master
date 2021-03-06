import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  constructor(
    private _theRouter: Router
  ) { }

  ngOnInit() {
    this._theRouter.navigate(['/product/productcrud']);
  }

}
