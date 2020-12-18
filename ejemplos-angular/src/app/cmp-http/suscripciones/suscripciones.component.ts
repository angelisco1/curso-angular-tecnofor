import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-suscripciones',
  templateUrl: './suscripciones.component.html',
  styleUrls: ['./suscripciones.component.css']
})
export class SuscripcionesComponent implements OnInit, OnDestroy {
  suscripcion: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.suscripcion = interval(1000)
      .subscribe((num) => {
        console.log(num);
      })
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }
}
