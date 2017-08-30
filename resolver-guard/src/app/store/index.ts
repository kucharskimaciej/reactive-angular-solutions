import {ActionReducerMap, StoreModule, ActionReducer} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {Card} from "../models/card";
import {cards} from "./cards/reducer";
import {lists} from "./lists/reducer";
import {List} from "../models/list";
import {CardEffectsService} from "./cards/effects";
import {ListEffectsService} from "./lists/effects";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";
import {token} from "./token/reducer";
import {TokenEffectsService} from "./token/effects";

export interface ApplicationState {
  cards: Card[];
  lists: List[];
  routerReducer: RouterReducerState;
  token: string;
}


const reducers: ActionReducerMap<ApplicationState> = {
  cards,
  lists,
  routerReducer,
  token
};

export const AppStore = StoreModule.forRoot(reducers, { metaReducers: [metaA, metaB]});
export const AppEffects = EffectsModule.forRoot([
  CardEffectsService,
  ListEffectsService,
  TokenEffectsService
]);


function metaA(reducer): ActionReducer<ApplicationState> {
  return function(state, action) {
    console.log('pre A');
    const nextState = reducer(state, action);
    console.log('post A');

    return nextState;
  };
}

function metaB(reducer): ActionReducer<ApplicationState> {
  return function(state, action) {
    console.log('pre B');
    const nextState = reducer(state, action);
    console.log('post B');

    return nextState;
  };
}

