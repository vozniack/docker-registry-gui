import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Style} from '../../../core/types/style';
import {Shape} from '../../../core/types/shape';
import {CardSize} from '../../../core/types/card-size';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  style = Style.PRIMARY;

  @Input()
  shape =  Shape.RECTANGLE;

  @Input()
  size = CardSize.NORMAL;

  @Input()
  height = 'auto';

  @Input()
  active = false;

  @Input()
  disabled = false;

  @Input()
  text: string = undefined;

  @Input()
  icon: string = undefined;

  @Input()
  route: string = undefined;

  constructor(private router: Router) {
  }

  navigate(): void {
    if (this.route && !this.disabled) {
      this.router.navigate([this.route]).then();
    }
  }
}
