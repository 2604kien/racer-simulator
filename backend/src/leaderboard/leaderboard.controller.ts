import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateRaceDto } from './dto/createRaceDto';
import { LeaderboardService } from './leaderboard.service';

@Controller('leaderboard')
export class LeaderboardController {
    constructor(private leaderboard:LeaderboardService){}
    @Get()
    getLeaderboard(){
        return this.leaderboard.getLeaderBoard();
    }
    @Post()
    addRaceToLeaderBoard(@Body() race: CreateRaceDto){
        return this.leaderboard.addRaceToLeaderBoard(race);
    }    
}
