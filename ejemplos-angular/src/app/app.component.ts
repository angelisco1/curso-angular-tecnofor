import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  ngOnInit() {
    window.sessionStorage.setItem('Auth', Math.random()+'')
  }

}
