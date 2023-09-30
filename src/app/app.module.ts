import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFormsComponent } from './form/ng-forms/ng-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Shared/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    NgFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
