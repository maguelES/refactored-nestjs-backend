import { IsNotEmpty } from 'class-validator';

export class AuthLoginForm {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
