import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepositoriesComponent} from './repositories.component';
import {RepositoriesRoutingModule} from './repositories-routing.module';
import {ComponentsModule} from '../shared/components/components.module';
import {RepositoryComponent} from './repository/repository.component';
import {FlexModule} from '@angular/flex-layout';
import {ManifestComponent} from './repository/manifest/manifest.component';
import {IconsModule} from '../core/icons/icons.module';
import {ManifestBasicInformationComponent} from './repository/manifest/manifest-basic-information/manifest-basic-information.component';
import {ManifestSignaturesComponent} from './repository/manifest/manifest-signatures/manifest-signatures.component';
import {ManifestHistoryComponent} from './repository/manifest/manifest-history/manifest-history.component';
import {ManifestLayersComponent} from './repository/manifest/manifest-layers/manifest-layers.component';

@NgModule({
  declarations: [
    RepositoriesComponent,
    RepositoryComponent,
    ManifestComponent,
    ManifestBasicInformationComponent,
    ManifestSignaturesComponent,
    ManifestHistoryComponent,
    ManifestLayersComponent
  ],
  imports: [
    CommonModule,
    RepositoriesRoutingModule,
    ComponentsModule,
    FlexModule,
    IconsModule
  ]
})
export class RepositoriesModule {
}
