import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../../interfaces/interfaces-comunicacion-cmps';

@Component({
  selector: 'app-cmp-leia',
  templateUrl: './cmp-leia.component.html',
  styleUrls: ['./cmp-leia.component.css']
})
export class CmpLeiaComponent implements OnInit {

  @Input() misDatos: Persona = {nombre: '', apellido: ''};
  @Output() apellidoCambiado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirNuevoApellido(event) {
    this.apellidoCambiado.emit(event.target.value)
  }
}
