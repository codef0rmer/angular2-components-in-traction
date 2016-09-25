import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppComponent, SuperMarqueeComponent } from './templateUrl';

@NgModule({
  declarations: [MyAppComponent, SuperMarqueeComponent],
  imports:      [BrowserModule],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);