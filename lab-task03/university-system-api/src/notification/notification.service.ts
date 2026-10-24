import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';

@Injectable()
export class NotificationService {
    
    constructor(@Inject(forwardRef(()=>EnrollmentService))private enrollmentService:any){}

    sendNotification(studentName:string,message:string){
        return {"Student Name":studentName,
            "Message":message}
    }

    checkEnrollmentAndNotify(studentName: string, courseId: string){
        const en=this.enrollmentService.getEnrollments();
        return {
            "message":"Enrollment Checked",
            studentName,courseId,en}
        }
    }
