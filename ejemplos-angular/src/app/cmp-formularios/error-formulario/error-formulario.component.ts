import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-error-formulario',
  templateUrl: './error-formulario.component.html',
  styleUrls: ['./error-formulario.component.css']
})
export class ErrorFormularioComponent implements OnChanges {
  @Input() error = null;

  // mensajesDeError = {
  //   pattern: 'El campo no es un email'
  // }

  constructor() { }

  ngOnChanges(changes) {
    this.error = Object.keys(changes.error.currentValue)[0]
  }
}
