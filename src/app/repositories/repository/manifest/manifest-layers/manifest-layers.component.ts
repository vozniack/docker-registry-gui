import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fadeInAnimation';
import {Manifest} from '../../../../core/model/domain/v1/manifest';

@Component({
  selector: 'app-manifest-layers',
  templateUrl: './manifest-layers.component.html',
  styleUrls: ['./manifest-layers.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestLayersComponent {

  @Input()
  manifest: Manifest;
}
