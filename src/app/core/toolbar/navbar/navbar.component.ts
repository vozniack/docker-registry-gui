import {Component} from '@angular/core';
import {fadeInAnimation} from '../../../shared/animations/fadeInAnimation';
import {Size} from '../../types/size';
import {Style} from '../../types/style';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [fadeInAnimation]
})
export class NavbarComponent {

  routes = [
    {
      name: 'Repositories',
      icon: 'server',
      route: '/',
    }
  ];

  Size = Size;
  Style = Style;
}
