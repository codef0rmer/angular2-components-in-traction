import { Component, ElementRef, Renderer } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'

@Component({
  selector: 'super-marquee,[super-marquee],.super-marquee',
  template: ''
})
class SuperMarqueeComponent {
  constructor(private _element: ElementRef, private _renderer: Renderer) {
    var scrollingText = `<marquee>
      <div class="wave">
        <span>Angular2 </span>
        <span>Directives </span>
        <span>inAction, </span>
        <span>Yey..!!</span>
      </div>\
    </marquee>`;

    this._renderer.setElementProperty(this._element.nativeElement, 'innerHTML', scrollingText);
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