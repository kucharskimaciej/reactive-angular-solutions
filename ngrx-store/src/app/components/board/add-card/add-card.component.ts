import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Subject} from "rxjs/Subject";

import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';


@Component({
  moduleId: module.id,
  selector: 'board-add-card',
  templateUrl: 'add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class BoardAddCardComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  @Output() addCard = new EventEmitter<string>();
  title: string = '';

  toggle$ = new Subject();
  adding$ = this.toggle$
    .startWith(false)
    .scan(value => !value);

  focusInput$ = this.adding$
    .filter(Boolean)
    .delay(0)
    .do(() => {
      this.input.nativeElement.focus();
    });

  ngOnInit() {
    this.focusInput$.subscribe();
  }

  reset() {
    this.toggle$.next();
    this.title = '';
  }

  onSubmit() {
    this.addCard.emit(this.title);
    this.reset();
  }
}
