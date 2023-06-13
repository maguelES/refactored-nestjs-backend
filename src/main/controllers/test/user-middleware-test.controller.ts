import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../model/user.entity';

@Controller('user/test/middleware')
export class UserMiddlewareTestController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Get()
  async findAll(): Promise<any> {
    console.debug('Testing Middleware in User');
    return null;
  }
}
