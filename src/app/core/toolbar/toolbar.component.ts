import {Component} from '@angular/core';
import {fadeInAnimation} from '../../shared/animations/fadeInAnimation';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [fadeInAnimation]
})
export class ToolbarComponent{

  registryUrl = environment.registryUrl;
}
