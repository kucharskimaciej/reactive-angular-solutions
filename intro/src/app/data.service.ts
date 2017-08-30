import {Injectable} from '@angular/core';
import * as mocks from './mock';
import {List, ListVM} from "./models/list";
import {Card} from "./models/card";
import {cloneDeep, without, extend} from 'lodash';

import {createId} from 'lodash-id';

@Injectable()
export class DataService {
  private _mocks = {
    cards: cloneDeep(mocks.cards),
    lists: cloneDeep(mocks.lists)
  };

  lists: ListVM[] = [];

  constructor() {
    this.updateLists();
  }

  private updateLists(): void {
    this.lists.length = 0;
    const newLists = this._mocks.lists.map(list => {
      return {
        ...list,
        cards: this._mocks.cards.filter(card => card.list_id === list.id)
      };
    });

    this.lists.push(...newLists);
  }

  getCard(id: string): Card {
    return this._mocks.cards.find(card => card.id === id);
  }

  getList(id: string): List {
    return this.lists.find(list => list.id === id);
  }

  createCard(title: string, list_id: string): void {
    const card: Card = {
      title,
      list_id,
      id: createId()
    };

    this._mocks.cards.push(card);

    this.updateLists();
  }

  removeCard(cardId: string) {
    const card = this.getCard(cardId);
    this._mocks.cards = without(this._mocks.cards, card);
    this.updateLists();
  }

  updateList(listId: string, changes: any) {
    const list = this.getList(listId);
    extend(list, changes);
    this.updateLists();
  }

  updateCard(cardId: string, changes: any) {
    const card = this.getCard(cardId);
    extend(card, changes);
    this.updateLists();
  }
}
