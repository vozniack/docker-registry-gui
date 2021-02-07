import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorComponent} from './error/error.component';
import {FooterComponent} from './core/footer/footer.component';
import {RepositoriesModule} from './repositories/repositories.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarModule} from './core/toolbar/toolbar.module';
import {ReturnToTopModule} from './core/return-to-top/return-to-top.module';
import {TooltipModule} from './core/tooltip/tooltip.module';
import {OverlayModule} from '@angular/cdk/overlay';
import {NotificationsModule} from './core/notifications/notifications.module';
import {ComponentsModule} from './shared/components/components.module';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from './core/icons/icons.module';
import {ErrorInterceptor} from './core/interceptor/error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
