import { NgModule, Component, Input, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
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
class AdiaSpinnerDirective {
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

@NgModule({
  declarations: [MyAppComponent, AdiaSpinnerDirective],
  imports:      [BrowserModule],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);