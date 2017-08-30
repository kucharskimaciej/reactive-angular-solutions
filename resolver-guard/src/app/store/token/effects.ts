import {Injectable} from '@angular/core';
import {DataService} from "../../data.service";
import {Actions, Effect} from "@ngrx/effects";
import {LoginAction, TokenActions} from "./actions";
import {Router} from "@angular/router";
import {ApplicationState} from "../index";
import {Store} from "@ngrx/store";

@Injectable()
export class TokenEffectsService {

  constructor(private service: DataService,
              private actions$: Actions,
              private tokenActions: TokenActions,
              private router: Router, private store: Store<ApplicationState>) {
  }

  @Effect() login$ = this.actions$
    .ofType(TokenActions.LOGIN)
    .switchMap((action: LoginAction) => {
      return this.service.login(action.payload)
        .map(result => this.tokenActions.loginSuccess(result.token));
    });

  @Effect({dispatch: false}) afterLogin$ = this.actions$
    .ofType(TokenActions.LOGIN_SUCCESS)
    .switchMap(() => this.router.navigate(['/']));
}
