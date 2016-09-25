import { Component } from '@angular/core';

@Component({
  selector: 'ng-app',
  template: '<span>Hello, <span [textContent]="name"></span></span>'
})
export class MyAppComponent {
  name: string = 'Angular2';
}