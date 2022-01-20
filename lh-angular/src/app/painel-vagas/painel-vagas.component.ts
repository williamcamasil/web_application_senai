import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from '../models/Vaga.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vaga = new Vaga(0, "", "", "", 0);

  constructor(private _vagasService: VagasService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar() {
    if(this.vaga.id !== 0 && this.vaga.nome !== "" && this.vaga.foto !== "" && this.vaga.descricao !== "" && this.vaga.salario !== 0) {
      this._vagasService.cadastrarVaga(this.vaga)
        .subscribe(
          vaga => {
            this.vaga = new Vaga(0, "", "", "", 0);
          },err => {
            alert("erro ao cadastrar, tente novamente mais tarde");
          }
        );
        alert("Vaga cadastrada com sucesso!");
        this.router.navigateByUrl("/mural");
    } else {
      alert("Preencha todos os campos");
    }
  }

  atualizar(id: number) {
    if(this.vaga.id !== 0 && this.vaga.nome !== "" && this.vaga.foto !== "" && this.vaga.descricao !== "" && this.vaga.salario !== 0) {
      this._vagasService.atualizarVaga(id, this.vaga)
        .subscribe(
          vaga => {
            this.vaga = new Vaga(0, "", "", "", 0);
          },err => {
            alert("erro ao atualizar, tente novamente mais tarde");
          }
        );
        alert("Atualização realizada com sucesso!");
        this.router.navigateByUrl("/mural");
    } else {
      alert("Preencha todos os campos");
    }
  }
}
