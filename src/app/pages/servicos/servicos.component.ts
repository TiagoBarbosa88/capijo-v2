import { Component, OnInit } from '@angular/core';
import { ImageViewerService } from '../../services/utils/image-viewer.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {
  constructor(private imageViewerService: ImageViewerService) { }

  ngOnInit(): void { }

  openImage(imageSrc: string): void {
    this.imageViewerService.openImage(imageSrc);
  }
}
