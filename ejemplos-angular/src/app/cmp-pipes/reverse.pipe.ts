import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  // {{ 'hola mundo' | reverse }} => 'odnum aloh'

  transform(value: string): string {
    // return value.split('').reverse().join('');
    const arLetras = value.split('');
    const arLetrasReverse = arLetras.reverse();
    const textoReverse = arLetrasReverse.join('');
    return textoReverse;

  }

}