import {Component} from '@angular/core';
import {fadeInAnimation} from '../../../shared/animations/fadeInAnimation';

@Component({
  selector: 'app-repository-deleted',
  templateUrl: './repository-deleted.component.html',
  styleUrls: ['./repository-deleted.component.scss'],
  animations: [fadeInAnimation]
})
export class RepositoryDeletedComponent {

  registryGarbageCollection = 'https://docs.docker.com/registry/configuration/';
  registryConfiguration = 'https://docs.docker.com/registry/configuration/';
}
