import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vaga.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) {

  }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    //subscribe, é utilizado para fazer o observable funcionar
    this._vagasService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(item => {
            return new Vaga();
          })
        }
      )
  }

}
