import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { DefenceModule } from './defence/defence.module';
import { FinanceModule } from './finance/finance.module';

@Module({
  imports: [LoggerModule.register('App'), DefenceModule, FinanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
