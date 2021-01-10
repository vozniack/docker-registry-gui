import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {fadeInAnimation} from '../../shared/animations/fadeInAnimation';
import {Tags} from '../../core/model/tags';
import {RepositoriesService} from '../repositories.service';
import {Manifest} from '../../core/model/manifest';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  animations: [fadeInAnimation]
})
export class RepositoryComponent implements OnInit {

  repository = 'Repository';

  active: string = undefined;

  tags: Tags;
  manifest: Manifest;

  constructor(private activatedRouter: ActivatedRoute, private repositoriesService: RepositoriesService) {
  }

  ngOnInit(): void {
    this.repository = this.activatedRouter.snapshot.paramMap.get('name');

    this.getTags();
  }

  getTags(): void {
    this.repositoriesService.getTags(this.repository).subscribe(response => {
      this.tags = response;

      if (this.tags.tags.length > 0) {
        this.active = this.tags.tags[0];

        this.getManifest();
      }
    });
  }

  getManifest(): void {
    if (this.active) {
      this.manifest = undefined;

      this.repositoriesService.getManifest(this.repository, this.active).subscribe(response => {
        this.manifest = response;

        this.manifest.history.forEach(history => {
          history.compatibility = JSON.parse(history.v1Compatibility);
        });
      });
    }
  }

  setActive(tag: string): void {
    this.active = tag;
    this.getManifest();
  }
}
