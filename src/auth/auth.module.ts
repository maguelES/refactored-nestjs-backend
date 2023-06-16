import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { CoreModule } from '../main/core.module';

@Module({
  imports: [CoreModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
