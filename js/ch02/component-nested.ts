import {Component, Input} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'ceo',
  template: `
    <div>
      I'm the 
      <b>{{person.role}}</b>
      and responsible 
      <b>{{person.job}}</b>
      but reporting to 
      <i>{{bod.role}}.</i>
    </div>
  `
})
class CEOComponent {
  @Input() bod: Object;
  
  person: Object = {
    'role': 'CEO',
    'job' : 'for total management of an organization'
  };
}

@Component({
  selector: 'bod',
  template: `
    <div>
      We're the 
      <b (click)="person.role='BODs'">{{person.role}} a.k.a. {{person.aka}}</b>
      and responsible 
      <b>{{person.job}}.</b>

      <!-- or as an HTML string -->
      <!-- <span [innerHTML]="statement"></span> -->

      <ceo [bod]="person"></ceo>
    </div>
  `,
  directives: [CEOComponent]
})
class BODComponent {
  person: Object = {
    'role': 'Board of Directors',
    'aka' : 'Trustees',
    'job' : 'for everything good for the organization'
  };
  
  // or as an HTML string
  statement: string = "We're the <b> Board of Directors</b> and responsible <b>for everything good for the organization.</b>";
}

@Component({
  selector: 'ng-app',
  template: '<bod></bod>',
  directives: [BODComponent]
})
export class MyApp {
  
}

bootstrap(MyApp);