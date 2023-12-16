import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponent } from './second.component';

@NgModule({
  // list of all components in your application
  declarations: [AppComponent, SecondComponent],
  // list of all the modules that can be used in your application
  imports: [BrowserModule],
  // list of services which can be accessed by all the components
  providers: [],
  // list of main components
  bootstrap: [AppComponent],
})
export class AppModule {}
