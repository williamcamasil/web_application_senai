import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';

const rotas: Routes = [
  { path: 'mural', component: MuralVagasComponent },
  { path: 'painel', component: PainelVagasComponent },
  //caso não encontre uma página será redirecionado para mural
  { path: '', redirectTo: '/mural', pathMatch:'full' },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
