import { Module } from '@nestjs/common';
import { AuthRegisterController } from './controllers/auth/auth.register.controller';
import { AuthService } from './services/auth/auth.service';
import { CoreModule } from '../main/core.module';
import { AuthLoginController } from './controllers/auth-login/auth-login.controller';

@Module({
  imports: [CoreModule],
  controllers: [AuthRegisterController, AuthLoginController],
  providers: [AuthService],
})
export class AuthModule {}
