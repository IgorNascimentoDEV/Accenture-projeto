import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navegarCriarVaga():void{
    this.router.navigate(['/cadastroVagas/criar-vaga'])
  }

}
