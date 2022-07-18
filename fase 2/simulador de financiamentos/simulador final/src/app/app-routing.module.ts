import { InfoClienteComponent } from './pages/info-cliente/info-cliente.component';
import { ListaHistoricoComponent } from './pages/lista-historico/lista-historico.component';
import { HistorioVazioComponent } from './pages/historio-vazio/historio-vazio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImovelComponent } from './pages/imovel/imovel.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProponenteComponent } from './pages/proponente/proponente.component';
import { AprovadoComponent } from "./pages/aprovado/aprovado.component";
import { ReprovadoComponent } from "./pages/reprovado/reprovado.component";



const routes: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: "inicio", component: InicioComponent },
  { path: "proponente", component: ProponenteComponent },
  { path: "imovel", component: ImovelComponent },
  { path: "aprovado", component: AprovadoComponent },
  { path: "reprovado", component: ReprovadoComponent },
  { path: "historico", component: HistorioVazioComponent },
  { path: "lista", component: ListaHistoricoComponent },
  { path: "propostas", component: InfoClienteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }