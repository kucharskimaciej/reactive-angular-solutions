import {Injectable} from '@angular/core';
import {DataService} from "../../data.service";
import {Actions, Effect} from "@ngrx/effects";
import {CardActions, CreateSuccessCardAction} from "./actions";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../index";

import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Router} from "@angular/router";

@Injectable()
export class CardEffectsService {

  constructor(private service: DataService,
              private actions$: Actions,
              private cardActions: CardActions,
              private store: Store<ApplicationState>,
              private router: Router) {
  }

  @Effect() queryProducts$ = this.actions$
    .ofType(CardActions.QUERY)
    .switchMap(() => {
      return this.service.getCards()
        .map(result => this.cardActions.querySuccess(result));
    });

  @Effect() createCard$ = this.actions$
    .ofType(CardActions.CREATE_INIT)
    .withLatestFrom(this.store.select('lists'))
    .switchMap(([action, lists]) => {
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
  //
  // @Effect({ dispatch: false })
  // afterCreateCard$ = this.actions$
  //   .ofType(CardActions.CREATE)
  //   .map((action) => {
  //     this.router.navigateByUrl(`/details/${action.payload.id}`)
  // });
}
