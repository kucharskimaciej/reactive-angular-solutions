import {Action} from '@ngrx/store';
import {Injectable} from "@angular/core";
import {Card} from "../../models/card";

@Injectable()
export class CardActions {
  static readonly CREATE_INIT = '[CARDS] CREATE_INIT';
  static readonly CREATE = '[CARDS] CREATE';
  static readonly REMOVE_INIT = '[CARDS] REMOVE_INIT';
  static readonly REMOVE = '[CARDS] REMOVE';
  static readonly UPDATE = '[CARDS] UPDATE';

  static readonly QUERY = '[CARDS] QUERY';
  static readonly QUERY_SUCCESS = '[CARDS] QUERY_SUCCESS';

  constructor() {
  }

  create(title: string, list_id: string) {
    return {
      type: CardActions.CREATE_INIT,
      payload: {
        card: {
          title,
          list_id
        },
        list_id
      }
    };
  }

  createSuccess(card: Card): CreateSuccessCardAction {
    return {
      type: CardActions.CREATE,
      payload: {
        card,
        list_id: card.list_id
      }
    };
  }

  remove(id: string) {
    return {
      type: CardActions.REMOVE_INIT,
      payload: id
    };
  }

  removeSuccess(id: string): RemoveCardAction {
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

  query(): Action {
    return {type: CardActions.QUERY};
  }

  querySuccess(cards: Card[]): QuerySuccessCardAction {
    return {type: CardActions.QUERY_SUCCESS, payload: cards};
  }
}

export interface CreateSuccessCardAction extends Action {
  payload: {
    card: Card;
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

export interface QuerySuccessCardAction extends Action {
  payload: Card[];
}

