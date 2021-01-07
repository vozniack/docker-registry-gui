import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RepositoriesComponent} from './repositories.component';
import {RepositoryComponent} from './repository/repository.component';

const routes: Routes = [
  {
    path: '',
    component: RepositoriesComponent
  },
  {
    path: ':name',
    component: RepositoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule {
}
