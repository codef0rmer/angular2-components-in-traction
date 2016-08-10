import { NgModule, Component, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Pipe({
  name: 'search'
})
class SearchPipe implements PipeTransform {
  transform(favorites, searchTerm) {
    return favorites.filter((favorite) => {
      return favorite.toLowerCase().indexOf((searchTerm || '').toLowerCase()) >= 0;
    });
  }
}

@Component({
  selector: 'ng-app',
  template: `
    <div>
      <input type='text' [(ngModel)]="search" /><br><br>

      <ul class="list-group">
        <li class="list-group-item" *ngFor="let favorite of favorites | search: search" [textContent]="favorite"></li>
      </ul>
    </div>
  `
})
export class MyAppComponent {
  favorites: String[] = [
    'Christopher Nolan',
    'AR Rehman',
    'Amit Trivedi',
    'Nagraj Manjule'
  ];
}

@NgModule({
  declarations: [MyAppComponent, SearchPipe],
  imports:      [BrowserModule, FormsModule],
  bootstrap:    [MyAppComponent]
})
export default class MyAppModule {}

platformBrowserDynamic().bootstrapModule(MyAppModule);