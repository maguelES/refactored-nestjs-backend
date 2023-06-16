import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class AuthRegistrationForm {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @Expose()
  @IsNotEmpty()
  firstName: string;

  @Expose()
  @IsNotEmpty()
  lastName: string;
}
