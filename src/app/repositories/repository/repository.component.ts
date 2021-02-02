import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {fadeInAnimation} from '../../shared/animations/fadeInAnimation';
import {Tags} from '../../core/model/domain/v1/tags';
import {RepositoryService} from '../repository.service';
import {Manifest} from '../../core/model/domain/v1/manifest';
import {environment} from '../../../environments/environment';
import {CardAction} from '../../shared/components/card/type/card-action';
import {CardSize} from '../../shared/components/card/type/card-size';
import {NotificationsService} from '../../core/notifications/notifications.service';

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

  loading = false;

  CardSize = CardSize;
  CardAction = CardAction;

  constructor(private activatedRouter: ActivatedRoute,
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
      this.tags = response;

      if (this.tags.tags.length > 0) {
        this.setActive(this.tags.tags[0]);
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
          this.loading = false;
          this.notificationsService.error('Unknown manifest - the repository has been probably deleted.');
        }
      });
    }
  }

  deleteManifest(): void {
    this.notificationsService.error('Deletion has been temporarily disabled.');
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

    this.notificationsService.success('Docker pull command have been copied to clipboard.');
  }

  setActive(tag: string): void {
    this.active = tag;
    this.getManifest();

    this.cmd = 'docker pull ' + environment.registryUrl + '/' + this.repository + ':' + this.active;
  }
}
