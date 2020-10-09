import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCoreModule } from 'new-core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NewCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
