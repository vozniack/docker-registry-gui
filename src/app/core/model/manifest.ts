import {FsLayer} from './fsLayer';
import {Signatures} from './signatures';
import {History} from './history';

export interface Manifest {

  schemaVersion: string;

  name: string;

  tag: string;

  architecture: string;

  signatures: Signatures[];

  history: History[];

  fsLayers: FsLayer[];
}
