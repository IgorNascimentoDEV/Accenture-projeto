import { CadastroVagasService } from './../cadastro-vagas.service';
import { Component, OnInit } from '@angular/core';
import { CadastroVagas } from '../cadastroVagas.model';

@Component({
  selector: 'app-ler-vagas',
  templateUrl: './ler-vagas.component.html',
  styleUrls: ['./ler-vagas.component.css']
})
export class LerVagasComponent implements OnInit {

  vagas?: CadastroVagas[]

  constructor(private cadastroServico: CadastroVagasService) { }

  ngOnInit(): void {
    
    this.cadastroServico.lerVaga().subscribe(vagas =>{
      this.vagas = vagas
    })
    
  }

}
