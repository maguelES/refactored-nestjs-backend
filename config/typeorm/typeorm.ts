import { TypeOrmModule } from '@nestjs/typeorm';

export default TypeOrmModule.forRoot({
  host: process.env.DATABASE_URL ?? 'localhost',
  type: 'postgres',
  port: 5432,
  username: process.env.DATABASE_USER ?? 'username',
  password: process.env.DATABASE_PASSWORD ?? 'test',
  database: process.env.DATABASE_SCHEMA ?? 'db',
  synchronize: true,
});
