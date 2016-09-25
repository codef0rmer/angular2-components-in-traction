import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppComponent, LinkyPipe, UppercasePipe } from './pipe';

@NgModule({
  declarations: [MyAppComponent, LinkyPipe, UppercasePipe],
  imports:      [BrowserModule, FormsModule],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);