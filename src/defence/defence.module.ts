import { Module } from '@nestjs/common';
import { DefenceService } from './defence.service';
import { DefenceController } from './defence.controller';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [LoggerModule.register('Defence')],
  controllers: [DefenceController],
  providers: [DefenceService],
})
export class DefenceModule {}
