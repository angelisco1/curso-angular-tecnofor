import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios = [
    { id: 1, nombre: 'Charly'},
    { id: 2, nombre: 'Sara'},
    { id: 3, nombre: 'Arya'},
    { id: 4, nombre: 'Rickon'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
