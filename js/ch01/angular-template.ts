import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'

@Component({
  selector: 'ng-app',
  template: '<span>Hello, <span [textContent]="name"></span></span>'
})
export class MyApp {
  name: string = 'Angular2';
}

bootstrap(MyApp);