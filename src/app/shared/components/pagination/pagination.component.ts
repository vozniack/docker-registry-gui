import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {fadeInAnimation} from '../../animations/fadeInAnimation';
import {CardSize} from '../../../core/types/card-size';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  animations: [fadeInAnimation]
})
export class PaginationComponent implements OnChanges {

  @Input()
  pageSize = 1;

  @Input()
  pagesAmount = 1;

  @Input()
  borderButtons = 1;

  @Output()
  currentPage = new EventEmitter<number>();

  page = 1;
  pages: number[] = [];

  CardSize = CardSize;

  ngOnChanges(): void {
    this.countPages();
  }

  countPages(): void {
    this.pages = [];
    let iterator = 0;

    for (let i = -(this.borderButtons); i < (this.borderButtons * 2) - (this.borderButtons - 1); i++) {
      this.pages[iterator++] = this.page + i;
    }

    this.currentPage.emit(this.page);
  }

  /* Page changes */

  firstPage(): void {
    this.page = 1;
    this.countPages();
  }

  prevPage(): void {
    if (this.canChangePrev(1)) {
      this.page--;
      this.countPages();
    }
  }

  nextPage(): void {
    if (this.canChangeNext(1)) {
      this.page++;
      this.countPages();
    }
  }

  lastPage(): void {
    this.page = this.pagesAmount;
    this.countPages();
  }

  changePage(page): void {
    this.page = page;
    this.countPages();
  }

  /* Conditions */

  canChangePrev(amount: number): boolean {
    return this.page - amount > 0;
  }

  canChangeNext(amount: number): boolean {
    return this.page + amount <= this.pagesAmount;
  }

  canShowPage(page: number): boolean {
    return page > 0 && page <= this.pagesAmount;
  }
}
