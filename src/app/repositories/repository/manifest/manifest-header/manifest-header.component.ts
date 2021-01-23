import {Component, Input} from '@angular/core';
import {Manifest} from '../../../../core/model/manifest';
import {fadeInAnimation} from '../../../../shared/animations/fadeInAnimation';

@Component({
  selector: 'app-manifest-header',
  templateUrl: './manifest-header.component.html',
  styleUrls: ['./manifest-header.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestHeaderComponent {

  @Input()
  manifest: Manifest;
}
