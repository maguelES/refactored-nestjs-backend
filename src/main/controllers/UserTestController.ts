import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/User.entity';
import { Repository } from 'typeorm';
import { UserCommonTransformer } from '../data/transformers/user-common.transformer';

@Controller('user/test')
export class UserTestController {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @Get()
  async findAll(): Promise<any> {
    const users = await this.usersRepository.find();

    return users.map((value) => new UserCommonTransformer().from(value));
  }
}
