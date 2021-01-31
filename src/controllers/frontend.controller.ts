import {
  Count,
  CountSchema,
  repository, Where
} from '@loopback/repository';
import {get, param, response} from '@loopback/rest';
import {Captcha} from '../models';
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

  @get('/frontend/count')
  @response(200, {
    description: 'AppModel model count',
    content: {'AppModellication/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Captcha) where?: Where<Captcha>,
  ): Promise<Count> {
    return this.captchaRepository.count(where);
  }

}
