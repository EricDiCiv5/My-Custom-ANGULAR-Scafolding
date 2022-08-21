import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableInfoGuard implements CanActivate {
  constructor(private _route: Router){}
  hash = !!localStorage.getItem('final hash');
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.hash) {
        return true;
      } else {
        this._route.navigate(['/home']);
        return false;
      }
  }
  
}
