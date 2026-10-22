import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min, Max } from "class-validator";

export class CreateCourseDto{
    @IsString() @IsNotEmpty()
    name:string;
    @IsString() @IsNotEmpty()
    code:string;
    @IsString() @IsNotEmpty()
    instructor:string;
    @Type(() => Number)
    @IsNumber() @Min(1) @Max(6)
    credits:number;
    @IsOptional() @IsString()
    description?:string;
}
