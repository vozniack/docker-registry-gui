import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Notification} from '../../model/app/notification';
import {fadeInAnimation} from '../../../shared/animations/fadeInAnimation';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [fadeInAnimation]
})
export class NotificationComponent implements OnInit {

  @Input()
  notification: Notification;

  @Output()
  dismissed = new EventEmitter<any>();

  ngOnInit(): void {
    setTimeout(() => this.notification.faded = false, 1);
    setTimeout(() => this.dismiss(), 3000);
  }

  dismiss(): void {
    this.notification.faded = true;
    setTimeout(() => this.dismissed.next(this.notification), 150);
  }
}
