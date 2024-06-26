import {
  Component,
  AfterViewInit,
  Input,
  OnInit,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'live-plateformes',
  standalone: true,
  imports: [],
  templateUrl: './live-plateformes.component.html',
  styleUrl: './live-plateformes.component.scss',
})
export class LivePlateformesComponent implements OnInit, OnChanges {
  @Input() scrollPercentage: number = 0;
  @Input() screenWidth: number = 0;
  @Input() screenHeight: number = 0;
  @Input() isMobile: boolean = false;
  @Input() screenType: string = '';
  centerX: number = 0;
  centerY: number = 0;
  animationRatioWidth: number = 0;
  animationRatioHeight: number = 0;

  ngOnInit() {
    this.centerX = this.screenWidth / 2 - 50; // 50 est la moitié de la largeur de l'image (100px / 2)
    this.centerY = this.screenHeight / 2 - 50; // 50 est la moitié de la hauteur de l'image (100px / 2)
    this.animationRatioWidth = this.screenWidth / 1000;
    this.animationRatioHeight = this.screenHeight / 1000;
  }

  ngOnChanges() {
    this.centerX = this.screenWidth / 2 - 50; // 50 est la moitié de la largeur de l'image (100px / 2)
    this.centerY = this.screenHeight / 2 - 50; // 50 est la moitié de la hauteur de l'image (100px / 2)
    this.animationRatioWidth = this.screenWidth / 1000;
    this.animationRatioHeight = this.screenHeight / 1000;
  }

  calculateYoutubeLeft(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 1.2 * this.animationRatioWidth; // coefficient de l'effet exponentiel pour left
    const b = 0;
    const c = 49;

    if (a * Math.exp(5 * scrollPercentage) + b * scrollPercentage + c < 90)
      return a * Math.exp(5 * scrollPercentage) + b * scrollPercentage + c;
    else return 90;
  }

  calculateLinkedinRight(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 1.2 * this.animationRatioWidth; // coefficient de l'effet exponentiel pour left
    const b = 0;
    const c = 49;

    if (a * Math.exp(5 * scrollPercentage) + b * scrollPercentage + c < 90)
      return a * Math.exp(5 * scrollPercentage) + b * scrollPercentage + c;
    else return 90;
  }

  calculateTwitchRight(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 1.005 * this.animationRatioWidth; // coefficient de l'effet exponentiel pour left
    const b = 0;
    let c = 44.5;

    switch (this.screenType) {
      case 'md':
        c = 44.5;
        break;
      case 'lg':
        c = 45.2;
        break;
      case 'xl':
        c = 44.5;
        break;
    }

    return a * Math.exp(2 * scrollPercentage) + b * scrollPercentage + c;
  }

  calculateIconBottom(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = -25 * this.animationRatioHeight; // coefficient de l'effet parabolique pour bottom
    const b = 10;
    const c = 60;
    console.log(
      Math.round(a * Math.pow(scrollPercentage, 2) + b * scrollPercentage + c)
    );
    return a * Math.pow(scrollPercentage, 2) + b * scrollPercentage + c;
  }

  calculateBrightness(scrollPercentage: number): number {
    return scrollPercentage * -100 + 150;
  }

  calculateBgDevices(scrollPercentage: number): number {
    console.log(
      'scrollPercentage : ' +
        (scrollPercentage * -30 + 15 * this.animationRatioWidth)
    );
    if (
      scrollPercentage * -30 + 15 * this.animationRatioWidth >
      5 * this.animationRatioWidth
    )
      return scrollPercentage * -30 + 15 * this.animationRatioWidth;
    else return 5 * this.animationRatioWidth;
  }
}
