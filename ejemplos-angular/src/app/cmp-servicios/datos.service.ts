import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private datos: Array<string> = ['Dato 1', 'Dato 2'];
  datoEmitido = new EventEmitter<string>();

  constructor(private logServ: LogService) { }

  sendDato(pos: number): void {
    const dato = this.datos[pos] || 'El dato no existe';
    this.datoEmitido.emit(dato);
  }

  addDato(dato: string): void {
    this.datos.push(dato);
    this.logServ.muestraMensaje('Se ha guardado el dato ' + dato)
    // this.datos = [...this.datos, dato];
    // this.datoGuardado.emit(this.datos)
  }

  getDatos(): Array<string> {
    return this.datos;
  }
}
