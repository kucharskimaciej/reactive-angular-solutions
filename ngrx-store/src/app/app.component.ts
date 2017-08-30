import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";


import 'rxjs/add/operator/map';
import "rxjs/add/observable/fromEvent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private clicks$ = Observable.fromEvent(document, 'click')
    .map((event: MouseEvent) => ({ x: event.clientX, y: event.clientY }));

  ngOnInit() {
    this.clicks$.subscribe(value => {
      console.log(value);
    });
  }
}
