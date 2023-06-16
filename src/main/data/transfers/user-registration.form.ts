import { User } from '../../model/user.entity';

export class UserRegistrationForm {
  firstName: string;

  lastName: string;

  email: string;

  password: string;

  toEntity?(): User {
    return {
      id: null,
      firstName: this.firstName,
      lastName: this.lastName,
      createdAt: null,
      updatedAt: null,
    };
  }
}
