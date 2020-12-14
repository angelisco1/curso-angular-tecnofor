import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { SugusComponent } from './cmp-databinding/sugus/sugus.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    CmpDatabindingComponent,
    SugusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
