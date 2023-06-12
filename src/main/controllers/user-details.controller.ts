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
    const dtls = await this.userDetailsRepository.find();

    return dtls;
  }
}
