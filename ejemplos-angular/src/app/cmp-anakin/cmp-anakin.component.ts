import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/interfaces-comunicacion-cmps';

@Component({
  selector: 'app-cmp-anakin',
  templateUrl: './cmp-anakin.component.html',
  styleUrls: ['./cmp-anakin.component.css']
})
export class CmpAnakinComponent implements OnInit {

  leia: Persona = {
    nombre: 'Leia',
    apellido: 'Skywalker'
  }

  // getNombre(p1: string): string {
  //   return this.leia.nombre;
  // }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarApellidoLeia(nuevoApellido) {
    this.leia.apellido = nuevoApellido;
  }

}
