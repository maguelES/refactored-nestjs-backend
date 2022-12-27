import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/User.entity';
import { Repository } from 'typeorm';
@Controller('user/test')
export class UserTestController {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @Get()
  public findAll(): any {
    return this.usersRepository.find();
  }
}
