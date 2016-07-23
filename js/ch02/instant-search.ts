import { Component, Pipe, PipeTransform } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic'

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
  `,
  pipes: [SearchPipe]
})
export class MyApp {
  favorites: String[] = [
    'Christopher Nolan',
    'AR Rehman',
    'Amit Trivedi',
    'Nagraj Manjule'
  ];
}

bootstrap(MyApp);