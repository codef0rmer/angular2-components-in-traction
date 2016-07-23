import { Component, Injectable } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'

@Injectable()
class HelloService {
  name: string;
  
  greet(who) {
    this.name = 'Hello ' + who;  
  }  
}

@Component({
  selector: 'ng-app',
  template: '<h1>Check the console</h1>',
  providers: [HelloService]
})
export class DI {
  constructor(public Hello: HelloService) {
    this.Hello.greet('Angular2');
    console.log(this.Hello.name);
  }
}

bootstrap(DI);