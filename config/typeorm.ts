import { TypeOrmModule } from '@nestjs/typeorm';

export default TypeOrmModule.forRoot({
  host: process.env.DATABASE_URL ?? 'localhost:5432',
  type: 'postgres',
  port: 5432,
  username: process.env.DATABASE_USER ?? 'username',
  password: process.env.DATBASE_PASSWORD ?? 'test',
  database: process.env.DATABASE_SCHEMA ?? 'db',
  synchronize: true,
});
