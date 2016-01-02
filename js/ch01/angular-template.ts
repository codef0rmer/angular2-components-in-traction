import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'ng-app',
  template: '<span>Hello, <span [textContent]="name"></span></span>'
})
export class MyApp {
  name: string = 'Angular2';
}

bootstrap(MyApp);