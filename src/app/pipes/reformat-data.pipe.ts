import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reformatData'
})
export class ReformatDataPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {}

  transform(date: Date): string {
    let formatedDate;
    try {
      formatedDate = this.datePipe.transform(date, 'yyyy/MM/dd');
    } catch (error) {
      formatedDate = 'Unknown';
    }
    return formatedDate!;
  }

}
