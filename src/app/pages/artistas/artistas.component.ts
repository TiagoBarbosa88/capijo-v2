import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit, OnDestroy {

  constructor(private scrollRevealService: ScrollRevealService) { }

  ngOnInit(): void {
    this.scrollRevealService.init();
  }

  ngOnDestroy(): void {
    this.scrollRevealService.cleanup();
  }
}
