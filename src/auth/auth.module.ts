import { Module } from '@nestjs/common';
import { AuthRegisterController } from './controllers/auth/auth.register.controller';
import { AuthService } from './services/auth/auth.service';
import { CoreModule } from '../main/core.module';
import { AuthLoginController } from './controllers/auth-login/auth-login.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    CoreModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: 'Hehe',
        signOptions: {
          expiresIn: '10h',
        },
      }),
    }),
  ],
  controllers: [AuthRegisterController, AuthLoginController],
  providers: [AuthService],
})
export class AuthModule {}
