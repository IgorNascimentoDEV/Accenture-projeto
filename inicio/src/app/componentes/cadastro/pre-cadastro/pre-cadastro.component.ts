import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-pre-cadastro',
  templateUrl: './pre-cadastro.component.html',
  styleUrls: ['./pre-cadastro.component.css']
})
export class PreCadastroComponent implements OnInit {


  candidato: Cadastro = {
    nome:'',
    email:'',
    dataEntrevista:'',
    numero1:'',
    numero2:'',
    pais:'',
    estado:'',
    cidade:'',
    bairro:'',
    nivel:'',
    nascimento:'',
    pretencao:'',
    vaga:'',
    descri:'',
    sql:'',
    lg:'',
    en:'',
    skillTecnica:[]
  }

  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }
  
  criarCadastro(): void{
    //verificar back-end
    this.cadastroService.CriaCandidato(this.candidato).subscribe(()=> {
      this.cadastroService.mensagemSucesso('Operação realizado com sucesso');
      this.router.navigate(['/cadastrar']);
    })
  }

  cancelar(): void{
    this.router.navigate(['/cadastrar'])
  }
}
