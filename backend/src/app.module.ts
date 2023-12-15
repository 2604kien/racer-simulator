import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RacerModule } from './racer/racer.module';
import { TrackModule } from './track/track.module';

@Module({
  imports: [RacerModule, TrackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
