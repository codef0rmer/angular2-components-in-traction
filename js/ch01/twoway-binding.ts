import { Component } from '@angular/core';

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