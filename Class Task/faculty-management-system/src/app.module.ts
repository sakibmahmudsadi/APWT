import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FacultiesService } from './faculties/faculties.service.js';
import { FacultiesController } from './faculties/faculties.controller.js';
import { FacultiesModule } from './faculties/faculties.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [FacultiesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'facultyDB',
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
