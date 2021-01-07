import {Component, Input, OnInit} from '@angular/core';
import {Manifest} from '../../../core/model/manifest';
import {fadeInAnimation} from '../../../shared/animations/fadeInAnimation';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestComponent implements OnInit {

  @Input()
  manifest: Manifest;

  constructor() { }

  ngOnInit(): void {
  }

}
