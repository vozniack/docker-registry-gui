import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../shared/animations/fadeInAnimation';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [fadeInAnimation]
})
export class ToolbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
