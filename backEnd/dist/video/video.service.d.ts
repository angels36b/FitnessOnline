import { Video } from '../interface/video.interface.js';
import { CreateVideoDto } from '../dto/create-video-dto.js';
export declare class VideoService {
    private readonly videos;
    findAll(): Video[];
    findOne(id: string): Video;
    createVideo(video: CreateVideoDto): Video;
}
