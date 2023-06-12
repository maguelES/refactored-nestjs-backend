import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTestController } from './controllers/user-test.controller';
import { UserDetails } from './model/user-details.entity';
import { UserDetailsController } from './controllers/user-details.controller';
import { User } from './model/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserDetails])],
  providers: [],
  controllers: [UserTestController, UserDetailsController],
})
export class MainModule {}
