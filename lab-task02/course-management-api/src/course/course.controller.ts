import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CourseService } from './course.service.js';
import { CreateCourseDto } from './dto/create-course.dto.js';
import { UpdateCourseDto } from './dto/update-course.dto.js';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('course')
export class CourseController {

    constructor(private readonly courseService:CourseService){}

    @Get()
    getAllCourses(){
        return this.courseService.getAllCourses();
    }

    @Get(":id")
    getAllCourseById(@Param("id")id:string){
        return this.courseService.getCourseById(id);
    }

    @Post()
    createCourse(@Body() dto:CreateCourseDto){
        return this.courseService.createCourse(dto);
    }

    @Put(":id")
    updateCourse(@Param("id")id: string, @Body() dto:CreateCourseDto){
        return this.courseService.updateCourse(id,dto);
    }

    @Patch(":id")
    patchCourse(@Param("id")id: string, @Body() dto:UpdateCourseDto){
        return this.courseService.patchCourse(id,dto);
    }

    @Delete(":id")
    deleteCourse(@Param("id")id: string){
        return this.courseService.deleteCourse(id);
    }

    @Post(":id/upload")
    @UseInterceptors(
        FileInterceptor("file", {dest: "./uploads",
            limits: {fileSize: 2*1024*1024},
            fileFilter(req, file, callback) {
                const allow=/\.(jpg|jpeg|png|pdf)$/i.test(file.originalname);

                if(allow){
                    callback(null, true);
                }else{
                    callback(new BadRequestException('Only JPG, JPEG, PNG and PDF files are allowed'), false);
                }
            },
         })
    )
    uploadCourseMaterial(
        @Param("id") id:string,
        @UploadedFile() file:Express.Multer.File){
            if(!file){
                throw new BadRequestException('File is required');
            }
        
    return this.courseService.uploadCourseMaterial(id, file);
    }

}
