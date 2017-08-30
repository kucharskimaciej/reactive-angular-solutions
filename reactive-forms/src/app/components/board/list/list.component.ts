import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'board-list',
  template: `
    <h2 class="title">
      <editable-title [value]="title" (update)="rename.emit($event)"></editable-title>
    </h2>

    <div class="cards">
        <board-card *ngFor="let card of cards" [title]="card.title" [cardId]="card.id"></board-card>
    </div>
  `,
  styleUrls: ['./list.component.css']
})

export class BoardListComponent {
  @Input() title: string;
  @Input() cards;
  @Output() rename = new EventEmitter<string>();
}
