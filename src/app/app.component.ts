import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LiveComponent } from './live/live.component';
import { VideoComponent } from './video/video.component';
import { PhotoComponent } from './photo/photo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LiveComponent,
    HeaderComponent,
    VideoComponent,
    PhotoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SEAN';
}
