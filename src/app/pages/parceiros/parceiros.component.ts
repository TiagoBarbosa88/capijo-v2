import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScrollRevealService } from '../../services/scroll-reveal.service';
import { ImageViewerService } from '../../services/utils/image-viewer.service';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit, OnDestroy {
  constructor(
    private imageViewerService: ImageViewerService,
    private scrollRevealService: ScrollRevealService
  ) { }

  ngOnInit(): void {
    this.scrollRevealService.init();
  }

  ngOnDestroy(): void {
    this.scrollRevealService.cleanup();
  }

  openImage(imageSrc: string): void {
    this.imageViewerService.openImage(imageSrc);
  }
}
