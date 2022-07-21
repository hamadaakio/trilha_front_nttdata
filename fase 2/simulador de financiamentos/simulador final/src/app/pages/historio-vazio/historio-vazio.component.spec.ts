import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HistorioVazioComponent } from './historio-vazio.component';


describe('HistorioVazioComponent', () => {
  let component: HistorioVazioComponent;
  let fixture: ComponentFixture<HistorioVazioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HistorioVazioComponent],
      providers: [
        { provide: HttpClient },
        { provide: HttpHandler },
        { provide: Router },

     
      ],
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
