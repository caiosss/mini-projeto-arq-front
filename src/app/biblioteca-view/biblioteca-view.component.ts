import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BibliotecaService } from '../Services/biblioteca.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-biblioteca-view',
  templateUrl: './biblioteca-view.component.html',
  styleUrls: ['./biblioteca-view.component.css']
})
export class BibliotecaViewComponent implements OnInit {
  bibliotecaForm!: FormGroup;
  livros: any[] = [];

  constructor (private bibliotecaService: BibliotecaService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.bibliotecaForm = new FormGroup({
      nomeAluno: new FormControl(''),
      nomeLivro: new FormControl('')
    });
  }

  getBiblioteca() {
    this.bibliotecaService.getBiblioteca().subscribe(
      (data) => {
        this.livros = data;
      },
      (error) => {
        console.log("Error: ", error);
      }
    );
  }

  reservarLivro() {
    const nomeAluno = this.bibliotecaForm.get('nomeAluno')?.value;
    const nomeLIvro = this.bibliotecaForm.get('nomeLivro')?.value;

    this.bibliotecaService.reservarLivro(nomeAluno, nomeLIvro).subscribe(
      (response) => {
        this.openSnackBar(`Livro Reservado para ${nomeAluno}!`);

        if (response === null) {
          this.openSnackBar(`Livro já reservado!`);
        }
      },
      (error) => {
        console.log("Error: ", error);
        this.openSnackBar("Erro ao reservar!");
      }
    );
  }

  devolverLivro() {
    const nomeAluno = this.bibliotecaForm.get('nomeAluno')?.value;
    const nomeLIvro = this.bibliotecaForm.get('nomeLivro')?.value;

    this.bibliotecaService.devolverLivro(nomeAluno, nomeLIvro).subscribe(
      (data) => {
        this.openSnackBar(`Livro ${nomeLIvro} devolvido!`);
      },
      (error) => {
        console.log("Error: ", error);
        this.openSnackBar("Erro ao devolver!");
      }
    )
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
    });
  }


}
