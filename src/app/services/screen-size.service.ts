import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private screenWidth = new BehaviorSubject<number>(this.getWindowWidth());
  screenWidth$ = this.screenWidth.asObservable();

  private screenHeight = new BehaviorSubject<number>(this.getWindowWidth());
  screenHeight$ = this.screenHeight.asObservable();

  private isMobile = new BehaviorSubject<boolean>(this.getWindowWidth() < 768);
  isMobile$ = this.isMobile.asObservable();

  private screenType = new BehaviorSubject<string>(this.getScreenType());
  screenType$ = this.screenType.asObservable();

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  private getWindowWidth(): number {
    return typeof window !== 'undefined' ? window.innerWidth : 0;
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: Event): void {
    const width = this.getWindowWidth();
    const height = this.getScreenHeight();
    console.log(this.getScreenType());
    this.screenWidth.next(width);
    this.screenHeight.next(height);
    this.isMobile.next(width < 768);
    this.screenType.next(this.getScreenType());
  }

  getScreenWidth(): number {
    return this.screenWidth.getValue();
  }

  getScreenHeight(): number {
    return this.screenHeight.getValue();
  }

  getIsMobile(): boolean {
    return this.isMobile.getValue();
  }

  getScreenType(): string {
    if (this.screenWidth.getValue() < 768) {
      return 'xs';
    } else if (this.screenWidth.getValue() < 1024) {
      return 'md';
    } else if (this.screenWidth.getValue() < 1280) {
      return 'lg';
    } else {
      return 'xl';
    }
  }
}
