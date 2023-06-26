import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  secret:
    process.env.AUTH_SECRET ??
    'USE YOUR OWN SECRET KEY HERE IN ENVIRONMENT VARIABLE',
  expires: process.env.AUTH_EXPIRES ?? '60m',
}));
