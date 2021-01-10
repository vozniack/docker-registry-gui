import {Component, Input, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fadeInAnimation';
import {Manifest} from '../../../../core/model/manifest';

@Component({
  selector: 'app-manifest-history',
  templateUrl: './manifest-history.component.html',
  styleUrls: ['./manifest-history.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestHistoryComponent implements OnInit {

  @Input()
  manifest: Manifest;

  configs: boolean[] = [];
  containerConfigs: boolean[] = [];

  ngOnInit(): void {
    for (let i = 0; i < this.manifest.history.length; i++) {
      this.configs[i] = false;
      this.containerConfigs[i] = false;
    }
  }

  manageConfig(index: number): void {
    this.configs[index] = !this.configs[index];
  }

  manageContainerConfig(index: number): void {
    this.containerConfigs[index] = !this.containerConfigs[index];
  }
}
