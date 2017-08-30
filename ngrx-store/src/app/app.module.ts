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
import {FormsModule} from "@angular/forms";
import {EditableTitleComponent} from "./shared/editable-title.component";
import {AppStore} from "./store";
import {HttpClientModule} from "@angular/common/http";
import {CardActions} from "./store/cards/actions";
import {ListActions} from "./store/lists/actions";

@NgModule({
  declarations: [
    AppComponent,

    BoardComponent,
    BoardListComponent,
    BoardCardComponent,
    CardDetailsComponent,
    BoardAddCardComponent,

    EditableTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRouting,
    AppStore
  ],
  providers: [
    DataService,
    CardActions,
    ListActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
