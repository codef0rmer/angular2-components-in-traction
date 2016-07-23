import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'

@Component({
  selector: 'bod',
  template: '<div>We\'re the <b>{{person.role}} a.k.a {{person.aka}}</b> and responsible <b>{{person.job}}.</b></div>'
})
class BODComponent {
  person: Object = {
    'role': 'Board of Directors',
    'aka' : 'Trustees',
    'job' : 'for everything good for the organization'
  };
}

@Component({
  selector: 'ceo',
  template: '<div>I\'m the <b>{{person.role}}</b> and responsible <b>{{person.job}}.</b></div>'
})
class CEOComponent {
  person: Object = {
    'role': 'CEO',
    'job' : 'for total management of an organization'
  };
}

@Component({
  selector: 'ng-app',
  template: '<bod></bod><ceo></ceo>',
  directives: [BODComponent, CEOComponent]
})
export class MyApp {
  
}

bootstrap(MyApp);