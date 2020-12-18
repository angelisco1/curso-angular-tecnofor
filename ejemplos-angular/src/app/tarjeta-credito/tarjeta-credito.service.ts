import { Injectable } from '@angular/core';
import { TarjetaCreditoModule } from './tarjeta-credito.module';

@Injectable({
  providedIn: 'root'
})
export class TarjetaCreditoService {

  constructor() { }

  getNumTarjeta(): string {
    return '7238 9823 5372 3843';
  }
}
