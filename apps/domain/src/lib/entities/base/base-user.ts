import { BaseEntity } from './base-entity';

export interface BaseUser extends BaseEntity {
  firstName: string;
  lastName: string;
  address: string;
  bornDate: Date;
  email: string;
}
