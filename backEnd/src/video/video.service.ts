import { Injectable, NotFoundException } from '@nestjs/common';
import { Video } from '../interface/video.interface.js';
import { CreateVideoDto } from '../auth/dto/create-video-dto.js';

@Injectable()
export class VideoService {
    private readonly videos: Video[] =[{
        id: "1",
        title: "title1",
        duration: 10
    },
    {
        id: "2",
        title: "title2",
        duration: 20
    },] 
    
    findAll(): Video[] {
        return this.videos;
    }

    findOne(id:string): Video {
        const video = this.videos.find((video) => video.id === id)
        if (!video) {
            throw new NotFoundException()
        }
        return video
    }

    createVideo(video:CreateVideoDto):Video {
        const newVideo = {
            id: Date.now().toString(), //we work with ID dinamic//Работаем с динамиким идентификатором
            title: video.title,
            duration: video.duration,
        };
        this.videos.push(newVideo);
        return newVideo;
    }
}
