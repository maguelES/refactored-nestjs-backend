import { Test, TestingModule } from '@nestjs/testing';
import { AuthRegisterController } from './auth.register.controller';
import { AuthModule } from '../../auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from '../../../main/core.module';
import { JwtModule } from '@nestjs/jwt';
import { AppModule } from '../../../app.module';
import { AuthService } from '../../services/auth/auth.service';

describe('AuthController', () => {
  let controller: AuthRegisterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthModule, CoreModule, JwtModule, AppModule],
      providers: [AuthService],
      controllers: [AuthRegisterController],
    }).compile();

    controller = module.get<AuthRegisterController>(AuthRegisterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
