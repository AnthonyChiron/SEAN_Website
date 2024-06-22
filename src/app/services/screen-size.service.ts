import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);
  screenWidth$ = this.screenWidth.asObservable();

  private isMobile = new BehaviorSubject<boolean>(window.innerWidth < 768);
  isMobile$ = this.isMobile.asObservable();

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event: Event): void {
    const width = window.innerWidth;
    this.screenWidth.next(width);
    this.isMobile.next(width < 768);
  }

  getScreenWidth(): number {
    return this.screenWidth.getValue();
  }

  getIsMobile(): boolean {
    return this.isMobile.getValue();
  }
}
