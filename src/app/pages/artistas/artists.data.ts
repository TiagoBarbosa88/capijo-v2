export interface Artist {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  social: {
    facebook?: string;
    youtube?: string;
    instagram?: string;
  };
}

export const ARTISTS: Artist[] = [
  {
    id: 'senhor-florista',
    name: 'Senhor Florista',
    description: 'Senhor Florista é um projeto de música independente de São Paulo liderado por Jim Coelho. O som mistura influências alternativas e rock, tendo lançado recentemente o álbum O Sagrado Rock Doido.',
    image: '/assets/img/Artistas/Senhor-Florista.png',
    imageAlt: 'Senhor Florista',
    social: {
      facebook: 'https://www.facebook.com/senhorflorista/',
      youtube: 'https://www.youtube.com/@senhorflorista/',
      instagram: 'https://www.instagram.com/senhorflorista/'
    }
  },
  {
    id: 'willian-rodrigues',
    name: 'Willian Rodrigues',
    description: 'Cantor sertanejo com uma trajetória marcada por emoção e paixão pela música. "Uma nota de cada vez, um passo de cada vez...", levando o melhor da música sertaneja para festas, casas de shows e grandes eventos.',
    image: '/assets/img/Artistas/Willian-Rodrigues.png',
    imageAlt: 'Willian Rodrigues',
    social: {
      facebook: 'https://www.facebook.com/',
      youtube: 'https://www.youtube.com/c/WillianRodriguesOficial',
      instagram: 'https://www.instagram.com/willianrodriguesoficial_/'
    }
  },
  {
    id: 'alex-lacerda',
    name: 'Alex Lacerda',
    description: 'Músico talentoso com uma voz marcante, Alex Lacerda traz em suas interpretações toda a emoção do sertanejo. Seu mais recente sucesso "Acorda amor" já conquistou milhares de fãs.',
    image: '/assets/img/Artistas/Alex_Lacerda.jpg',
    imageAlt: 'Alex Lacerda em performance no palco usando camisa branca e chapéu',
    social: {
      facebook: 'https://www.facebook.com/',
      youtube: 'https://www.youtube.com/watch?v=ioUyGpEHMZI',
      instagram: 'https://www.instagram.com/alexlacerdaoficial/'
    }
  },
  {
    id: 'banda-cronologia',
    name: 'Banda Cronologia',
    description: 'A Banda Cronologia traz um repertório diversificado, mesclando clássicos do rock com hits contemporâneos. Suas apresentações são marcadas pela energia contagiante e alta qualidade musical.',
    image: '/assets/img/Artistas/Cronologia2.jpg',
    imageAlt: 'Banda Cronologia em apresentação ao vivo com seus integrantes tocando instrumentos',
    social: {
      facebook: 'https://www.facebook.com/',
      youtube: 'https://www.youtube.com/@capijoproducao',
      instagram: 'https://www.instagram.com/'
    }
  },
  {
    id: 'garagem-120',
    name: 'Garagem 120',
    description: 'Com um som autêntico e letras marcantes, a Garagem 120 vem conquistando seu espaço na cena musical. "Selva de Pedra" é apenas uma amostra do talento desta banda única.',
    image: '/assets/img/Artistas/GARAGEM120.jpg',
    imageAlt: 'Banda Garagem 120 em performance com seus integrantes',
    social: {
      facebook: 'https://www.facebook.com/',
      youtube: 'https://www.youtube.com/watch?v=Nxg9LqxajdU',
      instagram: 'https://www.instagram.com/garagem120/'
    }
  },
  {
    id: 'frayzer',
    name: 'Frayzer',
    description: 'Frayzer traz uma mistura única de ritmos e influências em suas músicas. "Horas e Horas" demonstra sua versatilidade e talento como artista.',
    image: '/assets/img/Artistas/FRAYZER.jpg',
    imageAlt: 'Banda Frayzer em apresentação mostrando todos os integrantes',
    social: {
      facebook: 'https://www.facebook.com/',
      youtube: 'https://www.youtube.com/@BandaFrayzer',
      instagram: 'https://www.instagram.com/banda.frayzer/'
    }
  },

];
