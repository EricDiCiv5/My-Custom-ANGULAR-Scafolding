import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  // constructor() { }
  getStorage(param: string) {
    return localStorage.getItem(param);
  }

  setStorage(name: string, object: string) {
    return localStorage.setItem(name, object);
  }

  storageClear(param: string) {
    localStorage.removeItem(param);
  }

  storageClearAll() {
    localStorage.clear();
  }
}