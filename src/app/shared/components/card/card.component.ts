import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../animations/fadeInAnimation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [fadeInAnimation]
})
export class CardComponent {

  @Input()
  title = '';

  @Input()
  subtitle = undefined;

  @Input()
  iconLeft = 'box';

  @Input()
  iconRight: string = undefined;

  @Input()
  route: string = undefined;

  @Input()
  routeText: string = undefined;

  @Input()
  routeStyle = 'button';

  constructor(private router: Router) {
  }

  navigate(): void {
    this.router.navigate([this.route]).then();
  }

}
