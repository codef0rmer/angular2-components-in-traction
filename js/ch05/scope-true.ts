import { Component, Input, OnInit } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'

@Component({
  selector: 'adia-spinner',
  template: `
    <div class="btn-group">
      <button class="btn btn-success" (click)="inc()" [disabled]="opt.default >= opt.max">+</button>
      <button class="btn" disabled>{{spinnerText()}}</button>
      <button class="btn btn-danger" (click)="dec()" [disabled]="opt.default <= opt.min">-</button>
    </div>
  `
})
class AdiaSpinnerDirective implements OnInit {
  @Input('data-default') default: number;
  @Input('data-min') min: number;
  @Input('data-max') max: number;
  @Input('data-interval') interval: number;
  @Input('data-type') type: string;
  @Input('data-list') list: string[];
  
  opt: any;
  isListType: boolean;

  ngOnInit() {
    this.isListType = this.type === 'list';

    this.opt = {
      type    : this.type || 'range',
      default : this.default || 1,
      interval: this.interval || 1,
      min     : this.min || 1,
      max     : this.max || Infinity,
      list    : this.list || []
    };

    if (this.isListType) {
      this.opt.default = this.default ? this.opt.default : 0;
      this.opt.min = 0;
      this.opt.max = this.opt.list.length - 1;
    }
  }

  inc() {
    this.opt.default+= this.opt.interval;
  }

  dec() {
    this.opt.default-= this.opt.interval;
  }

  spinnerText() {
    return this.isListType ? this.opt.list[this.opt.default] : this.opt.default;
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <adia-spinner [data-default]="value" [data-min]="1" [data-max]="5" [data-interval]="2"></adia-spinner>
    <adia-spinner [data-type]="'list'" [data-list]="['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']"></adia-spinner>
  `,
  directives: [AdiaSpinnerDirective]
})
export class MyApp {
  value: number = 1;
}

bootstrap(MyApp);