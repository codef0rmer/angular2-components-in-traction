import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyAppComponent, LookupService } from './provider';

@NgModule({
  declarations: [MyAppComponent],
  imports:      [BrowserModule],
  providers:    [LookupService],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);