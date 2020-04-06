import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';  
import { AppLayoutComponent } from './app-layout/app-layout.component'; 
import { MatDialogModule } from '@angular/material';
import { SampleCodeComponent } from './sample-code/sample-code.component'; 

@NgModule({
  declarations: [
    AppComponent,   
     AppLayoutComponent, SampleCodeComponent,  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    SharedModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    FormsModule,
     ReactiveFormsModule,
     MatDialogModule,
     
  ],
  entryComponents: [],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
