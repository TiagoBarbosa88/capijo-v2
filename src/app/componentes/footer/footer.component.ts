import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  site = SITE_CONFIG;
}
