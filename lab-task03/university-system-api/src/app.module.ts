import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CourseModule } from './course/course.module.js';
import { EnrollmentModule } from './enrollment/enrollment.module.js';
import { NotificationService } from './notification/notification.service.js';
import { NotificationModule } from './notification/notification.module.js';

@Module({
  imports: [CourseModule, EnrollmentModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService, NotificationService],
})
export class AppModule {}
