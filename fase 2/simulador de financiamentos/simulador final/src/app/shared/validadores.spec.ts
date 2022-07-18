import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { Validadores } from './validadores';





describe('TransfereService', () => {

  let validadores: Validadores;
  let httpServiceMock: jasmine.SpyObj<HttpClient>;

    
  beforeEach(() => {

    httpServiceMock = jasmine.createSpyObj('HttpClient', ['get', 'post']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],

      providers: [
        { provide: HttpClient, useValue: httpServiceMock }
      ]

    });
   
  });

  it('should be created', () => {
    expect(validadores).toBeFalsy();
  });

  it('should return an object with field menorDeIdade as true', () => {
    const controle = { value:'04-03-2020' }
  
    expect(Validadores.MaiorQue18Anos(controle)).toEqual({menorDeIdade: true});
    })

});
  