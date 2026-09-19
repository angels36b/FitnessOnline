import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { VideoService } from './video.service.js';
import { CreateVideoDto } from '../auth/dto/create-video-dto.js';

@Controller('video') //ЭТО КЛАСС будет начинаться с HTTP-запросов, начинающихся с пути

export class VideoController {

    constructor(private readonly videoService: VideoService){}
    
    //Обрабатываем HTTP GET ЗАПРОСЫ НА ВИДЕО
    @Get()
    findAll(@Query('topic') topic?: string){
    //if parameter = topic, was passed  in the URL/
        if (topic) {

            return this.videoService.findByTopic(topic);
        
        }//Если параметр не передан, возвращаем полный каталог видео.
        return this.videoService.findAll();
    }

   
    @Get(':id')
    findById(@Param('id') id:string){
        console.log(id)

        return this.videoService.findOne(id)
    }

    @Post() //arquitecture REST
    create(@Body() body: CreateVideoDto){
        return this.videoService.create(body);
    }
}
