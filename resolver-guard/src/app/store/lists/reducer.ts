import {Action} from '@ngrx/store';
import {List} from "../../models/list";
import {ListActions, RenameListAction} from "./actions";


const INITIAL_STATE: List[] = [];

export function lists(state = INITIAL_STATE, action: Action): List[] {
  switch (action.type) {
    case ListActions.RENAME:
      return handleRenameList(state, <RenameListAction>action);

    case ListActions.QUERY_SUCCESS:
      return (<any>action).payload;

    default:
      return state;
  }
}

function handleRenameList(state: List[], action: RenameListAction): List[] {
  return state.map(list => {
    if (list.id === action.payload.id) {
      return {...list, ...action.payload};
    }

    return list;
  });
}
