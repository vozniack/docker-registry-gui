import {animate, style, transition, trigger} from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({opacity: 0.25}),
    animate('0.2s linear', style({opacity: 1}))
  ])
]);
