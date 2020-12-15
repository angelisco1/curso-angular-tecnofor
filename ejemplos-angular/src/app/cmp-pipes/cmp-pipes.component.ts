import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
