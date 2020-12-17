import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
})
export class ReactivosComponent implements OnInit {

  form: FormGroup;

  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   u: new FormControl('', Validators.required),
    //   email: new FormControl('angel@gmail.', [Validators.required, Validators.pattern(new RegExp('^\\S+@\\S+\\.\\S+$'))]),
    //   password: new FormControl('123', [Validators.required, Validators.minLength(4)]),
    // });
    this.form = this.formB.group({
      u: this.formB.control('', Validators.required),
      email: this.formB.control('angel@gmail.', [Validators.required, Validators.pattern(new RegExp('^\\S+@\\S+\\.\\S+$'))]),
      password: this.formB.control('123', [Validators.required, Validators.minLength(4)]),
    });
  }

  registrate() {
    console.log(this.formB)
    console.log(this.form.value)
  }

}