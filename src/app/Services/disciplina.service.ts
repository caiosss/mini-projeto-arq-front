import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private apiURL = 'http://localhost:8080/disciplinas'

  constructor(private http: HttpClient) { }

  getDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  // {nome}/{disciplina} -> post e delete
  matricularAluno(nome: string, disciplina: string): Observable<any> {
    return this.http.post(`${this.apiURL}/${nome}/${disciplina}`, null);
  }

  removerAluno(nome: string, disciplina: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${nome}/${disciplina}`);
  }

}
