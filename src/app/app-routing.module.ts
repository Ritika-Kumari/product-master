import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SampleCodeComponent } from './sample-code/sample-code.component';

const routes: Routes = [
  {  path: '', component: AppLayoutComponent, children: [
    {
      path: 'product',
      loadChildren: () => import('./product-master/product-master.module').then(mod => mod.ProductMasterModule)
    } 
  ] 
},
{  path: 'samplecode', component: SampleCodeComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
