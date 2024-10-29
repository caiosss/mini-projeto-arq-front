import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  private apiURL = 'http://localhost:8080/biblioteca';

  constructor(private http: HttpClient) { }

  getBiblioteca(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  // /{nome}/reservarLivro/{livro}
  reservarLivro(nomeAluno: string, nomeLivro: string): Observable<any> {
    return this.http.post(`${this.apiURL}/${nomeAluno}/reservarLivro/${nomeLivro}`, null);
  }

  devolverLivro(nomeAluno: string, nomeLivro: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${nomeAluno}/devolverLivro/${nomeLivro}`);
  }
}
