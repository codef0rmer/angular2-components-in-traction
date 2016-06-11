import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'adia-spinner',
  template: `
    <div class="btn-group">
      <button class="btn btn-success" (click)="inc()">+</button>
      <button class="btn" disabled>{{spinnerText()}}</button>
      <button class="btn btn-danger" (click)="dec()">-</button>
    </div>
  `
})
class AdiaSpinnerDirective {
  @Input() val: number;
  @Output() valChange = new EventEmitter();

  inc() {
    this.val++;
    this.valChange.emit(this.val);
  }

  dec() {
    this.val--;
    this.valChange.emit(this.val);
  }

  spinnerText() {
    return this.val;
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <adia-spinner [(val)]="value"></adia-spinner>

    <!-- Multiple spinners cause abnormal behavior because of shared scope -->
    <adia-spinner [(val)]="value"></adia-spinner>
  `,
  directives: [AdiaSpinnerDirective]
})
export class MyApp {
  value: number = 1;
}

bootstrap(MyApp);