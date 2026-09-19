import { Injectable, NotFoundException } from '@nestjs/common';
import { Video } from '../interface/video.interface.js';
import { CreateVideoDto } from '../auth/dto/create-video-dto.js';

@Injectable()
export class VideoService {
    //сохраняем данных
    private readonly videos: Video[] =[{
        id: "1",
        title: "title1",
        description: "string",
        topic: "Health",
        duration: 10,

    },
    {
        id: "2",
        title: "title2",
        description: 'Sport with your teacher',
        topic: 'Fitness',
        duration: 20,

    },] 
    
    findAll(): Video[] {
        return this.videos;
    }
    //Метод принимает строку и филтрует массив, проводя строку к нижнему регистру.
    findByTopic(topic:string): Video[]{
        return this.videos.filter(
            (video) => video.topic.toLowerCase() === topic.toLowerCase(),
        );
    }

   //Поиск конкретного видео по его уникальному ID.
    findOne(id:string): Video {
        const video = this.videos.find((video) => video.id === id)
        if (!video) {
            throw new NotFoundException("Video with the id not found ")
        }
        return video
    }
  // Method to create new video// метод создания нового видеозаписи
    create(createVideoDto: CreateVideoDto): Video{
        const newVideo: Video = {
            id:(this.videos.length + 1).toString(),
            ...createVideoDto, // используем spread-operator для копирования полей title, description, topic, duration
        };
    this.videos.push(newVideo);
    return newVideo;
    }
}

