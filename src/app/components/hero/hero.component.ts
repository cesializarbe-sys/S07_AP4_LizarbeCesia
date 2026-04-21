import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  stats = [
    { value: '500+',   label: 'Mascotas adoptadas'   },
    { value: '1,200+', label: 'Familias felices'      },
    { value: '50+',    label: 'Veterinarios expertos' }
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}