import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../model/user.entity';
import { Repository } from 'typeorm';

@Controller('user/test/pipe')
export class UserPipeTestController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  @Get()
  async findAll(): Promise<any> {
    return null;
  }
}
