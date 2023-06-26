import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { AuthLoginForm } from '../../data/transfers/auth-login-form/auth-login-form';
import { JwtLoginResponse } from '../../data/transfers/jwt-login-response/jwt-login-response';

@Controller('auth')
export class AuthLoginController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async register(
    @Body(new ValidationPipe()) form: AuthLoginForm,
  ): Promise<JwtLoginResponse> {
    console.debug(form);
    return await this.authService.login(form);
  }
}
