import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Exclude } from 'class-transformer';

@Entity('user_login')
export class UserLogin {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column({ nullable: true })
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @OneToOne(() => User, (user) => user.login)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
