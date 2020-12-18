import { Component, OnInit } from '@angular/core';
import { OfertasTrabajoService } from './ofertas-trabajo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  ofertas = [];
  mostrarSuscripciones = true;
  suscripcion: Subscription;
  // suscripcionNuevaOferta: Subscription;

  constructor(private ofertasServ: OfertasTrabajoService) { }

  ngOnInit(): void {
    this.getOfertas();
  }

  addOferta(nombre) {
    this.suscripcion = this.ofertasServ.addOferta(nombre)
      .subscribe((datos) => {
        console.log(datos);
        this.suscripcion.unsubscribe();
        this.getOfertas();
      });
  }

  getOfertas() {
    this.suscripcion = this.ofertasServ.getOfertas()
      .subscribe((ofertas) => {
        console.log(ofertas)
        this.ofertas = ofertas;
        this.suscripcion.unsubscribe();
      });
  }

  eliminar(id) {
    this.suscripcion = this.ofertasServ.deleteOferta(id)
      .subscribe((datos) => {
        console.log(datos);
        this.suscripcion.unsubscribe();
        this.getOfertas();
      })
  }

  toggleSuscripciones() {
    this.mostrarSuscripciones = !this.mostrarSuscripciones;
  }
}
