import {Component, Input} from '@angular/core';
import {Manifest} from '../../../core/model/manifest';
import {fadeInAnimation} from '../../../shared/animations/fadeInAnimation';
import {Tab} from '../../../shared/components/tabs/tab';
import {Action} from '../../../shared/components/tabs/action';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestComponent {

  @Input()
  manifest: Manifest;

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

  actions: Action[] = [
    {
      name: 'Copy command to clipboard',
      icon: 'copy',
      style: 'primary',
      call(): void {
        console.log('Test 1');
      }
    },
    {
      name: 'Delete manifest',
      icon: 'trash',
      style: 'secondary',
      call(): void {
        console.log('Test 2');
      }
    }
  ];

  activeTab = 'basic-information';

  setActive(name: string): void {
    this.activeTab = name;
  }
}
