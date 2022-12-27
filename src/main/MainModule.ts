import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/User';
import { UserTestController } from './controllers/UserTestController';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [],
  controllers: [UserTestController],
})
export class MainModule {}
