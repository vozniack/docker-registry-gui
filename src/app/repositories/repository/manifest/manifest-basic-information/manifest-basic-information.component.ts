import {Component, Input} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fadeInAnimation';
import {Manifest} from '../../../../core/model/manifest';

@Component({
  selector: 'app-manifest-basic-information',
  templateUrl: './manifest-basic-information.component.html',
  styleUrls: ['./manifest-basic-information.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestBasicInformationComponent {

  @Input()
  manifest: Manifest;
}
