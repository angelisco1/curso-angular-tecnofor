import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Meme, PropCambiada } from '../interfaces/meme';

@Component({
  selector: 'app-form-meme',
  templateUrl: './form-meme.component.html',
  styleUrls: ['./form-meme.component.css']
})
export class FormMemeComponent implements OnInit {

  @Input() meme: Meme = null;
  @Output() propCambiada = new EventEmitter<PropCambiada>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarMeme(event) {
    const propiedad: PropCambiada = {
      key: event.target.name,
      val: event.target.value
    }
    this.propCambiada.emit(propiedad);
  }

}
