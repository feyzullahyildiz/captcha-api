import {belongsTo, Entity, model, property} from '@loopback/repository';
import {AppModel} from './app.model';

@model()
export class Admin extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @belongsTo(() => AppModel, {
    name: 'app_id'
  })
  @property({
    type: 'number',
    required: true
  })
  app_id: number;

  constructor(data?: Partial<Admin>) {
    super(data);
  }
}

export interface AdminRelations {
  // describe navigational properties here
}

export type AdminWithRelations = Admin & AdminRelations;
