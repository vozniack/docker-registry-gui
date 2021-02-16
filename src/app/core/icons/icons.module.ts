import {NgModule} from '@angular/core';
import {
  Package,
  Server,
  Box,
  ArrowUp,
  ArrowRightCircle,
  Tag,
  Info,
  Book,
  Layers,
  Copy,
  ChevronDown,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
  Search,
  Trash,
  AlertOctagon
} from 'angular-feather/icons';
import {FeatherModule} from 'angular-feather';

const icons = {
  Package,
  Box,
  Server,
  ArrowUp,
  ArrowRightCircle,
  Tag,
  Info,
  Book,
  Layers,
  Copy,
  ChevronDown,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
  Search,
  Trash,
  AlertOctagon
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
