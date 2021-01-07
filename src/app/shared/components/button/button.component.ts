import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  style = 'primary';

  @Input()
  size = '';

  @Input()
  text = 'Button';

  @Input()
  icon: string = undefined;

  @Input()
  route: string = undefined;

  constructor(private router: Router) {
  }

  navigate(): void {
    if (this.route) {
      this.router.navigate([this.route]).then();
    }
  }

}
