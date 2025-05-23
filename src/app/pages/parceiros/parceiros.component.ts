import { Component, OnInit } from '@angular/core';
import { ImageViewerService } from '../../services/utils/image-viewer.service';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit {
  constructor(private imageViewerService: ImageViewerService) { }

  ngOnInit(): void { }

  openImage(imageSrc: string): void {
    this.imageViewerService.openImage(imageSrc);
  }
}
