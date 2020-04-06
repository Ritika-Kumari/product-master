import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distinctfilter'
})

@Injectable()
export class DistinctFilterPipe implements PipeTransform {
  transform(items: any[], field: string): any[] {
    if (!items) return [];
    return [... new Set(items.map(it => it[field]))];
  }
}
