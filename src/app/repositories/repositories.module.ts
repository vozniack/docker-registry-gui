import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepositoriesComponent} from './repositories.component';
import {RepositoriesRoutingModule} from './repositories-routing.module';
import {ComponentsModule} from '../shared/components/components.module';

@NgModule({
  declarations: [RepositoriesComponent],
  imports: [
    CommonModule,
    RepositoriesRoutingModule,
    ComponentsModule
  ]
})
export class RepositoriesModule {
}
