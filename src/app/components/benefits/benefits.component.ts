import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {

  benefits = [
    { icon: '❤️', title: 'Con amor y responsabilidad',  desc: 'Cada mascota recibe cuidado personalizado y atención constante de nuestro equipo.' },
    { icon: '🛡️', title: 'Garantía de salud',            desc: 'Todos nuestros animales pasan revisión veterinaria completa antes de ser adoptados.' },
    { icon: '📍', title: 'Seguimiento post-adopción',    desc: 'Te acompañamos durante todo el proceso de adaptación de tu nueva mascota.' },
    { icon: '🌱', title: 'Compromiso sostenible',        desc: 'Trabajamos con refugios y promovemos la adopción responsable en todo Lima.' },
    { icon: '💬', title: 'Atención personalizada',       desc: 'Nuestro equipo responde todas tus dudas antes, durante y después de la adopción.' },
    { icon: '🏆', title: '10 años de experiencia',       desc: 'Somos referentes en adopción y cuidado de mascotas en el Perú desde 2014.' }
  ];
}