import { VideoService } from './video.service.js';
import { CreateVideoDto } from '../auth/dto/create-video-dto.js';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    findAll(): import("../interface/video.interface.js").Video[];
    findById(id: string): import("../interface/video.interface.js").Video;
    createVideo(body: CreateVideoDto): import("../interface/video.interface.js").Video;
}
