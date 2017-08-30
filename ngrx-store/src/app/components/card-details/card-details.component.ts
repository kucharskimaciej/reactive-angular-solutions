import {Component} from '@angular/core';
import {Card} from "../../models/card";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {List} from "../../models/list";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../store/index";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";
import {CardActions, RemoveCardAction, UpdateCardAction} from "../../store/cards/actions";

@Component({
  moduleId: module.id,
  selector: 'card-details',
  templateUrl: 'card-details.component.html',
  styleUrls: ['./card-details.component.css']
})

export class CardDetailsComponent {
  card$: Observable<Card> = this.route.params
    .map(params => params['id'])
    .switchMap(id => {
      return this.store.select(state => state.cards.find(card => card.id === id));
    });

  currentList$: Observable<List> = this.card$.switchMap(card => {
    return this.store.select(state => state.lists.find(list => list.id === card.list_id));
  });

  lists$: Observable<List[]> = this.card$.switchMap(card => {
    return this.store.select(state => state.lists.filter(list => list.id !== card.list_id));
  });

  constructor(private location: Location,
              private route: ActivatedRoute,
              private store: Store<ApplicationState>, private cardActions: CardActions) {
  }

  close() {
    this.location.back();
  }

  onRemove(cardId) {
    this.store.dispatch(this.cardActions.remove(cardId));
    this.close();
  }

  onTitleChange(id: string, title: string) {
    this.store.dispatch(this.cardActions.update(id, { title }));
  }

  moveCard(id: string, list_id: string) {
    this.store.dispatch(this.cardActions.update(id, { list_id }));
  }
}
