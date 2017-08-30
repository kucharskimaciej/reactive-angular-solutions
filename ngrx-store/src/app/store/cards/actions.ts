import {Action, Store} from '@ngrx/store';
import {createId} from 'lodash-id';
import {DataService} from "../../data.service";
import {Injectable} from "@angular/core";
import {ApplicationState} from "../index";

@Injectable()
export class CardActions {
  static readonly CREATE = '[CARDS] CREATE';
  static readonly REMOVE = '[CARDS] REMOVE';
  static readonly UPDATE = '[CARDS] UPDATE';
  static readonly FETCH = '[CARDS] FETCH';

  constructor(private store: Store<ApplicationState>, private service: DataService) {
  }

  create(title: string, list_id: string): CreateCardAction {
    return {
      type: CardActions.CREATE,
      payload: {
        card: {
          title,
          id: createId()
        },
        list_id
      }
    };
  }

  remove(id: string): RemoveCardAction {
    return {
      type: CardActions.REMOVE,
      payload: id
    };
  }

  update(id: string, changes: any): UpdateCardAction {
    return {
      type: CardActions.UPDATE,
      payload: {
        id, ...changes
      }
    };
  }

  fetchAsync() {
    this.service.getCards().subscribe(result => {
      this.store.dispatch({type: CardActions.FETCH, payload: result});
    });
  }
}

export interface CreateCardAction extends Action {
  payload: {
    card: {
      title: string;
      id: string;
    };
    list_id: string;
  };
}

export interface RemoveCardAction extends Action {
  payload: string;
}

export interface UpdateCardAction extends Action {
  payload: {
    id: string;
    title?: string;
    list_id: string;
  };
}


