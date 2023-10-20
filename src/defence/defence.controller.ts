import { Controller, Get } from '@nestjs/common';
import { DefenceService } from './defence.service';

@Controller('defence')
export class DefenceController {
  constructor(private readonly defenceService: DefenceService) {}

  @Get()
  logTest() {
    this.defenceService.logTest();
    return 'Hello from The Defense Ministry.';
  }
}
