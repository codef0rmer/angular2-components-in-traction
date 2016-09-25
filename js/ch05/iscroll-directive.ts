import { Component, Directive, AfterViewChecked, AfterViewInit, ElementRef, Input } from '@angular/core';

declare var IScroll;

@Directive({
  selector: '[iscroll]'
})
export class IscrollDirective implements AfterViewInit, AfterViewChecked {
  @Input('data-scrollbars') scrollbars: boolean;
  @Input('data-mousewheel') mousewheel: boolean;
  myScroll: any;

  constructor(private _element: ElementRef) {
    
  }
  
  ngAfterViewInit() {
    this.myScroll = new IScroll(this._element.nativeElement, {scrollbars: this.scrollbars || true, mouseWheel: this.mousewheel || true});
  }

  ngAfterViewChecked() {
    this.myScroll.refresh();
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <div id="wrapper" iscroll [data-scrollbars]="true" [data-mousewheel]="true">
      <div>
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let movie of movies; let $index = index;">
            <button type="button" class="close" (click)="movies.splice($index, 1)">&times;</button>
            <span [textContent]="movie"></span>
          </li>
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