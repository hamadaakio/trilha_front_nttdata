import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AprovadoComponent } from './pages/aprovado/aprovado.component';
import { HistorioVazioComponent } from './pages/historio-vazio/historio-vazio.component';
import { ImovelComponent } from './pages/imovel/imovel.component';
import { InfoClienteComponent } from './pages/info-cliente/info-cliente.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProponenteComponent } from './pages/proponente/proponente.component';
import { ReprovadoComponent } from './pages/reprovado/reprovado.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'proponente', component: ProponenteComponent },
  { path: 'imovel', component: ImovelComponent },
  { path: 'aprovado', component: AprovadoComponent },
  { path: 'reprovado', component: ReprovadoComponent },
  { path: 'historico', component: HistorioVazioComponent },
  { path: 'propostas', component: InfoClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
