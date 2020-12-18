import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { SugusComponent } from './cmp-databinding/sugus/sugus.component';
import { CmpAnakinComponent } from './cmp-anakin/cmp-anakin.component';
import { CmpLeiaComponent } from './cmp-anakin/cmp-leia/cmp-leia.component';
import { CmpLukeComponent } from './cmp-anakin/cmp-luke/cmp-luke.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DoblePipe } from './cmp-pipes/doble.pipe';
import { HideWordsPipe } from './cmp-pipes/hide-words.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { BlinkDirective } from './cmp-directivas/blink.directive';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { ReactivosComponent } from './cmp-formularios/reactivos/reactivos.component';
import { NormalesComponent } from './cmp-formularios/normales/normales.component';
import { ErrorFormularioComponent } from './cmp-formularios/error-formulario/error-formulario.component';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpHttpComponent } from './cmp-http/cmp-http.component';
import { SuscripcionesComponent } from './cmp-http/suscripciones/suscripciones.component';
import { AuthInterceptor } from './cmp-http/auth.interceptor';
import { CmpRoutingComponent } from './cmp-routing/cmp-routing.component';
import { UsuariosComponent } from './cmp-routing/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './cmp-routing/nuevo-usuario/nuevo-usuario.component';
import { AppRoutingModule } from './cmp-routing/app.routes';
import { InfoComponent } from './cmp-routing/info/info.component';
import { ErrorComponent } from './cmp-routing/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    CmpDatabindingComponent,
    SugusComponent,
    CmpAnakinComponent,
    CmpLeiaComponent,
    CmpLukeComponent,
    CmpPipesComponent,
    DoblePipe,
    HideWordsPipe,
    ReversePipe,
    FiltroPipe,
    CmpDirectivasComponent,
    BlinkDirective,
    CmpFormulariosComponent,
    ReactivosComponent,
    NormalesComponent,
    ErrorFormularioComponent,
    CmpServiciosComponent,
    CmpHttpComponent,
    SuscripcionesComponent,
    CmpRoutingComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    InfoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
