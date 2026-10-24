import { Module } from '@nestjs/common';
import { CourseController } from './course.controller.js';
import { CourseService } from './course.service.js';

@Module({
  controllers: [CourseController],
  exports: [CourseService],
  providers: [CourseService]
})
export class CourseModule {}
