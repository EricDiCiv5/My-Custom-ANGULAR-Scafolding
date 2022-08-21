import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/Characters';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// Servicios
import { ObtainDataService } from 'src/app/services/obtain-data.service';
import { NgxSpinnerService } from 'ngx-spinner';


const characterArray = [
  'id',
  'name',
  'description',
  'modified',
  'thumbnail',
  'detail'
];

const comicsArray = [
  'id',
  'name',
  'description',
  'modified',
  'thumbnail',
  'detail',
  'format'
];

@Component({
  selector: 'app-meta-table',
  templateUrl: './meta-table.component.html',
  styleUrls: ['./meta-table.component.scss']
})
export class MetaTableComponent implements OnInit {

  displayedColumns!: string[];
  dataSource!: Observable<MatTableDataSource<Partial<Character>>>;
  state = 'comics';
  currentState = 'characters';
  id!: string;
  type!: string;

  constructor(
    private _activatedroute: ActivatedRoute,
    private _heroes: ObtainDataService,
    private router: Router,
    private spin: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    // 👇 Esto sirve para que al cargar el mismo componente en la ruta podamos recargar la pagina con cada peticion.
    // Y que se nos muestren los datos.
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.type = this._activatedroute.snapshot.paramMap.get('type')!;
    this.id = this._activatedroute.snapshot.paramMap.get('id')!;

    if (this.type === null) {
      this.currentState = 'characters';
      this.displayedColumns = characterArray;
      this.dataSource = this._heroes.obtainMatTableCharacters('characters');
    } else {
      if (this.type === 'comics') {
        this.currentState = 'comics';
        this.state = 'charactersByComicId';
        this.displayedColumns = comicsArray;
      }
      if (this.type === 'charactersByComicId') {
        this.state = 'comics';
        this.displayedColumns = characterArray;
      }
      this.obtainClick(parseInt(this.id));
    }

    this.spin.show('waitingData');
  }

  obtainClick(id: number) {
    console.log('Data request made: ', id, this.state);
    this.dataSource = this._heroes.obtainMatTableCharacters(this.type, id);
  }

  get numberOfSpinners() {
    return new Array(10);
  }

}
