import { Controller, Get } from '@nestjs/common';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Get()
  logTest() {
    this.financeService.logTest();
    return 'Hello from The Finance Ministry.';
  }
}
