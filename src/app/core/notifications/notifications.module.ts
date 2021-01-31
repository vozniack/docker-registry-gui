import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsComponent} from './notifications.component';
import {NotificationComponent} from './notification/notification.component';
import {FlexModule} from '@angular/flex-layout';
import {ComponentsModule} from '../../shared/components/components.module';
import {FeatherModule} from 'angular-feather';

const COMPONENTS = [NotificationsComponent, NotificationComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FlexModule,
    ComponentsModule,
    FeatherModule
  ]
})
export class NotificationsModule {
}
