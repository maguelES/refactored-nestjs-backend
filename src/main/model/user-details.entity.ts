import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
@Entity('user_details')
export class UserDetails {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column({ name: 'dob', type: 'timestamp' })
  dob: Date;

  @Column({ name: 'gender' })
  gender: string;

  @OneToOne(() => User, (user) => user.userDetails)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
