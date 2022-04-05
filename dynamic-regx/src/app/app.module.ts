import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DigitDecimaNumberDirective } from './dynamicRegExNumber-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    DigitDecimaNumberDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
