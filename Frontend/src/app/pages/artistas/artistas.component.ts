import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ScrollRevealService } from '../../services/scroll-reveal.service';
import { ImageViewerService } from '../../services/utils/image-viewer.service';
import { ARTISTS, type Artist } from './artists.data';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit, AfterViewInit, OnDestroy {
  artists: Artist[] = [];

  constructor(
    private scrollRevealService: ScrollRevealService,
    private imageViewerService: ImageViewerService
  ) {
    console.log('[artistas] constructor executado');
  }

  ngOnInit(): void {
    console.log('[artistas] ngOnInit iniciando');
    this.artists = ARTISTS;
    console.log('[artistas] dados carregados', this.artists);
    console.log('[artistas] quantidade de artistas', this.artists.length);
    this.debugRender('ngOnInit completo');
  }

  ngAfterViewInit(): void {
    console.log('[artistas] ngAfterViewInit executado');
    console.log('[artistas] elemento da seção encontrado', document.querySelector('.artistas'));
    this.scrollRevealService.init();
    this.debugRender('ngAfterViewInit completo');
  }

  ngOnDestroy(): void {
    console.log('[artistas] ngOnDestroy executado');
    this.scrollRevealService.cleanup();
  }

  debugRender(message: string): void {
    console.log('[artistas] debug:', message, 'total:', this.artists.length);
  }

  openImage(imageSrc: string): void {
    console.log('[artistas] abrir imagem', imageSrc);
    this.imageViewerService.openImage(imageSrc);
  }
}
