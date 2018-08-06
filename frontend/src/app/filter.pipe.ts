import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Array<any>, field:string, value:string, args?: any): any {
    if(!value) return array;
    const newRegx = new RegExp(value, 'i')
    return array.filter(obj=>obj[field].match(newRegx))
  }

}
