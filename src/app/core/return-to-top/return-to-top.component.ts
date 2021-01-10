import {Component, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-return-to-top',
  templateUrl: './return-to-top.component.html',
  styleUrls: ['./return-to-top.component.scss']
})
export class ReturnToTopComponent {

  scrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.scrolled = true;
    } else if (this.scrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.scrolled = false;
    }
  }

  scroll(): void {
    (function smoothScroll(): void {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
}
