import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDetails } from '../model/user-details.entity';

@Controller('user/details')
export class UserDetailsController {
  constructor(
    @InjectRepository(UserDetails)
    private userDetailsRepository: Repository<UserDetails>,
  ) {}

  @Get()
  async findAll(): Promise<any> {
    const dtls = await this.userDetailsRepository.find({
      relations: {
        user: true,
      },
    });

    return dtls;
  }

  @Get('selective')
  async findAllSelective(): Promise<any> {
    const dtls = await this.userDetailsRepository
      .createQueryBuilder('d')
      .select(['d.id', 'd.user_id', 'd.dob'])
      .addSelect([
        'user.id',
        'user.last_name',
        'user.first_name',
        'user.created_at',
      ])
      .leftJoinAndSelect('d.user', 'user')
      .getMany();

    return dtls;
  }
}
