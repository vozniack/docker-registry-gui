import {Component, Input, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fadeInAnimation';
import {Manifest} from '../../../../core/model/manifest';

@Component({
  selector: 'app-manifest-layers',
  templateUrl: './manifest-layers.component.html',
  styleUrls: ['./manifest-layers.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestLayersComponent implements OnInit {

  @Input()
  manifest: Manifest;

  constructor() { }

  ngOnInit(): void {
  }

}
