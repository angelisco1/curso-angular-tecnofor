import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  // pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, textoFiltro: string): Array<string> {
    console.log('Se ha filtrado')
    return value.filter((item) => {
      return item.includes(textoFiltro);
    })
  }

}
