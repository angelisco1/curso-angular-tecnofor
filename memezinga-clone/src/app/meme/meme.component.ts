import { Component, Input, OnInit } from '@angular/core';
import { Meme } from '../interfaces/meme';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  @Input() meme: Meme = null;

  constructor() { }

  ngOnInit(): void {
  }

}
