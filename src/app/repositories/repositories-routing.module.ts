import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RepositoriesComponent} from './repositories.component';

const routes: Routes = [
  {
    path: '',
    component: RepositoriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoriesRoutingModule {
}
