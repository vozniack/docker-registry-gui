import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepositoriesComponent} from './repositories.component';
import {RepositoriesRoutingModule} from './repositories-routing.module';

@NgModule({
  declarations: [RepositoriesComponent],
  imports: [
    CommonModule,
    RepositoriesRoutingModule
  ]
})
export class RepositoriesModule {
}
