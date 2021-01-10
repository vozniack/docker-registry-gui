import {Component} from '@angular/core';
import {fadeInAnimation} from '../../../shared/animations/fadeInAnimation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [fadeInAnimation]
})
export class NavbarComponent {

  routes = [
    {
      name: 'Dashboard',
      route: '',
      icon: 'home',
      exact: true
    },
    {
      name: 'Repositories',
      route: 'repositories',
      icon: 'server',
      exact: false
    }
  ];
}
