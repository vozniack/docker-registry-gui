import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Notification} from '../model/app/notification';
import {NotificationsService} from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  notifications: Notification[] = [];
  notificationsSubscription: Subscription;

  constructor(private notificationService: NotificationsService) {
  }

  ngOnInit(): void {
    this.notificationsSubscription = this.notificationService.onNotification().subscribe(notification => {
      this.add(notification);
    });
  }

  ngOnDestroy(): void {
    this.notificationsSubscription.unsubscribe();
  }

  add(notification: Notification): void {
    this.notifications.push(notification);

    if (this.notifications.length > 1) {
      this.notifications[0].faded = true;
      setTimeout(() => this.notifications.splice(0, 1), 150);
    }
  }

  dismiss(notification: Notification): void {
    this.notifications = this.notifications.filter(n => n !== notification);
  }
}
