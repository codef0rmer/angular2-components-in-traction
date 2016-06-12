import {Component, Input, Output, OnInit, EventEmitter} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'thumbviewer',
  template: `
    <div class='thumbnail-container bg-success img-rounded'>
      <div class='thumbnail-wrapper'>
         <!-- Page Thumbs go here --> 
      </div>
    </div>
  `
})
class ThumbViewerComponent {
  @Input('data-size') size: number;
  @Input('data-gap') gap: number;
}

@Component({
  selector: 'ng-app',
  template: `
    <thumbviewer [data-size]="150" [data-gap]="0">

    </thumbviewer>
  `,
  directives: [ThumbViewerComponent]
})
export class MyApp {
  thumbnails: Object[] = [
    { title: 'Page 1',  image: '1.png', active: true },
    { title: 'Page 2',  image: '2.png'  },
    { title: 'Page 3',  image: '3.png'  },
    { title: 'Page 4',  image: '4.png'  },
    { title: 'Page 5',  image: '5.png'  },
    { title: 'Page 6',  image: '6.png'  },
    { title: 'Page 7',  image: '7.png'  },
    { title: 'Page 8',  image: '8.png'  },
    { title: 'Page 9',  image: '9.png'  },
    { title: 'Page 10', image: '10.png' },
    { title: 'Page 11', image: '11.png' },
    { title: 'Page 12', image: '12.png' },
    { title: 'Page 13', image: '13.png' },
    { title: 'Page 14', image: '14.png' },
    { title: 'Page 15', image: '15.png' }
  ];
}

bootstrap(MyApp);