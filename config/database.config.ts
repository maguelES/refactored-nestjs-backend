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
  sslEnabled: process.env.DATABASE_SSL_ENABLED === 'true',
  rejectUnauthorized: process.env.DATABASE_REJECT_UNAUTHORIZED === 'true',
  ca: process.env.DATABASE_CA,
  key: process.env.DATABASE_KEY,
  cert: process.env.DATABASE_CERT,
}));
