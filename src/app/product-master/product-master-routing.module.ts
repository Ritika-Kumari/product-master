import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductCrudComponent } from './controls/product-crud/product-crud.component';
import { ProductDisplayCategoryListComponent } from './product-display-category-list/product-display-category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPrintCategoryListComponent } from './product-print-category-list/product-print-category-list.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  { path: 'productcrud', component: ProductCrudComponent},
  { path: 'add', component: ProductAddComponent},
  { path: 'productsearch', component: ProductSearchComponent},
  { path: 'displayproductcategorylist', component: ProductDisplayCategoryListComponent }, 
  { path: 'productlist', component: ProductListComponent }, 
  { path: 'printcategorylist', component: ProductPrintCategoryListComponent },
  { path: 'productview', component: ProductViewComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductMasterRoutingModule { }
