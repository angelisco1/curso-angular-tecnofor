import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding',
  templateUrl: './cmp-databinding.component.html',
  styleUrls: ['./cmp-databinding.component.css']
})
export class CmpDatabindingComponent implements OnInit {

  nombre = 'Ángel';


  constructor() { }

  ngOnInit(): void {
  }

  getNombre() {
    return this.nombre;
  }

  mostrarMensaje(event?) {
    let msg = 'Hola mundo!';
    if (event) {
      console.log(event)
      msg = 'Hola ' + event.target.value;
      this.nombre = event.target.value;
    }
    alert(msg)
  }

}
