import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { VideoService } from './video.service.js';
import { CreateVideoDto } from '../auth/dto/create-video-dto.js';

@Controller('video') //ЭТО КЛАСС будет начинаться с HTTP-запросов, начинающихся с пути
export class VideoController {

    constructor(
        private readonly videoService: VideoService
    ){}
    @Get() //this metod will capture the GET requests
    findAll(){
        return this.videoService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id:string){
        console.log(id)

        return this.videoService.findOne(id)
    }

    @Post() //arquitecture REST
    createVideo(@Body() body: CreateVideoDto){
        return this.videoService.createVideo(body);
    }
}
