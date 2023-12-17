import { Injectable } from '@nestjs/common';
import * as fsPromise from "fs/promises";
import * as path from "path";
@Injectable()
export class TrackService {
    private trackData:string;
    constructor(){
        this.initialiseData();
    }
    async initialiseData(){
        this.trackData=await fsPromise.readFile(path.join(process.cwd(), "data.json"), 'utf8');
        
    }
    async getAllTrack(){
        return this.trackData? {message:"Get track data successfully", data: JSON.parse(this.trackData).tracks}:{message: "Failed to get track data"};
    }
    async getTrackById(id : string){
        try{
            const tracks=JSON.parse(this.trackData).tracks;
            const result=tracks.find((t:any)=>t.id===Number(id));
            return result? {message: "Get track by id sucessfully", data:result}: {message:"Fail to get track by id"};
        }
        catch(error){
            console.log(error);
        }
    }
}
