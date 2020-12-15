import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-luke',
  templateUrl: './cmp-luke.component.html',
  styleUrls: ['./cmp-luke.component.css']
})
export class CmpLukeComponent implements OnInit {

  @Input() datosLeia;


  constructor() { }

  ngOnInit(): void {
  }

}
