import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fadeInAnimation';
import {Manifest} from '../../../../core/model/domain/v1/manifest';

@Component({
  selector: 'app-manifest-metadata',
  templateUrl: './manifest-metadata.component.html',
  styleUrls: ['./manifest-metadata.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestMetadataComponent {

  @Input()
  manifest: Manifest;
}
