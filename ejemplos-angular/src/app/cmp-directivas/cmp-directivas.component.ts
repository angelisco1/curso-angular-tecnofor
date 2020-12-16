import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  letraNaranjaActivada: boolean = false;

  logueado: boolean = false;
  sugus = [
    { sabor: 'naranja', color: 'orange' },
    { sabor: 'piña', color: 'blue' },
    { sabor: 'fresa', color: 'red' },
    { sabor: 'limón', color: 'yellow' },
  ]

  color: string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  toggleLetraNaranja() {
    this.letraNaranjaActivada = !this.letraNaranjaActivada;
  }

  toggleLogueado() {
    this.logueado = !this.logueado;
  }

}
