import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import {VideoModule} from './video/video.module.js'


@Module({

  imports: [VideoModule], //Connect our video submodule to the backend.
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
