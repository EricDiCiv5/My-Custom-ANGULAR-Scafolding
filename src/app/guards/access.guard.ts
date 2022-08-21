import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(private _storage: StorageService, private _route: Router) {}

  hash = !!localStorage.getItem('final hash');
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.hash) {
        return true;
      } else {
        this._route.navigate(['/table-data']);
        return false;
      }
  }
}
