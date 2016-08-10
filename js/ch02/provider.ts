import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const search_engine = 'google.com';

@Injectable()
class LookupService {
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

@NgModule({
  declarations: [MyAppComponent],
  imports:      [BrowserModule],
  providers:    [LookupService],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);