import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-master/services/product.service';

// import * as angular from "angular";
declare var angular: any;

@Component({
  selector: 'app-sample-code',
  templateUrl: './sample-code.component.html',
  styleUrls: ['./sample-code.component.css']
})
export class SampleCodeComponent implements OnInit {
 
  theValue: string; 
  theName= "Anmol kumar";
  theFatherName = "Sh. Anish Kumar";

  constructor(
    private _theProductService : ProductService) {
   }

  myObjectProduct1 = { id: 1, basecode: 435, name: 'skin care1', name1: 'soap', packing: 'surya ltd' } ;

  myObjectProduct2 = { id: 6, basecode: 5, name: 'Health', p: 5 }   ;

  ngOnInit() {
    this.theValue = this.theName +  "  " + this.theFatherName;

   
    
    console.log("myObjectProduct1",this.myObjectProduct1);
    console.log("myObjectProduct2",this.myObjectProduct2);
 
    // this.myObjectProduct1 = JSON.parse(JSON.stringify(this.myObjectProduct2));

    let objMerge = Object.assign({}, this.myObjectProduct1, this.myObjectProduct2);
    console.log("objMerge",objMerge);

    // var obj1 = { food: 'pizza', car: 'ford' }
    // var obj2 = { animal: 'dog', car: 'chevy'}
    // var myObjectMerge;
    
    // myObjectMerge = JSON.stringify(this.myObjectProduct1) + JSON.stringify(this.myObjectProduct2);
    
    // myObjectMerge = myObjectMerge.replace(/\}\{/, ",");  
    
    
    // myObjectMerge = JSON.parse(myObjectMerge);  
    // console.log("objMerge",myObjectMerge);

// console.log("merge",jQuery.extend(this.myObjectProduct1, this.myObjectProduct2))

console.log("myObjectProduct1",this.myObjectProduct1);
    console.log("myObjectProduct2",this.myObjectProduct2);
    } 

}
