import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageViewerService } from '../../../services/utils/image-viewer.service';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  template: `
    <div class="image-modal" 
         [class.active]="selectedImage$ | async" 
         (click)="closeImage()"
         role="dialog"
         aria-modal="true"
         [attr.aria-label]="'Visualizador de imagem' + ((selectedImage$ | async) ? ' aberto' : '')"
         tabindex="-1">
      <span class="close-button" 
            (click)="closeImage()"
            role="button"
            tabindex="0"
            aria-label="Fechar visualizador de imagem"
            (keydown.enter)="closeImage()">&times;</span>
      <img [src]="selectedImage$ | async" 
           *ngIf="selectedImage$ | async" 
           [alt]="'Visualização ampliada da imagem ' + (selectedImage$ | async)" 
           class="modal-image"
           (click)="$event.stopPropagation()">
    </div>
  `,
  styles: [`
    .image-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 1000;
      justify-content: center;
      align-items: center;
      
      &.active {
          display: flex;
      }

      .close-button {
          position: absolute;
          top: 20px;
          right: 30px;
          color: white;
          font-size: 40px;
          font-weight: bold;
          cursor: pointer;
          z-index: 1001;
          transition: all 0.3s ease;

          &:hover {
              transform: scale(1.1);
              color: #003366;
          }
      }

      .modal-image {
          max-width: 90%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 5px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          animation: zoomIn 0.3s ease-out;
      }
    }

    @keyframes zoomIn {
      from {
          opacity: 0;
          transform: scale(0.9);
      }
      to {
          opacity: 1;
          transform: scale(1);
      }
    }
  `]
})
export class ImageViewerComponent implements OnInit {
  selectedImage$ = this.imageViewerService.selectedImage$;

  constructor(private imageViewerService: ImageViewerService) { }

  ngOnInit(): void { }

  closeImage(): void {
    this.imageViewerService.closeImage();
  }
}
