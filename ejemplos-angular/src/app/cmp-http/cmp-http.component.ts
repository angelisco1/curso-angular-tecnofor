import { Component, OnInit } from '@angular/core';
import { OfertasTrabajoService } from './ofertas-trabajo.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  ofertas = [];

  constructor(private ofertasServ: OfertasTrabajoService) { }

  ngOnInit(): void {
    this.ofertasServ.getOfertas()
      .subscribe((ofertas) => {
        console.log(ofertas)
        this.ofertas = ofertas;
      });
  }

  addOferta(nombre) {
    this.ofertasServ.addOferta(nombre)
      .subscribe((datos) => {
        console.log(datos);
      });
  }
}
