import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyOneComponent } from './my-one/my-one.component';
import { SimpleComponent } from './simple/simple.component';
import { VerySimpleComponent } from './simple/very-simple.component';


@NgModule({
  declarations: [
    AppComponent,
    MyOneComponent,
    SimpleComponent,
    VerySimpleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
