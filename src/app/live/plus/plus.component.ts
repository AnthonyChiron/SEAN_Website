import { Component, Input } from '@angular/core';

@Component({
  selector: 'live-plus',
  standalone: true,
  imports: [],
  templateUrl: './plus.component.html',
  styleUrl: './plus.component.scss',
})
export class LivePlusComponent {
  @Input() scrollPercentage: number = 0;
}
