import {Injectable} from '@angular/core';
import {Notification} from '../model/app/notification';
import {Observable, Subject} from 'rxjs';
import {NotificationType} from '../types/notification-type';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private subject = new Subject<Notification>();

  constructor() {
  }

  onNotification(): Observable<Notification> {
    return this.subject.asObservable();
  }

  success(message: string): void {
    this.notify({message, type: NotificationType.SUCCESS, faded: true});
  }

  error(message: string): void {
    this.notify({message, type: NotificationType.ERROR, faded: true});
  }

  private notify(notification: Notification): void {
    this.subject.next(notification);
  }
}
