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

  getLists(): Observable<List[]> {
    return this.http.get(`${this.BACKEND_URL}/lists`);
  }

}
