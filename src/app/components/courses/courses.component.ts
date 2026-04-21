import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  services = [
    {
      icon: '🏠',
      title: 'Adopción',
      desc: 'Encuentra a tu compañero ideal entre nuestras mascotas rescatadas. Proceso rápido, seguro y lleno de amor.',
      price: 'Desde S/. 50',
      tag: 'Más popular'
    },
    {
      icon: '✂️',
      title: 'Peluquería',
      desc: 'Baño, corte y arreglo profesional para que tu mascota luzca siempre impecable y feliz.',
      price: 'Desde S/. 35',
      tag: ''
    },
    {
      icon: '🏥',
      title: 'Veterinaria',
      desc: 'Atención médica con veterinarios certificados. Consultas, vacunas y cirugías disponibles.',
      price: 'Desde S/. 40',
      tag: 'Urgencias 24h'
    },
    {
      icon: '🛒',
      title: 'Tienda Pet',
      desc: 'Alimentos, accesorios y juguetes de las mejores marcas para consentir a tu mascota.',
      price: 'Variado',
      tag: ''
    }
  ];
}