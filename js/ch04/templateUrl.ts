import { Component } from '@angular/core';

@Component({
  selector: 'super-marquee,[super-marquee],.super-marquee',
  templateUrl: 'ch04/templateUrl-partial.html'
})
export class SuperMarqueeComponent {
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