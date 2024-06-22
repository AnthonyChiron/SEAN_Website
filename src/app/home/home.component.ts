import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { PlateformesComponent } from './plateformes/plateformes.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LandingComponent,
    PlateformesComponent,
    ProjetsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  scrollPercentage: number = 0;
  @ViewChild('landing') landing!: ElementRef;
  ticking: boolean = false;

  constructor(private ngZone: NgZone, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.landing) {
      this.ngZone.runOutsideAngular(() => {
        this.landing.nativeElement.addEventListener(
          'scroll',
          this.onWindowScroll.bind(this)
        );
      });
    } else {
      console.error('Landing element is undefined.');
    }
  }

  onWindowScroll(event: Event): void {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = this.landing.nativeElement.scrollTop || 0;
        const scrollHeight =
          this.landing.nativeElement.scrollHeight -
          this.landing.nativeElement.clientHeight;
        this.scrollPercentage = scrollTop / scrollHeight;

        console.log(
          'Scroll event detected:',
          scrollTop,
          scrollHeight,
          this.scrollPercentage
        );

        this.landing.nativeElement.style.setProperty(
          '--scroll-opacity',
          this.scrollPercentage
        );

        this.ngZone.run(() => {
          this.ticking = false;
          this.cd.detectChanges(); // Forcer la détection des changements
        });
      });
      this.ticking = true;
    }
  }
}
