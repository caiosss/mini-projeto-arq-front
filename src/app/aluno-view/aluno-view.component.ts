import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlunoService } from '../Services/aluno.service';

@Component({
  selector: 'app-aluno-view',
  templateUrl: './aluno-view.component.html',
  styleUrls: ['./aluno-view.component.css']
})
export class AlunoViewComponent implements OnInit {
  alunoForm!: FormGroup;
  alunos: any[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoForm = new FormGroup({
      idAluno: new FormControl(Number),
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
    console.log(this.alunoForm.get('idAluno')?.value)
  }

  buscarNome() {
    console.log(this.alunoForm.get('nomeAluno')?.value)
  }


}
