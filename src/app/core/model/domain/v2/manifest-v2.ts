import {FsLayerV2} from './fs-layer-v2';
import {ConfigV2} from './config-v2';

export interface ManifestV2 {

  schemaVersion: string;

  config: ConfigV2;

  layers: FsLayerV2[];
}
