import { AuthJwtGuard } from './auth-jwt,guard';

describe('AuthJwtGuardGuard', () => {
  it('should be defined', () => {
    expect(new AuthJwtGuard()).toBeDefined();
  });
});
