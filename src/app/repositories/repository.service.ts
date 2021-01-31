import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Catalog} from '../core/model/domain/v1/catalog';
import {Tags} from '../core/model/domain/v1/tags';
import {Manifest} from '../core/model/domain/v1/manifest';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  apiUrl = environment.apiUrl + 'v2';

  constructor(private httpClient: HttpClient) {
  }

  getCatalog(): Observable<Catalog> {
    return this.httpClient.get<Catalog>(`${this.apiUrl}/_catalog`);
  }

  getTags(repository: string): Observable<Tags> {
    return this.httpClient.get<Tags>(`${this.apiUrl}/${repository}/tags/list`);
  }

  getManifest(repository: string, tag: string): Observable<HttpResponse<Manifest>> {
    return this.httpClient.get<Manifest>(`${this.apiUrl}/${repository}/manifests/${tag}`, {observe: 'response'});
  }

  deleteManifest(repository: string, tag: string): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${repository}/manifests/${tag}`, {observe: 'response'});
  }
}
