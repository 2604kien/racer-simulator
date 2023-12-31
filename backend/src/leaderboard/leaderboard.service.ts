import { Injectable } from '@nestjs/common';
import { CreateRaceDto } from './dto/createRaceDto';

@Injectable()
export class LeaderboardService {
    private leaderboard:CreateRaceDto[]=[];
    
    async addRaceToLeaderBoard(race: CreateRaceDto){
        try{
            this.leaderboard.push(race);
            console.log(this.leaderboard);
            return race;
        }
        catch(error){
            console.log(error);
        }
    }

    async getLeaderBoard(){
        try{
            return this.leaderboard.length>0? {message:"Get leaderboard information successfully", data: this.leaderboard}:{message: "Leaderboard length is 0", data:[]};
        }
        catch(error){
            console.log(error)
        }
    }
}
