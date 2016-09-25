import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppComponent, SearchPipe } from './instant-search';

@NgModule({
  declarations: [MyAppComponent, SearchPipe],
  imports:      [BrowserModule, FormsModule],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);