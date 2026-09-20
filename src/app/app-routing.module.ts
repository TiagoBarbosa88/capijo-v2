import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { buildArtistsItemListSchema, buildEventsSchema, buildLocalBusinessSchema } from './config/seo-schemas';
import { ArtistasComponent } from './pages/artistas/artistas.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { EstudioComponent } from './pages/estudio/estudio.component';
import { HomeComponent } from './pages/home/home.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { DoacoesComponent } from './pages/doacoes/doacoes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      seo: {
        title: 'Produtora Musical',
        description: 'Capijo Music - Estúdio e produtora musical em São Paulo. Gravação, mixagem, masterização em Perus e shows na região.',
        ogImage: '/assets/img/estudio/10.jpg',
        jsonLd: buildLocalBusinessSchema()
      }
    }
  },
  {
    path: 'artistas',
    component: ArtistasComponent,
    data: {
      seo: {
        title: 'Artistas',
        description: 'Conheça os artistas da Capijo Music: Senhor Florista, Willian Rodrigues, Alex Lacerda e mais talentos de Perus e região.',
        ogImage: '/assets/img/Artistas/Senhor-Florista.png',
        jsonLd: buildArtistsItemListSchema()
      }
    }
  },
  {
    path: 'estudio',
    component: EstudioComponent,
    data: {
      seo: {
        title: 'Estúdio',
        description: 'Estúdio de gravação profissional em Perus, São Paulo. Equipamentos de ponta para gravação, mixagem e masterização.',
        ogImage: '/assets/img/estudio/1.jpg'
      }
    }
  },
  {
    path: 'eventos',
    component: ServicosComponent,
    data: {
      seo: {
        title: 'Eventos',
        description: 'Shows e eventos musicais realizados pela Capijo Music em Perus, Franco da Rocha, Francisco Morato e região.',
        ogImage: '/assets/img/eventos/06-08-1.jpg',
        jsonLd: buildEventsSchema()
      }
    }
  },
  {
    path: 'doacoes',
    component: DoacoesComponent,
    data: {
      seo: {
        title: 'Doações',
        description: 'Apoie a cultura musical em Perus e região. Faça uma doação para a Capijo Music e ajude a criar novas oportunidades.',
        jsonLd: buildEventsSchema()
      }
    }
  },
  {
    path: 'equipe',
    component: EquipeComponent,
    data: {
      seo: {
        title: 'Nossa Equipe',
        description: 'Conheça a equipe por trás da Capijo Music Produções — produtores, técnicos e profissionais da música.',
        ogImage: '/assets/img/equipe/Tiago.jpeg'
      }
    }
  },
  {
    path: 'parceiros',
    component: ParceirosComponent,
    data: {
      seo: {
        title: 'Parceiros',
        description: 'Parceiros e apoiadores da Capijo Music: luthieria, som, bares e comércios locais de Perus e região.',
        ogImage: '/assets/img/Parcerias/daniel-luthier.jpg'
      }
    }
  },
  {
    path: 'contato',
    component: ContatoComponent,
    data: {
      seo: {
        title: 'Contato',
        description: 'Entre em contato com a Capijo Music em Perus, São Paulo. Telefone, email e endereço do estúdio e produtora musical.',
        ogImage: '/assets/img/banner/logo4.png',
        jsonLd: buildLocalBusinessSchema()
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
