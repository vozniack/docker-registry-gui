import {Config} from './config';

export interface Compatibility {

  id: string;

  created: Date;

  docker_version: string;

  architecture: string;

  container: string;

  config: Config;

  container_config: Config;
}
