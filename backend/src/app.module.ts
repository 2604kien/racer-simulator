import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RacerModule } from './racer/racer.module';
import { TrackModule } from './track/track.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

@Module({
  imports: [RacerModule, TrackModule, LeaderboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
