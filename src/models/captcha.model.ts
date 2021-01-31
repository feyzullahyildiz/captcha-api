import {Entity, model, property} from '@loopback/repository';

@model()
export class Captcha extends Entity {
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


  constructor(data?: Partial<Captcha>) {
    super(data);
  }
}

export interface CaptchaRelations {
  // describe navigational properties here
}

export type CaptchaWithRelations = Captcha & CaptchaRelations;
