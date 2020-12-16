import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {
  // {{ 'hola mundo adios' | hideWords:['hola', 'adios'] }} => **** mundo *****
  // RegExp


  transform(value: string, palabras: Array<string>): string {

    palabras.forEach((palabra) => {
      const regExp = new RegExp(palabra, 'gi')
      value = value.replace(regExp, '*'.repeat(palabra.length))
    })

    return value;
  }

}
