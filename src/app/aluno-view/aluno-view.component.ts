import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aluno-view',
  templateUrl: './aluno-view.component.html',
  styleUrls: ['./aluno-view.component.css']
})
export class AlunoViewComponent implements OnInit {
  alunoForm!: FormGroup;

  ngOnInit(): void {
    this.alunoForm = new FormGroup({
      idAluno: new FormControl(Number),
      nomeAluno: new FormControl('')
    })
  }

  buscarID() {
    console.log(this.alunoForm.get('idAluno')?.value)
  }

  buscarNome() {
    console.log(this.alunoForm.get('nomeAluno')?.value)
  }


}
