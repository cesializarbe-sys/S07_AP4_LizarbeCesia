import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentYear = new Date().getFullYear();

  links = [
    { label: 'Inicio',     id: 'hero'     },
    { label: 'Servicios',  id: 'services' },
    { label: 'Beneficios', id: 'benefits' },
    { label: 'Contacto',   id: 'contact'  }
  ];

  socials = [
    { icon: '📘', label: 'Facebook'  },
    { icon: '📸', label: 'Instagram' },
    { icon: '🐦', label: 'Twitter'   },
    { icon: '▶️', label: 'YouTube'   }
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}