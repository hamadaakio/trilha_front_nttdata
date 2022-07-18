import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHistoricoComponent } from './lista-historico.component';

describe('ListaHistoricoComponent', () => {
  let component: ListaHistoricoComponent;
  let fixture: ComponentFixture<ListaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
