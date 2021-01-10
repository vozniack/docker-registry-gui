import {Component, Input} from '@angular/core';
import {Manifest} from '../../../core/model/manifest';
import {fadeInAnimation} from '../../../shared/animations/fadeInAnimation';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestComponent {

  @Input()
  manifest: Manifest;

  tabs = [
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
