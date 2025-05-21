import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ScrollRevealService } from '../../services/scroll-reveal.service';
// Import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

interface Event {
  image: string;
  date: string;
  title: string;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  events: Event[] = [
    {
      image: '/assets/img/Artistas/Alex_Lacerda.jpg',
      date: 'A Partir de janeiro - 2025',
      title: 'Alex Lacerda',
      location: 'Turne em Paraty, São Paulo'
    },
    {
      image: '/assets/img/Artistas/CRONOLOGIA.jpg',
      date: '24 de Maio - 2025',
      title: 'Banda Cronologia',
      location: 'Relikias Lounge & Bar - Perus'
    },
    {
      image: '/assets/img/Artistas/GARAGEM120.jpg',
      date: '25 de Maio - 2025',
      title: 'GARAGEM 120',
      location: 'Relikias Lounge & Bar - Perus'
    },
    {
      image: '/assets/img/Artistas/Jucelio.jpg',
      date: '31 de Maio - 2025',
      title: 'Jucelio',
      location: 'São Paulo'
    },
    {
      image: '/assets/img/eventos/Patrulha-Do-Vinil.jpg',
      date: '07 de Junho - 2025',
      title: 'Patrulha do Vinil',
      location: 'São Paulo'
    }
  ];

  private swiper?: SwiperCore;

  constructor(private scrollRevealService: ScrollRevealService) { }

  ngOnInit(): void {
    this.scrollRevealService.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initSwiper();
    }, 0);
  }

  ngOnDestroy(): void {
    this.scrollRevealService.cleanup();
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  private initSwiper(): void {
    this.swiper = new SwiperCore('.event__slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      loopedSlides: 5, // Número de slides duplicados
      speed: 800,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
  }
}
