import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Catalog} from '../core/model/domain/v1/catalog';
import {Tags} from '../core/model/domain/v1/tags';
import {Manifest} from '../core/model/domain/v1/manifest';
import {ManifestV2} from '../core/model/domain/v2/manifest-v2';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  apiUrl = environment.apiUrl + 'v2';

  constructor(private httpClient: HttpClient) {
  }

  getCatalog(): Observable<HttpResponse<Catalog>> {
    return this.httpClient.get<Catalog>(`${this.apiUrl}/_catalog`, {observe: 'response'});
  }

  getTags(repository: string): Observable<HttpResponse<Tags>> {
    return this.httpClient.get<Tags>(`${this.apiUrl}/${repository}/tags/list`, {observe: 'response'});
  }

  getManifest(repository: string, tag: string): Observable<HttpResponse<Manifest>> {
    return this.httpClient.get<Manifest>(`${this.apiUrl}/${repository}/manifests/${tag}`, {observe: 'response'});
  }

  getManifestV2(repository: string, tag: string): Observable<HttpResponse<ManifestV2>> {
    return this.httpClient.get<ManifestV2>(`${this.apiUrl}/${repository}/manifests/${tag}`, {
      headers: {Accept: 'application/vnd.docker.distribution.manifest.v2+json'},
      observe: 'response'
    });
  }

  deleteManifest(repository: string, tag: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${repository}/manifests/${tag}`, {observe: 'response'});
  }
}
