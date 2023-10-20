import { Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class DefenceService {
  constructor(private readonly loggerService: LoggerService) {}

  logTest() {
    this.loggerService.log("Defense log goes to the defense folder's log file");
    this.loggerService.error(
      "Defense error goes to the defense folder's error file",
    );
  }
}
