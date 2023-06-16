import { User } from '../../model/user.entity';

export class UserRegistrationForm {
  first_name: string;
  last_name: string;
  email: string;

  toEntity(): User {
    return {
      id: null,
      firstName: this.first_name,
      lastName: this.last_name,
      createdAt: null,
      updatedAt: null,
    };
  }
}
