import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApagarPropostaComponent } from './apagar-proposta.component';

describe('ApagarPropostaComponent', () => {
  let component: ApagarPropostaComponent;
  let fixture: ComponentFixture<ApagarPropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApagarPropostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApagarPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
