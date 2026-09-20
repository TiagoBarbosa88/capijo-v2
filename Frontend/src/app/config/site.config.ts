export const SITE_CONFIG = {
  name: 'Capijo Music Produções',
  baseUrl: 'https://capijo.com',
  phone: '11-9782-2709',
  phoneTel: '+551197822709',
  email: 'Capijoproducao@gmail.com',
  address: {
    street: 'Pr. Inácia Dias, 64',
    locality: 'Perus',
    region: 'SP',
    postalCode: '05203-030',
    country: 'BR',
    full: 'Pr. Inácia Dias, 64 - Perus, São Paulo - SP, 05203-030'
  },
  geo: {
    latitude: -23.403872,
    longitude: -46.752944
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61564964385846',
    youtube: 'https://www.youtube.com/@CapijoProdu%C3%A7ao',
    instagram: 'https://www.instagram.com/capijoproducao',
    whatsapp: 'https://wa.me/+551197822709'
  },
  googleSiteVerification: 'seu-código-aqui',
  defaultOgImage: '/assets/img/banner/logo4.png'
} as const;

export const SITE_ROUTES = [
  '',
  'artistas',
  'estudio',
  'eventos',
  'equipe',
  'parceiros',
  'contato'
] as const;
