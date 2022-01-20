import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from '../models/Vaga.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];
  public vaga: Vaga = new Vaga(0, "", "", "", 0);

  constructor(private _vagasService: VagasService, private router: Router) {

  }

  ngOnInit(): void {
    this.listarVagas();
  }

  //comando para rodar o jsonserver: json-server --watch vagas-db.json

  listarVagas() {
    //subscribe, é utilizado para fazer o observable funcionar
    this._vagasService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(item => {
            return new Vaga(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
            );
          })
        }
      )
  }

  excluir(id: number) {
    this._vagasService.removerVaga(id)
      .subscribe(
        vaga => {
          this.vaga = new Vaga(0, "", "", "", 0)
        },err => {
          alert("erro ao atualizar, tente novamente mais tarde")
        }
      );
      alert("Vaga excluída com sucesso!");
    window.location.href = "/mural";
  }

  editar() {
    this.router.navigateByUrl("/painel");
  }

}
