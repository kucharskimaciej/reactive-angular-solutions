import {Action, Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {ApplicationState} from "../index";
import {DataService} from "../../data.service";
import {List} from "../../models/list";

@Injectable()
export class ListActions {
  static readonly RENAME = '[LISTS] RENAME';
  static readonly QUERY = '[LISTS] QUERY';
  static readonly QUERY_SUCCESS = '[LISTS] QUERY_SUCCESS';

  constructor(private store: Store<ApplicationState>, private service: DataService) {
  }


  rename(id: string, title: string): RenameListAction {
    return {
      type: ListActions.RENAME,
      payload: {id, title}
    };
  }

  query(): Action {
    return {type: ListActions.QUERY};
  }

  querySuccess(cards: List[]): QuerySuccessCardAction {
    return {type: ListActions.QUERY_SUCCESS, payload: cards};
  }
}

export interface RenameListAction extends Action {
  payload: {
    id: string;
    title: string;
  };
}


export interface QuerySuccessCardAction extends Action {
  payload: List[];
}
