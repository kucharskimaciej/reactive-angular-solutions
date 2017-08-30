import {Action} from '@ngrx/store';
import {Card} from "../../models/card";
import {CardActions, CreateSuccessCardAction, RemoveCardAction, UpdateCardAction} from "./actions";


const INITIAL_STATE: Card[] = [];

export function cards(state = INITIAL_STATE, action: Action): Card[] {
  switch (action.type) {
    case CardActions.CREATE:
      return handleCreateCard(state, <CreateSuccessCardAction>action);

    case CardActions.REMOVE:
      return handleRemoveCard(state, <RemoveCardAction>action);

    case CardActions.UPDATE:
      return handleUpdateCard(state, <UpdateCardAction>action);

    case CardActions.QUERY_SUCCESS:
      return (<any>action).payload;

    default:
      return state;
  }
}


function handleCreateCard(state: Card[], action: CreateSuccessCardAction): Card[] {
  return [
    ...state.filter(card => card.id !== action.payload.card.id),
    {...action.payload.card}
  ];
}

function handleRemoveCard(state: Card[], action: RemoveCardAction): Card[] {
  return state.filter(item => item.id !== action.payload);
}

function handleUpdateCard(state: Card[], action: UpdateCardAction): Card[] {
  return state.map(card => {
    if (card.id === action.payload.id) {
      return {...card, ...action.payload};
    }

    return card;
  });
}
