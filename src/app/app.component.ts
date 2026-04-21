import { Component } from '@angular/core';
import { HeaderComponent }   from './components/header/header.component';
import { HeroComponent }     from './components/hero/hero.component';
import { CoursesComponent }  from './components/courses/courses.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ContactComponent }  from './components/contact/contact.component';
import { FooterComponent }   from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    CoursesComponent,
    BenefitsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PawLove';
}