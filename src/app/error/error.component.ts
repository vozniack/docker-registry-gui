import {Component} from '@angular/core';
import {fadeInAnimation} from '../shared/animations/fadeInAnimation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  animations: [fadeInAnimation]
})
export class ErrorComponent {

  code: number;
  message: string;

  constructor(private router: Router) {
    this.code = this.router.getCurrentNavigation().extras.state?.code;
    this.message = this.router.getCurrentNavigation().extras.state?.message;
  }
}
