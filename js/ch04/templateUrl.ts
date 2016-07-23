import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'

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
  `,
  directives: [SuperMarqueeComponent]
})
export class MyApp {
  
}

bootstrap(MyApp);