import { TypeOrmModule } from '@nestjs/typeorm';

export default TypeOrmModule.forRoot({
  host: 'localhost:5432',
  type: 'postgres',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'db',
  synchronize: true,
});
