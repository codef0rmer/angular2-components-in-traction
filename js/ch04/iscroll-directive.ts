import { Component, Directive, ElementRef, AfterViewInit } from '@angular/core';

declare var IScroll;

@Directive({
  selector: '[iscroll]'
})
export class IscrollDirective implements AfterViewInit {
  constructor(private _element: ElementRef) {
    
  }
  
  ngAfterViewInit() {
    window.setTimeout(() => {
      new IScroll(this._element.nativeElement, {scrollbars: true, mouseWheel: true});
    }, 0);
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <div id="wrapper" iscroll>
      <div>
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let movie of movies" [textContent]="movie"></li>
        </ul>
      </div>
    </div>
  `
})
export class MyAppComponent {
  movies: String[] = [
    'Her', 
    'Amazing Spiderman 3D', 
    'Silicon Valley HBO', 
    'Anchorman 2', 
    '300 Rise of an Empire', 
    'The Hobbit The Desolation of Smaug', 
    'Fandry', 
    '12 Years a Slave', 
    'Frozen', 
    'Ender`s Game', 
    'Gravity', 
    'Riddick', 
    'Jobs', 
    'The Hobbit The Unexpected Journey', 
    'Man of Steel', 
    'Turbo', 
    'After Earth', 
    'Europa Report', 
    'Forest Gump', 
    'Now You See Me'
  ];
}