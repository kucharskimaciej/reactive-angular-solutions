import {Action, Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {ApplicationState} from "../index";
import {DataService} from "../../data.service";

@Injectable()
export class ListActions {
  static readonly RENAME = '[LISTS] RENAME';
  static readonly FETCH = '[LISTS] FETCH';

  constructor(private store: Store<ApplicationState>, private service: DataService) {
  }


  rename(id: string, title: string): RenameListAction {
    return {
      type: ListActions.RENAME,
      payload: {id, title}
    };
  }

  fetchAsync() {
    this.service.getLists().subscribe(result => {
      this.store.dispatch({type: ListActions.FETCH, payload: result});
    });
  }
}

export interface RenameListAction extends Action {
  payload: {
    id: string;
    title: string;
  };
}
