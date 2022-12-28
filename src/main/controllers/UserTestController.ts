import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/User.entity';
import { Repository } from 'typeorm';
import { UserCommonTransformer } from '../data/transformers/user-common.transformer';
import { UserRegistrationForm } from '../data/transfers/user-registration.form';

@Controller('user/test')
export class UserTestController {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  @Get()
  async findAll(): Promise<any> {
    const users = await this.usersRepository.find();

    return users.map((user) => new UserCommonTransformer().from(user));
  }

  @Post()
  async create(@Body() form: UserRegistrationForm) {
    console.debug('Creating new user ', form.first_name);

    const user = new User();
    user.firstName = form.first_name;
    user.lastName = form.last_name;

    await this.usersRepository.save(user);
  }
}
