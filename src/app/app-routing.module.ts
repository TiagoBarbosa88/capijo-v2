import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EstudioComponent } from './pages/estudio/estudio.component';
import { HomeComponent } from './pages/home/home.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'artistas',
    component: ArtistasComponent,
    data: { title: 'Artistas' }
  },
  {
    path: 'estudio',
    component: EstudioComponent,
    data: { title: 'Estúdio' }
  },
  {
    path: 'servicos',
    component: ServicosComponent,
    data: { title: 'Serviços' }
  },
  {
    path: 'parceiros',
    component: ParceirosComponent,
    data: { title: 'Parceiros' }
  },
  {
    path: 'contato',
    component: ContatoComponent,
    data: { title: 'Contato' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
