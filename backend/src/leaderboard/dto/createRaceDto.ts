import { IsString, IsNumber, IsDate } from 'class-validator';
export class CreateRaceDto{
    @IsString()
    racerName: string;
    @IsString()
    trackName: string;
    @IsNumber()
    rank: number;
    @IsDate()
    date: Date;
}