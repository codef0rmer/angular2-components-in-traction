import { Component, Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  name: string;
  
  greet(who) {
    this.name = 'Hello ' + who;  
  }  
}

@Component({
  selector: 'ng-app',
  template: '<h1>Check the console</h1>'
})
export class DIComponent {
  constructor(public Hello: HelloService) {
    this.Hello.greet('Angular2');
    console.log(this.Hello.name);
  }
}