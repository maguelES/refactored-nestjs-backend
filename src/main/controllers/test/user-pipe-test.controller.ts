import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../model/user.entity';
import { Repository } from 'typeorm';
import { UserRegistrationForm } from '../../data/transfers/user-registration.form';

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

  @Get('single')
  async findOne(): Promise<any> {
    return null;
  }
  @Get('id')
  async findOneById(@Query('id', ParseIntPipe) id: bigint): Promise<any> {
    return this.userRepository.find({
      where: {
        id: id,
      },
    });
  }

  @Post()
  async save(@Body() form: UserRegistrationForm): Promise<any> {
    console.debug('Validated : ', form);

    return null;
  }
}
