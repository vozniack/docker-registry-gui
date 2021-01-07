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

  constructor() { }

  ngOnInit(): void {
  }

}
