import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ProponenteComponent } from './proponente.component';
import { TransfereService } from 'src/app/shared/transfere.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProponenteComponent', () => {
  let component: ProponenteComponent;
  let fixture: ComponentFixture<ProponenteComponent>;

  let mockTransfereService = jasmine.createSpyObj('transfereService', ['pegarProponente'],{'proponente':of({})});
  let mockRouter = jasmine.createSpyObj('router',['navigateByUrl']);


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProponenteComponent ],
      providers: [
        FormBuilder,
        { provide: TransfereService, useValue: mockTransfereService },
        { provide: Router, useValue: mockRouter }
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  })

  it('should call service and router', () => {
    component.onSubmit();
    expect(mockTransfereService.pegarProponente).toHaveBeenCalled();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/imovel');
  })

});

