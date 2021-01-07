import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../shared/animations/fadeInAnimation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeInAnimation]
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
