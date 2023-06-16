import { Injectable } from '@nestjs/common';
import { UserService } from '../../../main/services/user.service';
import { AuthRegistrationForm } from '../../data/transfers/auth-registration.form';
import * as crypto from 'crypto';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';

@Injectable()
export class AuthService {
  constructor(private readonly userservice: UserService) {}

  async register(form: AuthRegistrationForm): Promise<void> {
    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');

    console.debug(hash);

    await this.userservice.create({
      ...form,
      password: hash,
    });

    return null;
  }
}
