import { Test, TestingModule } from '@nestjs/testing';
import { AuthLoginController } from './auth-login.controller';
import { AuthModule } from '../../auth.module';
import { AppModule } from '../../../app.module';
import { AuthService } from '../../services/auth/auth.service';
import { CoreModule } from '../../../main/core.module';
import { JwtService } from '@nestjs/jwt';

describe('AuthLoginController', () => {
  let controller: AuthLoginController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, CoreModule, AuthModule],
      providers: [AuthService, JwtService],
      controllers: [AuthLoginController],
    }).compile();


    controller = module.get<AuthLoginController>(AuthLoginController);
    authService = module.get(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
