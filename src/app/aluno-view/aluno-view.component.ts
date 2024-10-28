import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlunoService } from '../Services/aluno.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-aluno-view',
  templateUrl: './aluno-view.component.html',
  styleUrls: ['./aluno-view.component.css']
})
export class AlunoViewComponent implements OnInit {
  alunoForm!: FormGroup;
  alunos: any[] = [];

  constructor(private alunoService: AlunoService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.alunoForm = new FormGroup({
      idAluno: new FormControl(''),
      nomeAluno: new FormControl('')
    })
  }

  getAlunos() {
    this.alunoService.getAlunos().subscribe(
      (data) => {
        this.alunos = data
      },
      (error) => {
        console.log("Erro", error)
      }
    );
  }

  buscarID() {
    const id = +this.alunoForm.get('idAluno')?.value

    this.alunoService.getAlunoId(id).subscribe(
      (data) => {
        if(data) {
          let dataArr = []
          dataArr.push(data)
          this.alunos = dataArr
        } else {
          this.openSnackBar("Aluno não encontrado!")
        }
      },
      (error) => {
        console.log("Erro", error)
        this.openSnackBar("Erro ao buscar o Aluno.")
      }
    );
  }

  buscarNome() {
    const nome = this.alunoForm.get('nomeAluno')?.value

    this.alunoService.getAlunoNome(nome).subscribe(
      (data) => {
        if(data) {
          let dataArr = []
          dataArr.push(data)
          this.alunos = dataArr
        } else {
          this.openSnackBar("Aluno não encontrado!")
        }
      },
      (error) => {
        console.log("Erro", error)
        this.openSnackBar("Erro ao buscar o Aluno.")
      }
    );
  }

  salvarAlunos() {
    this.alunoService.saveAlunos().subscribe(
      (response) => {
        this.openSnackBar("Alunos salvos com sucesso!")
      },
      (error) => {
        console.log("Erro: ", error)
        this.openSnackBar("Houve um erro ao salvar!")
      }
    )
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
    });
  }
}
