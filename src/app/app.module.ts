import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ImageViewerComponent } from './componentes/shared/image-viewer/image-viewer.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EstudioComponent } from './pages/estudio/estudio.component';
import { HomeComponent } from './pages/home/home.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ScrollRevealService } from './services/scroll-reveal.service';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ImageViewerComponent
  ],
  providers: [ScrollRevealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
