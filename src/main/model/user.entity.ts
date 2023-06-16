import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserDetails } from './user-details.entity';
import { UserLoginEntity } from './user-login.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @OneToOne(() => UserDetails, (details) => details.user)
  userDetails: UserDetails;

  @OneToOne(() => UserLoginEntity, (login) => login.user)
  login: UserLoginEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
