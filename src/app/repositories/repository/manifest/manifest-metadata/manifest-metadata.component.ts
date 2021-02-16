import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fadeInAnimation';
import {Manifest} from '../../../../core/model/domain/v1/manifest';
import {ManifestV2} from '../../../../core/model/domain/v2/manifest-v2';

@Component({
  selector: 'app-manifest-metadata',
  templateUrl: './manifest-metadata.component.html',
  styleUrls: ['./manifest-metadata.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestMetadataComponent {

  @Input()
  manifest: Manifest;

  @Input()
  manifestV2: ManifestV2;

  countSize(): string {
    return ((this.manifestV2.config.size + this.manifestV2.layers
      .reduce((sum, current) => sum + current.size, 0)) / 1048567).toFixed(2);
  }
}
