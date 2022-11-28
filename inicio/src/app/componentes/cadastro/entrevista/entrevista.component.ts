
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';
import { Tecnica } from '../../cadastroVagas/criar-vaga/tecnica.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent implements OnInit {
  cadastros:Array<Tecnica> = [];

  form:any;
  
  candidato: Cadastro = {
    nome: '',
    dataEntrevista: '',
    softSkills: '',
    nivel: '',
    salario: '',
    status:'',
    skillTecnica: []
  }



  constructor(private cadastroServico: CadastroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    this.cadastroServico.lerPorId(id).subscribe(candidato =>{
      this.candidato = candidato
      this.cadastros = candidato.skillTecnica
    });
    this.form = new FormGroup({
      item: new FormControl('', Validators.required)
    })
  } 
  
  criaItem(): void{
    this.cadastros.push(this.form.value.item)
    this.form.reset();
    this.cadastroServico.mensagemSucesso('Operação realizada com sucesso');
    this.candidato.skillTecnica = this.cadastros
    console.log(this.candidato.skillTecnica)
}

deletarItem(item: any): void {
  this.cadastros.splice(item, 1)
}

  autalizarCadastro():void{
    this.cadastroServico.atualizarCadastro(this.candidato).subscribe(() =>{
      this.cadastroServico.mensagemSucesso("Candidato atualizado com sucesso");
      
      
      this.navegar()
    });
  }

  navegar():void{
    this.router.navigate(["/cadastrar"]);
  }
}



/**
 *  
 * 
 * 
 *  
 * 
 * 
 * 
 * 
 */