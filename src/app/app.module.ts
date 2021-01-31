import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {RepositoriesModule} from './repositories/repositories.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarModule} from './core/toolbar/toolbar.module';
import {ReturnToTopModule} from './core/return-to-top/return-to-top.module';
import {TooltipModule} from './core/tooltip/tooltip.module';
import {OverlayModule} from '@angular/cdk/overlay';
import {NotificationsModule} from './core/notifications/notifications.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolbarModule,
    DashboardModule,
    RepositoriesModule,
    ReturnToTopModule,
    OverlayModule,
    TooltipModule,
    NotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
