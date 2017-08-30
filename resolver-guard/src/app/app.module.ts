import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRouting} from './app.routes';


import {AppComponent} from './app.component';
import {BoardComponent} from "./components/board/board.component";
import {BoardCardComponent} from "./components/board/card/card.component";
import {BoardListComponent} from "./components/board/list/list.component";
import {CardDetailsComponent} from "./components/card-details/card-details.component";
import {DataService} from "./data.service";
import {BoardAddCardComponent} from "./components/board/add-card/add-card.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditableTitleComponent} from "./shared/editable-title.component";
import {AppEffects, AppStore} from "./store";
import {HttpClientModule} from "@angular/common/http";
import {CardActions} from "./store/cards/actions";
import {ListActions} from "./store/lists/actions";
import {ValidationClassesDirective} from "./shared/validation-class.directive";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {WebsocketsService} from "./websockets.service";
import {BoardResolver} from "./board-resolver";
import {LoginComponent} from "./components/login/login.component";
import {TokenActions} from "./store/token/actions";
import {AuthGuard} from "./auth-guard";

@NgModule({
  declarations: [
    AppComponent,

    BoardComponent,
    BoardListComponent,
    BoardCardComponent,
    CardDetailsComponent,
    BoardAddCardComponent,
    LoginComponent,

    EditableTitleComponent,
    ValidationClassesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    AppRouting,
    AppStore,
    AppEffects,
    // StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    DataService,
    CardActions,
    ListActions,
    TokenActions,
    WebsocketsService,
    BoardResolver,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ws: WebsocketsService) {
    ws.connect();
  }
}
