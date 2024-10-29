import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DisciplinaService } from '../Services/disciplina.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-disciplina-view',
  templateUrl: './disciplina-view.component.html',
  styleUrls: ['./disciplina-view.component.css']
})
export class DisciplinaViewComponent implements OnInit {
  disciplinaForm!: FormGroup;
  disciplinas: any[] = [];

  constructor(private disciplinaService: DisciplinaService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.disciplinaForm = new FormGroup({
      nomeAluno: new FormControl(''),
      nomeDisciplina: new FormControl(''),
    });
  }

  getDisciplinas() {
    this.disciplinaService.getDisciplinas().subscribe(
      (data) => {
        this.disciplinas = data
      },
      (error) => {
        console.log('Erro: ', error)
      }
    );
  }

  matricularAluno() {
    const nomeAluno = this.disciplinaForm.get('nomeAluno')?.value;
    const nomeDisciplina = this.disciplinaForm.get('nomeDisciplina')?.value;

    this.disciplinaService.matricularAluno(nomeAluno, nomeDisciplina).subscribe(
      (data) => {
        this.openSnackBar("Aluno Matriculado!")
      },
      (error) => {
        this.openSnackBar("Erro ao Matricular.")
        console.log("Erro: ", error)
      }
    );
  }

  removerAluno() {
    const nomeAluno = this.disciplinaForm.get('nomeAluno')?.value;
    const nomeDisciplina = this.disciplinaForm.get('nomeDisciplina')?.value;

    this.disciplinaService.removerAluno(nomeAluno, nomeDisciplina).subscribe(
      (data) => {
        this.openSnackBar("Aluno desmatriculado!")
      },
      (error) => {
        this.openSnackBar("Erro ao desmstricular!")
        console.log(error)
      }
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
    });
  }

}
