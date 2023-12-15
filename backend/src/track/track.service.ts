import { Injectable } from '@nestjs/common';
import * as fsPromise from "fs/promises";
import * as path from "path";
@Injectable()
export class TrackService {
    async getTrack(){
        const trackData=await fsPromise.readFile(path.join(process.cwd(), "data.json"), 'utf8');
        return trackData? {message:"Get track data successfully", data: JSON.parse(trackData)}:{message: "Failed to get track data"};
    }
}
