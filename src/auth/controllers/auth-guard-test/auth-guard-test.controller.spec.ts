import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuardTestController } from './auth-guard-test.controller';
import { JwtService } from '@nestjs/jwt';
import { AppModule } from '../../../app.module';
import { AuthModule } from '../../auth.module';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../main/model/user.entity';
import { Repository } from 'typeorm';

describe('AuthGuardTestController', () => {
  let controller: AuthGuardTestController;
  let mockUserRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, AuthModule],
      controllers: [AuthGuardTestController],
      providers: [JwtService,  {
        provide: getRepositoryToken(User),
        useValue: mockUserRepository,
      },]
    }).compile();

    controller = module.get<AuthGuardTestController>(AuthGuardTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
