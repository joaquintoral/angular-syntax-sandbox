import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';


@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
