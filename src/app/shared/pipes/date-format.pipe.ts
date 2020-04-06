import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      let theDate = new Date(Date.parse(value));
      let theDay = ("0" + theDate.getDate()).slice(-2);
      let theMonth = ("0" + (theDate.getMonth() + 1)).slice(-2);
      let theYear = theDate.getFullYear();
      return (theDay + '/' + theMonth + '/' + theYear);
    } else {
      return '';
    }
  }
}
