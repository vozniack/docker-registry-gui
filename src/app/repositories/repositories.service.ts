import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Catalog} from '../core/model/catalog';
import {Tags} from '../core/model/tags';
import {Manifest} from '../core/model/manifest';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private httpClient: HttpClient) {
  }

  getCatalog(): Observable<Catalog> {
    return this.httpClient.get<Catalog>(environment.registryUrl + 'v2/_catalog');
  }

  getTags(repository: string): Observable<Tags> {
    return this.httpClient.get<Tags>(environment.registryUrl + 'v2/' + repository + '/tags/list');
  }

  getManifest(repository: string, tag: string): Observable<Manifest> {
    return this.httpClient.get<Manifest>(environment.registryUrl + 'v2/' + repository + '/manifests/' + tag);
  }
}
