import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../shared/animations/fadeInAnimation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [fadeInAnimation]
})
export class NavbarComponent implements OnInit {

  routes = [
    {
      name: 'Dashboard',
      route: '',
      icon: 'home'
    },
    {
      name: 'Repositories',
      route: 'repositories',
      icon: 'server'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
