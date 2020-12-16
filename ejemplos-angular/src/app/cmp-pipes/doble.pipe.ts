import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  // transform(value: number, ...args: Array<number>): number {
  transform(value: number, aSumar: number = 0, aRestar: number = 0): number {
    return value * 2 + aSumar - aRestar;
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
