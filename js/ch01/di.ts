import {Component, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Injectable()
class HelloService {
  name: string;
  
  greet(who) {
    this.name = 'Hello ' + who;  
  }  
}

@Component({
  selector: 'ng-app',
  template: '<h1>Check the console</h1>'
})
export class DI {
  constructor(Hello: HelloService) {
    Hello.greet('Angular2');
    console.log(Hello.name);
  }
}

bootstrap(DI, [HelloService]);