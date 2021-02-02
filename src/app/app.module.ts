import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ErrorComponent} from './error/error.component';
import {RepositoriesModule} from './repositories/repositories.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarModule} from './core/toolbar/toolbar.module';
import {ReturnToTopModule} from './core/return-to-top/return-to-top.module';
import {TooltipModule} from './core/tooltip/tooltip.module';
import {OverlayModule} from '@angular/cdk/overlay';
import {NotificationsModule} from './core/notifications/notifications.module';
import {ComponentsModule} from './shared/components/components.module';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from './core/icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolbarModule,
    RepositoriesModule,
    ReturnToTopModule,
    OverlayModule,
    TooltipModule,
    NotificationsModule,
    ComponentsModule,
    FlexModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
