import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  subtitle: string = undefined;

  @Input()
  description: string = undefined;

  @Input()
  iconLeft = undefined;

  @Input()
  iconRight: string = undefined;

  @Input()
  route: string = undefined;

  @Input()
  routeText: string = undefined;

  @Input()
  action = 'none';

  @Input()
  active = false;

  @Output()
  emitter = new EventEmitter<string>();

  constructor(private router: Router) {
  }

  navigate(): void {
    this.router.navigate([this.route]).then();
  }

  emit(): void {
    if (this.action === 'emit') {
      this.emitter.emit(this.title);
    }
  }
}
