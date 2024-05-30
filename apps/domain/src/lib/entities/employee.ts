import { EmployeeRol } from '../utils/roles.type';
import { BaseUser } from './base/base-user';

export interface Employee extends BaseUser {
  rol: EmployeeRol;
}
