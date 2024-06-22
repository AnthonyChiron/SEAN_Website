import { Component, AfterViewInit, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plateformes',
  standalone: true,
  imports: [],
  templateUrl: './plateformes.component.html',
  styleUrl: './plateformes.component.scss',
})
export class PlateformesComponent implements OnInit {
  @Input() scrollPercentage: number = 0;
  centerX: number = 0;
  centerY: number = 0;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.centerX = window.innerWidth / 2 - 50; // 50 est la moitié de la largeur de l'image (100px / 2)
      this.centerY = window.innerHeight / 2 - 50; // 50 est la moitié de la hauteur de l'image (100px / 2)
    }
  }

  calculateYoutubeLeft(scrollPercentage: number): number {
    // Ajuster les coefficients a, b, c selon les besoins
    const a = 15; // coefficient de l'effet exponentiel pour left
    const b = -400;
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
    const b = -400;
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
}
