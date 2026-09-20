import { Component, OnInit } from '@angular/core';
import { ImageViewerService } from '../../services/utils/image-viewer.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent implements OnInit {
  constructor(private imageViewerService: ImageViewerService) { }

  ngOnInit(): void { }

  openImage(imageSrc: string): void {
    this.imageViewerService.openImage(imageSrc);
  }
}
