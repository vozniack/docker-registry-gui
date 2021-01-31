import {Component, Input} from '@angular/core';
import {Config} from '../../../../../core/model/domain/v1/config';

@Component({
  selector: 'app-manifest-history-config',
  templateUrl: './manifest-history-config.component.html',
  styleUrls: ['./manifest-history-config.component.scss']
})
export class ManifestHistoryConfigComponent {

  @Input()
  name = 'Config';

  @Input()
  config: Config;

  expanded = false;

  expand(): void {
    this.expanded = !this.expanded;
  }
}
