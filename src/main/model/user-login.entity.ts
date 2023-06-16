import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_login')
export class UserLogin {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @OneToOne(() => User, (user) => user.login)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
