import {Component, Input} from '@angular/core';
import {Manifest} from '../../../core/model/domain/v1/manifest';
import {fadeInAnimation} from '../../../shared/animations/fadeInAnimation';
import {Tab} from '../../../core/model/app/tab';
import {ManifestV2} from '../../../core/model/domain/v2/manifest-v2';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestComponent {

  @Input()
  manifest: Manifest;

  @Input()
  manifestV2: ManifestV2;

  tabs: Tab[] = [
    {
      code: 'basic-information',
      name: 'Basic information',
      icon: 'info',
      active: true
    },
    {
      code: 'history',
      name: 'History',
      icon: 'book',
      active: false
    },
    {
      code: 'layers',
      name: 'Layers',
      icon: 'layers',
      active: false
    }
  ];

  activeTab = 'basic-information';

  setActive(name: string): void {
    this.activeTab = name;
  }
}
