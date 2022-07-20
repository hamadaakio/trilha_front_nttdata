import { Proposta } from './shared/models/propostas';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'angular-bootstrap-md';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApagarPropostaComponent } from './pages/apagar-proposta/apagar-proposta.component';
import { AprovadoComponent } from './pages/aprovado/aprovado.component';
import { HistorioVazioComponent } from './pages/historio-vazio/historio-vazio.component';
import { ImovelComponent } from './pages/imovel/imovel.component';
import { InfoClienteComponent } from './pages/info-cliente/info-cliente.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProponenteComponent } from './pages/proponente/proponente.component';
import { ReprovadoComponent } from './pages/reprovado/reprovado.component';
import { ClientService } from './shared/client.service';
import { PropostasService } from './shared/propostas.service';
import { TransfereService } from './shared/transfere.service';

@NgModule({
  declarations: [
    AppComponent,
    ProponenteComponent,
    NavbarComponent,
    ImovelComponent,
    InicioComponent,
    AprovadoComponent,
    ReprovadoComponent,
    HistorioVazioComponent,
    InfoClienteComponent,
    ApagarPropostaComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    ModalModule,
    ReactiveFormsModule,
    MatDialogModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true,
    }),
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: Proposta, useValue:'id!' },
    MatDatepickerModule,
    MatNativeDateModule,
    TransfereService,
    MatSnackBarModule,
    ClientService,
    PropostasService,
  ],
  
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [ApagarPropostaComponent],
})
export class AppModule {}
