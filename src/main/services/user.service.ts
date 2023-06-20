import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/user.entity';
import { UserRegistrationForm } from '../data/transfers/user-registration.form';
import { UserLogin } from '../model/user-login.entity';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserLogin)
    private loginRepository: Repository<UserLogin>,
  ) {}

  async create(form: UserRegistrationForm): Promise<User> {
    const user = await this.userRepository.save(form.toEntity());

    const login: UserLogin = {
      user: user,
      email: form.email,
      password: form.password,
      username: form.email,
      id: null,
    };

    console.debug('login', login);
    await this.loginRepository.save(login);

    return user;
  }

  async findOneByLogin(
    fields: FindOptionsWhere<UserLogin>,
  ): Promise<UserLogin> {
    return await this.loginRepository.findOne({
      where: fields,
      relations: { user: true },
    });
  }
}
