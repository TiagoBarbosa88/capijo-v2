import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit, OnDestroy {
  selectedImage: string | null = null;

  constructor(private scrollRevealService: ScrollRevealService) { }

  ngOnInit(): void {
    this.scrollRevealService.init();
  }

  ngOnDestroy(): void {
    this.scrollRevealService.cleanup();
  }

  @HostListener('dblclick')
  onDblClick(): void {
    this.closeImage();
  }

  @HostListener('document:keydown.escape')
  onEscapePress(): void {
    this.closeImage();
  }

  openImage(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
