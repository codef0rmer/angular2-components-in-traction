import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DIComponent, HelloService } from './di';

@NgModule({
  declarations: [DIComponent],
  imports:      [BrowserModule],
  providers:    [HelloService],
  bootstrap:    [DIComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);