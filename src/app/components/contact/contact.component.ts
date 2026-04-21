import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  petTypes = ['Perro', 'Gato', 'Conejo', 'Ave', 'Otro'];

  formData = {
    name: '',
    email: '',
    phone: '',
    petType: '',
    message: ''
  };

  submitted = false;
  hasError  = false;

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.hasError = true;
      return;
    }
    this.hasError  = false;
    this.submitted = true;

    setTimeout(() => {
      this.formData  = { name: '', email: '', phone: '', petType: '', message: '' };
      this.submitted = false;
    }, 4000);
  }
}