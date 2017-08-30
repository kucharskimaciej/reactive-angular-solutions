import {Action} from "@ngrx/store";
import {LoginSuccessAction, TokenActions} from "./actions";


export function token(state, action: Action) {
  switch (action.type) {
    case TokenActions.LOGIN_SUCCESS:
      return (<LoginSuccessAction>action).payload.token;

    default:
      return state;
  }
}
