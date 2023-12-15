import { Body, Controller, Post } from '@nestjs/common';
import { CreateRaceDto } from './dto/createRaceDto';
import { LeaderboardService } from './leaderboard.service';

@Controller('leaderboard')
export class LeaderboardController {
    constructor(private leaderboard:LeaderboardService){}
    @Post()
    addRaceToLeaderBoard(@Body() race: CreateRaceDto){
        return this.leaderboard.addRaceToLeaderBoard(race);
    }    
}
