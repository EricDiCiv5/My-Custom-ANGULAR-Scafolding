import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/Characters';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component {

  @Input() displayedColumns!: string[];
  @Input() dataSource!: Observable<MatTableDataSource<Partial<Character>>>;
  @Input() state!: string;
  @Output() id_emitter: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  obtainClick(id: number) {
    this.id_emitter.emit(id);
  }

  //Not using ngOninit here because we are not loading any data directly onto the component's view and also we're following the ESLint's configured rules.

  get numberOfSpinners() {
    return new Array(10);
  }

}
