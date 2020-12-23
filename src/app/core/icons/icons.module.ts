import {NgModule} from '@angular/core';
import {Home, Package, Server} from 'angular-feather/icons';
import {FeatherModule} from 'angular-feather';

const icons = {
  Package,
  Home,
  Server,
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule {
}
