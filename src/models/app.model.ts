import {Entity, model, property} from '@loopback/repository';

@model()
export class AppModel extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  privateKey: string;

  @property({
    type: 'string',
    required: true,
  })
  publicKey: string;


  constructor(data?: Partial<AppModel>) {
    super(data);
  }
}

export interface AppModelRelations {
  // describe navigational properties here
}

export type AppWithRelations = AppModel & AppModelRelations;
