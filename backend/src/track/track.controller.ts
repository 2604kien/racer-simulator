import { Controller, Get } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
    constructor(private trackData:TrackService){}
    @Get()
    getTrackData(){
        return this.trackData.getTrack();
    }
}
