import { Component, Directive, ElementRef, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'super-marquee,[super-marquee],.super-marquee',
  template: '<marquee><div class="wave"><span>AngularJS </span><span>Directives </span><span>inAction, </span>Yey..!!</div></marquee>'
})
export class SuperMarqueeComponent {
  constructor() {

  }
}

@Directive({
  selector: '[looper],.looper'
})
export class LooperDirective implements OnInit {
  constructor(private _element: ElementRef) {
    
  }
  
  ngOnInit() {
    var tElement = $(this._element.nativeElement);
    if (tElement.find('span').length) return;

    var DOM = '';

    tElement
      .text()
      .split(' ')
      .forEach(function(word) {
        if (word !== '') {
          DOM+= '<span>' + word + '</span>';
        }
      });

    tElement.find('.wave').html(DOM);
  }
}

@Directive({
  selector: '[validate],.validate'
})
export class ValidateDirective implements OnInit {
  constructor(private _element: ElementRef) {
    
  }
  
  ngOnInit() {
    var element = $(this._element.nativeElement);
    var $span = element.find('span'),
        totalSpans = $span.length,
        totalWords = element.text().split(' ').length;

    if (totalSpans !== totalWords) {
      for (var i = 0; i < totalSpans; i++) {
        $($span[i]).replaceWith($span[i].textContent + '&nbsp;');
      }
    }
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <!-- Element -->
    <super-marquee validate looper></super-marquee>

    <!-- Attribute -->
    <div super-marquee validate looper></div>

    <!-- Class -->
    <div class='super-marquee validate looper'></div>
  ` 
})
export class MyAppComponent {
  
}