import {BoardComponent} from "./components/board/board.component";
import {RouterModule, Routes} from "@angular/router";
import {CardDetailsComponent} from "./components/card-details/card-details.component";

const BOARD_ROUTES: Routes = [
  { path: 'details/:id', component: CardDetailsComponent}
];

const APP_ROUTES: Routes = [
  { path: '', component: BoardComponent, children: BOARD_ROUTES }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
