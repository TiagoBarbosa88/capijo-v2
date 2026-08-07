import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { filter, map } from 'rxjs/operators';
import { SITE_CONFIG } from '../config/site.config';

export interface RouteSeo {
  title: string;
  description: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly baseTitle = SITE_CONFIG.name;
  private canonicalLink: HTMLLinkElement | null = null;
  private jsonLdScript: HTMLScriptElement | null = null;

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
    ).subscribe((route: ActivatedRoute) => {
      const seo = route.snapshot.data['seo'] as RouteSeo | undefined;
      const path = this.router.url.split('?')[0];
      this.updateSeo(seo, path);
    });
  }

  updateSeo(seo: RouteSeo | undefined, path: string): void {
    const pageTitle = seo?.title ?? this.getDefaultTitle(path);
    const description = seo?.description ?? this.getDefaultDescription();
    const canonicalUrl = this.buildCanonicalUrl(path);
    const ogImage = this.buildAbsoluteUrl(seo?.ogImage ?? SITE_CONFIG.defaultOgImage);

    this.title.setTitle(`${this.baseTitle} - ${pageTitle}`);
    this.updateMetaTag('name', 'description', description);
    this.updateMetaTag('property', 'og:title', `${this.baseTitle} - ${pageTitle}`);
    this.updateMetaTag('property', 'og:description', description);
    this.updateMetaTag('property', 'og:url', canonicalUrl);
    this.updateMetaTag('property', 'og:image', ogImage);
    this.updateMetaTag('property', 'og:locale', 'pt_BR');
    this.updateMetaTag('name', 'twitter:title', `${this.baseTitle} - ${pageTitle}`);
    this.updateMetaTag('name', 'twitter:description', description);
    this.updateMetaTag('name', 'twitter:url', canonicalUrl);
    this.updateMetaTag('name', 'twitter:image', ogImage);
    this.updateCanonical(canonicalUrl);

    if (seo?.jsonLd) {
      this.updateJsonLd(seo.jsonLd);
    } else {
      this.removeJsonLd();
    }
  }

  setJsonLd(data: Record<string, unknown> | Record<string, unknown>[]): void {
    this.updateJsonLd(data);
  }

  private updateMetaTag(attr: 'name' | 'property', key: string, content: string): void {
    if (this.meta.getTag(`${attr}="${key}"`)) {
      this.meta.updateTag({ [attr]: key, content });
    } else {
      this.meta.addTag({ [attr]: key, content });
    }
  }

  private updateCanonical(url: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (!this.canonicalLink) {
      this.canonicalLink = this.document.querySelector('link[rel="canonical"]');
      if (!this.canonicalLink) {
        this.canonicalLink = this.document.createElement('link');
        this.canonicalLink.setAttribute('rel', 'canonical');
        this.document.head.appendChild(this.canonicalLink);
      }
    }
    this.canonicalLink.setAttribute('href', url);
  }

  private updateJsonLd(data: Record<string, unknown> | Record<string, unknown>[]): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (!this.jsonLdScript) {
      this.jsonLdScript = this.document.querySelector('script[data-seo-jsonld]');
      if (!this.jsonLdScript) {
        this.jsonLdScript = this.document.createElement('script');
        this.jsonLdScript.setAttribute('type', 'application/ld+json');
        this.jsonLdScript.setAttribute('data-seo-jsonld', 'true');
        this.document.head.appendChild(this.jsonLdScript);
      }
    }
    this.jsonLdScript.textContent = JSON.stringify(data);
  }

  private removeJsonLd(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const script = this.document.querySelector('script[data-seo-jsonld]');
    if (script) {
      script.remove();
    }
    this.jsonLdScript = null;
  }

  private buildCanonicalUrl(path: string): string {
    const normalizedPath = path === '/' ? '' : path.replace(/\/$/, '');
    return `${SITE_CONFIG.baseUrl}${normalizedPath}`;
  }

  private buildAbsoluteUrl(path: string): string {
    if (path.startsWith('http')) {
      return path;
    }
    return `${SITE_CONFIG.baseUrl}${path.startsWith('/') ? path.slice(1) : path}`;
  }

  private getDefaultTitle(path: string): string {
    const segment = path.split('/').filter(Boolean)[0];
    if (!segment) {
      return 'Home';
    }
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }

  private getDefaultDescription(): string {
    return 'Capijo Music - Estúdio e produtora musical em São Paulo. Gravação, mixagem, masterização e shows em Perus e região.';
  }
}
