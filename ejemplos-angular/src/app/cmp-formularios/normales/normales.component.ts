import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normales',
  templateUrl: './normales.component.html',
  styleUrls: ['./normales.component.css']
})
export class NormalesComponent implements OnInit {

  datos = {
    username: '',
    email: 'angel@gmail',
    password: '123',
  }

  constructor() { }

  ngOnInit(): void {
  }

  registrate(form) {
    console.log(form.value)
    console.log('Registrado...')
  }

}
