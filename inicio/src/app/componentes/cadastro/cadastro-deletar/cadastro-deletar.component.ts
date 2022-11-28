import { Router, ActivatedRoute } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-cadastro-deletar',
  templateUrl: './cadastro-deletar.component.html',
  styleUrls: ['./cadastro-deletar.component.css']
})
export class CadastroDeletarComponent implements OnInit {
  candidato: Cadastro = {
    nome: '',
    nivel: '',
    dataEntrevista: '',
    email:'',
    skillTecnica:[]
  }

  constructor(private cadastroService: CadastroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cadastroService.lerPorId(id).subscribe(candidato =>{
        this.candidato = candidato
    })
  }

  deletarCadastro(){
      this.cadastroService.deletarCadastro(`${this.candidato.id}`).subscribe(()=>{
      this.cadastroService.mensagemSucesso("Cadastro excluido com Sucesso");
      this.router.navigate(['/cadastrar']);
    })
  }

  cancelar(): void{
    this.router.navigate(['/cadastrar']);
  }
}
