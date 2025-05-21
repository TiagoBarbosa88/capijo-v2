import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { EstudioComponent } from './pages/estudio/estudio.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { ContatoComponent } from './pages/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArtistasComponent,
    EstudioComponent,
    ServicosComponent,
    ParceirosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
