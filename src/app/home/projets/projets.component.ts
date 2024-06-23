import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.scss',
})
export class ProjetsComponent {
  @Input() scrollPercentage: number = 0;
}
