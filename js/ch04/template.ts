import {Component, Directive, ElementRef} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Directive({
  selector: 'super-marquee,[super-marquee],.super-marquee'
})
class SuperMarquee {
  constructor(private _element: ElementRef) {
    _element.nativeElement.innerHTML = '<marquee><div class="wave">' + _element.nativeElement.getAttribute('data-text') + '</div></marquee>';
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <!-- Element -->
    <super-marquee data-text="<span>AngularJS </span><span>Directives </span><span>inAction, </span><span>Yey..!!</span>"></super-marquee>
    <!-- Attribute -->
    <div super-marquee data-text="<span>AngularJS </span><span>Directives </span><span>inAction, </span><span>Yey..!!</span>"></div>
    <!-- Class -->
    <div class='super-marquee' data-text="<span>AngularJS </span><span>Directives </span><span>inAction, </span><span>Yey..!!</span>"></div>
  `,
  directives: [SuperMarquee]
})
export class MyApp {
  
}

bootstrap(MyApp);