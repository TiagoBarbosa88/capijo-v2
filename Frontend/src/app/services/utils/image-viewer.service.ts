import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageViewerService implements OnDestroy {
  private selectedImageSource = new BehaviorSubject<string | null>(null);
  selectedImage$ = this.selectedImageSource.asObservable();

  private escapeListener = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.selectedImageSource.value) {
      this.closeImage();
    }
  };

  private dblClickListener = () => {
    if (this.selectedImageSource.value) {
      this.closeImage();
    }
  };

  constructor() {
    document.addEventListener('keydown', this.escapeListener);
    document.addEventListener('dblclick', this.dblClickListener);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.escapeListener);
    document.removeEventListener('dblclick', this.dblClickListener);
    this.selectedImageSource.complete();
  }

  openImage(imageSrc: string): void {
    this.selectedImageSource.next(imageSrc);
  }

  closeImage(): void {
    this.selectedImageSource.next(null);
  }
}
