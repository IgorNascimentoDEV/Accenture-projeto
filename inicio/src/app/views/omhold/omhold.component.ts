import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/componentes/cadastro/cadastro.model';
import { CadastroService } from 'src/app/componentes/cadastro/cadastro.service';

@Component({
  selector: 'app-omhold',
  templateUrl: './omhold.component.html',
  styleUrls: ['./omhold.component.css']
})
export class OmholdComponent implements OnInit {
  cadastros?: Cadastro[]

  constructor(private cadastroServico: CadastroService) { }

  ngOnInit(): void {
    
    this.cadastroServico.lerCandidato().subscribe(cadastros =>{
      this.cadastros = cadastros
    })
    
  }

}
