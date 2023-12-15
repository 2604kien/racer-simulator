import { Controller, Get, Param } from '@nestjs/common';
import { RacerService } from './racer.service';

@Controller('racer')
export class RacerController {
    constructor(private racersData: RacerService){}
    @Get()
    getAllRacers(){
        return this.racersData.getAllRacer();
    }
    @Get(':id')
    getRacerById(@Param('id') id:string){
        return this.racersData.getRacerById(id);
    }
}
