import { Injectable } from "@nestjs/common";
import { LoggerService } from "src/logger/logger.service";

@Injectable()
export class FinanceService {
  constructor(private readonly loggerService: LoggerService) {}

  logTest() {
    this.loggerService.log(
      "Finance log goes to the finance folder's log file."
    );
    this.loggerService.error(
      "Finance error goes to the finance folder's error file."
    );
  }
}
