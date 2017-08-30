import {Injectable} from '@angular/core';
import {DataService} from "../../data.service";
import {Actions, Effect} from "@ngrx/effects";
import {ListActions} from "./actions";

@Injectable()
export class ListEffectsService {

  constructor(private service: DataService, private actions$: Actions, private listActions: ListActions) {
  }

  @Effect() queryProducts$ = this.actions$
    .ofType(ListActions.QUERY)
    .switchMap(() => {
      return this.service.getLists()
        .map(result => this.listActions.querySuccess(result));
    });
}
