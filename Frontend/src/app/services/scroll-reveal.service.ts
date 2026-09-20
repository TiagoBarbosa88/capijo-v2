import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollRevealService {
  private observers: IntersectionObserver[] = [];

  constructor() { }

  init(): void {
    this.reveal();
    window.addEventListener('scroll', () => this.reveal());
  }

  private reveal(): void {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach((element) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.1
      });

      observer.observe(element);
      this.observers.push(observer);
    });
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}
