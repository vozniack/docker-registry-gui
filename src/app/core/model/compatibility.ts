import {ContainerConfig} from './containerConfig';

export interface Compatibility {

  id: string;

  parent: string;

  created: string;

  // tslint:disable-next-line:variable-name
  container_config: ContainerConfig;
}
