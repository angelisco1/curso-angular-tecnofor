import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarDigitos'
})
export class OcultarDigitosPipe implements PipeTransform {

  transform(value: string): string {
    const numDigitosVisibles = 4;
    let digitosOcultos = value.slice(0, -numDigitosVisibles);
    let digitosVisibles = value.slice(-numDigitosVisibles);
    return digitosOcultos.replace(/\S/g, '*') + digitosVisibles;
  }

}
