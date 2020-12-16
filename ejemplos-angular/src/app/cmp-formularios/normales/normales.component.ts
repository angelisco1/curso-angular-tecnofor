import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normales',
  templateUrl: './normales.component.html',
  styleUrls: ['./normales.component.css']
})
export class NormalesComponent implements OnInit {

  datos = {
    username: '',
    email: 'angel@gmail.com',
    password: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  registrate(form) {
    console.log(form)
    console.log('Registrado...')
  }

}
