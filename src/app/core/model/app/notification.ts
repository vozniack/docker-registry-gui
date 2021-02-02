import {NotificationType} from '../../types/notification-type';

export class Notification {

  message: string;

  type = NotificationType.SUCCESS;

  faded = true;
}
