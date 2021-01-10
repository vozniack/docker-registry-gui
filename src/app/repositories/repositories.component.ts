import {Component, OnInit} from '@angular/core';
import {RepositoriesService} from './repositories.service';
import {fadeInAnimation} from '../shared/animations/fadeInAnimation';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
  animations: [fadeInAnimation]
})
export class RepositoriesComponent implements OnInit {

  repositories: string[] = [];
  loading = false;

  constructor(private repositoriesService: RepositoriesService) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.repositoriesService.getCatalog().subscribe(catalog => {
      this.repositories = catalog.repositories;
      this.loading = false;
    });
  }
}
