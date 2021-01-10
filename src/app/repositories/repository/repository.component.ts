import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {fadeInAnimation} from '../../shared/animations/fadeInAnimation';
import {Tags} from '../../core/model/tags';
import {RepositoriesService} from '../repositories.service';
import {Manifest} from '../../core/model/manifest';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  animations: [fadeInAnimation]
})
export class RepositoryComponent implements OnInit {

  active: string = undefined;

  repository = 'Repository';
  cmd: string = undefined;

  tags: Tags;
  manifest: Manifest;

  loading = false;

  constructor(private activatedRouter: ActivatedRoute, private repositoriesService: RepositoriesService) {
  }

  ngOnInit(): void {
    this.repository = this.activatedRouter.snapshot.paramMap.get('name');

    this.getTags();
  }

  getTags(): void {
    this.loading = true;

    this.repositoriesService.getTags(this.repository).subscribe(response => {
      this.tags = response;

      if (this.tags.tags.length > 0) {
        this.setActive(this.tags.tags[0]);
        this.getManifest();
      }
    });
  }

  getManifest(): void {
    if (this.active) {
      this.loading = true;
      this.manifest = undefined;

      this.repositoriesService.getManifest(this.repository, this.active).subscribe(response => {
        this.manifest = response.body;
        this.manifest.digest = response.headers.get('Docker-Content-Digest');

        this.manifest.history.forEach(history => {
          history.compatibility = JSON.parse(history.v1Compatibility);
        });

        this.loading = false;
      });
    }
  }

  setActive(tag: string): void {
    this.active = tag;
    this.getManifest();

    this.cmd = 'docker pull ' + environment.registryUrl + '/' + this.repository + ':' + this.active;
  }
}
