import {Component} from '@angular/core';
import {ListVM} from "../../models/list";
import {Observable} from "rxjs/Observable";
import {ApplicationState} from "../../store/index";
import {Store} from "@ngrx/store";
import {CardActions, CreateSuccessCardAction} from "../../store/cards/actions";
import {ListActions, RenameListAction} from "../../store/lists/actions";

@Component({
  moduleId: module.id,
  selector: 'board',
  template: `
    <section class="board">
      <div *ngFor="let list of lists$ | async" class="list">
        <board-list [title]="list.title" [cards]="list.cards"
                    (rename)="onListTitleChange($event, list.id)"></board-list>

        <board-add-card (addCard)="onAddCard($event, list.id)"></board-add-card>
      </div>
    </section>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./board.component.css']
})

export class BoardComponent {
  lists$: Observable<ListVM[]> = this.store.select(getDenormalizedLists);

  constructor(private store: Store<ApplicationState>, private cardActions: CardActions, private listActions: ListActions) {
    this.store.dispatch(this.cardActions.query());
    this.store.dispatch(this.listActions.query());
  }

  onAddCard(title: string, listId: string) {
    this.store.dispatch(this.cardActions.create(title, listId));
  }

  onListTitleChange(title: string, listId: string) {
    this.store.dispatch(this.listActions.rename(listId, title));
  }
}

function getDenormalizedLists(state: ApplicationState): ListVM[] {
  return state.lists.map(list => {
    return {...list, cards: state.cards.filter(card => card.list_id === list.id)};
  });
}
