import { Controller, Get, Param } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
    constructor(private trackData:TrackService){}
    @Get()
    getAllTrackData(){
        return this.trackData.getAllTrack();
    }
    @Get(':id')
    getTrackById(@Param('id') id:string){
        return this.trackData.getTrackById(id);
    }
}
