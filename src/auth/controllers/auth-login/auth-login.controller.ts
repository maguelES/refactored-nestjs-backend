import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { AuthLoginForm } from '../../data/transfers/auth-login-form/auth-login-form';

@Controller('auth')
export class AuthLoginController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async register(
    @Body(new ValidationPipe()) form: AuthLoginForm,
  ): Promise<void> {
    console.debug(form);
    await this.authService.register(form);
  }
}
