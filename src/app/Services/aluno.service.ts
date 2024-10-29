import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private apiURL = 'http://localhost:8080/alunos'

  constructor(private http: HttpClient) { }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL)
  }

  getAlunoId(id:number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/${id}`)
  }

  getAlunoNome(nome:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/nome/${nome}`)
  }

  saveAlunos(): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiURL}/salvarAlunos`, null)
  }

}
