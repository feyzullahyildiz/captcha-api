// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {CaptchaRepository} from '../repositories';

// import {inject} from '@loopback/core';


export class BackendController {
  constructor(@repository(CaptchaRepository) public captchaRepository: CaptchaRepository) { }
}
