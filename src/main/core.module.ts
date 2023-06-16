import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTestController } from './controllers/test/user-test.controller';
import { UserDetailsController } from './controllers/user-details.controller';
import { User } from './model/user.entity';
import { UserDetails } from './model/user-details.entity';
import { UserPipeTestController } from './controllers/test/user-pipe-test.controller';
import { UserMiddlewareTestController } from './controllers/test/user-middleware-test.controller';
import { LoggerMiddleware } from './http/middleware/logger.middleware';
import { UserService } from './services/user.service';
import { UserLoginEntity } from './model/user-login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserDetails, User, UserLoginEntity])],
  providers: [UserService],
  controllers: [
    UserTestController,
    UserDetailsController,
    UserPipeTestController,
    UserMiddlewareTestController,
  ],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('user/test/middleware');
  }
}
