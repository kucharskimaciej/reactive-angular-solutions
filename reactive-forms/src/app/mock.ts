import {Card} from "./models/card";
import {List, ListVM} from "./models/list";

export const cards: Card[] = [
  {
    "id": "ed7c45ce-cef2-4320-ad0a-30ad16183356",
    "title": "Learn about the react-saga",
    "list_id": "d840f829-3ee8-446a-99d9-8c86dea42366",
    "user": null
  },
  {
    "id": "688f0a38-81bb-4af6-af8b-e152a77f66b3",
    "title": "Find out how to optimize React for performance",
    "list_id": "d840f829-3ee8-446a-99d9-8c86dea42366",
    "user": null
  },
  {
    "id": "5fd07f47-1394-484b-ae87-ea2b5ab6aaa8",
    "title": "Test the application",
    "list_id": "d840f829-3ee8-446a-99d9-8c86dea42366",
    "user": null
  },
  {
    "id": "18ea1e51-51f6-496a-9795-f5d49579e79c",
    "list_id": "493c84c0-21b8-49c9-9861-6aa4b5729f30",
    "title": "Using side-effects in Redux",
    "user": null
  },
  {
    "id": "1dd33d4b-2440-45cb-892b-02ce0f18936c",
    "list_id": "12c1ee3d-4199-46dc-aaa8-b2176dc01e9e",
    "title": "Learn React basics",
    "user": null
  }
];

export const lists: List[] =  [
  {
    "id": "d840f829-3ee8-446a-99d9-8c86dea42366",
    "title": "To do"
  },
  {
    "id": "493c84c0-21b8-49c9-9861-6aa4b5729f30",
    "title": "Doing"
  },
  {
    "id": "12c1ee3d-4199-46dc-aaa8-b2176dc01e9e",
    "title": "Done"
  }
];

export const data: ListVM[] = lists.map(list => {
  return {
    ...list,
    cards: cards.filter(card => card.list_id === list.id)
  };
});
