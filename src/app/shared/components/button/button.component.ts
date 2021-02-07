import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Style} from '../../../core/types/style';
import {Shape} from '../../../core/types/shape';
import {Size} from '../../../core/types/size';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  style = Style.PRIMARY;

  @Input()
  shape = Shape.RECTANGLE;

  @Input()
  size = Size.NORMAL;

  @Input()
  height = 'auto';

  @Input()
  active = false;

  @Input()
  disabled = false;

  @Input()
  text: string = undefined;

  @Input()
  iconLeft: string = undefined;

  @Input()
  iconRight: string = undefined;

  @Input()
  route: string = undefined;

  constructor(private router: Router) {
  }

  action(): void {
    if (!this.disabled && this.route) {
      this.router.navigate([this.route]).then();
    }
  }
}
