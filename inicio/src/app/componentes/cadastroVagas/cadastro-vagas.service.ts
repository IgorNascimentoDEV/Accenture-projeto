import { Tecnica } from './criar-vaga/tecnica.model';
import { Observable } from 'rxjs';
import { CadastroVagas } from './cadastroVagas.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroVagasService {

  baseUrl = " https://my-json-server.typicode.com/IgorNascimentoDEV/Back-end/vagas"
  linkTecnica = "https://my-json-server.typicode.com/IgorNascimentoDEV/Back-end/tecnica"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  mensagemSucesso(msg: string): void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  criaVagas(vaga: CadastroVagas): Observable<CadastroVagas>{
    return this.http.post<CadastroVagas>(this.baseUrl, vaga);
  }
  criatecnica(vaga: Array<Tecnica>): Observable<Tecnica>{
    return this.http.post<Tecnica>(this.baseUrl, vaga);
  }

  crialista(vaga: CadastroVagas): Observable<CadastroVagas>{
    return this.http.post<CadastroVagas>(this.baseUrl, vaga);
  }

  lerVaga(): Observable<CadastroVagas[]>{
    return this.http.get<CadastroVagas[]>(this.baseUrl)
  }
  
  lerVagaPorId(id: number): Observable<CadastroVagas>{
    const url= `${this.baseUrl}/${id}`  
  return this.http.get<CadastroVagas>(url)
}

atualizarVaga(cadastro: CadastroVagas): Observable<CadastroVagas>{
  const url= `${this.baseUrl}/${cadastro.id}`
  return this.http.put<CadastroVagas>(url, cadastro)
}

deletarCadastro(id: String): Observable<CadastroVagas>{
  const url = `${this.baseUrl}/${id}`;   
  return this.http.delete<CadastroVagas>(url);
}
} 
