import { Injectable } from '@nestjs/common';
import { CreateRaceDto } from './dto/createRaceDto';

@Injectable()
export class LeaderboardService {
    private leaderboard:CreateRaceDto[]=[];
    
    async addRaceToLeaderBoard(race: CreateRaceDto){
        try{
            this.leaderboard.push(race);
            return race;
        }
        catch(error){
            console.log(error);
        }
    }
}
