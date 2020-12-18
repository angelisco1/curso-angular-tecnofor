import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoComponent } from './tarjeta-credito.component';
import { OcultarDigitosPipe } from './ocultar-digitos.pipe';


@NgModule({
  declarations: [
    TarjetaCreditoComponent,
    OcultarDigitosPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TarjetaCreditoComponent
  ]
})
export class TarjetaCreditoModule { }
