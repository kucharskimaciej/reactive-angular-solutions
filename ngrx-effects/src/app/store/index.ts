import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {Card} from "../models/card";
import {cards} from "./cards/reducer";
import {lists} from "./lists/reducer";
import {List} from "../models/list";
import {CardEffectsService} from "./cards/effects";
import {ListEffectsService} from "./lists/effects";
import {routerReducer, RouterReducerState} from "@ngrx/router-store";

export interface ApplicationState {
  cards: Card[];
  lists: List[];
  routerReducer: RouterReducerState;
}


const reducers: ActionReducerMap<ApplicationState> = {
  cards: cards,
  lists: lists,
  routerReducer
};

export const AppStore = StoreModule.forRoot(reducers);
export const AppEffects = EffectsModule.forRoot([
  CardEffectsService,
  ListEffectsService
]);

