import { Cadastro } from './../cadastro.model';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-atualizar',
  templateUrl: './cadastro-atualizar.component.html',
  styleUrls: ['./cadastro-atualizar.component.css']
})
export class CadastroAtualizarComponent implements OnInit {
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

  constructor(private cadastroServico: CadastroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    this.cadastroServico.lerPorId(id).subscribe(candidato =>{
      this.candidato = candidato
    });
  } 

  autalizarCadastro():void{
    this.cadastroServico.atualizarCadastro(this.candidato).subscribe(() =>{
      this.cadastroServico.mensagemSucesso("Candidato atualizado com sucesso");
      this.router.navigate(["/cadastrar"]);
    });
  }


  cancelar():void{
    this.router.navigate(["/cadastrar"])
  }
}
