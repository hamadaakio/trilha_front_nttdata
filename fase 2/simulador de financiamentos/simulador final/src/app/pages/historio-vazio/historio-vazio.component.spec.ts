import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorioVazioComponent } from './historio-vazio.component';

describe('HistorioVazioComponent', () => {
  let component: HistorioVazioComponent;
  let fixture: ComponentFixture<HistorioVazioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorioVazioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorioVazioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
