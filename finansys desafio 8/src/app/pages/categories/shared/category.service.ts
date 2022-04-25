import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Category } from './category.model';
 
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = environment.apiUrl + "/categorias?user_id=andre_hamada";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {  
    return this.http.get(this.url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategories)
    )
  }

  getById(id: number): Observable<Category> {
    const url = `${environment.apiUrl}/categorias/${id}?user_id=andre_hamada`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
  }

  create(category: Category): Observable<Category> {
    category.user_id = "andre_hamada"
    category.id = (Math.floor(Math.random() * 100)).toString()
    return this.http.post(this.url, category)
    .pipe(
      catchError(this.handleError),
      map(this.jsonDataToCategory)
    )
  }

  

 update(category: Category): Observable<Category> {
    const url = `${this.url}/${category.id}`;
    category.user_id = "andre_hamada"
    return this.http.put(url, category).pipe(
      catchError(this.handleError),
      map(() => category)
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

  private jsonDataToCategories(jsonData: any[]): Category[]{
    const categories: Category[] = [];
    jsonData.forEach(element => categories.push(element as Category));
    return categories;
  }

  private jsonDataToCategory(jsonData: any): Category{
    return jsonData as Category;
  }

  private handleError(error: any): Observable<any>{
    console.log("Erro na Requisição => ", error);
    return throwError(error);

  }
}
