import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoViewComponent } from './aluno-view/aluno-view.component';
import { DisciplinaViewComponent } from './disciplina-view/disciplina-view.component';

const routes: Routes = [
  {path: '', component: AlunoViewComponent},
  {path: 'disciplina', component: DisciplinaViewComponent},
  {path: 'biblioteca', component: DisciplinaViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
