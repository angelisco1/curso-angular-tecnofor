import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  // transform(value: number, ...args: Array<number>): number {
  transform(value: number, arg1: number = 0, arg2: number = 0): number {
    return value * 2 + arg1 - arg2;
  }


  // transform(value: number): number;
  // transform(value: string): string;

  // transform(value) {
  //   if (typeof(value) === 'number') {
  //     return value * 2;
  //   }
  //   if (typeof(value) === 'string') {
  //     return value.repeat(2);
  //   }
  // }

}
