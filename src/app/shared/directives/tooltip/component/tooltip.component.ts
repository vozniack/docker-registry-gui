import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../../animations/fadeInAnimation';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  animations: [fadeInAnimation]
})
export class TooltipComponent {

  @Input() text = '';
}
