import {Component} from '@angular/core';
import {ListVM} from "../../models/list";
import {DataService} from "../../data.service";

@Component({
  moduleId: module.id,
  selector: 'board',
  template: `
    <section class="board">
      <div *ngFor="let list of lists" class="list">
        <board-list [title]="list.title" [cards]="list.cards" (rename)="onListTitleChange($event, list.id)"></board-list>

        <board-add-card (addCard)="onAddCard($event, list.id)"></board-add-card>
      </div>
    </section>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./board.component.css']
})

export class BoardComponent {
  lists: ListVM[] = this.data.lists;

  constructor(private data: DataService) {
  }

  onAddCard(title: string, listId: string) {
    this.data.createCard(title, listId);
  }

  onListTitleChange(title: string, listId: string) {
    this.data.updateList(listId, { title });
  }
}
