import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './component/lista/lista.component';
import { AgregacaoComponent } from './component/agregacao/agregacao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AgregacaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
