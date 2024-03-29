import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Like, Repository } from 'typeorm';
import { UserCommonTransformer } from '../../data/transformers/user-common.transformer';
import { UserRegistrationForm } from '../../data/transfers/user-registration.form';
import { User } from '../../model/user.entity';

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

  @Get('/find/first_name')
  async findByFirstName(@Query('find') name): Promise<any> {
    const users = await this.usersRepository.findBy({
      firstName: name,
    });

    return users.map((user) => new UserCommonTransformer().from(user));
  }

  @Get('/like/first_name')
  async findLikeFirstName(@Query('find') name): Promise<any> {
    const users = await this.usersRepository.findBy({
      firstName: ILike('%' + name + '%'),
    });

    return users.map((user) => new UserCommonTransformer().from(user));
  }

  @Post()
  async create(@Body() form: UserRegistrationForm) {
    console.debug('Creating new user ', form.firstName);

    const user = new User();
    user.firstName = form.firstName;
    user.lastName = form.lastName;

    await this.usersRepository.save(user);
  }
}
