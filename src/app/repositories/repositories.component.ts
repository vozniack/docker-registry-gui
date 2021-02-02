import {Component, OnInit} from '@angular/core';
import {RepositoryService} from './repository.service';
import {fadeInAnimation} from '../shared/animations/fadeInAnimation';
import {CardAction} from '../shared/components/card/type/card-action';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
  animations: [fadeInAnimation]
})
export class RepositoriesComponent implements OnInit {

  copy: string[] = [];
  filtered: string [] = [];
  repositories: string[] = [];

  loading = false;

  currentPage = 1;
  pageSize = 6;
  pagesAmount = 1;

  CardAction = CardAction;

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.repositoryService.getCatalog().subscribe(catalog => {
      this.copy = catalog.repositories;
      this.filter('');

      this.loading = false;
    });
  }

  filter(name: string): void {
    this.filtered = this.copy.filter(repository => repository.startsWith(name));
    this.paginate(this.currentPage);
  }

  paginate(currentPage: number): void {
    this.currentPage = currentPage;
    this.pagesAmount = Math.ceil(this.filtered.length / this.pageSize);

    this.repositories = this.filtered.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
  }
}
