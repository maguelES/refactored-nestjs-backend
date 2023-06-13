import { Controller, Get } from '@nestjs/common';

@Controller('user/test/pipe')
export class UserPipeTestController {
  @Get()
  async findAll(): Promise<any> {
    return null;
  }
}
