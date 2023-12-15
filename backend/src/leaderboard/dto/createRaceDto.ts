import { IsString, IsNumber } from 'class-validator';
export class CreateRaceDto{
    @IsString()
    racerName: string;
    @IsString()
    trackName: string;
    @IsNumber()
    rank: number;
}