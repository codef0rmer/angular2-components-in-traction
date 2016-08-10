import { NgModule, Component, Input, Output, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Subject } from 'rxjs/Subject';

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
  @Input('data-step') interval: number;
  @Input('data-type') type: string;
  @Input('data-list') list: string[];
  @Output('change') valChange = new Subject();
  
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

    this.notify();
  }

  inc() {
    this.opt.default+= this.opt.interval;
    this.notify();
  }

  dec() {
    this.opt.default-= this.opt.interval;
    this.notify();
  }

  spinnerText() {
    return this.isListType ? this.opt.list[this.opt.default] : this.opt.default;
  }

  notify() {
    this.valChange.next({value: this.opt.default, text: this.spinnerText()});
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading"><b>Job Application Form</b></div>
          <div class="panel-body">
            <div class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-xs-4 col-lg-2 control-label">
                  Rate Yourself:
                </label>
                <div class="col-xs-8 col-lg-10">
                  <adia-spinner [data-default]="1" [data-step]="1" [data-min]="1" [data-max]="5" (change)="getRating($event)"></adia-spinner>
                </div>
              </div>
              <div class="form-group">
                <label class="col-xs-4 col-lg-2 control-label">
                  Availability for Interview:
                </label>
                <div class="col-xs-8 col-lg-10">
                  <adia-spinner [data-type]="'list'" [data-list]="['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']" (change)="getWeekday($event)"></adia-spinner>
                </div>
              </div>
              <div class="form-group">
                <label class="col-xs-4 col-lg-2 control-label"></label>
                <div class="col-xs-8 col-lg-10">
                  <button class="btn btn-lg btn-primary" (click)="submit()">I'm Interested</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MyAppComponent {
  weekday: {value: number, text: string};
  rating: {value: number, text: string};

  getWeekday(objWeekday) {
    this.weekday = objWeekday;
  }

  getRating(objRating) {
    this.rating = objRating;
  };

  submit() {
    alert('You have rated ' + this.rating.value + '/5 and will be available on ' + this.weekday.text + '. Thank You..!');
  };
}

@NgModule({
  declarations: [MyAppComponent, AdiaSpinnerDirective],
  imports:      [BrowserModule],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);