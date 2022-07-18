import { waitForAsync, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ImovelComponent } from './imovel.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBar, matSnackBarAnimations } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { FormBuilder } from '@angular/forms';



describe('ImovelComponent', () => {
  let component: ImovelComponent;
  let fixture: ComponentFixture<ImovelComponent>;
 
  // let mockTransfereService = jasmine.createSpyObj('transfereService',[ProponenteComponent]);
  let mockRouter = jasmine.createSpyObj('router',['navigateByUrl']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({      
      declarations: [ ImovelComponent ],
        providers: [
        // { provide: TransfereService, useValue: mockTransfereService },
        { provide: Router, useValue: mockRouter },
        { provide: MatSnackBar },
        { provide: Overlay },
        { provide: FormBuilder }
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should call router', () => {
    component.onSubmit();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/reprovado');
  })

  it('should call propoente',() => {
    component.voltar();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/proponente');
  })

});
