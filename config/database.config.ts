import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  url: process.env.DATABASE_URL ?? 'localhost',
  type: 'postgres',
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER ?? '',
  password: process.env.DATABASE_PASSWORD ?? '',
  name: process.env.DATABASE_SCHEMA,
  maxConnections: parseInt(process.env.DATABASE_MAX_CONNECTIONS, 10) || 100,
  synchronize: false,
}));
