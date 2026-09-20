import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private readonly baseTitle = 'Capijo Music Produções';

  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
      const routeTitle = route.snapshot.data['title'] || this.getDefaultTitle(this.router.url);
      this.title.setTitle(`${this.baseTitle} - ${routeTitle}`);
    });
  }

  private getDefaultTitle(url: string): string {
    const path = url.split('/')[1];
    if (!path) return 'Home';
    return path.charAt(0).toUpperCase() + path.slice(1);
  }
}