import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  marvelM = '../../../assets/images/marvel_Favicon.png';
  marvelMDescrip = 'M of the marvel logo';
  marvelInsiderImg = '../../../assets/images/marvel_insider-logo.png';
  marvelInsiderDesc = 'Marvel Insider Logo';
  marvelUnlimitedLogo =
    '../../../assets/images/marvelUnlimited-logo.png';
  marvelUnlimitedDesc = 'Marvel Unlimited Blue Logo';

  ngOnInit(): void {
    //
  }
}
