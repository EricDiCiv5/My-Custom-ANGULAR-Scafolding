import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _router: Router) {}

  goToMarvel() {
    const encode = environment.ts + environment.privateKey + environment.publicKey;
    let finalHash = Md5.hashStr(encode);
    // hash.appendStr(environment.ts);
    // hash.appendStr(environment.privateKey);
    // hash.appendStr(environment.publicKey);
    // let finalHash = hash.end();
    localStorage.setItem(
      'final hash',
      JSON.stringify(finalHash).replace(/["]+/g, '')
    );
    this._router.navigateByUrl('/table-data');
  }
}
