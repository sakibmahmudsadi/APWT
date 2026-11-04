import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';
import { Faculty } from './entities/faculty.entity.ts/faculty.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class FacultiesService {

    constructor(@InjectRepository(Faculty) private readonly facultyRepository:Repository<Faculty>){}

    async createFaculty(dto:CreateFacultyDto):Promise<Faculty>{
       try{const faculty= this.facultyRepository.create(dto);
       return await this.facultyRepository.save(faculty);}
       catch{ throw new BadRequestException('Data mismatches')}
    }
}
