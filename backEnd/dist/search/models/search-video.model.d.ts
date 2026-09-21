import { VideoModel } from "../../video/models/video.interface.js";
export declare class SearchVideoResponseDto {
    data: VideoModel[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
