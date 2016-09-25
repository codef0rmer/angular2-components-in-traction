import { Component, Input } from '@angular/core';

@Component({
  selector: 'super-marquee,[super-marquee],.super-marquee',
  template: `<marquee><div class="wave" [innerHTML]="scrollingText"></div></marquee>`
})
export class SuperMarqueeComponent {
  @Input('data-text') scrollingText: string;

  // constructor(private _element: ElementRef) {
  // this.scrollingText =  _element.nativeElement.getAttribute('data-text');
  // }
}

@Component({
  selector: 'ng-app',
  template: `
    <!-- Element -->
    <super-marquee [data-text]="'<span>Angular2 </span><span>Directives </span><span>inAction, </span><span>Yey..!!</span>'"></super-marquee>
    <!-- Attribute -->
    <div super-marquee [data-text]="'<span>Angular2 </span><span>Directives </span><span>inAction, </span><span>Yey..!!</span>'"></div>
    <!-- Class -->
    <div class='super-marquee' [data-text]="'<span>Angular2 </span><span>Directives </span><span>inAction, </span><span>Yey..!!</span>'"></div>
  `
})
export class MyAppComponent {
  
}