import { Component, OnInit } from '@angular/core';
import { TarjetaCreditoService } from './tarjeta-credito.service';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  numTarjeta: string;

  constructor(private tarjetaService: TarjetaCreditoService) { }

  ngOnInit(): void {
    this.numTarjeta = this.tarjetaService.getNumTarjeta();
  }

}
