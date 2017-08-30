import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {Card} from "../models/card";
import {cards} from "./cards/reducer";
import {lists} from "./lists/reducer";
import {List} from "../models/list";

export interface ApplicationState {
  cards: Card[];
  lists: List[];
}


const reducers: ActionReducerMap<ApplicationState> = {
  cards,
  lists
};

export const AppStore = StoreModule.forRoot(reducers);
