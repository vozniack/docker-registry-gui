import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../core/icons/icons.module';
import {ButtonComponent} from './button/button.component';
import {LoaderComponent} from './loader/loader.component';
import {TabsComponent} from './tabs/tabs.component';

const COMPONENTS = [
  CardComponent, ButtonComponent, LoaderComponent
];

@NgModule({
  declarations: [...COMPONENTS, TabsComponent],
  exports: [...COMPONENTS, TabsComponent],
  imports: [
    CommonModule,
    FlexModule,
    IconsModule
  ]
})
export class ComponentsModule {
}
