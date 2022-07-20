import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { TransfereService } from './transfere.service';
import { of } from 'rxjs';

describe('TransfereService', () => {

  let service: TransfereService;
  let httpServiceMock: jasmine.SpyObj<HttpClient>;
  let mockHttp: HttpTestingController;


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
    service = TestBed.inject(TransfereService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
  