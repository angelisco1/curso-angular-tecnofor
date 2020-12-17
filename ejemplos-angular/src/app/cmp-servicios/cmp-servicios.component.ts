import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { DatosService } from './datos.service';

@Component({
  selector: 'app-cmp-servicios',
  templateUrl: './cmp-servicios.component.html',
  styleUrls: ['./cmp-servicios.component.css']
})
export class CmpServiciosComponent implements OnInit {
  datos: Array<string> = [];

  constructor(private logServ: LogService, private datosServ: DatosService) { }

  ngOnInit(): void {
    this.datos = this.datosServ.getDatos();
  }

  saludar() {
    this.logServ.muestraMensaje('Hola mundo!');
  }

  sendDato(num) {
    this.datosServ.sendDato(num);
  }

  addDato() {
    const nuevoDato = 'Dato ' + Math.floor(Math.random()*11)
    this.datosServ.addDato(nuevoDato);
  }

}
