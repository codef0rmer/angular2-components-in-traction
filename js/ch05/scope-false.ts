import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

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
export class AdiaSpinnerDirective {
  @Input() val: number;
  @Output() valChange = new Subject();

  inc() {
    this.val++;
    this.valChange.next(this.val);
  }

  dec() {
    this.val--;
    this.valChange.next(this.val);
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
  `
})
export class MyAppComponent {
  value: number = 1;
}