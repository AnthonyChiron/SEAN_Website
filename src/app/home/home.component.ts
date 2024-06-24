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
import { ScreenSizeService } from '../services/screen-size.service';

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
  screenWidth: number = 0;
  screenHeight: number = 0;
  isMobile: boolean = false;
  @ViewChild('landing') landing!: ElementRef;
  ticking: boolean = false;

  constructor(
    private ngZone: NgZone,
    private cd: ChangeDetectorRef,
    private screenSizeService: ScreenSizeService
  ) {}

  ngOnInit(): void {
    this.screenWidth = this.screenSizeService.getScreenWidth();
    this.screenHeight = this.screenSizeService.getScreenHeight();
    this.isMobile = this.screenSizeService.getIsMobile();

    this.screenSizeService.screenWidth$.subscribe((width) => {
      this.screenWidth = width;
    });

    this.screenSizeService.screenHeight$.subscribe((height) => {
      this.screenHeight = height;
    });

    this.screenSizeService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }

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
