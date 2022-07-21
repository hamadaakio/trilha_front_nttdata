import { PropostasService } from 'src/app/shared/propostas.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { ImovelComponent } from './imovel.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatSnackBar,
  matSnackBarAnimations,
} from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { FormBuilder } from '@angular/forms';
 
describe('ImovelComponent', () => {
  let component: ImovelComponent;
  let fixture: ComponentFixture<ImovelComponent>;

  // let mockTransfereService = jasmine.createSpyObj('transfereService',[ProponenteComponent]);
  let mockRouter = jasmine.createSpyObj('router', ['navigateByUrl']);

  const spyPropostaService = jasmine.createSpyObj("spyPropostaService", [
    "enviaDados"
  ]);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ImovelComponent],
      providers: [
        // { provide: TransfereService, useValue: mockTransfereService },
        { provide: Router, useValue: mockRouter },
        { provide: MatSnackBar },
        { provide: Overlay },
        { provide: FormBuilder },
        { provide: HttpClient },
        { provide: HttpHandler },
        { provide: PropostasService, useValue: spyPropostaService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  
  // it('should valor da entrada > valor do imovel * 0.2', () => {
  //   var valorEntrada = "R$ 50000,00"
  //   var valorImovel = "R$250000,00"
  //   expect(valorEntrada).toBeGreaterThanOrEqual(valorImovel)
    
  // });

  it('should call reprovado', () => {
    component.onSubmit();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/reprovado');
  });

  it('should call proponente', () => {
    component.voltar();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/proponente');
  });
});
