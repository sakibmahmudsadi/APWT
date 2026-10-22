import { Injectable } from '@nestjs/common';
import { UpdateCourseDto } from './dto/update-course.dto.js';
import { CreateCourseDto } from './dto/create-course.dto.js';

@Injectable()
export class CourseService {

    getAllCourses(){
        return {
            msg : "All course fetched successfully",
            data : [],
            };
    }

    getCourseById(id:string){
        return {
            message: 'Course fetched successfully',
            id,
        };
    };

    createCourse(dto:CreateCourseDto){
        return {msg:"Course created successfully",
            dto,
        };
    }

    updateCourse(id: string, dto:UpdateCourseDto){
        return {msg:"Course updated successfully!",
            data:dto,
        };
    }

    patchCourse(id: string, dto:UpdateCourseDto){
        return {msg:`Course patched successfully. ID: ${id}`,
         updatedFields: Object.keys(dto)};
    }

    deleteCourse(id: string){
        return `Course deleted successfully! ID: ${id}`;
    }

    uploadCourseMaterial(id:string, file:Express.Multer.File){
        return {
            message: 'Material uploaded successfully',
            courseId: id,
            filename: file.filename,
            path: file.path,
        };
    }
}
