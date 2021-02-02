import {Component, EventEmitter, Input, Output} from '@angular/core';
import {fadeInAnimation} from '../../animations/fadeInAnimation';
import {Router} from '@angular/router';
import {CardAction} from '../../../core/types/card-action';
import {CardSize} from '../../../core/types/card-size';

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
  tooltip: string = undefined;

  @Input()
  description: string = undefined;

  @Input()
  size = CardSize.NORMAL;

  @Input()
  iconLeft = undefined;

  @Input()
  iconRight: string = undefined;

  @Input()
  route: string = undefined;

  @Input()
  routeText: string = undefined;

  @Input()
  action: CardAction = CardAction.NONE;

  @Input()
  active = false;

  @Input()
  disabled = false;

  @Output()
  emitter = new EventEmitter<string>();

  CardAction = CardAction;

  constructor(private router: Router) {
  }

  navigate(): void {
    this.router.navigate([this.route]).then();
  }

  emit(): void {
    if (this.action === CardAction.EMIT) {
      this.emitter.emit(this.title);
    }
  }
}
