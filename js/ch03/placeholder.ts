import {Component, Directive, ElementRef} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Directive({
  selector: '[onImageLoad]'
})
export class onImageLoad {
  constructor(private _element: ElementRef) {
    _element.nativeElement.addEventListener('load', function() {
      this.style.display = '';
    }, false);

    _element.nativeElement.addEventListener('error', function() {
      this.style.display = 'none';
      this.setAttribute('src', 'http://lorempixel.com/100/100/cats/');
    }, false);
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <img [src]="userImage" class="img-circle" onImageLoad />
    <img [src]="userImageFail" class="img-circle" onImageLoad />
  `,
  directives: [onImageLoad]
})
export class Placeholder {
  userImage: string;
  userImageFail: string;
  
  constructor() {
    this.userImage = 'http://lorempixel.com/100/100/people/1/';
    this.userImageFail = 'http://lorempixel.com/random';
  }
}

bootstrap(Placeholder);