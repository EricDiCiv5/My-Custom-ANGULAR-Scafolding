import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public languages: string[];
  public selectLang:string="";

  constructor(private translate: TranslateService) {
    this.languages = [];
    translate.setDefaultLang('index-en');
    translate.use('index-en');

  }

  ngOnInit(): void {
    this.languages = ['Catala', 'Español', 'English', 'Français', 
    'Português'];

  }



  useLanguage(language: string):void{
    this.translate.use(language);
  }


}
