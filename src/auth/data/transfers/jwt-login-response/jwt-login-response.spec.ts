import { JwtLoginResponse } from './jwt-login-response';

describe('JwtLoginResponse', () => {
  it('should be defined', () => {
    expect(new JwtLoginResponse()).toBeDefined();
  });
});
