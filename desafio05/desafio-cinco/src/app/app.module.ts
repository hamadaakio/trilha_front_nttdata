
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';
import { QuadradoComponent } from './components/quadrado/quadrado.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { TestesPipeComponent } from './components/testes-pipe/testes-pipe.component';

import { registerLocaleData } from '@angular/common';
import { CodigoConvitePipe } from './pipes/codigo-convite.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ListaNumerosComponent,
    QuadradoComponent,
    CuboComponent,
    TestesPipeComponent,
    CodigoConvitePipe,
    CnpjPipe,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
