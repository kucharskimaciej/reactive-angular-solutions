import {BoardComponent} from "./components/board/board.component";
import {RouterModule, Routes} from "@angular/router";
import {CardDetailsComponent} from "./components/card-details/card-details.component";
import {BoardResolver} from "./board-resolver";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./auth-guard";

const BOARD_ROUTES: Routes = [
  {path: 'details/:id', component: CardDetailsComponent}
];

const APP_ROUTES: Routes = [
  {
    path: '',
    component: BoardComponent,
    children: BOARD_ROUTES,
    resolve: {board: BoardResolver},
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
