import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    for (const item of value) {
      item.instanceType = item.instanceType.split('').reverse().join('');
    }
    return value;
  }

}
