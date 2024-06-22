import {
  Directive,
  HostListener,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appScreenSize]',
})
export class ScreenSizeDirective implements OnInit {
  @Output() screenSizeChange = new EventEmitter<{
    width: number;
    height: number;
    deviceType: string;
  }>();

  constructor() {}

  ngOnInit(): void {
    this.detectScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.detectScreenSize();
  }

  private detectScreenSize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const deviceType = this.getDeviceType(width);
    this.screenSizeChange.emit({ width, height, deviceType });
  }

  private getDeviceType(width: number): string {
    return width >= 768 ? 'PC' : 'Portable';
  }
}
