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
  centerX: number = 0;
  centerY: number = 0;
  animationRatioWidth: number = 0;
  animationRatioHeight: number = 0;

  ngOnInit() {
    this.centerX = this.screenWidth / 2 - 50; // 50 est la moitié de la largeur de l'image (100px / 2)
    this.centerY = this.screenHeight / 2 - 50; // 50 est la moitié de la hauteur de l'image (100px / 2)
    this.animationRatioWidth = this.screenWidth / 1000;
    this.animationRatioHeight = this.screenHeight / 1000;
    console.log(this.animationRatioWidth);
    console.log(this.animationRatioHeight);
  }

  ngOnChanges() {
    this.centerX = this.screenWidth / 2 - 50; // 50 est la moitié de la largeur de l'image (100px / 2)
    this.centerY = this.screenHeight / 2 - 50; // 50 est la moitié de la hauteur de l'image (100px / 2)
    this.animationRatioWidth = this.screenWidth / 1000;
    this.animationRatioHeight = this.screenHeight / 1000;
    console.log(this.animationRatioWidth);
    console.log(this.animationRatioHeight);
  }

  calculateYoutubeLeft(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 15; // coefficient de l'effet exponentiel pour left
    const b = -250;
    const c = this.centerX;
    return a * Math.exp(8 * scrollPercentage) + b * scrollPercentage + c;
  }

  calculateYoutubeBottom(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 100; // coefficient de l'effet parabolique pour bottom
    const b = 750;
    const c = 220;
    return a * Math.pow(scrollPercentage, 2) + b * scrollPercentage + c;
  }

  calculateLinkedinRight(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 15; // coefficient de l'effet exponentiel pour left
    const b = -300;
    const c = this.centerX;

    return a * Math.exp(8 * scrollPercentage) + b * scrollPercentage + c;
  }

  calculateLinkedinBottom(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 0.5; // coefficient de l'effet parabolique pour bottom
    const b = 900;
    const c = 170;
    return a * Math.pow(scrollPercentage, 2) + b * scrollPercentage + c;
  }

  calculateTwitchRight(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 2.5; // coefficient de l'effet exponentiel pour left
    const b = -200;
    const c = this.centerX + 30;
    return a * Math.exp(8 * scrollPercentage) + b * scrollPercentage + c;
  }

  calculateTwitchBottom(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 100; // coefficient de l'effet parabolique pour bottom
    const b = 850;
    const c = 170;
    return a * Math.pow(scrollPercentage, 2) + b * scrollPercentage + c;
  }

  calculateBrightness(scrollPercentage: number): number {
    return scrollPercentage * -100 + 140;
  }
}
