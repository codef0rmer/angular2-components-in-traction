import { Component, Input, OnInit } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'

@Component({
  selector: 'alert',
  template: `
    <div class="alert alert-{{state}}" [hidden]="hidden">
      <button type="button" class="close" (click)="hidden = true">
        <span aria-hidden="true">&times;</span>
      </button>
      <ng-content></ng-content>
    </div>
  `
})
class AlertComponent implements OnInit {
  @Input('data-state') state: string;
  hidden: boolean = false;

  ngOnInit() {
    this.state = this.state || 'info';
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <alert data-state="'warning'"><b>Hang on..!</b> Document may take some time to upload.</alert>
    <alert data-state="'success'"><b>Well done..!</b> You jump to the next level.</alert>
  `,
  directives: [AlertComponent]
})
export class MyApp {

}

bootstrap(MyApp);