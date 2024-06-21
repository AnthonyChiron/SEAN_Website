import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { fadeAnimation } from '../../animations/fade.animation';
import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ParallaxStandaloneDirective],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  animations: [],
})
export class LandingComponent {
  @Input() scrollPercentage: number = 0;
}
