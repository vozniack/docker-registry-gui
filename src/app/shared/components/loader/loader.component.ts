import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../animations/fadeInAnimation';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [fadeInAnimation]
})
export class LoaderComponent {

  @Input()
  description = 'Loading...';

  @Input()
  marginTop = 64;
}
