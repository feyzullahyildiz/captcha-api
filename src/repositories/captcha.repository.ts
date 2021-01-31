import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Captcha} from '../models';

export class CaptchaRepository extends DefaultCrudRepository<
  Captcha,
  typeof Captcha.prototype.id,
  CaptchaRepository
  > {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Captcha, dataSource);
  }
}
