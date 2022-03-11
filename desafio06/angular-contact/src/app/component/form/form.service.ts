import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/shared/cliente';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = "http://localhost:3000/contact-us"

  constructor(private http: HttpClient) { }

  create(contact: Cliente): Observable<any> {
    return this.http.post(this.baseUrl, contact);
  }
}


