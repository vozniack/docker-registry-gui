import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fadeInAnimation';
import {Manifest} from '../../../../core/model/domain/v1/manifest';

@Component({
  selector: 'app-manifest-signatures',
  templateUrl: './manifest-signatures.component.html',
  styleUrls: ['./manifest-signatures.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestSignaturesComponent {

  @Input()
  manifest: Manifest;
}
