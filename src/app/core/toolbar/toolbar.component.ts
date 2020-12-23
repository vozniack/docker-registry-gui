import {Component, HostListener, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../shared/animations/fadeInAnimation';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [fadeInAnimation]
})
export class ToolbarComponent implements OnInit {

  scrolled = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(): void {
    this.scrolled = window.pageYOffset > 0;
  }

}
