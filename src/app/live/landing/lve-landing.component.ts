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
  selector: 'live-landing',
  standalone: true,
  imports: [ParallaxStandaloneDirective],
  templateUrl: './live-landing.component.html',
  styleUrl: './live-landing.component.scss',
  animations: [],
})
export class LiveLandingComponent {
  @Input() scrollPercentage: number = 0;
  @Input() isMobile: boolean = false;

  calculateTranslateTextAnimation(): number {
    return this.scrollPercentage * 1700;
  }
}
