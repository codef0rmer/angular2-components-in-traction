import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

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