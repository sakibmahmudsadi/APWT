import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FacultiesService } from './faculties/faculties.service.js';
import { FacultiesController } from './faculties/faculties.controller.js';
import { FacultiesModule } from './faculties/faculties.module.js';

@Module({
  imports: [FacultiesModule],
  controllers: [AppController, FacultiesController],
  providers: [AppService, FacultiesService],
})
export class AppModule {}
