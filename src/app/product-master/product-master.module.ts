import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProductMasterRoutingModule } from './product-master-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductCrudComponent } from './controls/product-crud/product-crud.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDisplayCategoryListComponent } from './product-display-category-list/product-display-category-list.component';
import { ProductPrintCategoryListComponent } from './product-print-category-list/product-print-category-list.component';
import { ProductAddEditModalComponent } from './product-add-edit-modal/product-add-edit-modal.component';
import { MatDialogModule, MatExpansionModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatCardModule } from '@angular/material';
import { ProductSubCodeModalComponent } from './product-sub-code-modal/product-sub-code-modal.component';

@NgModule({
  declarations: [
    ProductCrudComponent,
    ProductAddComponent,
    ProductSearchComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductDisplayCategoryListComponent,
    ProductPrintCategoryListComponent,
    ProductAddEditModalComponent,
    ProductSubCodeModalComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProductMasterRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule, MatCardModule,
    MatExpansionModule,
  ],
  entryComponents: [ ProductAddEditModalComponent, ProductSubCodeModalComponent ],

})
export class ProductMasterModule { }
