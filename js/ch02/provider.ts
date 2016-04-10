import {Component, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

const search_engine = 'google.com';

@Injectable()
class LookupService {
  find(): string {
    return 'Searching in http://' + search_engine + ' for the sake of knowing...';
  } 
}

@Component({
  selector: 'ng-app',
  template: '<div [innerHTML]="message"></div>',
  providers: [LookupService]
})
export class MyApp {
  message: string;
  
  constructor(public Lookup: LookupService) {
    this.message = this.Lookup.find();
  }
}

bootstrap(MyApp);