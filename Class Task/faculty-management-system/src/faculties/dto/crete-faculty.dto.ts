import { Type } from "class-transformer";
import { IsEmpty, IsString } from "class-validator";

export class CreateFacultyDto{
    @IsString()
    @IsEmpty()
    id: string;

    @IsString()
    @IsEmpty()
    name:string;

    @IsString()
    @IsEmpty()
    expertise: string;

    @Type(()=>Number)
    noOfPublication:number;
}