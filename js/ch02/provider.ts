import { Component, Injectable } from '@angular/core';

const search_engine = 'google.com';

@Injectable()
export class LookupService {
  find(): string {
    return 'Searching in http://' + search_engine + ' for the sake of knowing...';
  } 
}

@Component({
  selector: 'ng-app',
  template: '<div [innerHTML]="message"></div>'
})
export class MyAppComponent {
  message: string;
  
  constructor(public Lookup: LookupService) {
    this.message = this.Lookup.find();
  }
}