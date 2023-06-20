import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/user.entity';
import { UserRegistrationForm } from '../data/transfers/user-registration.form';
import { UserLogin } from '../model/user-login.entity';
import * as bcrypt from 'bcrypt';

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

  async verifyUser(username: string, password: string): Promise<User> {
    const login = await this.loginRepository.findOne({
      where: { username: username },
      relations: { user: true },
    });

    console.debug('Compare user ', login);

    const isMatch = await bcrypt.compare(password, login.password);
    console.debug(isMatch);

    return login.user;
  }
}
