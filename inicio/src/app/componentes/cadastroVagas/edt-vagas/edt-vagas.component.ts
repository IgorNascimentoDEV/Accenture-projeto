import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroVagasService } from '../cadastro-vagas.service';
import { CadastroVagas } from '../cadastroVagas.model';


@Component({
  selector: 'app-edt-vagas',
  templateUrl: './edt-vagas.component.html',
  styleUrls: ['./edt-vagas.component.css'],
})
export class EdtVagasComponent implements OnInit {

  cadastros!:CadastroVagas[] | any;

  vaga: CadastroVagas = {
    nomeVaga: '',
    localidade: '',
    tempoAlocacao: '',
    descricaoVaga: '',
    idioma: '',
    skillTecnica: []
  }

  form: any;

  constructor(private cadastroServico: CadastroVagasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    const id = +this.route.snapshot.paramMap.get('id')!
    this.cadastroServico.lerVagaPorId(id).subscribe(vaga =>{
      this.vaga = vaga
      this.cadastros = vaga.skillTecnica
    });
    this.form = new FormGroup({
      item: new FormControl('', Validators.required)
    })
  }

      criaItem(): void{
        this.vaga.skillTecnica.push(this.form.value.item)
        this.form.reset();
        this.cadastroServico.mensagemSucesso('Operação realizada com sucesso');
    }

    deletarItem(item: any): void {
      this.cadastros.splice(item, 1)
    }


  autalizarVaga():void{
    this.cadastroServico.atualizarVaga(this.vaga).subscribe(() =>{
      this.cadastroServico.mensagemSucesso("Vaga atualizado com sucesso");
      this.router.navigate(["/vagas"]);
    });
  }


  cancela():void{
    this.router.navigate(["/vagas"])
  }

  deletarCadastro(){
    this.cadastroServico.deletarCadastro(`${this.vaga.id}`).subscribe(()=>{
          this.cadastroServico.mensagemSucesso("Cadastro excluido com Sucesso");
          this.router.navigate(['/vagas']);
        })
      }
}
