import {NotificationType} from '../../types/notification-type';

export class Notification {

  title: string;

  message: string;

  type = NotificationType.SUCCESS;

  faded = true;
}
