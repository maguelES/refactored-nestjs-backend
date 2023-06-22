import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuardTestController } from './auth-guard-test.controller';

describe('AuthGuardTestController', () => {
  let controller: AuthGuardTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthGuardTestController],
    }).compile();

    controller = module.get<AuthGuardTestController>(AuthGuardTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
