import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../main/model/user.entity';

@Controller('auth/test/guard')
export class AuthGuardTestController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(): Promise<void> {
    console.debug(await this.userRepository.find({ take: 10 }));
  }
}
