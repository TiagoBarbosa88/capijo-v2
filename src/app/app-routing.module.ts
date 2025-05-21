import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EstudioComponent } from './pages/estudio/estudio.component';
import { HomeComponent } from './pages/home/home.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'artistas', component: ArtistasComponent },
  { path: 'estudio', component: EstudioComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'parceiros', component: ParceirosComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
