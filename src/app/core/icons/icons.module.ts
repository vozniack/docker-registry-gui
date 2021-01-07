import {NgModule} from '@angular/core';
import {Home, Package, Server, Box, ArrowRightCircle} from 'angular-feather/icons';
import {FeatherModule} from 'angular-feather';

const icons = {
  Package,
  Box,
  Home,
  Server,
  ArrowRightCircle
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
