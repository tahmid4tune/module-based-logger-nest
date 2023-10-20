import { Module } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { FinanceController } from './finance.controller';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [LoggerModule.register('Finance')],
  controllers: [FinanceController],
  providers: [FinanceService],
})
export class FinanceModule {}
