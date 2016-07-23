import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'

@Component({
  selector: 'ng-app',
  template: `
    <input type='checkbox' [(ngModel)]='choose' />
    <div>{{choose}}</div>
    <button (click)="choose=!choose">Toggle Checkbox</button>
  `
})
export class DataBinding {

}

bootstrap(DataBinding);