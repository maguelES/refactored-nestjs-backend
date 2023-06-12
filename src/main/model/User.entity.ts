import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserDetails } from './user-details.entity';

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
}
