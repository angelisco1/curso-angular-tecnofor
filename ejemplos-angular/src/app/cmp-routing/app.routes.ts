import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { InfoComponent } from './info/info.component';
import { ErrorComponent } from './error/error.component';
import { LoginGuard } from './login.guard';

const MIS_ROUTES: Routes = [
  { path: ':id/info', component: InfoComponent, canActivate: [LoginGuard] }
]

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: 'usuarios', component: UsuariosComponent, children: MIS_ROUTES },
  { path: 'auxiliar', component: ErrorComponent, outlet: 'region-secundaria' },
  { path: 'auxiliar2', component: NuevoUsuarioComponent, outlet: 'region-secundaria' },
  { path: '**', component: ErrorComponent }
]

export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);