import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('user_details')
export class UserDetails {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column({ name: 'dob', type: 'timestamp' })
  dob: Date;

  @Column({ name: 'gender' })
  gender: string;

  // @OneToOne(() => User, (user) => user.userDetails)
  // @JoinColumn()
  // user: User;
}
