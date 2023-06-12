import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTestController } from './controllers/user-test.controller';
import { UserDetailsController } from './controllers/user-details.controller';
import { User } from './model/user.entity';
import { UserDetails } from './model/user-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserDetails, User])],
  providers: [],
  controllers: [UserTestController, UserDetailsController],
})
export class MainModule {}
