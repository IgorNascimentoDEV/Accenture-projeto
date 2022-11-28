import { Tecnica } from './tecnica.model';
import { CadastroVagasService } from './../cadastro-vagas.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CadastroVagas } from '../cadastroVagas.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-criar-vaga',
  templateUrl: './criar-vaga.component.html',
  styleUrls: ['./criar-vaga.component.css']
})
export class CriarVagaComponent implements OnInit {

  
  cadastros:Array<Tecnica> = [];

  form:any;

  vaga: CadastroVagas = {
    nomeVaga: '',
    localidade: '',
    tempoAlocacao: '',
    descricaoVaga: '',
    idioma: '',
    skillTecnica: []
  }
  constructor(private cadastroVagaService: CadastroVagasService,private router: Router) { }



  ngOnInit(): void {
    this.form = new FormGroup({
      item: new FormControl('', Validators.required)
    })
  }

  criaItem(): void{
      this.cadastros.push(this.form.value.item);
      this.vaga.skillTecnica.push(this.form.value.item)
      this.form.reset();
      this.cadastroVagaService.mensagemSucesso('Operação realizada com sucesso');
  }

  deletarItem(item: any): void {
    this.cadastros.splice(item, 1)
  }

  criarCadastroVagas(): void{
    this.cadastroVagaService.criaVagas(this.vaga).subscribe(() =>{
      this.cadastroVagaService.mensagemSucesso('Operação realizada com sucesso');
      for(let i = 0; i <= this.cadastros.length; i++){
        this.vaga.skillTecnica[i] = this.cadastros[i]
      }
      this.router.navigate(['/vagas']);
    })
  }

  cancelar(): void{
    this.router.navigate(['/vagas'])
  }


}