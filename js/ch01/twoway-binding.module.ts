import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DataBindingComponent } from './twoway-binding';

@NgModule({
  declarations: [DataBindingComponent],
  imports:      [BrowserModule, FormsModule],
  bootstrap:    [DataBindingComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);