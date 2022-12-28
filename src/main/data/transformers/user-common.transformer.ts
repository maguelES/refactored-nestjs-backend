import { User } from '../../model/User.entity';
import { UserCommonDto } from '../transfers/user-common.dto';

export class UserCommonTransformer {
  from(user: User): UserCommonDto {
    return new UserCommonDto(
      [user.firstName, user.lastName].join(' '),
      user.firstName,
      user.lastName,
    );
  }
}
