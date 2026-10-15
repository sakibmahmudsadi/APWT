import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {

    getAllCourses():string{
        return "All courses!";
    }

    getCourseById(id:string):string{
        return `Course name: AWT. ID: ${id}`;
    }

    createCourse():string{
        return "Course created successfully!"
    }

    updateCourse(id: string):string{
        return `Course updated fully! ID: ${id}`;
    }

    patchCourse(id: string):string{
        return `Course updated partially! ID: ${id}`;
    }

    deleteCourse(id: string):string{
        return `Course deleted successfully! ID: ${id}`;
    }
}
