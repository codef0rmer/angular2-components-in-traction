import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'super-marquee,[super-marquee],.super-marquee',
  templateUrl: 'templateUrl-partial.html'
})
class SuperMarqueeComponent {
  constructor() {

  }
}

@Component({
  selector: 'ng-app',
  template: `
    <!-- Element -->
    <super-marquee></super-marquee>

    <!-- Attribute -->
    <div super-marquee></div>

    <!-- Class -->
    <div class='super-marquee'></div>
  `
})
export class MyAppComponent {
  
}

@NgModule({
  declarations: [MyAppComponent, SuperMarqueeComponent],
  imports:      [BrowserModule],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);