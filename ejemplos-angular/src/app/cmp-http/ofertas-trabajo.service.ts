import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasTrabajoService {
  URL = 'https://fluentjobs-fa22e.firebaseio.com/jobs/angel' // Tiene que acabar en .json

  constructor(private http: HttpClient) { }

  getOfertas() {
    return this.http.get(`${this.URL}.json`)
      .pipe(
        map((datos) => {
          const arDatos = [];
          for (let id in datos) {
            const oferta = { id, ...datos[id] }
            arDatos.push(oferta);
          }
          return arDatos;
        })
      )
  }

  addOferta(nombre: string) {
    const ofertaNueva = { nombre, empresa: 'E-Corp', salario: 25000 };
    return this.http.post(`${this.URL}.json`, JSON.stringify(ofertaNueva))
  }

  deleteOferta() {

  }
}
