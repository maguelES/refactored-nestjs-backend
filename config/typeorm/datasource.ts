import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_SCHEMA,
  logging: false,
  synchronize: false,
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  subscribers: [__dirname + '/subscribers/**/*{.ts,.js}'],
});
