import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexModule} from '@angular/flex-layout';
import {IconsModule} from '../../core/icons/icons.module';
import {FormsModule} from '@angular/forms';
import {CardComponent} from './card/card.component';
import {ButtonComponent} from './button/button.component';
import {LoaderComponent} from './loader/loader.component';
import {TabsComponent} from './tabs/tabs.component';
import {TextInputComponent} from './text-input/text-input.component';
import {PaginationComponent} from './pagination/pagination.component';
import {SnippetComponent} from './snippet/snippet.component';
import {TooltipModule} from '../directives/tooltip/tooltip.module';

const COMPONENTS = [
  CardComponent, ButtonComponent, LoaderComponent, TabsComponent, TextInputComponent, PaginationComponent, SnippetComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    FlexModule,
    IconsModule,
    FormsModule,
    TooltipModule
  ]
})
export class ComponentsModule {
}
