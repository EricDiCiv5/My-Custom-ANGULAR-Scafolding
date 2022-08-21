import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoreInfoService } from 'src/app/services/more-info.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.scss']
})
export class InfopageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private moreInfoService: MoreInfoService
  ) {}

  id!: string;
  type!: string;
  data!: Observable<Array<any>>;

  ngOnInit(): void {
    this.type = this.activatedRoute.snapshot.paramMap.get('type')!;
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    if (this.type === 'characters' || this.type === 'charactersForComicId') {
      this.data = this.moreInfoService.obtainCharacterById(this.id);
    } else {
      this.data = this.moreInfoService.obtainComicsById(this.id);
    }
  }

  goBack(){
    history.back();
  }

}
