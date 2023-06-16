import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_login')
export class UserLoginEntity {
  @PrimaryGeneratedColumn()
  id: bigint;

  password: string;

  username: string;

  email: string;

  @OneToOne(() => User, (user) => user.login)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
