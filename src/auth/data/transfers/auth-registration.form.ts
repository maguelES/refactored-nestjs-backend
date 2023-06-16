import { Expose } from 'class-transformer';

export class AuthRegistrationForm {
  email: string;

  password: string;

  @Expose({ name: 'first_name' })
  firstName: string;

  @Expose({ name: 'last_name' })
  lastName: string;
}
