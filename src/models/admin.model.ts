import {Entity, model, property} from '@loopback/repository';

/**
 * This looks working but, lb4 migrate does not work well.
 * It is not in a transaction
 * It is trying to create Admin table before captcha table.
 * So the relation is not working
 */
@model({
  // settings: {
  //   foreignKeys: {
  //     fk_order_customerId: {
  //       name: 'fk_captcha_admin_id',
  //       entity: 'Captcha',
  //       entityKey: 'id',
  //       foreignKey: 'captchaid',
  //     },
  //   },
  // }
})
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

  @property({
    type: 'number',
    required: true,
  })
  captchaId: string;



  constructor(data?: Partial<Admin>) {
    super(data);
  }
}

export interface AdminRelations {
  // describe navigational properties here
}

export type AdminWithRelations = Admin & AdminRelations;
