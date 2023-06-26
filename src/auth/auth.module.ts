import { Module } from '@nestjs/common';
import { AuthRegisterController } from './controllers/auth/auth.register.controller';
import { AuthService } from './services/auth/auth.service';
import { CoreModule } from '../main/core.module';
import { AuthLoginController } from './controllers/auth-login/auth-login.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthGuardTestController } from './controllers/auth-guard-test/auth-guard-test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetails } from '../main/model/user-details.entity';
import { User } from '../main/model/user.entity';
import { UserLogin } from '../main/model/user-login.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDetails, User, UserLogin]),
    CoreModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('auth.secret'),
        signOptions: {
          expiresIn: configService.get('auth.expires'),
        },
      }),
    }),
  ],
  controllers: [
    AuthRegisterController,
    AuthLoginController,
    AuthGuardTestController,
  ],
  providers: [AuthService],
})
export class AuthModule {}
