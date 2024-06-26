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
import { LivePlateformesComponent } from './plateformes/live-plateformes.component';
import { LivePlusComponent } from './plus/plus.component';
import { ScreenSizeService } from '../services/screen-size.service';
import { LiveLandingComponent } from './landing/lve-landing.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [LivePlateformesComponent, LivePlusComponent, LiveLandingComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.scss',
})
export class LiveComponent implements OnInit, AfterViewInit {
  scrollPercentage: number = 0;
  screenWidth: number = 0;
  screenHeight: number = 0;
  isMobile: boolean = false;
  screenType: string = '';
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
    this.screenType = this.screenSizeService.getScreenType();

    this.screenSizeService.screenWidth$.subscribe((width) => {
      this.screenWidth = width;
    });

    this.screenSizeService.screenHeight$.subscribe((height) => {
      this.screenHeight = height;
    });

    this.screenSizeService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });

    this.screenSizeService.screenType$.subscribe((screenType) => {
      this.screenType = screenType;
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
