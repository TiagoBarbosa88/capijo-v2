import { SITE_CONFIG } from './site.config';
import { ARTISTS } from '../pages/artistas/artists.data';
import { SERVICE_EVENTS } from '../pages/servicos/services.data';

export function buildLocalBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MusicGroup'],
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    telephone: SITE_CONFIG.phoneTel,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.locality,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.instagram
    ]
  };
}

export function buildArtistsItemListSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Artistas da Capijo Music',
    itemListElement: ARTISTS.map((artist, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'MusicGroup',
        name: artist.name,
        description: artist.description,
        image: `${SITE_CONFIG.baseUrl}${artist.image.replace(/^\//, '')}`,
        url: `${SITE_CONFIG.baseUrl}artistas#${artist.id}`
      }
    }))
  };
}

export function buildEventsSchema(): Record<string, unknown>[] {
  return SERVICE_EVENTS.slice(0, 10).map(event => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.label,
    image: `${SITE_CONFIG.baseUrl}${event.image.replace(/^\//, '')}`,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: SITE_CONFIG.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE_CONFIG.address.locality,
        addressRegion: SITE_CONFIG.address.region,
        addressCountry: SITE_CONFIG.address.country
      }
    },
    organizer: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl
    }
  }));
}
