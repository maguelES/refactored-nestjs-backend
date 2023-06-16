import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, Max, Min } from 'class-validator';

export class AuthRegistrationForm {
  @Max(100)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Min(4)
  @Max(20)
  @IsNotEmpty()
  password: string;

  @Max(100)
  @IsNotEmpty()
  @Expose({ name: 'first_name' })
  firstName: string;

  @Max(100)
  @IsNotEmpty()
  @Expose({ name: 'last_name' })
  lastName: string;
}
