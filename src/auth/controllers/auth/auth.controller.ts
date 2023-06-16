import { Body, Controller, Post } from '@nestjs/common';
import { AuthRegistrationForm } from '../../data/transfers/auth-registration.form';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() form: AuthRegistrationForm): Promise<void> {
    await this.authService.register(form);
  }
}
