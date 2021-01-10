import {ContainerConfig} from './containerConfig';
import {Config} from './config';
import {Container} from './container';

export interface Compatibility {

  id: string;

  parent: string;

  created: Date;

  architecture: string;

  config: Config;

  container: Container;

  // tslint:disable-next-line:variable-name
  container_config: ContainerConfig;
}
