import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Catalog} from '../model/catalog';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private httpClient: HttpClient) {
  }

  getCatalog(): Observable<Catalog> {
    return this.httpClient.get<Catalog>(environment.registryUrl + 'v2/_catalog');
  }
}
