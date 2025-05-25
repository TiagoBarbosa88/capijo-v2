import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageViewerComponent } from '../../componentes/shared/image-viewer/image-viewer.component';
import { ArtistasComponent } from './artistas.component';

@NgModule({
  declarations: [
    ArtistasComponent
  ],
  imports: [
    CommonModule,
    ImageViewerComponent  // Now imported as a standalone component
  ]
})
export class ArtistasModule { }
