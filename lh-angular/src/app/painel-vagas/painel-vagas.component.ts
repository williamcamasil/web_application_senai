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
    this._vagasService.cadastrarVaga(this.vaga)
      .subscribe(
        vaga => {
          this.vaga = new Vaga(0, "", "", "", 0)
        },err => {
          console.log("erro ao cadastrar")
        }
      );
      this.router.navigateByUrl("/mural");
  }

  atualizar(id: number) {
    this._vagasService.atualizarVaga(id, this.vaga)
      .subscribe(
        vaga => {
          this.vaga = new Vaga(0, "", "", "", 0)
        },err => {
          console.log("erro ao atualizar")
        }
      );
      this.router.navigateByUrl("/mural");
  }
}
