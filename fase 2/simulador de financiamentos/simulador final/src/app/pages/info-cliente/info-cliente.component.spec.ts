import { Overlay } from '@angular/cdk/overlay';
import {
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_SCROLL_STRATEGY,
  MAT_DIALOG_SCROLL_STRATEGY_FACTORY,
} from '@angular/material/dialog';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropostasService } from 'src/app/shared/propostas.service';

import { InfoClienteComponent } from './info-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';

describe('InfoClienteComponent', () => {
  let component: InfoClienteComponent;
  let fixture: ComponentFixture<InfoClienteComponent>;
  let mockInfoCliente = jasmine.createSpyObj('infoClienteComponent', ['printPage'],{'window':of({})});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatDialogModule,
        RouterModule.forRoot([]),
      ],
      declarations: [InfoClienteComponent],
      providers: [
        { provide: HttpClient },
        { provide: HttpHandler },
        { provide: PropostasService },
        { provide: MatDialog },
        { provide: Overlay },
        { provide: InfoClienteComponent, useValue: mockInfoCliente },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should open printPage', () => {
    const print = window.print

    expect(mockInfoCliente).toHaveBeenCalled();
  })
});
