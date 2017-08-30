import {Injectable} from '@angular/core';
import {Card} from "./models/card";

import {createId} from 'lodash-id';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {List} from "./models/list";

@Injectable()
export class DataService {
  readonly BACKEND_URL = '/api';

  constructor(private http: HttpClient) {
  }

  getCards(): Observable<Card[]> {
    return this.http.get(`${this.BACKEND_URL}/cards`);
  }

  createCard(card: { title: string, list_id: string }): Observable<any> {
    return this.http.post(`${this.BACKEND_URL}/cards`, card);
  }

  removeCard(id: string) {
    return this.http.delete(`${this.BACKEND_URL}/cards/${id}`);
  }

  getLists(): Observable<List[]> {
    return this.http.get(`${this.BACKEND_URL}/lists`);
  }

  login(params): Observable<{ token: string }> {
    return this.http.post(`${this.BACKEND_URL}/token`, params);
  }
}
