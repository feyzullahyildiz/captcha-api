// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {AdminRepository} from '../repositories';


// import {inject} from '@loopback/core';


export class AdminController {
  constructor(@repository(AdminRepository) adminRepository: AdminRepository) { }
}
