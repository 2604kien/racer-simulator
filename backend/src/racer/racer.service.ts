import { Injectable } from '@nestjs/common';
import * as fsPromise from "fs/promises";
import * as path from "path";
@Injectable()
export class RacerService {
    
  async getRacer(){
    const racerData= await fsPromise.readFile(path.join(process.cwd(), "data.json"), 'utf8');
    return racerData?{message: "Get data successfuly", data: JSON.parse(racerData).racers}:{message: "Failed to get data"};
  }
}

