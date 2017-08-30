import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {ApplicationState} from "./store/index";
import {Store} from "@ngrx/store";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<ApplicationState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select('token')
      .map(token => Boolean(token))
      // .do((tokenExists) => {
      //   if (!tokenExists) {
      //     this.router.navigate(['/login']);
      //   }
      // });
      .map(tokenExists => {
        if (!tokenExists) {
          this.router.navigate(['/login']);
        }
        return tokenExists;
      });
  }
}
