import {Component, Directive, ElementRef, OnInit, AfterViewInit} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

declare var $: any;

@Component({
  selector: 'super-marquee,[super-marquee],.super-marquee',
  template: '<div class="wave-wrapper"><div class="wave">{{text}}</div></div>'
})
class SuperMarqueeComponent implements OnInit {
  text: string;
  
  constructor(private _element: ElementRef) {
    this.text = this._element.nativeElement.getAttribute('data-text');
  }
  
  ngOnInit() {
    let direction: string = this._element.nativeElement.getAttribute('data-direction');
    let scrolldelay: string = this._element.nativeElement.getAttribute('data-scrolldelay');
    
    if (!direction || direction === 'up' || direction === 'down') {
      $(this._element.nativeElement).css('text-align', 'center');
    }

    $(this._element.nativeElement).children().css({
      '-webkit-animation': direction + ' ' + scrolldelay + 's linear infinite',
          '-moz-animation': direction + ' ' + scrolldelay + 's linear infinite',
          '-ms-animation': direction + ' ' + scrolldelay + 's linear infinite',
              'animation': direction + ' ' + scrolldelay + 's linear infinite'
    });
  }
}

@Directive({
  selector: '[validate],.validate'
})
class ValidateDirective implements AfterViewInit {
  constructor(private _element: ElementRef) {
    
  }
  
  ngAfterViewInit() {
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

@Directive({
  selector: '[looper],.looper'
})
class LooperDirective implements AfterViewInit {
  constructor(private _element: ElementRef) {
    
  }
  
  ngAfterViewInit() {
    let element = $(this._element.nativeElement),
        $target = element.children(),
        $span = element.find('span'),
        chars = element.text().split(''),
        totalSpans = $span.length,
        totalChars = chars.length,
        wavedelay = 0,
        DOM = '';

    if (totalSpans === totalChars) {
      $.each($span, function(span) {
        wavedelay+= parseInt(element.attr('data-wavedelay')) || 0.015;
        $(span).css({
          'display'           : 'inline-block',
          '-webkit-animation' : 'bump 0.3s ease-in ' + wavedelay + 's alternate infinite',
              '-moz-animation' : 'bump 0.3s ease-in ' + wavedelay + 's alternate infinite',
              '-ms-animation' : 'bump 0.3s ease-in ' + wavedelay + 's alternate infinite',
                  'animation' : 'bump 0.3s ease-in ' + wavedelay + 's alternate infinite'
        });
      });
    } else {
      $target.html('');

      chars.forEach(function(char, index) {
        if (char === ' ') {
          $target.append(' ');
        } else {
          wavedelay+= parseInt(element.attr('data-wavedelay')) || 0.015;
          $target.append(
            $('<span/>').html(char).css({
              'display'           : 'inline-block',
              '-webkit-animation' : 'bump 0.3s ease-in ' + wavedelay + 's alternate infinite',
                  '-moz-animation' : 'bump 0.3s ease-in ' + wavedelay + 's alternate infinite',
                  '-ms-animation' : 'bump 0.3s ease-in ' + wavedelay + 's alternate infinite',
                      'animation' : 'bump 0.3s ease-in ' + wavedelay + 's alternate infinite'
            })
          );
        }
      });        
    }
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <!-- Element -->
    <super-marquee looper validate data-text="AngularJS Directives inAction, Yey..!!" data-scrolldelay="2" data-direction="up" data-wavedelay="0.015"></super-marquee>

    <!-- Attribute -->
    <!-- <div looper super-marquee looper validate data-text="AngularJS Directives inAction, Yey..!!" data-scrolldelay="10" data-direction="left" data-wavedelay="0.015"></div> -->

    <!-- Class -->
    <!-- <div class='super-marquee looper validate' data-text="AngularJS Directives inAction, Yey..!!" data-scrolldelay="10" data-direction="right" data-wavedelay="0.015"></div> -->
  `,
  directives: [SuperMarqueeComponent, ValidateDirective, LooperDirective]
})
export class MyApp {
  
}

bootstrap(MyApp);