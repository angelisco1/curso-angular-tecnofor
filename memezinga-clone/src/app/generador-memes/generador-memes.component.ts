import { Component, OnInit } from '@angular/core';
import { Meme, PropCambiada } from '../interfaces/meme'

@Component({
  selector: 'app-generador-memes',
  templateUrl: './generador-memes.component.html',
  styleUrls: ['./generador-memes.component.css']
})
export class GeneradorMemesComponent implements OnInit {

  meme: Meme = {
    texto1: 'Texto 1',
    texto2: 'Texto 2',
    urlImagen: 'https://i.imgflip.com/2hgfw.jpg',
    color: '#ffffff'
  }

  constructor() { }

  ngOnInit(): void {
  }

  actualizarMeme(cambios: PropCambiada): void {
    this.meme[cambios.key] = cambios.val;
  }

}
