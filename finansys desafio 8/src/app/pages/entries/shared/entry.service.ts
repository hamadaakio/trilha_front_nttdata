import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment'; 

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { CategoryService } from '../../categories/shared/category.service';

import { Entry } from './entry.model';
 
@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private url = environment.apiUrl + "/lancamentos?user_id=andre_hamada";
  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
    ) {}


  getAll(): Observable<Entry[]> {  
    return this.http.get(this.url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEntries)
    )
  }

  getById(id: string): Observable<Entry> {

    const url = `${environment.apiUrl}/lancamentos/${id}?user_id=andre_hamada`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEntry)
    )
  }
  
  create(entry: Entry): Observable<Entry> {
    entry.user_id = "andre_hamada"
    entry.id = (Math.floor(Math.random() * 100)).toString()
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return this.http.post(this.url, entry).pipe(
          catchError(this.handleError),
          map(this.jsonDataToEntry)
        )
      })
    )
  }


  update(entry: Entry): Observable<Entry> {
    const url = `${this.url}/${entry.id}`;
    entry.user_id = "andre_hamada"
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return this.http.put(url, entry).pipe(
          catchError(this.handleError),
          map(() => entry)
        )
      })
    )
  }

  delete(id: number): Observable<any>{
   
    const url = `${this.url}&id=${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    )
  }
  // PRIVATE METHODS

  private jsonDataToEntries(jsonData: any[]): Entry[]{
    const entries: Entry[] = [];

    jsonData.forEach(element => {
      const entry = Object.assign(new Entry(), element);
      entries.push(entry);
  });

    return entries;
  }

  private jsonDataToEntry(jsonData: any): Entry{
    return Object.assign(new Entry(), jsonData);
  }

  private handleError(error: any): Observable<any>{
    console.log("Erro na Requisição => ", error);
    return throwError(error);

  }
}
