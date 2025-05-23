import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'; // API 

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError('getTasks'))
    );
  }

  addTask(title: string): Observable<any> {
    const newTask = { title, completed: false };
    return this.http.post<any>(this.apiUrl, newTask).pipe(
      catchError(this.handleError('addTask'))
    );
  }

  editTask(id: number, updatedTitle: string): Observable<any> {
    const updatedTask = { title: updatedTitle };
    return this.http.put<any>(`${this.apiUrl}/${id}`, updatedTask).pipe(
      catchError(this.handleError('editTask'))
    );
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError('deleteTask'))
    );
  }

  toggleTaskCompletion(id: number, completed: boolean): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, { completed }).pipe(
      catchError(this.handleError('toggleTaskCompletion'))
    ); 
  }

  private handleError(operation: string) {
    return (error: any) => {
      console.error(`Error en ${operation}:`, error);
      return throwError(() => new Error(`No se pudo completar la operación: ${operation}`));
    };
  }
}
