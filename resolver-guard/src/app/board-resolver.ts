import {Store} from "@ngrx/store";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {ApplicationState} from "./store/index";
import {CardActions} from "./store/cards/actions";
import {ListActions} from "./store/lists/actions";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/delay';

@Injectable()
export class BoardResolver implements Resolve<any> {
  constructor(private actions$: Actions,
              private store: Store<ApplicationState>,
              private cardActions: CardActions,
              private listActions: ListActions) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
    this.store.dispatch(this.cardActions.query());
    this.store.dispatch(this.listActions.query());

    return Observable.combineLatest(
      this.actions$.ofType(CardActions.QUERY_SUCCESS).take(1),
      this.actions$.ofType(ListActions.QUERY_SUCCESS).take(1),
      () => {}
    );
  }
}
