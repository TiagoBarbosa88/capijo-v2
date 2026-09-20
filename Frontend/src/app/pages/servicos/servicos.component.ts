import { Component, OnInit } from '@angular/core';
import { ImageViewerService } from '../../services/utils/image-viewer.service';
import { SERVICE_EVENTS, SERVICE_LOCATIONS, ServiceEvent, ServiceLocation } from './services.data';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {
  events: ServiceEvent[] = [];
  locations: ServiceLocation[] = [];

  constructor(private imageViewerService: ImageViewerService) { }

  ngOnInit(): void {
    this.events = SERVICE_EVENTS;
    this.locations = SERVICE_LOCATIONS;
  }

  openImage(imageSrc: string): void {
    this.imageViewerService.openImage(imageSrc);
  }
}
