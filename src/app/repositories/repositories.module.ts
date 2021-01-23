import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepositoriesComponent} from './repositories.component';
import {RepositoriesRoutingModule} from './repositories-routing.module';
import {ComponentsModule} from '../shared/components/components.module';
import {RepositoryComponent} from './repository/repository.component';
import {FlexModule} from '@angular/flex-layout';
import {ManifestComponent} from './repository/manifest/manifest.component';
import {IconsModule} from '../core/icons/icons.module';
import {ManifestMetadataComponent} from './repository/manifest/manifest-metadata/manifest-metadata.component';
import {ManifestSignaturesComponent} from './repository/manifest/manifest-signatures/manifest-signatures.component';
import {ManifestHistoryComponent} from './repository/manifest/manifest-history/manifest-history.component';
import {ManifestLayersComponent} from './repository/manifest/manifest-layers/manifest-layers.component';
import {ManifestHistoryConfigComponent} from './repository/manifest/manifest-history/manifest-history-config/manifest-history-config.component';
import {ManifestHeaderComponent} from './repository/manifest/manifest-header/manifest-header.component';

@NgModule({
  declarations: [
    RepositoriesComponent,
    RepositoryComponent,
    ManifestComponent,
    ManifestMetadataComponent,
    ManifestSignaturesComponent,
    ManifestHistoryComponent,
    ManifestLayersComponent,
    ManifestHistoryConfigComponent,
    ManifestHeaderComponent
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
