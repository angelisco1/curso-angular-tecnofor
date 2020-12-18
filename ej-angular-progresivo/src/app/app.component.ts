import { Component, DoCheck } from '@angular/core';
import * as $ from 'jquery';
declare var incrementar, decrementar;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  cuenta: number = 0;
  ultimaOperacion: string = null;

  dec() {
    // console.log(getCuenta())
    decrementar()
  }

  inc() {
    incrementar()
  }

  d() {
    this.cuenta--;
    this.ultimaOperacion = 'dec'
  }

  i() {
    this.cuenta++;
    this.ultimaOperacion = 'inc'
  }

  ngDoCheck() {
    if (this.ultimaOperacion === 'dec') {
      decrementar()
    }
    if (this.ultimaOperacion === 'inc') {
      incrementar()
    }
  }
}
