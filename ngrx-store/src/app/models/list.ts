import {Card} from "./card";

export interface List {
  id: string;
  title: string;
}


export interface ListVM extends List {
  cards: Card[];
}
