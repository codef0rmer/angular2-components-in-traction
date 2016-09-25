import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppComponent, SuperMarqueeComponent, ValidateDirective, LooperDirective } from './super-marquee';

@NgModule({
  declarations: [MyAppComponent, SuperMarqueeComponent, ValidateDirective, LooperDirective],
  imports:      [BrowserModule],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);