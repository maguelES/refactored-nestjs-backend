import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthRegistrationForm } from '../../data/transfers/auth-registration.form';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body(new ValidationPipe()) form: AuthRegistrationForm,
  ): Promise<void> {
    console.debug(form);
    await this.authService.register(form);
  }
}
