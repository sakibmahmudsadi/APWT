import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CourseService } from '../course/course.service.js';
import { NotificationService } from '../notification/notification.service.js';

@Injectable()
export class EnrollmentService {
    constructor(private courseService:CourseService, @Inject(forwardRef(()=>NotificationService)) private notificationService:NotificationService){}

    enrollStudent(studentName: string, courseId: string) {
        const es=this.notificationService.sendNotification(studentName,"Student Enrolled");
        return {"message": 'Student enrolled successfully',
            "student": studentName,
            "course":this.courseService.getCourseById(courseId)};
    }

    getEnrollments(){
        return {"message":'All enrollments fetched',
            data:[]
        }
    }
}
