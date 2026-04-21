import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  navLinks = [
    { label: 'Inicio',     id: 'hero'     },
    { label: 'Servicios',  id: 'services' },
    { label: 'Beneficios', id: 'benefits' },
    { label: 'Contacto',   id: 'contact'  }
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }
}