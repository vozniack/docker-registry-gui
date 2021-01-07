import {Jwk} from "./jwk";

export interface Header {

  jwk: Jwk;

  alg: string;
}
