import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeardComponent } from './componentes/template/heard/heard.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { NavComponent } from './componentes/template/nav/nav.component';


import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { OmholdComponent } from './views/omhold/omhold.component';
import { ContratadosComponent } from './views/contratados/contratados.component';
import { InaptoComponent } from './views/inapto/inapto.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { PreCadastroComponent } from './componentes/cadastro/pre-cadastro/pre-cadastro.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { CadastroLerComponent } from './componentes/cadastro/cadastro-ler/cadastro-ler.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CadastroAtualizarComponent } from './componentes/cadastro/cadastro-atualizar/cadastro-atualizar.component';
import { CadastroDeletarComponent } from './componentes/cadastro/cadastro-deletar/cadastro-deletar.component';
import { CriarVagaComponent } from './componentes/cadastroVagas/criar-vaga/criar-vaga.component';
import { EntrevistaComponent } from './componentes/cadastro/entrevista/entrevista.component';
import { NgChartsModule } from 'ng2-charts';
import { LerVagasComponent } from './componentes/cadastroVagas/ler-vagas/ler-vagas.component';
import { EdtVagasComponent } from './componentes/cadastroVagas/edt-vagas/edt-vagas.component';
import {  ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeardComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CadastrarComponent,
    OmholdComponent,
    ContratadosComponent,
    InaptoComponent,
    VagasComponent,
    PreCadastroComponent,
    CadastroLerComponent,
    CadastroAtualizarComponent,
    CadastroDeletarComponent,
    CriarVagaComponent,
    EntrevistaComponent,
    LerVagasComponent,
    EdtVagasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgChartsModule,
    ReactiveFormsModule,
    BrowserModule
   
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
