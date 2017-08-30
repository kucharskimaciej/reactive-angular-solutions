import {Injectable} from '@angular/core';
import {Action} from "@ngrx/store";

@Injectable()
export class TokenActions {
  static LOGIN = '[TOKEN] LOGIN';
  static LOGIN_SUCCESS = '[TOKEN] LOGIN_SUCCESS';

  constructor() {
  }

  login(payload: { username: string, password: string }): LoginAction {
    return {
      type: TokenActions.LOGIN,
      payload
    };
  }

  loginSuccess(token: string) {
    return {
      type: TokenActions.LOGIN_SUCCESS,
      payload: {token}
    };
  }
}

export interface LoginAction extends Action {
  payload: { username: string, password: string };
}

export interface LoginSuccessAction extends Action {
  payload: { token: string };
}
