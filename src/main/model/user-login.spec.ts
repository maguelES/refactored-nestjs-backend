import { UserLoginEntity } from './user-login.entity';

describe('UserLogin', () => {
  it('should be defined', () => {
    expect(new UserLoginEntity()).toBeDefined();
  });
});
