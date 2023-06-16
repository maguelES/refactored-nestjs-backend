import { Injectable } from '@nestjs/common';
import { UserService } from '../../../main/services/user.service';
import { AuthRegistrationForm } from '../../data/transfers/auth-registration.form';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { UserRegistrationForm } from '../../../main/data/transfers/user-registration.form';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(form: AuthRegistrationForm): Promise<void> {
    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');

    console.debug(hash);
    console.debug('Auth Form', form);

    const userForm = new UserRegistrationForm();
    userForm.firstName = form.firstName;
    userForm.lastName = form.lastName;
    userForm.email = form.email;

    const salt = await bcrypt.genSalt();
    userForm.password = await bcrypt.hash(form.password, salt);

    console.debug(userForm);
    await this.userService.create(userForm);

    return null;
  }
}
