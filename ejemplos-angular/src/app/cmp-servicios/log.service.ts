import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  muestraMensaje(msg: string) {
    console.log('MSG: ' + msg);
  }
}
