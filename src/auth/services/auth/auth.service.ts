import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../../../main/services/user.service';
import { AuthRegistrationForm } from '../../data/transfers/auth-registration.form';
import * as bcrypt from 'bcrypt';
import { UserRegistrationForm } from '../../../main/data/transfers/user-registration.form';
import { User } from '../../../main/model/user.entity';
import { AuthLoginForm } from '../../data/transfers/auth-login-form/auth-login-form';
import { JwtService } from '@nestjs/jwt';
import { JwtLoginResponse } from '../../data/transfers/jwt-login-response/jwt-login-response';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(form: AuthRegistrationForm): Promise<User> {
    const userForm = new UserRegistrationForm();
    userForm.firstName = form.firstName;
    userForm.lastName = form.lastName;
    userForm.email = form.email;

    const salt = await bcrypt.genSalt();
    userForm.password = await bcrypt.hash(form.password, salt);

    const isMatch = await bcrypt.compare(form.password, userForm.password);
    console.debug(isMatch);

    return await this.userService.create(userForm);
  }

  async login(form: AuthLoginForm): Promise<JwtLoginResponse> {
    const login = await this.userService.findOneByLogin({
      username: form.username,
    });

    if (login == null) throw new BadRequestException('User does not exist');

    let isMatch = false;
    if (login?.password)
      isMatch = await bcrypt.compare(form.password, login?.password);
    console.debug(isMatch);

    if (!isMatch)
      throw new UnauthorizedException('Username or Password does not match');

    return {
      token: this.jwtService.sign({
        id: login.user.id,
        role: 'member',
      }),
    };
  }
}
