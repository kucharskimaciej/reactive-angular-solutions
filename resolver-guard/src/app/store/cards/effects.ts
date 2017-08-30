import {Injectable} from '@angular/core';
import {DataService} from "../../data.service";
import {Actions, Effect} from "@ngrx/effects";
import {CardActions, CreateSuccessCardAction} from "./actions";

@Injectable()
export class CardEffectsService {

  constructor(private service: DataService, private actions$: Actions, private cardActions: CardActions) {
  }

  @Effect() queryProducts$ = this.actions$
    .ofType(CardActions.QUERY)
    .switchMap(() => {
      return this.service.getCards()
        .map(result => this.cardActions.querySuccess(result));
    });

  @Effect() createCard$ = this.actions$
    .ofType(CardActions.CREATE_INIT)
    .switchMap((action) => {
      return this.service.createCard((<any>action).payload.card)
        .map(result => this.cardActions.createSuccess(result));
    });

  @Effect() removeCard$ = this.actions$
    .ofType(CardActions.REMOVE_INIT)
    .switchMap((action) => {
      const id = (<any>action).payload;

      return this.service.removeCard(id)
        .map(result => this.cardActions.removeSuccess(id));
    });
}
