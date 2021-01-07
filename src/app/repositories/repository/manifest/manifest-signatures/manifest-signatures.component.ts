import {Component, Input, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fadeInAnimation';
import {Manifest} from '../../../../core/model/manifest';

@Component({
  selector: 'app-manifest-signatures',
  templateUrl: './manifest-signatures.component.html',
  styleUrls: ['./manifest-signatures.component.scss'],
  animations: [fadeInAnimation]
})
export class ManifestSignaturesComponent implements OnInit {

  @Input()
  manifest: Manifest;

  constructor() { }

  ngOnInit(): void {
  }

}
