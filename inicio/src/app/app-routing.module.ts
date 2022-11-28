import { EdtVagasComponent } from './componentes/cadastroVagas/edt-vagas/edt-vagas.component';
import { CriarVagaComponent } from './componentes/cadastroVagas/criar-vaga/criar-vaga.component';
import { CadastroDeletarComponent } from './componentes/cadastro/cadastro-deletar/cadastro-deletar.component';
import { CadastroAtualizarComponent } from './componentes/cadastro/cadastro-atualizar/cadastro-atualizar.component';

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { OmholdComponent } from './views/omhold/omhold.component';
import { ContratadosComponent } from './views/contratados/contratados.component';
import { InaptoComponent } from './views/inapto/inapto.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { PreCadastroComponent } from './componentes/cadastro/pre-cadastro/pre-cadastro.component';
import { EntrevistaComponent } from './componentes/cadastro/entrevista/entrevista.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
{
  path:"cadastrar",
  component: CadastrarComponent
},
{
  path: "omhold",
  component: OmholdComponent
},
{
  path: "contratados",
  component: ContratadosComponent
},
{
  path: "inapto",
  component: InaptoComponent
},
{
  path: "vagas",
  component: VagasComponent
},
{
  path: "cadastro/pre-cadastro",
  component: PreCadastroComponent
},
{
  path: "cadastro/cadastro-atualizar/:id",
  component: CadastroAtualizarComponent
},
{
  path: "cadastro/cadastro-deletar/:id",
  component: CadastroDeletarComponent
},
{
  path: "cadastro/entrevista/:id",
  component: EntrevistaComponent
},
{
  path: "cadastroVagas/criar-vaga",
  component: CriarVagaComponent
},
{
  path: "cadastroVagas/edt-vagas/:id",
  component: EdtVagasComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
