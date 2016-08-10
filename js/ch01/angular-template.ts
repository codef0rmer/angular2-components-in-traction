import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'ng-app',
  template: '<span>Hello, <span [textContent]="name"></span></span>'
})
class MyAppComponent {
  name: string = 'Angular2';
}

@NgModule({
  declarations: [MyAppComponent],
  imports:      [BrowserModule],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);