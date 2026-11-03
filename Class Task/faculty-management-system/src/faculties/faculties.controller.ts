import { Body, Controller, Post } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { CreateFacultyDto } from './dto/crete-faculty.dto.js';

@Controller('faculties')
export class FacultiesController {
    constructor(private readonly facultyService:FacultiesService){}

    @Post('create-faculty')
    createFaculty(@Body() body:CreateFacultyDto){
        return this.facultyService.createFaculty(body);
    }
}
