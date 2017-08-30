import {Injectable} from '@angular/core';
import {connect} from 'socket.io-client';
import {Store} from "@ngrx/store";
import {ApplicationState} from "./store/index";

@Injectable()
export class WebsocketsService {
  private SOCKET_URL = 'ws://localhost:3001';
  private connection;


  constructor(private store: Store<ApplicationState>) {
  }

  connect() {
    this.connection = connect(this.SOCKET_URL);
    this.connection.on('action', this.handleAction);
  }

  private handleAction = (action) => {
    this.store.dispatch(action);
    console.log('ws action', action);
  }
}
