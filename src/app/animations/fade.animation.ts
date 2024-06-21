import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const fadeAnimation = trigger('fade', [
  state('hidden', style({ opacity: 1 })),
  state('visible', style({ opacity: 0 })),
  transition('hidden => visible', [animate('1000ms ease-in-out')]),
  transition('visible => hidden', [animate('1000ms ease-in-out')]),
]);
