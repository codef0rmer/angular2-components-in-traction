import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'ng-app',
  template: `
    <input type='checkbox' [(ngModel)]='choose' />
    <div>{{choose}}</div>
    <button (click)="choose=!choose">Toggle Checkbox</button>
  `
})
export class DataBindingComponent {
  choose: boolean = true;
}

@NgModule({
  declarations: [DataBindingComponent],
  imports:      [BrowserModule, FormsModule],
  bootstrap:    [DataBindingComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);