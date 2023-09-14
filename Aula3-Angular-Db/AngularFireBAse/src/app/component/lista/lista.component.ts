import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/interfaces/pessoa.interface';
import { AxiosService } from 'src/app/services/Axios.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  constructor(private service:AxiosService) { }
  ngOnInit(): void {
    this.service.getPessoa()
  }

  addPessoa(){
    const doc:Pessoa = {
      nome: 'Rafael',
      descricao: 'Teste',
      data: '2021-08-19',
      local: 'São Paulo'
    }
    console.log(doc)
    this.service.postPessoa(doc)
  }
}
