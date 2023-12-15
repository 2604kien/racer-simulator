import { Controller, Get } from '@nestjs/common';
import { RacerService } from './racer.service';

@Controller('racer')
export class RacerController {
    constructor(private racersData: RacerService){}
    @Get()
    getRacers(){
        return this.racersData.getRacer();
    }
}
