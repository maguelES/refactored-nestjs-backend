import { Controller, Get } from '@nestjs/common';
@Controller()
export class UserTestController {
  @Get()
  public findAll(): any {
    return '';
  }
}
