import { Body, Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/crete-faculty.dto.js';

@Injectable()
export class FacultiesService {
    async createFaculty(dto:CreateFacultyDto){
        
    }
}
