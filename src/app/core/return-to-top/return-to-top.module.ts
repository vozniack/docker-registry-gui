import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReturnToTopComponent} from './return-to-top.component';
import {ComponentsModule} from '../../shared/components/components.module';

@NgModule({
  declarations: [ReturnToTopComponent],
  exports: [ReturnToTopComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ReturnToTopModule {
}
