import { HistorioVazioComponent } from './../pages/historio-vazio/historio-vazio.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutModule } from '@angular/cdk/layout';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
 
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockRouter = jasmine.createSpyObj('router', ['navigate']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent, HistorioVazioComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should call historico', () => {
    component.onSubmit();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/historico']);
  });
});
