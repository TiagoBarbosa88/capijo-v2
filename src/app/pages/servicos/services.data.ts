export interface ServiceEvent {
  id: string;
  image: string;
  imageAlt: string;
  label: string;
}

export interface ServiceLocation {
  id: string;
  title: string;
  description: string;
  iconClass: string;
}

export const SERVICE_EVENTS: ServiceEvent[] = [
  {
    id: 'festa-julhina-12',
    image: 'assets/img/eventos/06-08-12.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'festa-julhina-01',
    image: 'assets/img/eventos/06-08-1.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'festa-julhina-13',
    image: 'assets/img/eventos/06-08-13.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'festa-julhina-02',
    image: 'assets/img/eventos/06-08-2.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'festa-julhina-03',
    image: 'assets/img/eventos/06-08-3.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'festa-julhina-04',
    image: 'assets/img/eventos/06-08-4.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'festa-julhina-05',
    image: 'assets/img/eventos/06-08-5.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'festa-julhina-06',
    image: 'assets/img/eventos/06-08-6.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'festa-julhina-07',
    image: 'assets/img/eventos/06-08-7.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'festa-julhina-08',
    image: 'assets/img/eventos/06-08-8.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'festa-julhina-09',
    image: 'assets/img/eventos/06-08-9.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'festa-julhina-11',
    image: 'assets/img/eventos/06-08-11.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'patrulha-vinil',
    image: 'assets/img/eventos/Patrulha-Do-Vinil.jpg',
    imageAlt: 'Show da banda Patrulha do Vinil com público animado',
    label: 'Patrulha do Vinil'
  },
  {
    id: 'juscelio',
    image: 'assets/img/eventos/Jucelio.jpg',
    imageAlt: 'Juscelio em performance ao vivo no palco',
    label: 'Juscelio'
  },
  {
    id: 'cronologia',
    image: 'assets/img/eventos/Cronologia.jpg',
    imageAlt: 'Show da Banda Cronologia com efeitos de iluminação',
    label: 'Cronologia'
  },
  {
    id: 'garagem-120',
    image: 'assets/img/eventos/Garagem120.jpg',
    imageAlt: 'Banda Garagem 120 em apresentação ao vivo',
    label: 'Garagem 120'
  },
  {
    id: 'frayzer',
    image: 'assets/img/eventos/FRAYZER.jpg',
    imageAlt: 'FRAYZER em performance no palco',
    label: 'FRAYZER'
  },
  {
    id: 'dj-vandossom',
    image: 'assets/img/eventos/DJ. VANDOSSOM.jpg',
    imageAlt: 'DJ VANDOSSOM em performance com equipamentos de DJ',
    label: 'DJ VANDOSSOM'
  }
];

export const SERVICE_LOCATIONS: ServiceLocation[] = [
  {
    id: 'clubes-e-bares',
    title: 'Clubes e Bares',
    description: 'Som e iluminação profissional para estabelecimentos noturnos, garantindo a melhor experiência para seu público.',
    iconClass: 'fas fa-glass-martini-alt'
  },
  {
    id: 'eventos-corporativos',
    title: 'Eventos Corporativos',
    description: 'Estrutura completa para conferências, convenções e eventos empresariais, com equipamentos de última geração.',
    iconClass: 'fas fa-briefcase'
  },
  {
    id: 'festas-e-eventos',
    title: 'Festas e Eventos',
    description: 'Sonorização para festas particulares, casamentos, aniversários e eventos especiais.',
    iconClass: 'fas fa-birthday-cake'
  }
];
