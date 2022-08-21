import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { TranslateService } from '@ngx-translate/core';
// import { LoginServiceService } from 'src/app/services/login-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  img = '../../../assets/images/marvel.svg';
  img2 = '../../../assets/images/icon-marvelUnlimited.png';
  imgdescrip = 'marvel logo';
  imgdescrip2 = 'marvel unlimited logo';

  name!: Observable<string>;

  visible: boolean;

  constructor(
    private _storage: StorageService,
    private _route: Router,
    private translate: TranslateService,
    // private _login: LoginServiceService
  ) {
    this.visible = false;
    translate.setDefaultLang('eng');
    if (!translate.currentLang) {
      translate.use('eng');
    }
  }

  ngOnInit(): void {
    // this.name = this._login.email;
    /* Emitimos el valor del local Storage */
    // this._login.returnLocalStorage();
  }

  logOut() {
    this._storage.storageClearAll();
    this._route.navigate(['']);
    this.visible = true;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
