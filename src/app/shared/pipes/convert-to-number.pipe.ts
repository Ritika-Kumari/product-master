import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToNumber'
})
export class ConvertToNumberPipe implements PipeTransform {

  transform(value: any): number {

    if (!value) {
      return 0;
    }

    return Number(value);
  }
}
