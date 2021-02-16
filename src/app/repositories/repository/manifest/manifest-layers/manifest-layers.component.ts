import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fadeInAnimation';
import {ManifestV2} from '../../../../core/model/domain/v2/manifest-v2';

@Component({
  selector: 'app-manifest-layers',
  templateUrl: './manifest-layers.component.html',
  styleUrls: ['./manifest-layers.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestLayersComponent {

  @Input()
  manifestV2: ManifestV2;

  countSize(size: number): string {
    return (size / 1024).toFixed(2);
  }
}
