import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateFacultyDto{
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    expertise: string;

    @Type(()=>Number)
    noOfPublication:number;
}