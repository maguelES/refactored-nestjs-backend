import { AuthJwtGuard } from './auth-jwt,guard';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

describe('AuthJwtGuardGuard', () => {

  let service: AuthJwtGuard;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthJwtGuard, JwtService, ConfigService],
    }).compile();

    service = module.get<AuthJwtGuard>(AuthJwtGuard);
    jwtService = module.get<JwtService>(JwtService); // Get the mocked instance
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
