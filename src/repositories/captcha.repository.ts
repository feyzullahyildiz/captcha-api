import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {AppModel, AppModelRelations} from '../models';

export class CaptchaRepository extends DefaultCrudRepository<
  AppModel,
  typeof AppModel.prototype.id,
  AppModelRelations

  > {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(AppModel, dataSource);
  }
}
