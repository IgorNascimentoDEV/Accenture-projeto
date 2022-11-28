import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-ler',
  templateUrl: './cadastro-ler.component.html',
  styleUrls: ['./cadastro-ler.component.css']
})
export class CadastroLerComponent implements OnInit {

 /* candidatos: Cadastro[] | undefined;

  cadastros:Array<Cadastro> = [
    {nome: "igor", nivel: "junior", faculdade: "senac"},
    {nome: "Lendro", nivel: "senior", faculdade: "federal"}
  ];
*/
cadastros?: Cadastro[]


  constructor(private cadastroServico: CadastroService) { }

  ngOnInit(): void {
    
    this.cadastroServico.lerCandidato().subscribe(cadastros =>{
      this.cadastros = cadastros
    })
    
  }

}
