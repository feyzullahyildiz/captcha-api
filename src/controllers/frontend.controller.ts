import {
  repository
} from '@loopback/repository';
import {get, param} from '@loopback/rest';
import {CaptchaRepository} from '../repositories';

export class FrontendCaptchaController {
  constructor(
    @repository(CaptchaRepository)
    public captchaRepository: CaptchaRepository,
  ) { }

  @get('/captcha')
  // @response(200)
  async get(@param.path.string('PUBLIC_KEY') publicKey: string) {

  }
  // @post('/frontend')
  // @response(200, {
  //   description: 'AppModel model instance',
  //   content: {'AppModellication/json': {schema: getModelSchemaRef(AppModel)}},
  // })
  // async create(
  //   @requestBody({
  //     content: {
  //       'AppModellication/json': {
  //         schema: getModelSchemaRef(AppModel, {
  //           title: 'NewAppModel',
  //           exclude: ['id'],
  //         }),
  //       },
  //     },
  //   })
  //   AppModel: Omit<AppModel, 'id'>,
  // ): Promise<AppModel> {
  //   return this.captchaRepository.create(AppModel);
  // }

  // @get('/frontend/count')
  // @response(200, {
  //   description: 'AppModel model count',
  //   content: {'AppModellication/json': {schema: CountSchema}},
  // })
  // async count(
  //   @param.where(AppModel) where?: Where<AppModel>,
  // ): Promise<Count> {
  //   return this.captchaRepository.count(where);
  // }

  // @get('/frontend')
  // @response(200, {
  //   description: 'Array of AppModel model instances',
  //   content: {
  //     'AppModellication/json': {
  //       schema: {
  //         type: 'array',
  //         items: getModelSchemaRef(AppModel, {includeRelations: true}),
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.filter(AppModel) filter?: Filter<AppModel>,
  // ): Promise<AppModel[]> {
  //   return this.captchaRepository.find(filter);
  // }

  // @patch('/frontend')
  // @response(200, {
  //   description: 'AppModel PATCH success count',
  //   content: {'AppModellication/json': {schema: CountSchema}},
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'AppModellication/json': {
  //         schema: getModelSchemaRef(AppModel, {partial: true}),
  //       },
  //     },
  //   })
  //   AppModel: AppModel,
  //   @param.where(AppModel) where?: Where<AppModel>,
  // ): Promise<Count> {
  //   return this.captchaRepository.updateAll(AppModel, where);
  // }

  // @get('/frontend/{id}')
  // @response(200, {
  //   description: 'AppModel model instance',
  //   content: {
  //     'AppModellication/json': {
  //       schema: getModelSchemaRef(AppModel, {includeRelations: true}),
  //     },
  //   },
  // })
  // async findById(
  //   @param.path.number('id') id: number,
  //   @param.filter(AppModel, {exclude: 'where'}) filter?: FilterExcludingWhere<AppModel>
  // ): Promise<AppModel> {
  //   return this.captchaRepository.findById(id, filter);
  // }

  // @patch('/frontend/{id}')
  // @response(204, {
  //   description: 'AppModel PATCH success',
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'AppModellication/json': {
  //         schema: getModelSchemaRef(AppModel, {partial: true}),
  //       },
  //     },
  //   })
  //   AppModel: AppModel,
  // ): Promise<void> {
  //   await this.captchaRepository.updateById(id, AppModel);
  // }

  // @put('/frontend/{id}')
  // @response(204, {
  //   description: 'AppModel PUT success',
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() AppModel: AppModel,
  // ): Promise<void> {
  //   await this.captchaRepository.replaceById(id, AppModel);
  // }

  // @del('/frontend/{id}')
  // @response(204, {
  //   description: 'AppModel DELETE success',
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.captchaRepository.deleteById(id);
  // }
}
