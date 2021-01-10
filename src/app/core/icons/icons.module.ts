import {NgModule} from '@angular/core';
import {
  Home,
  Package,
  Server,
  Box,
  ArrowUp,
  ArrowRightCircle,
  ArrowLeftCircle,
  Tag,
  Info,
  Key,
  Lock,
  Book,
  Layers,
  Copy,
  ChevronsDown,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
  Search
} from 'angular-feather/icons';
import {FeatherModule} from 'angular-feather';

const icons = {
  Package,
  Box,
  Home,
  Server,
  ArrowUp,
  ArrowRightCircle,
  ArrowLeftCircle,
  Tag,
  Info,
  Key,
  Lock,
  Book,
  Layers,
  Copy,
  ChevronsDown,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
  Search
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
