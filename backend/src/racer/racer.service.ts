import { Injectable } from '@nestjs/common';
import * as fsPromise from "fs/promises";
import * as path from "path";
@Injectable()
export class RacerService {
  private racerData:string;
  constructor(){
    this.initialiseData();
  }
  private async initialiseData(){
    this.racerData= await fsPromise.readFile(path.join(process.cwd(), "data.json"), "utf8");
  }
  async getAllRacer(){
    return this.racerData?{message: "Get data successfuly", data: JSON.parse(this.racerData).racers}:{message: "Failed to get data"};
  }
  async getRacerById(id: string){
    try{
      const racer=JSON.parse(this.racerData).racers;
      const result=racer.find((r:any)=>r.id===Number(id));
      return result? {message: "Get racer by id successfully", data: result}: {message:"Failed to get racer by id"};
    }
    catch(error){
      console.log(error);
    }
  }
}

