import { Module } from '@nestjs/common';
import { TimesheetsController } from './timesheets.controller';
import { TimesheetsService } from './timesheets.service';

@Module({
  controllers: [TimesheetsController],
  providers: [TimesheetsService]
})
export class TimesheetsModule {}
