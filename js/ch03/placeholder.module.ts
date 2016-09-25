import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppComponent, OnImageLoadDirective } from './placeholder';

@NgModule({
  declarations: [MyAppComponent, OnImageLoadDirective],
  imports:      [BrowserModule],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);