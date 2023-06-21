import { IsNotEmpty, Length } from 'class-validator';

export class AuthLoginForm {
  @Length(4, 30)
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @Length(4, 30)
  password: string;
}
