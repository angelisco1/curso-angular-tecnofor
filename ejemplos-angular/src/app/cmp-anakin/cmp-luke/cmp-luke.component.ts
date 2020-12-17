import { Component, Input, OnInit } from '@angular/core';
import { DatosService } from '../../cmp-servicios/datos.service';

@Component({
  selector: 'app-cmp-luke',
  templateUrl: './cmp-luke.component.html',
  styleUrls: ['./cmp-luke.component.css']
})
export class CmpLukeComponent implements OnInit {

  @Input() datosLeia;
  datoRecibido: string = ''
  datos: Array<string> = [];

  constructor(private datosServ: DatosService) { }

  ngOnInit(): void {
    this.datos = this.datosServ.getDatos();
    this.datosServ.datoEmitido.subscribe((dato) => {
      this.datoRecibido = dato;
    });
  }

}
