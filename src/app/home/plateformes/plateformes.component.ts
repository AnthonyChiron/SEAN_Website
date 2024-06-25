import {
  Component,
  AfterViewInit,
  Input,
  OnInit,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-plateformes',
  standalone: true,
  imports: [],
  templateUrl: './plateformes.component.html',
  styleUrl: './plateformes.component.scss',
})
export class PlateformesComponent implements OnInit, OnChanges {
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
    const a = 8 * this.animationRatioWidth; // coefficient de l'effet exponentiel pour left
    const b = 0;
    const c = this.centerX + 50;
    let d = 0;

    return a * Math.exp(8 * scrollPercentage) + b * scrollPercentage + c + d;
  }

  calculateLinkedinRight(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 8 * this.animationRatioWidth; // coefficient de l'effet exponentiel pour left
    const b = 0;
    const c = this.centerX + 50;

    return a * Math.exp(8 * scrollPercentage) + b * scrollPercentage + c;
  }

  calculateTwitchRight(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 1.2 * this.animationRatioWidth; // coefficient de l'effet exponentiel pour left
    const b = -200;
    let c = this.centerX;

    switch (this.screenType) {
      default:
        c += 20;
        break;
      case 'lg':
        c += 50;
        break;
      case 'xl':
        c += 35;
        break;
    }

    console.log('Screen type : ' + this.screenType);
    return a * Math.exp(8 * scrollPercentage) + b * scrollPercentage + c;
  }

  calculateIconBottom(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = -200 * this.animationRatioHeight; // coefficient de l'effet parabolique pour bottom
    const b = 750;
    const c = 500;
    return a * Math.pow(scrollPercentage, 2) + b * scrollPercentage + c;
  }

  calculateBrightness(scrollPercentage: number): number {
    return scrollPercentage * -100 + 140;
  }
}
