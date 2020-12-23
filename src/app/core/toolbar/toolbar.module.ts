import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from './toolbar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../icons/icons.module';

const COMPONENTS = [
  ToolbarComponent,
  NavbarComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
    IconsModule,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ToolbarModule {
}
