import { VideoService } from "./video.service.js";
import { VideoModel } from "./models/video.interface.js";
import { UpdateVideoDto } from "./dto/update-video.dto.js";
import { ReplaceVideoDto } from "./dto/replace-viceo.dto.js";
import { CreateVideoDto } from "./dto/create-video.dto.js";
export declare class VideoController {
    private readonly videosService;
    constructor(videosService: VideoService);
    findAll(): VideoModel[];
    findOne(id: number): VideoModel;
    create(createVideoDto: CreateVideoDto): VideoModel;
    update(id: number, updateVideoDto: UpdateVideoDto): VideoModel;
    replace(id: number, replaceVideoDto: ReplaceVideoDto): VideoModel;
    remove(id: number): void;
}
