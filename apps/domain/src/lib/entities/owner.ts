import { BaseUser } from './base/base-user';
import { Branch } from './branch';

export interface Owner extends BaseUser {
  branches: Branch[];
}
