import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {


  texto: string = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit sunt autem assumenda aperiam amet, quae accusantium nostrum asperiores quia optio alias. Officia praesentium facilis eius est voluptas id facere dolorum.'
  precio: number = 23;
  fechaNacimiento = new Date(2000, 1, 4);
  mascotas: Array<string> = [
    'perro',
    'gato',
    'pez'
  ]
  persona = {
    nombre: 'Ángel',
    apellido: 'Villalba'
  }

  otrasMascotas = [
    'pelicano',
    'petauro',
    'canario'
  ]

  mensaje: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
      res('El canario está en la jaula...')
    }, 2000)
  })


  constructor() { }

  ngOnInit(): void {

  }

  addMascota(nuevaMascota: string): void {
    // console.log(nuevaMascota);
    // this.mascotas.push(nuevaMascota)
    // this.mascotas = [...this.mascotas, ...this.otrasMascotas, nuevaMascota]
    this.mascotas = [...this.mascotas, nuevaMascota]
  }

}
