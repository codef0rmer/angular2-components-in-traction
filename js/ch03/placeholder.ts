import { Component, Directive, ElementRef, Renderer } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'

@Directive({
  selector: '[onImageLoad]'
})
export class onImageLoad {
  constructor(private _renderer: Renderer, private _element: ElementRef) {
    this._renderer.listen(this._element.nativeElement, 'load', () => {
      this._renderer.setElementStyle(this._element.nativeElement, 'display', '');
    });

    this._renderer.listen(this._element.nativeElement, 'error', () => {
      this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
      this._renderer.setElementAttribute(this._element.nativeElement, 'src', 'http://lorempixel.com/100/100/cats/');
    });
    // _element.nativeElement.addEventListener('load', function() {
    //   this.style.display = '';
    // }, false);
    // _element.nativeElement.addEventListener('error', function() {
    //   this.style.display = 'none';
    //   this.setAttribute('src', 'http://lorempixel.com/100/100/cats/');
    // }, false);
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