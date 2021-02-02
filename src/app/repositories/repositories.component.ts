import {Component, OnInit} from '@angular/core';
import {RepositoryService} from './repository.service';
import {fadeInAnimation} from '../shared/animations/fadeInAnimation';
import {CardAction} from '../core/types/card-action';
import {Router} from '@angular/router';

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

  constructor(private repositoryService: RepositoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.repositoryService.getCatalog().subscribe(response => {
      this.copy = response.body.repositories;
      this.filter('');

      this.loading = false;
    }, error => {
      if (error.status === 504) {
        this.router.navigate(['error'], {state: {code: error.status, message: error.statusText}}).then();
      }
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
