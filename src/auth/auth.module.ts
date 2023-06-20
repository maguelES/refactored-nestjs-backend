import { Module } from '@nestjs/common';
import { AuthRegisterController } from './controllers/auth/auth.register.controller';
import { AuthService } from './services/auth/auth.service';
import { CoreModule } from '../main/core.module';

@Module({
  imports: [CoreModule],
  controllers: [AuthRegisterController],
  providers: [AuthService],
})
export class AuthModule {}
