import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {fadeInAnimation} from '../../shared/animations/fadeInAnimation';
import {Tags} from '../../core/model/domain/v1/tags';
import {RepositoryService} from '../repository.service';
import {Manifest} from '../../core/model/domain/v1/manifest';
import {environment} from '../../../environments/environment';
import {CardAction} from '../../core/types/card-action';
import {Size} from '../../core/types/size';
import {NotificationsService} from '../../core/notifications/notifications.service';
import {Style} from '../../core/types/style';
import {ManifestV2} from '../../core/model/domain/v2/manifest-v2';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  animations: [fadeInAnimation]
})
export class RepositoryComponent implements OnInit {

  repository = 'Repository';

  active: string = undefined;
  cmd: string = undefined;

  tags: Tags;
  manifest: Manifest;
  manifestV2: ManifestV2;

  loading = false;
  deleted = false;

  CardSize = Size;
  CardAction = CardAction;
  Style = Style;

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private repositoryService: RepositoryService,
              private notificationsService: NotificationsService) {
  }

  ngOnInit(): void {
    this.repository = this.activatedRouter.snapshot.paramMap.get('name');
    this.getTags();
  }

  getTags(): void {
    this.loading = true;

    this.repositoryService.getTags(this.repository).subscribe(response => {
      this.tags = response.body;

      if (this.tags.tags.length > 0) {
        this.setActive(this.tags.tags[0]);
      }
    }, error => {
      if (error.status === 404) {
        this.router.navigate(['']);
      }
    });
  }

  getManifest(): void {
    if (this.active) {
      this.loading = true;
      this.manifest = undefined;

      this.repositoryService.getManifest(this.repository, this.active).subscribe(response => {
        this.manifest = response.body;
        this.manifest.digest = response.headers.get('Docker-Content-Digest');

        this.manifest.history.forEach(history => {
          history.compatibility = JSON.parse(history.v1Compatibility);
        });

        this.loading = false;
      }, error => {
        if (error.status === 400) {
          this.tags.tags.splice(this.tags.tags.indexOf(this.active), 1);

          if (this.tags.tags.length > 0) {
            this.setActive(this.tags.tags[0]);
          } else {
            this.loading = false;
            this.deleted = true;
          }
        }
      });
    }
  }

  getManifestV2(): void {
    this.repositoryService.getManifestV2(this.repository, this.active).subscribe(response => {
      this.manifestV2 = response.body;
    });
  }

  deleteManifest(): void {
    this.repositoryService.deleteManifest(this.repository, this.manifestV2.config.digest).subscribe(response => {
      if (response.status === 202) {
        this.notificationsService.success('Repository have been removed. It will disappear from the list after the garbage collection process.');
      }
    }, error => this.notificationsService.error(error.statusText));
  }

  setActive(tag: string): void {
    this.active = tag;

    this.getManifest();
    this.getManifestV2();

    this.cmd = 'docker pull ' + environment.registryUrl + '/' + this.repository + ':' + this.active;
  }

  copyToClipboard(): void {
    const tmp = document.createElement('textarea');

    tmp.style.position = 'fixed';
    tmp.style.opacity = '0';

    tmp.value = this.cmd;

    document.body.appendChild(tmp);

    tmp.focus();
    tmp.select();

    document.execCommand('copy');
    document.body.removeChild(tmp);

    this.notificationsService.success('Docker pull command have been copied to clipboard');
  }
}
