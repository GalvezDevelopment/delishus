import { BaseEntity } from './base/base-entity';
import { Employee } from './employee';

export interface Branch extends BaseEntity {
  userId: string;
  name: string;
  address: string;
  employees?: Employee[];
}
