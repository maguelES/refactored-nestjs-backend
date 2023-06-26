import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../main/model/user.entity';
import { AuthJwtGuard } from '../../guards/auth-jwt-guard/auth-jwt,guard';

@Controller('auth/test/guards')
export class AuthGuardTestController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  @UseGuards(AuthJwtGuard)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(): Promise<void> {
    console.debug(await this.userRepository.find({ take: 10 }));
  }
}
