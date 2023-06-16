import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/user.entity';
import { UserRegistrationForm } from '../data/transfers/user-registration.form';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(form: UserRegistrationForm): Promise<User> {
    return this.userRepository.save(form.toEntity());
  }
}
