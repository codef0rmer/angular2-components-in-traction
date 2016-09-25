import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppComponent, BODComponent, CEOComponent } from './component';

@NgModule({
  declarations: [MyAppComponent, BODComponent, CEOComponent],
  imports:      [BrowserModule],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);