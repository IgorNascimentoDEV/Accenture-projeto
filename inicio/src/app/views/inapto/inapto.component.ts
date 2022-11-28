import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/componentes/cadastro/cadastro.model';
import { CadastroService } from 'src/app/componentes/cadastro/cadastro.service';

@Component({
  selector: 'app-inapto',
  templateUrl: './inapto.component.html',
  styleUrls: ['./inapto.component.css']
})
export class InaptoComponent implements OnInit {
  cadastros?: Cadastro[]

  constructor(private cadastroServico: CadastroService) { }

  ngOnInit(): void {
    
    this.cadastroServico.lerCandidato().subscribe(cadastros =>{
      this.cadastros = cadastros
    })
    
  }

}
