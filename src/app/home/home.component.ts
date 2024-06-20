import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LandingComponent,
    ServicesComponent,
    ProjetsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
