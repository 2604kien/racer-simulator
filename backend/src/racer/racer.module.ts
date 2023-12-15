import { Module } from '@nestjs/common';
import { RacerService } from './racer.service';
import { RacerController } from './racer.controller';

@Module({
  providers: [RacerService],
  controllers: [RacerController]
})
export class RacerModule {}
