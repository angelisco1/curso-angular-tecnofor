import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardarDatos() {
    // Recoger datos
    // POST PARA GUARDAR LOS DATOS
    setTimeout(() => {
      // Aquí recibiriamos la respuesta
      // Cambiamos de página
      this.router.navigate(['/'])
    }, 1500)
  }

}
