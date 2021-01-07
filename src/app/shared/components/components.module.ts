import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../core/icons/icons.module';
import {ButtonComponent} from './button/button.component';

const COMPONENTS = [
  CardComponent, ButtonComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FlexModule,
    IconsModule
  ]
})
export class ComponentsModule {
}
