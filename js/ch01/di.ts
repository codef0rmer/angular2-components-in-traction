import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

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
export class DIComponent {
  constructor(public Hello: HelloService) {
    this.Hello.greet('Angular2');
    console.log(this.Hello.name);
  }
}

@NgModule({
  declarations: [DIComponent],
  imports:      [BrowserModule],
  providers:    [HelloService],
  bootstrap:    [DIComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);