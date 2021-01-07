import {NgModule} from '@angular/core';
import {Home, Package, Server, Box, ArrowRightCircle, Tag, Info, Key, Book, Layers} from 'angular-feather/icons';
import {FeatherModule} from 'angular-feather';

const icons = {
  Package,
  Box,
  Home,
  Server,
  ArrowRightCircle,
  Tag,
  Info,
  Key,
  Book,
  Layers
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
