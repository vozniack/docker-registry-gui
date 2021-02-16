import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fadeInAnimation';
import {Manifest} from '../../../../core/model/domain/v1/manifest';
import {ManifestV2} from '../../../../core/model/domain/v2/manifest-v2';

@Component({
  selector: 'app-manifest-signatures',
  templateUrl: './manifest-signatures.component.html',
  styleUrls: ['./manifest-signatures.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestSignaturesComponent {

  @Input()
  manifest: Manifest;

  @Input()
  manifestV2: ManifestV2;
}
